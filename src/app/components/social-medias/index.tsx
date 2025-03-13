import "./styles.scss"

import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa6';

export const SocialMedias = () => {
  return (
    <section id="SocialMediasList">
      <span>contatos:</span>
      <ul>
        <li>
        <a href="#">
            <FaWhatsapp />
        </a>
      </li>
      <li>
        <a href="#">
            <FaInstagram />
        </a>
      </li>
      <li>
        <a href="#">
            <FaFacebook />
        </a>
      </li>
      </ul>
    </section>
  );
};
