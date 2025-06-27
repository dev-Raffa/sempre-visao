import './styles.scss';
import { ReactNode } from 'react';

export interface serviceCardArgs {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
  textLink: string;
}

export const ServiceCard = (args: serviceCardArgs) => {
  return (
    <article className="ServiceCard">
      <figure>{args.icon}</figure>
      <section>
        <h3>{args.title}</h3>
        <p> {args.description}</p>
      </section>
      <a href={args.link} target="_blank">
        {args.textLink}
      </a>
    </article>
  );
};
