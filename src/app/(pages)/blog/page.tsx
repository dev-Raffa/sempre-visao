

import Link from 'next/link';
import defaultImage from '../../../../public/images/placeholder.svg';
import { posts } from './[slug]/posts';
import { IPost } from './[slug]/post.interface';

function getImageUrl(imageUrl: string | undefined) {
  return imageUrl
    ? `https://backup.clinicassempresorrindo.com.br/storage/app/uploads/${imageUrl}`
    : defaultImage;
}

function getSortedPosts(posts: IPost[]) {
  return [...posts].sort((a, b) => (b.date || '').localeCompare(a.date || ''));
}

export default function BlogPage() {
  const sortedPosts = getSortedPosts(posts);
  const heroPost = sortedPosts[Math.random() * sortedPosts.length | 0];
  const gridPosts = sortedPosts.slice(6);
  const mostReadPosts = sortedPosts.slice(0, 6); // Simulação

  return (
    <main className="max-w-7xl mx-auto px-4! py-12! bg-gradient-to-br from-blue-50 via-white to-slate-100 min-h-screen">
      <header className="flex flex-col items-center mb-14!">
        <div className="mb-4! flex items-center gap-3">
          <span className="inline-block w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center shadow-lg">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="text-white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/></svg>
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-800 tracking-tight drop-shadow-sm">Blog Sempre Visão</h1>
        </div>
        <p className="text-slate-500 text-lg font-medium max-w-2xl text-center">Descubra novidades, dicas e conteúdos exclusivos sobre saúde ocular, bem-estar e tecnologia em oftalmologia.</p>
      </header>

      {/* HERO POST */}
      {heroPost && (
        <section className="mb-16!">
          <Link href={`/blog/${heroPost.slug}`} className="block group rounded-3xl overflow-hidden shadow-2xl border border-blue-100 bg-white hover:shadow-blue-200 transition-all duration-200">
            <div className="relative w-full aspect-[2/1] bg-gradient-to-tr from-blue-100 to-slate-200">
              <img
                src={getImageUrl(heroPost.imageUrl as string)}
                alt={heroPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {heroPost.date && (
                <span className="absolute top-4 left-4 bg-white/80 text-slate-700 text-xs font-semibold px-3! py-1! rounded-full shadow-sm backdrop-blur-sm">
                  {new Date(heroPost.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })}
                </span>
              )}
            </div>
            <div className="p-8! pb-6! flex flex-col gap-2">
              <div className="flex flex-wrap gap-2 mb-1!">
                {heroPost.tags?.map(tag => (
                  <span key={tag} className="bg-blue-100 text-blue-700 text-xs font-semibold px-2! py-1! rounded-full">{tag}</span>
                ))}
              </div>
              <h2 className="text-3xl font-extrabold text-slate-800 mb-2 group-hover:text-blue-700 transition-colors leading-tight">
                {heroPost.title}
              </h2>
              <p className="text-slate-600 text-lg mb-3 line-clamp-3">{heroPost.description}</p>
              <span className="inline-block mt-2! text-blue-700 font-semibold group-hover:underline">Ler matéria completa →</span>
            </div>
          </Link>
        </section>
      )}

      {/* MAIS LIDAS */}
      <aside className="mb-10!">
        <h2 className="text-2xl font-bold text-slate-800 mb-6!">Mais Lidas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mostReadPosts.map(post => (
            <article
              key={post.slug}
              className="group bg-gradient-to-br from-blue-50 to-cyan-100 rounded-2xl border border-blue-100 shadow flex flex-col overflow-hidden transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:border-blue-300"
            >
              <Link href={`/blog/${post.slug}`} className="block w-full aspect-[16/9] bg-gradient-to-tr from-blue-100 to-slate-200 relative overflow-hidden">
                <img
                  src={getImageUrl(post.imageUrl as string)}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <div className="p-5! flex flex-col flex-1">
                <h3 className="text-lg font-bold text-blue-800 mb-1!">
                  <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-slate-600 text-sm mb-3! flex-1 line-clamp-2">{post.description}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-auto inline-block text-blue-700 font-semibold hover:text-blue-900 transition-colors"
                >
                  Ler mais
                </Link>
              </div>
            </article>
          ))}
        </div>
      </aside>
      {/* GRID DE POSTS RECENTES */}
      <section className="mb-20!">
        <h2 className="text-2xl font-bold text-slate-800 mb-6!">Últimas do Blog</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10!">
          {gridPosts.map(post => (
            <article
              key={post.slug}
              className="group bg-white rounded-2xl border border-slate-200 shadow-lg flex flex-col overflow-hidden transition-all duration-200 hover:scale-[1.025] hover:shadow-2xl hover:border-blue-200"
            >
              <Link href={`/blog/${post.slug}`} className="block w-full aspect-[16/9] bg-gradient-to-tr from-blue-100 to-slate-200 relative overflow-hidden">
                <img
                  src={getImageUrl(post.imageUrl as string)}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {post.date && (
                  <span className="absolute top-3 left-3 bg-white/80 text-slate-700 text-xs font-semibold px-3! py-1! rounded-full shadow-sm backdrop-blur-sm">
                    {new Date(post.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </span>
                )}
              </Link>
              <div className="p-6! flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 !mb-2!">
                  {post.tags?.map(tag => (
                    <span key={tag} className="bg-blue-100 text-blue-700 text-xs font-semibold px-2! py-1! rounded-full">{tag}</span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight">
                  <Link href={`/blog/${post.slug}`} className="hover:text-blue-700 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-slate-600 text-base mb-5! flex-1 line-clamp-3">{post.description}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-auto inline-block text-blue-700 font-semibold hover:text-blue-900 transition-colors"
                >
                  Ler mais
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

    </main>
  );
}
