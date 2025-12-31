import './styles.scss';
import defaultImage from '../../../../../public/images/placeholder.svg';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { IPostList } from './post.interface';
import { posts } from './posts';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const page = posts.find((page) => page.slug === slug);

  if (!page) {
    return {
      title: 'Página não encontrada!'
    };
  }

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `https://semprevisão.com.br/blog/${slug}`
    },
    openGraph: {
      type: 'article',
      title: page.title,
      description: page.description,
      images: [
        `https://backup.clinicassempresorrindo.com.br/storage/app/uploads/${page.imageUrl}`
      ]
    }
  };
}

function getRelatedPosts(slug: string) {
  const relatedPosts: IPostList = [];
  let index = 0;

  while (relatedPosts.length < 4) {
    const post = posts[index];

    if (post.slug !== slug && !relatedPosts.some((p) => p.slug === post.slug)) {
      relatedPosts.push(post);
    }

    index++;
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
        <section
          className="flex flex-col justify-center items-center"
          dangerouslySetInnerHTML={{ __html: page.content }}
        />
        {page.galleryImages && page.galleryImages.length > 0 && (
          <div className="flex w-full  flex-col items-center justify-center">
            <Carousel
              className="w-full"
              opts={{ align: 'start', loop: true, slidesToScroll: 2 }}
            >
              <CarouselContent>
                {page.galleryImages.map((imageUrl, index) => {
                  return (
                    <CarouselItem key={index} className="md:basis-1/2">
                      <figure className="relative rounded-2xl overflow-hidden">
                        <Image
                          src={`https://backup.clinicassempresorrindo.com.br/storage/app/uploads/${imageUrl}`}
                          alt={`${page.title} - Imagem ${index + 1}`}
                          fill
                          objectFit="contain"
                          quality={75}
                          className="rounded-2xl overflow-hidden"
                        ></Image>
                      </figure>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        )}
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
