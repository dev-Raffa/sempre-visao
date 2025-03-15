import './styles.scss';

import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa6';

export const SocialMedias = () => {
  return (
    <section id="SocialMediasList">
      <span>contatos:</span>
      <ul>
        <li>
          <a href="https://web.whatsapp.com/send?phone=5516992627740">
            <FaWhatsapp />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/clinicassemprevisao?igsh=NGJpZGFlY3Zjangz"
            target="blank"
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/share/1AToDosLnA/?mibextid=wwXIfr"
            target="blank"
          >
            <FaFacebook />
          </a>
        </li>
      </ul>
    </section>
  );
};
