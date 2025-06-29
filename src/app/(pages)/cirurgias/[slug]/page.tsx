import './styles.scss';
import defaultImage from '../../../../../public/images/placeholder.svg';
import Image from 'next/image';
import type { Metadata } from 'next';

import Link from 'next/link';
import { ISurgery, surgeries } from '../data/surgeries';
import { shuffle } from '@/lib/utils';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const page = surgeries.find((page) => page.slug === slug);

  return {
    description: page?.description,
    alternates: {
      canonical: `https://semprevisão.com.br/cirurgias/${slug}`
    }
  };
}

function getMoreSurgeries(slug: string) {
  const moreSurgeries: ISurgery[] = shuffle<ISurgery>(
    surgeries.filter((surgery) => surgery.slug !== slug)
  );
  return moreSurgeries.slice(0, 4);
}

export async function generateStaticParams() {
  const pages = surgeries;

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
  const page = surgeries.find((page) => page.slug === slug);
  const moreSurgeries = getMoreSurgeries(slug);

  if (!page) {
    return <h1>404 - Página não encontrada</h1>;
  }

  return (
    <>
      <section id="ExamPage">
        <figure>
          <Image
            src={page.imageUrl ? page.imageUrl : defaultImage}
            alt={page.title}
            fill
            quality={100}
          ></Image>
        </figure>
        <article dangerouslySetInnerHTML={{ __html: page.content }}></article>
        <section id="MoreExams">
          <h2>Mais Exames:</h2>
          <ul>
            {moreSurgeries.map((surgery) => {
              return (
                <li key={surgery.label}>
                  <Link href={`${surgery.slug}`}>
                    <article>
                      <section>
                        <h3>{surgery.label}</h3>
                        <p>{surgery.description}</p>
                      </section>
                    </article>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </section>
    </>
  );
}
