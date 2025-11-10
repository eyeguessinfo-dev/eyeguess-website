export default function Hero() {
  return (
    <section className="matrix-bg text-white py-20 md:py-32 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="data-stream" style={{left: '20%', animationDelay: '0s'}}></div>
        <div className="data-stream" style={{left: '50%', animationDelay: '1s'}}></div>
        <div className="data-stream" style={{left: '80%', animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold mb-6 leading-tight">
          SEEING WHAT <span className="text-matrix-green enhanced-glow inline-block px-2">OTHERS MISS</span>
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 enhanced-glow inline-block px-4 py-2 rounded-lg">
          Join the Inner Circle of Digital Innovation
        </p>
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Become a founding supporter and help build the future of digital asset strategy
        </p>
	<a 
  	  href="#support"
  	  className="cta-glow px-8 md:px-12 py-4 md:py-6 rounded-lg font-bold text-lg md:text-xl inline-block"
  	  style={{ minHeight: '44px', minWidth: '44px' }}
	>
  	  ⚡ Become a Founding Supporter
	</a>
        
        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-matrix-green rounded-full enhanced-glow"></div>
            <span>Premium Digital Strategy</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-matrix-green rounded-full enhanced-glow"></div>
            <span>Data-Driven Insights</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-matrix-green rounded-full enhanced-glow"></div>
            <span>Exclusive Access</span>
          </div>
        </div>
      </div>
    </section>
  );
}
