import './styles.scss';

import BackgroundImage from '../../../../../../../public/images/DSC03962.webp';
import Image from 'next/image';

export const SpecialtiesSection = () => {
  return (
    <section id="specialties">
      <h3>Especialidades</h3>
      <div>
        <figure>
          <Image src={BackgroundImage} alt="clinica sempre visão" fill />
        </figure>
      </div>
      <ul>
        <li>
          <figure>
            <img src="" alt="" />

            <figcaption>OFTALMOLOGIA PEDIÁTRICA</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src="" alt="" />
            <figcaption>GLAUCOMA</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src="" alt="" />
            <figcaption>CATARATAS</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src="" alt="" />
            <figcaption>CORNEA</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src="" alt="" />
            <figcaption>RETINA & VITREO</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src="" alt="" />
            <figcaption>OCULOPLASTICA</figcaption>
          </figure>
        </li>
      </ul>
    </section>
  );
};
