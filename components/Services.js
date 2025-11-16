const serviceData = [
  {
    id: 1,
    name: "PARTNERSHIP AUDIT",
    price: "$20",
    description: "Diagnose your revenue gaps",
    action: "Book Discovery Call",
    link: "mailto:engage@eyeguess.org?subject=Partnership%20Audit%20Inquiry",
    benefits: [
      "In-depth analysis of your current partnership gaps and opportunities",     
      "Competitive landscape assessment and market positioning",
      "Revenue potential analysis and opportunity sizing",
      "Prioritized implementation roadmap with clear milestones",
      "30-day actionable plan with immediate next steps"
    ],
    style: "premium"
  },
  {
    id: 2,
    name: "PARTNERSHIP OS IMPLEMENTATION",
    price: "$25,000+",
    description: "Build your automated legacy",
    action: "Build Your Legacy",
    link: "mailto:engage@eyeguess.org?subject=Partnership%20OS%20Implementation",
    benefits: [
      "Custom partnership framework design and documentation",     
      "Third-party payment integration and automation setup",
      "Backend system architecture and API development",     
      "Enterprise-grade web application development",     
      "Complete team training and system handoff"
    ],
    style: "standard"
  },
  {
    id: 3,
    name: "PARTNERSHIP DEPARTMENT",
    price: "$4,000/mo",
    description: "Ongoing growth management",
    action: "Scale Your Ecosystem",
    link: "mailto:engage@eyeguess.org?subject=Partnership%20Department%20Service",
    benefits: [
      "Monthly performance optimization and KPI tracking",
      "Strategic partner recruitment and onboarding processes",
      "Quarterly strategic roadmap management and execution",
      "Custom web development and system enhancements",
      "Dedicated partnership manager and strategic oversight"
    ],
    style: "standard"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 matrix-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">
            Build Your <span className="text-matrix-green enhanced-glow inline-block px-4 py-2 rounded-lg">Partnership Legacy</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto enhanced-glow inline-block px-6 py-3 rounded-lg">
            From initial audit to fully automated ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {serviceData.map((service) => (
            <div key={service.id} className={`rounded-xl p-8 relative overflow-hidden ${
              service.style === 'premium' 
                ? 'premium-tier-card enhanced-glow scale-105' 
                : 'enhanced-card glow-green'
            }`}>
              
              {service.style === 'premium' && (
                <div className="absolute top-4 right-4 bg-matrix-green text-gray-900 px-3 py-1 rounded-full text-sm font-bold enhanced-glow">
                  RECOMMENDED
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-headline font-bold text-matrix-green mb-3 enhanced-glow inline-block px-3 py-1 rounded">
                  {service.name}
                </h3>
                <div className="text-3xl md:text-4xl font-bold mb-3 enhanced-glow inline-block px-4 py-2 rounded-lg">
                  {service.price}
                </div>
                <p className="text-gray-300 text-lg">{service.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start text-base md:text-lg">
                    <span className="text-matrix-green mr-3 mt-1 flex-shrink-0 text-xl">✦</span>
                    <span className="leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
              <a
                href={service.link}
                className='w-full block text-center py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 no-underline'
                style={{
                  minHeight: '44px',
                  background: service.style === 'premium'
                    ? 'linear-gradient(45deg, #00ff41, #008f39)'
                    : 'linear-gradient(45deg, #1a1a1a, #2a2a2a)',
                  border: service.style === 'premium'
                    ? '2px solid #00ff41'
                    : '2px solid #333',
                  color: service.style === 'premium'
                    ? '#1a1a1a'  // Dark text on green background for contrast
                    : '#ffffff'  // White text on dark background
                }}
              >
                {service.action}
              </a>
            </div>
          ))}
        </div>

        <div className='text-center mt-16 enhanced-glow inline-block px-6 py-4 rounded-lg'>
          <p className='text-gray-300 text-lg'>All engagements include our comprehensive legal framework and strategic guidance</p>
          <p className='text-matrix-green mt-2 text-sm'>✦ Limited capacity available</p>
        </div>
      </div>
    </section>
  );
}
