import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    } bg-black/80 backdrop-blur-md border-b border-zinc-800`}>
      
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
       
        <a 
          href="https://www.facebook.com/ivan.bangcado.92"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 cursor-pointer"
        >
          <img 
            src="/images/ivanpfp.jpg"
            alt="Ivan" 
            className="w-15 h-15 rounded-full border-2 border-blue-500 object-cover shadow-lg shadow-blue-500/20"
          />
          <div className="flex flex-col">
            <span className="font-black tracking-tighter text-blue-500 uppercase text-xs leading-none">Flip</span>
            <span className="font-black tracking-tighter text-white uppercase text-xs leading-none mt-1">Studio</span>
          </div>
        </a>

        {/* Right: Navigation Links */}
        <div className="flex items-center gap-6">
          <a 
            href="#about" 
            className="text-zinc-400 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors hidden sm:block"
          >
            About Us
          </a>
          
          <a 
            href="https://www.instagram.com/flip.fone2601" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black px-6 py-2.5 rounded-full transition-all uppercase tracking-widest shadow-lg shadow-blue-600/20 active:scale-95"
          >
            Contact us
          </a>
        </div>
      </div>
    </nav>
  )
}