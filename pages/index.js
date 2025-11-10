import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SupportTiers from '../components/SupportTiers';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>EyeGuess - Seeing What Others Miss</title>
        <meta name="description" content="Premium digital asset strategy and execution" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#00FF41" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      
      <div className="min-h-screen bg-gray-900">
        <Header />
        <Hero />
        <SupportTiers />
        <Footer />
      </div>
    </>
  );
}
