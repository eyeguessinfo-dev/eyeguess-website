const tierData = [
  {
    id: 1,
    name: "VISIONARY",
    price: "$100+",
    description: "Founding supporter status",
    paypalLink: "mailto:engage@eyeguess.org?subject=Visionary%20Support%20Inquiry",
    benefits: [
      "Founding supporter status on our website",
      "Lifetime 'early believer' recognition",
      "Priority access to all future consulting services",
      "1-hour exclusive strategy session",
      "Behind-the-scenes product development access"
    ],
    style: "premium"
  },
  {
    id: 2,
    name: "PATRON",
    price: "$25-99",
    description: "Active community membership",
    paypalLink: "mailto:engage@eyeguess.org?subject=Visionary%20Support%20Inquiry",
    benefits: [
      "Monthly insider insights newsletter",
      "Digital asset optimization tips",
      "30-minute quarterly Q&A call",
      "Early access to new tools and services",
      "Exclusive community forum access"
    ],
    style: "standard"
  },
  {
    id: 3,
    name: "SUPPORTER",
    price: "$5-24",
    description: "Join our mission",
    paypalLink: "mailto:engage@eyeguess.org?subject=Visionary%20Support%20Inquiry",
    benefits: [
      "Weekly exclusive updates",
      "Community Discord access",
      "Behind-the-scenes content",
      "Early notification of new offerings",
      "Digital badge of support"
    ],
    style: "standard"
  }
];

export default function SupportTiers() {
  return (
    <section id="support" className="py-20 px-4 matrix-bg">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">
            Become a <span className="text-matrix-green enhanced-glow inline-block px-4 py-2 rounded-lg">Founding Supporter</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto enhanced-glow inline-block px-6 py-3 rounded-lg">
            Join our inner circle and help shape the future of digital asset strategy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {tierData.map((tier) => (
	    <div 
  	      key={tier.id}
  	      className={`rounded-xl p-8 relative overflow-hidden ${
    		tier.style === 'premium' 
      		  ? 'premium-tier-card enhanced-glow scale-105' 
      		  : 'enhanced-card glow-green'
 	      }`}
	    >
              {/* Premium badge for visionary tier */}
              {tier.style === 'premium' && (
                <div className="absolute top-4 right-4 bg-matrix-green text-gray-900 px-3 py-1 rounded-full text-sm font-bold enhanced-glow">
                  MOST POPULAR
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-headline font-bold text-matrix-green mb-3 enhanced-glow inline-block px-3 py-1 rounded">
                  {tier.name}
                </h3>
                <div className="text-3xl md:text-4xl font-bold mb-3 enhanced-glow inline-block px-4 py-2 rounded-lg">
                  {tier.price}
                </div>
                <p className="text-gray-300 text-lg">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start text-base md:text-lg">
                    <span className="text-matrix-green mr-3 mt-1 flex-shrink-0 text-xl">▶</span>
                    <span className="leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
	      <a 
  		href={tier.paypalLink}
  		className={`w-full block text-center py-4 px-6 rounded-lg font-bold text-lg ${
    		  tier.style === 'premium' 
      		    ? 'premium-btn cta-glow' 
      		    : 'secondary-btn'
  		}`}
  		style={{ minHeight: '44px' }}
	      >
  		{tier.style === 'premium' ? '🚀 Join as ' : '▶ Join as '}{tier.name}
	      </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 enhanced-glow inline-block px-6 py-4 rounded-lg">
          <p className="text-gray-300 text-lg">All supporters receive our eternal gratitude and exclusive updates on our mission</p>
          <p className="text-matrix-green mt-2 text-sm">⚡ Limited founding spots available</p>
        </div>

      </div>
    </section>
  );
}
