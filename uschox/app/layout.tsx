import Header from './components/Header';
import './globals.css';
import Footer from './components/Footer';
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })


export const metadata = {
  title: 'uschox',
  description: 'Description of your club',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/veu4jlh.css" />
        
      </head>
      <body className="bg-[#F6F3E1] min-h-screen text-white">
        <div className="min-h-screen relative">
          <Header />
          <main className="relative">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}