import Image from 'next/image';
import './styles.scss';
import defaultImage from "../../../../../../../public/images/placeholder.svg";
import { posts } from '@/app/(pages)/blog/[slug]/posts';
import Link from 'next/link';

export const RecentPostsSection: React.FC = () => {
  const highlightedPost = posts[0]; // Assuming the first post is the highlighted one
  const smallPosts = posts.slice(1, 5); // Get the next 4 posts
  
  return (
    <section className="recentPostsSection">
      <div>
        <h2 className="sectionTitle">Últimos Posts</h2>
      </div>

      <section className="recentPostsContainer">
        <article className={'highlightedPost'}>
          <figure className={'imageContainer'}>
            <Image
              src={
                highlightedPost.imageUrl
                  ? `https://backup.clinicassempresorrindo.com.br/storage/app/uploads/${highlightedPost.imageUrl}`
                  : defaultImage
              }
              alt={highlightedPost.title}
              width={400}
              height={400}
              className={'postImage'}
            />
          </figure>
          <div className={'postContent'}>
            <h3 className={'postTitle'}>{highlightedPost.title}</h3>
            <p className={'postExcerpt'}>{highlightedPost.description}</p>
          </div>
          <div className="action">
            <Link href={`/blog/${highlightedPost.slug}`} className={'readMoreButton'}>
              Continuar lendo
            </Link>
          </div>
        </article>
        <div className={'smallPostsContainer'}>
          <ul className={'smallPostsGrid'}>
            {smallPosts.map((post, index) => (
              <article key={index} className={'smallPost'}>
                <figure className={'imageContainer'}>
                  <Image
                    src={
                      post.imageUrl
                        ? `https://backup.clinicassempresorrindo.com.br/storage/app/uploads/${post.imageUrl}`
                        : defaultImage
                    }
                    alt={post.title}
                    width={200}
                    height={200}
                    className={'postImage'}
                  />
                </figure>
                <div className={'postContent'}>
                  <h3 className={'postTitle'}>{post.title}</h3>
                  <p className={'postExcerpt'}>{post.description}</p>
                </div>
                <div className="action">
                  <Link
                    href={`/blog/${post.slug}`}
                    className={'readMoreButton'}
                  >
                    Continuar lendo
                  </Link>
                </div>
              </article>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
};
