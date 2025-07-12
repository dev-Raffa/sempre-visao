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
      'Consultas de vista com oftalmologistas capacitados para cuidar da saúde dos seus olhos, garantindo diagnósticos precisos e tratamentos eficazes.',
    link: 'https:///wa.me/5516992627740',
    textLink: 'Agende Online',
    icon: <TbReportMedical />
  },
  {
    title: 'Exames',
    description:
      'Diversidade em exames oftalmológicos com equipamentos modernos para garantir um diagnóstico seguro e preciso. Realize exames de rotina até avaliações específicas.',
    link: 'https:///wa.me/5516992627740',
    textLink: 'Agende Online',
    icon: <FaHeartbeat />
  },
  {
    title: 'Cirurgias',
    description:
      'Diversos tipos de cirurgias oftalmológicas são realizadas em nossa clínica. Damos destaque para a cirurgia da catarata, feita de forma rápida, segura e sem filas.',
    link: 'https:///wa.me/5516992627740',
    textLink: 'Agende Online',
    icon: <FaHandHoldingMedical />
  },
  {
    title: 'Resultado dos Exames',
    description: 'Acesse aqui os resultados dos seus exames.',
    link: 'https://semprevisao.sivoe.med.br/',
    textLink: 'Acesse agora',
    icon: <FaLaptopMedical />
  }
];

export const ServicesSection = () => {
  return (
    <section id="Services">
      <div>
        <h2>O que fazemos</h2>
      </div>
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
