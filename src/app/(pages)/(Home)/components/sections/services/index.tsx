import { ServiceCard, serviceCardArgs } from '../../cards/services';
import './styles.scss';
import { TbReportMedical } from 'react-icons/tb';
import { FaHandHoldingMedical, FaHeartbeat } from 'react-icons/fa';
import { FaLaptopMedical } from 'react-icons/fa6';
import { MdOutlineArrowOutward } from 'react-icons/md';

const services: serviceCardArgs[] = [
  {
    title: 'Consultas',
    description:
      'Agende sua consulta com nossos médicos oftalmologistas altamente capacitados, que oferecem atendimento personalizado e de excelência. Com tecnologia de ponta e muita experiência, nossa clínica se dedica a cuidar da saúde dos seus olhos, garantindo diagnósticos precisos e tratamentos eficazes. Não espere mais para cuidar da sua visão, agende agora sua consulta.',
    link: '#',
    textLink: 'Agende Online',
    icon: <TbReportMedical />
  },
  {
    title: 'Exames',
    description:
      'Realize exames oftalmológicos completos com a mais alta tecnologia e precisão. Em nossa clínica, contamos com equipamentos modernos e uma equipe especializada para garantir um diagnóstico seguro e preciso. Desde exames de rotina até avaliações específicas, agende agora o seu exame.',
    link: '#',
    textLink: 'Agende Online',
    icon: <FaHeartbeat />
  },
  {
    title: 'Cirurgias',
    description:
      'Na Sempre Visão, oferecemos uma gama completa de cirurgias oftalmológicas, realizadas por profissionais experientes e com o uso das mais avançadas técnicas e tecnologias. Entre as opções, destacamos a cirurgia de catarata, feita de forma rápida e segura, sem filas e com toda a atenção que você merece. Nossa clínica é referência em qualidade e cuidado, proporcionando a você um atendimento humanizado e eficaz. Agende sua avaliação e recupere sua visão com confiança.',
    link: '#',
    textLink: 'Entre em contato',
    icon: <FaHandHoldingMedical />
  },
  {
    title: 'Resultado dos Exames',
    description: 'Acesse aqui os resultados dos seus exames',
    link: '#',
    textLink: 'Em breve',
    icon: <FaLaptopMedical />
  }
];

export const ServicesSection = () => {
  return (
    <section id="ServicesSection">
      <ul>
        {services.map((service, index) => {
          return (
            <li key={`service=${index}`}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                textLink={service.textLink}
              />
            </li>
          );
        })}
      </ul>
      <a className="cta" href="#">
        ver todos os serviços <MdOutlineArrowOutward />{' '}
      </a>
    </section>
  );
};
