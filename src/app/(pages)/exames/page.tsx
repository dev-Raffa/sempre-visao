import './styles.scss';

import Image from 'next/image';
import { exams } from './data/exams';
import defaultImage from '../../../../public/images/placeholder.svg';
import Link from 'next/link';

export default function ExamsPage() {
  return (
    <section id="ExamsPage">
      <figure>
        <Image src={defaultImage} alt="image-test" fill></Image>
      </figure>
      <article>
        <h1>
          Na Clínica Sempre Visão, a Saúde dos Seus Olhos é a Nossa Prioridade:
          Conheça Nossos Exames
        </h1>
        <p>
          Tecnologia de ponta e uma equipe dedicada para garantir um diagnóstico
          preciso e um cuidado completo para a sua visão em Ribeirão Preto.
        </p>

        <section>
          <p>
            Cuidar da saúde ocular é fundamental para uma vida plena e cheia de
            cores. Na Clínica de Oftalmologia Sempre Visão, aliamos a
            experiência de um corpo clínico qualificado à mais avançada
            tecnologia em exames oftalmológicos. Nosso compromisso é oferecer um
            diagnóstico detalhado e confiável, permitindo o tratamento adequado
            para as mais diversas condições oculares.
          </p>
          <p>
            Entendemos que a realização de exames pode gerar dúvidas e
            ansiedade. Por isso, preparamos um ambiente acolhedor e uma
            comunicação clara, para que você se sinta seguro e confortável em
            todas as etapas do seu atendimento.
          </p>
          <p>
            Conheça em detalhes os exames que realizamos e entenda como podemos
            ajudar a preservar o seu bem mais precioso: a sua visão.
          </p>
        </section>
      </article>
      <section>
        <h2>Nossos Exames Oftalmológicos:</h2>
        <p>
          Oferecemos uma gama completa de exames diagnósticos e procedimentos a
          laser, essenciais para a prevenção e tratamento de doenças oculares.
        </p>
        <ul className="ExamsList">
          {exams.map((exam) => {
            return (
              <li key={exam.label}>
                <Link href={`exames/${exam.slug}`}>
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
  );
}
