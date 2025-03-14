"use client"

import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { type FormEvent, useState } from "react"
import "./styles.scss"
import { Logo } from "../../logo"
import { BsTelephone } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";

export const Footer = ()=> {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Implement newsletter subscription logic here
    setEmail("")
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-section">
          <h2 className="footer-txt">
          O grupo Sempre Sorrindo inova mais uma vez e apresenta a Sempre Visão, a clínica oftalmológica da sua família.
          <br/>Consultas de vista, exames especializados, cirurgia de catarata sem fila e muito mais.
          </h2>
        </ul>

        <div className="footer-section">
          <h2 className="footer-heading">Sempre Visão</h2>
          <nav aria-label="Links Sempre Visão">
            <ul className="footer-links">
              <li>
                <Link href="/sobre">A Sempre Visão</Link>
              </li>
              <li>
                <Link href="/especialidades">Especialidades</Link>
              </li>
              <li>
                <Link href="/servicos">Serviços</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer-section">
          <h2 className="footer-heading">Serviços</h2>
          <nav aria-label="Links de Serviços">
            <ul className="footer-links">
              <li>
                <Link href="/consultas">Consultas</Link>
              </li>
              <li>
                <Link href="/cirurgias">Cirurgias</Link>
              </li>
              <li>
                <Link href="/exames">Exames</Link>
              </li>
              <li>
                <Link href="/resultados">Resultado de exames</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer-section">
          <h2 className="footer-heading">Contato</h2>
          <ul className="contact-info">
            <li>
              <a href="tel:+551634415007" aria-label="Telefone">
              <BsTelephone /> 16 3441-5007
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
              <FaWhatsapp />  16 99262-7740
              </a>
            </li>
            <li>
             <LuMapPin /> <address>R. São Sebastião, 614 - Centro, Ribeirão Preto - SP, 14015-040</address>
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
  )
}

