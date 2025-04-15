import './styles.scss';

export const Navigation = () => {
  return (
    <nav className="navigation">
      <label>
        <input type="checkbox" name="mobile-btn" id="mobile__btn" />
      </label>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/#About">A Sempre Visão</a>
        </li>
        <li>
          <a href="/#Services">Serviços</a>
        </li>
        <li>
          <a href="/#Structure">Estrutura</a>
        </li>
        <li>
          <a href="/#Team">Equipe</a>
        </li>
      </ul>
    </nav>
  );
};
