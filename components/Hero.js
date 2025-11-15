export default function Hero() {
  return (
    <section className="matrix-bg text-white py-20 md:py-32 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="data-stream" style={{left: '0%', animationDelay: '0s'}}></div>
        <div className="data-stream" style={{left: '20%', animationDelay: '1s'}}></div>
        <div className="data-stream" style={{left: '40%', animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-headline font-bold mb-6 leading-tight">
          BUILD YOUR <span className="text-matrix-green enhanced-glow inline-block px-2">DIGITAL LEGACY</span>
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 enhanced-glow inline-block px-4 py-2 rounded-lg">
          Through Automated Partnership Ecosystems
        </p>
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          We architect revenue-share systems that scale beyond you—transforming one-time deals into perpetual growth engines.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/support" className="cta-glow px-8 md:px-12 py-4 md:py-6 rounded-lg font-bold text-lg md:text-xl inline-block text-center">
            Book Your Partnership Audit
          </a>
          <a href="#services" className="secondary-btn px-8 md:px-12 py-4 md:py-6 rounded-lg font-bold text-lg md:text-xl inline-block text-center">
            Explore Our Services
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-matrix-green rounded-full enhanced-glow"></div>
            <span>Stripe Connect Automation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-matrix-green rounded-full enhanced-glow"></div>
            <span>Revenue Share Architecture</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-matrix-green rounded-full enhanced-glow"></div>
            <span>Legal Framework Design</span>
          </div>
        </div>
      </div>
    </section>
  );
}
