import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import './styles/globals.css';
import'./styles/theme.scss'
import { Header } from './components/layout/header';
import { Main } from './components/layout/main';
import { Footer } from './components/layout/footer';
import { GoogleTagManager } from '@next/third-parties/google';

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
      <GoogleTagManager gtmId="GTM-NJVDJP4B" />
      <body className={font.className}>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
