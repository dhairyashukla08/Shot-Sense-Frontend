// import React from 'react';
// import { Camera, Sparkles } from 'lucide-react';

// export const Header = () => {
//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
//         <div className="flex h-16 items-center justify-between ">
//           <div className="flex items-center space-x-3 ">
//             <div className="relative ">
//               <Camera className="h-8 w-8 text-primary " />
//               <Sparkles className="h-4 w-4 text-accent absolute -top-1 -right-1 " />
//             </div>
//             <h1 className="text-2xl font-heading font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent ">
//               ShotSense
//             </h1>
//           </div>
          
//           <nav className="hidden md:flex items-center space-x-6 ">
//             <a 
//               href= "#features " 
//               className= "text-sm font-medium text-muted-foreground hover:text-primary transition-smooth "
//             >
//               Features
//             </a>
//             <a 
//               href= "#how-it-works " 
//               className= "text-sm font-medium text-muted-foreground hover:text-primary transition-smooth "
//             >
//               How It Works
//             </a>
//             <a 
//               href= "#upload " 
//               className= "text-sm font-medium text-foreground bg-primary/10 hover:bg-primary/20 px-4 py-2 rounded-lg transition-smooth "
//             >
//               Try Now
//             </a>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;





import React, { useState, useEffect } from 'react';
import { Camera, Sparkles, Menu, X } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll to adjust transparency
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed top-0 z-50 w-full px-4 pt-4 transition-all duration-300">
      <header 
        className={`mx-auto max-w-6xl rounded-2xl border transition-all duration-500 ${
          isScrolled 
            ? "border-white/20 bg-black/60 shadow-2xl backdrop-blur-xl" 
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo Group */}
            <div className="group flex cursor-pointer items-center space-x-3">
              <div className="relative transform transition-transform group-hover:scale-110">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-accent opacity-30 blur group-hover:opacity-100 transition duration-500"></div>
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-background border border-border/50">
                  <Camera className="h-6 w-6 text-primary" />
                  <Sparkles className="absolute -right-1 -top-1 h-4 w-4 text-accent animate-pulse" />
                </div>
              </div>
              <h1 className="text-xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent group-hover:from-primary group-hover:to-accent transition-all duration-500">
                  ShotSense
                </span>
              </h1>
            </div>

            {/* Navigation Links */}
            <nav className="hidden items-center space-x-8 md:flex">
              <a
                href="#features "
                onClick={(e) => handleScrollTo(e, 'features ')}
                className="relative text-sm font-medium text-white/70 transition-colors hover:text-white group"
              >
                Features
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>

              <a
                href="#how-it-works"
                onClick={(e) => handleScrollTo(e, 'how-it-works')}
                className="relative text-sm font-medium text-white/70 transition-colors hover:text-white group"
              >
                How It Works
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              
              <a
                href="#upload"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5 font-bold"
              >
                <span className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent transition-all duration-500 group-hover:scale-110"></span>
                <span className="relative rounded-full bg-background px-6 py-2 text-sm text-white transition-all duration-300 group-hover:bg-transparent">
                  Try Now
                </span>
              </a>
            </nav>

            {/* Mobile Menu Trigger (Optional visual) */}
            <div className="md:hidden">
              <Menu className="h-6 w-6 text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;