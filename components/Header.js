export default function Header() {
  return (
    <header className="bg-gray-900/80 backdrop-blur-sm text-white p-4 sticky top-0 z-50 border-b border-gray-700">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold font-headline enhanced-glow inline-block px-3 py-1 rounded">
          EyeGuess Consulting
        </div>
        <nav className="flex gap-4">
          <a href="/" className="secondary-btn px-4 py-2 rounded-lg text-white">
            Home
          </a>
          <a href="/support" className="secondary-btn px-4 py-2 rounded-lg text-white">
            Support
          </a>
          <a href="#services" className="secondary-btn px-4 py-2 rounded-lg text-white">
            Services
          </a>
          <a href="/support" className="cta-glow px-4 py-2 rounded-lg font-bold text-white">
            Book Audit
          </a>
        </nav>
      </div>
    </header>
  );
}
