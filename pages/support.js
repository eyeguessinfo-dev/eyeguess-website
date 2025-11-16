import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const supportTiers = [
  {
    id: 1,
    name: "STRATEGY SESSION",
    price: "$49/month",
    description: "Monthly strategic guidance & planning",
    features: [
      "Monthly strategic planning & partnership roadmap",
      "Customized revenue framework", 
      "Integration roadmap & Technical requirements",
      "30-day action plan",
      "Recorded session + summary notes"
    ],
    paymentLink: "https://buy.stripe.com/14A3cwbUg8xZ88b47D9IQ00", // Replace with actual Stripe payment link
    cta: "Start Strategy Sessions"
  },
  {
    id: 2,
    name: "CONTENT DEVELOPMENT",
    price: "$1,799/month",
    description: "End-to-end content strategy, production & optimization",
    features: [
      "Monthly content calendar & strategic planning",
      "Full content production: video, photography, and written content",
      "Pre-production planning: shot lists, scripts, and storyboards",
      "Platform-specific formatting & distribution strategy",      
      "Performance analytics & monthly optimization reports", 
      "Ongoing content maintenance & refresh cycles",
      "Pre-Production check lists" 
    ],
    paymentLink: "https://buy.stripe.com/aFa00kbUg29BfADcE99IQ01", // Replace with actual Stripe payment link
    cta: "Start Content Development"
  },
  {
    id: 3,
    name: "FULL ADVISORY",
    price: "$3,999/month",
    description: "Comprehensive partnership management",
    features: [
      "4 hours of monthly 1:1 strategic consulting sessions",
      "Unlimited email & messaging support for quick decisions",
      "Quarterly partnership strategy reviews & performance audits",     
      "Priority access to new partnership frameworks & tools",    
      "Setup & technical implementation assistance",
      "Full content development suite (everything from Content tier)"     
    ],
    paymentLink: "https://buy.stripe.com/3cI6oIbUg01t1JN1Zv9IQ02", // Replace with actual Stripe payment link
    cta: "Start Full Advisory"
  }
];

export default function Support() {
  return (
    <>
      <Head>
        <title>Value-Based Support - EyeGuess Consulting</title>
        <meta name="description" content="Get immediate value with strategy sessions, content development, and comprehensive advisory support." />
      </Head>

      <div className="min-h-screen bg-gray-900">
        <Header />
        
        <section className="matrix-bg text-white py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-headline font-bold mb-6">
              Get <span className="text-matrix-green enhanced-glow inline-block px-4 py-2 rounded-lg">Immediate Value</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start transforming your partnership strategy today with our value-first support options
            </p>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {supportTiers.map((tier) => (
                <div key={tier.id} className="enhanced-card rounded-xl p-8 border border-gray-700 hover:border-matrix-green transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-headline font-bold text-matrix-green mb-3">
                      {tier.name}
                    </h3>
                    <div className="text-3xl font-bold mb-3 text-white">
                      {tier.price}
                    </div>
                    <p className="text-gray-300">{tier.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <span className="text-matrix-green mr-3 mt-1 flex-shrink-0">✓</span>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a 
                    href={tier.paymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center bg-matrix-green text-gray-900 py-4 px-6 rounded-lg font-bold text-lg hover:bg-green-400 transition-colors duration-300"
                  >
                    {tier.cta}
                  </a>
                </div>
              ))}
            </div>

            {/* Custom Support Box */}
            <div className="max-w-2xl mx-auto">
              <div className="enhanced-card rounded-xl p-8 border-2 border-matrix-green border-dashed text-center hover:border-solid hover:bg-gray-800 transition-all duration-300">
                <div className="text-matrix-green text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-headline font-bold text-matrix-green mb-4">
                  Need Something Custom?
                </h3>
                <p className="text-gray-300 mb-6 text-lg">
                  Have specific requirements or need a tailored solution? Let's build exactly what you need.
                </p>
                <a 
                  href="mailto:engage@eyeguess.org?subject=Custom Support Inquiry"
                  className="inline-block bg-transparent border-2 border-matrix-green text-matrix-green py-3 px-8 rounded-lg font-bold text-lg hover:bg-matrix-green hover:text-gray-900 transition-all duration-300"
                >
                  Email For Custom Support
                </a>
                <p className="text-gray-400 mt-4 text-sm">
                  engage@eyeguess.org
                </p>
              </div>
            </div>

            <div className="text-center mt-16">
              <p className="text-gray-400">
                All payments processed securely via Stripe. Cancel anytime.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
