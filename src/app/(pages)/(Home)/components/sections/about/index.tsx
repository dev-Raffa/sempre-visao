import Image from 'next/image';
import teamImage from '../../../../../../../public/images/IMG_0898.webp';
import './styles.scss';

export const AboutSection = () => {
  return (
    <section id="About">
      <h2>A Sempre Visão</h2>
      <section>
        <article>
          <p>
            Com intuito de trazer ainda mais qualidade de vida e saúde para os
            pacientes das Clínicas Sempre Sorrindo, o grupo inova mais uma vez e
            em 2025 inaugura a Sempre Visão, a clínica oftalmológica da sua
            família.
          </p>
          <p>
            Trazendo o conceito do grupo Sempre Sorrindo com serviço de
            excelência e tecnologia de ponta, com os melhores profissionais do
            mercado e uma estrutura completa, a Sempre Visão conta com grande
            variedade de exames e um centro cirúrgico próprio o que garante para
            os nossos pacientes muito mais conforto, segurança e tranquilidade,
            possibilitando cirurgias de catarata sem filas, consultas de vista e
            exames especializados.
          </p>
          <p>Pois ver é viver. E disso, a gente entende.</p>
        </article>
        <figure>
          <Image
            src={teamImage}
            alt="equipe de médicos realizando um exame oftalmológico"
            fill
          />
        </figure>
      </section>
    </section>
  );
};
