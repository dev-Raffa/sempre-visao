
import Link from "next/link"
import "./styles.scss"
import { Logo } from "../../logo"
import { BsTelephone } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";
import { GoLocation } from "react-icons/go"

export const Footer = ()=> {

  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-section">
          <h2 className="footer-txt">
            O grupo Sempre Sorrindo inova mais uma vez e apresenta a Sempre
            Visão, a clínica oftalmológica da sua família.
            <br />
            Consultas de vista, exames especializados, cirurgia de catarata sem
            fila e muito mais.
          </h2>
        </ul>

        <div className="footer-section">
          <h2 className="footer-heading">Sempre Visão</h2>
          <nav aria-label="Links Sempre Visão">
            <ul className="footer-links">
              <li>
                <Link href="#About">A Sempre Visão</Link>
              </li>
              <li>
                <Link href="#Servicos">Serviços</Link>
              </li>
              <li>
                <Link href="#Structure">Estrutura</Link>
              </li>
              <li>
                <Link href="#Team">Equipe</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer-section">
          <h2 className="footer-heading">Serviços</h2>
          <nav aria-label="Links de Serviços">
            <ul className="footer-links">
              <li>
                <Link
                  href="https:///wa.me/5516992627740"
                  target="_blank"
                >
                  Consultas
                </Link>
              </li>
              <li>
                <Link
                  href="https:///wa.me/5516992627740"
                  target="_blank"
                >
                  Cirurgias
                </Link>
              </li>
              <li>
                <Link href="https:///wa.me/5516992627740" target="_blank">Exames</Link>
              </li>
              <li>
                <Link href="https:///wa.me/5516992627740" target="_blank">Resultado de exames</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer-section">
          <h2 className="footer-heading">Contato</h2>
          <ul className="contact-info">
            <li>
              <BsTelephone />
              <a href="tel:+551634415007" aria-label="Telefone">
                16 3441-5007
              </a>
            </li>
            <li>
              <FaWhatsapp />
              <a href="https:///wa.me/5516992627740" target="_blank">
                16 99262-7740
              </a>
            </li>
            <li>
              <GoLocation style={{ fontSize: '24px' }} />
              <address>
                R. São Sebastião, 614 - Centro, Ribeirão Preto - SP, 14015-040
              </address>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <Logo />
          <p className="copyright">© 2025 Sempre Visão All Rights Reserved</p>
          <span></span>
        </div>
      </div>
    </footer>
  );
}

