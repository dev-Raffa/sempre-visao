import './styles.scss';
import { Logo } from '../../logo';
import { Navigation } from '../../navigation';
import { SocialMedias } from '../../social-medias';

export const Header = () => {
  return (
    <header>
      <Logo />
      <Navigation />
      <SocialMedias />
    </header>
  );
};
