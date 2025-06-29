import './styles.scss';

import Image from 'next/image';
import teamImage from '../../../../public/images/IMG_0898.webp';
import Link from 'next/link';
import { surgeries } from './data/surgeries';

export default function ExamsPage() {
  return (
    <section id="ExamsPage">
      <figure>
        <Image
          src={teamImage}
          alt="equipe de médicos realizando um exame oftalmológico"
          fill
        ></Image>
      </figure>
      <article>
        <h1>
          Cirurgias Oftalmológicas na Sempre Visão: Tecnologia e Cuidado para a
          Saúde dos Seus Olhos
        </h1>
        <section>
          <p>
            Na Clínica Oftalmológica Sempre Visão, compreendemos que a decisão
            por uma cirurgia ocular é um passo importante para a recuperação da
            sua qualidade de vida. Por isso, aliamos tecnologia de ponta, uma
            equipe de cirurgiões experientes e um atendimento humanizado para
            garantir que você tenha a melhor experiência e os resultados mais
            seguros e eficazes.
          </p>
          <p>
            Nossa estrutura moderna em Ribeirão Preto foi projetada para
            oferecer um fluxo ágil e confortável, desde a primeira consulta até
            o acompanhamento pós-operatório. Com um centro cirúrgico equipado
            com o que há de mais avançado na oftalmologia, realizamos
            procedimentos com precisão, minimizando riscos e acelerando a sua
            recuperação.
          </p>
        </section>
      </article>
      <section>
        <h2>
          Seu bem-estar e sua visão são nossas prioridades. Conheça as
          principais cirurgias realizadas em nossa clínica:
        </h2>
        <ul className="ExamsList">
          {surgeries.map((surgery) => {
            return (
              <li key={surgery.label}>
                <Link href={`cirurgias/${surgery.slug}`}>
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
  );
}
