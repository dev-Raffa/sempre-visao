import './styles.scss';
import defaultImage from '../../../../../public/images/placeholder.svg';
import Image from 'next/image';
import type { Metadata } from 'next';
import { IPostList } from './post.interface';
import { posts } from './posts';
import Link from 'next/link';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const page = posts.find((page) => page.slug === slug);

  return {
    description: page?.description,
    alternates: {
      canonical: `https://semprevisão.com.br/blog/${slug}`
    }
  };
}

function getRelatedPosts(slug: string) {
  const relatedPosts: IPostList = [];

  while (relatedPosts.length < 4) {
    for (const post of posts) {
      if (
        post.slug !== slug &&
        !relatedPosts.some((p) => p.slug === post.slug)
      ) {
        relatedPosts.push(post);
      }
    }
  }

  return relatedPosts;
}

export async function generateStaticParams() {
  const pages: IPostList = posts;

  return pages.map((page) => ({
    slug: page.slug
  }));
}

export default async function DynamicPage({
  params
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const page = posts.find((page) => page.slug === slug);

  if (!page) {
    return <h1>404 - Página não encontrada</h1>;
  }

  const relatedPosts = getRelatedPosts(page.slug);

  return (
    <>
      <article id="PostPage">
        <figure>
          <Image
            src={
              page.imageUrl
                ? `https://backup.clinicassempresorrindo.com.br/storage/app/uploads/${page.imageUrl}`
                : defaultImage
            }
            alt={page.title}
            fill
            quality={100}
          ></Image>
        </figure>
        <h1>
          <strong>{page.title}</strong>
        </h1>
        <section dangerouslySetInnerHTML={{ __html: page.content }} />
      </article>
      <section id="RelatedPosts">
        <h2>Posts relacionados:</h2>
        <ul>
          {relatedPosts.map((post, index) => (
            <li key={index}>
              <Link href={`/blog/${post.slug}`}>
                <figure>
                  <Image
                    src={
                      post.imageUrl
                        ? `https://backup.clinicassempresorrindo.com.br/storage/app/uploads/${post.imageUrl}`
                        : defaultImage
                    }
                    alt={post.title}
                    fill
                    quality={75}
                  ></Image>
                </figure>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
