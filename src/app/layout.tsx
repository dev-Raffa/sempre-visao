import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import './styles/globals.css';
import './styles/theme.scss';
import { Header } from './components/layout/header';
import { Main } from './components/layout/main';
import { Footer } from './components/layout/footer';

export const metadata: Metadata = {
  title: 'Sempre visão',
  description:
    'Cirurgia de catarata sem fila e com segurança, consultas de vista e exames especializados é na Sempre Visão.'
};

const font = Work_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--work-sans'
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <meta name="google-site-verification" content="VTCDLrxfHd7UDE9EICTOnJ1b0PReZW97GkWpvdm7sgc" />
      </head>
      <body className={font.className}>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}

