import './styles.scss';
import defaultImage from '../../../../../public/images/placeholder.svg';
import Image from 'next/image';
import type { Metadata } from 'next';

import Link from 'next/link';
import { exams, IExams } from '../data/exams';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const page = exams.find((page) => page.slug === slug);

  return {
    description: page?.description,
    alternates: {
      canonical: `https://semprevisão.com.br/exames/${slug}`
    }
  };
}

function getMoreExams(slug: string) {
  const moreExams: IExams[] = exams.filter((exam) => exam.slug !== slug);

  return moreExams.slice(0, 4);
}

export async function generateStaticParams() {
  const pages = exams;

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
  const page = exams.find((page) => page.slug === slug);
  const moreExams = getMoreExams(slug);

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
            {moreExams.map((exam) => {
              return (
                <li key={exam.label}>
                  <Link href={`${exam.slug}`}>
                    <article>
                      <section>
                        <h3>{exam.label}</h3>
                        <p>{exam.description}</p>
                        <div>
                          <a href={`/${exam.slug}`}></a>
                        </div>
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
