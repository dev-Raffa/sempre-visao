import "./styles.scss"
import Image from 'next/image';
import logoImage from '../../../../public/images/logo.png';

export const Logo = () => {
  return (
    <figure id='Logo'>
      <Image
        src={logoImage}
        alt="logo sempre visão:á esquerda o desenho de um olho com linhas amarelas e azuis, á direita Sempre Visão."
        height={100}
      />
    </figure>
  );
};
