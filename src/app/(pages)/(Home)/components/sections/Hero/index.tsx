import './styles.scss'
import { BiSolidRightArrow } from 'react-icons/bi';

export const HeroSection = ()=>{
    return (
      <section id="HeroSection">
        <section>
          <article>
            <span>Sempre Visão</span>
            <h1>Cuida de você e quem você ama.</h1>
            <p>
              Cuide da sua visão com a Sempre Visão! Oferecemos prevenção,
              diagnóstico e tratamento para a saúde dos seus olhos
            </p>

            <ul>
                <li>
                    <a href="">
                        Agende sua consulta hoje mesmo!
                    </a>
                </li>
                <li>
                    <a href="">
                        <div><BiSolidRightArrow /></div> Nosso consultório
                    </a>
                </li>
            </ul>

          </article>
            <div>
                <article>
                    <h4>+ 20mil</h4>
                    <p>clientes sastifeitos</p>
                </article>
                <article>
                    <h4>93+</h4>
                    <p>profissionais</p>
                </article>
            </div>
        </section>
      </section>
    );
}