import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Questionnaire from '../components/Questionnaire';
import Services from '../components/Services';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>EyeGuess Consulting - Building Digital Legacies</title>
        <meta name="description" content="Premium partnership strategy and revenue share automation." />
      </Head>

      <div className="min-h-screen bg-gray-900">
        <Header />
        <Hero />
        <Questionnaire /> {/* This comes right after hero */}
        <Services />
        <Footer />
      </div>
    </>
  );
}
