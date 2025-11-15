import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>EyeGuess Consulting - Building Digital Legacies Through Partnership Ecosystems</title>
        <meta name="description" content="Premium partnership strategy and revenue share automation. Book your audit today." />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#00FF41" />
        <meta name="format-detection" content="telephone=no" />
      </Head>

      <div className="min-h-screen bg-gray-900">
        <Header />
        <Hero />
        <Services />
        <Footer />
      </div>
    </>
  );
}
