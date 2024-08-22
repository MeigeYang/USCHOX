import Header from './components/Header';
import './globals.css';
import HomeBackground from "./HomeBackground";

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
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/veu4jlh.css" />
      </head>
      <body className="bg-[#F6F3E1] min-h-screen text-white">
        <div className="min-h-screen relative">
          <Header />
          <main className="relative">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}