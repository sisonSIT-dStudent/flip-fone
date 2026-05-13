export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a 
          href="https://www.facebook.com/ivan.bangcado.92"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 cursor-pointer"
        >
          <div className="relative">
            <img 
              src="images/ivanpic2.png" 
              alt="Ivan" 
             
              className="w-20 h-20 rounded-full border-2 border-blue-500 object-cover shadow-lg shadow-blue-500/20 transition-all duration-300 group-hover:scale-110 group-hover:border-white group-active:scale-95"
            />
            
            <div className="absolute left-1/2 -translate-x-1/2 top-24 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity bg-zinc-900 border border-zinc-800 text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded whitespace-nowrap pointer-events-none shadow-xl">
              View FB Profile
            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-black tracking-tighter text-blue-500 uppercase text-xs leading-none">Owner</span>
          </div>
        </a>

        <a 
          href="https://www.instagram.com/flip.fone2601" 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()} 
          className="relative z-[60] bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black px-6 py-2.5 rounded-full transition-all uppercase tracking-widest shadow-lg shadow-blue-600/20 cursor-pointer active:scale-95"
        >
          Contact me
        </a>
      </div>
    </nav>
  )
}