// import React from "react";
// import { Camera, Heart, Github, Twitter, Linkedin } from "lucide-react";

// export const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-card border-t border-border ">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
//         <div className="grid md:grid-cols-4 gap-8 mb-8 ">
//           <div className="md:col-span-2 ">
//             <div className="flex items-center space-x-2 mb-4 ">
//               <Camera className="h-6 w-6 text-primary " />
//               <span className="text-xl font-heading font-bold text-foreground ">
//                 ShotSense
//               </span>
//             </div>
//             <p className="text-muted-foreground mb-4 max-w-md ">
//               AI-powered photo intelligence helping photographers understand
//               what makes their photos work. Learn, improve, and master the art
//               of photography.
//             </p>
//             <div className="flex space-x-4 ">
//               <a
//                 href="# "
//                 className="text-muted-foreground hover:text-primary transition-smooth "
//                 aria-label="Twitter "
//               >
//                 <Twitter className="h-5 w-5 " />
//               </a>
//               <a
//                 href="# "
//                 className="text-muted-foreground hover:text-primary transition-smooth "
//                 aria-label="LinkedIn "
//               >
//                 <Linkedin className="h-5 w-5 " />
//               </a>
//               <a
//                 href="# "
//                 className="text-muted-foreground hover:text-primary transition-smooth "
//                 aria-label="GitHub "
//               >
//                 <Github className="h-5 w-5 " />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="pt-8 border-t border-border ">
//           <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 ">
//             <p className="text-sm text-muted-foreground ">
//               © {currentYear} ShotSense. Made with{" "}
//               <Heart className="inline h-4 w-4 text-destructive " /> for
//               photographers.
//             </p>
//             <div className="flex space-x-6 ">
//               <a
//                 href="# "
//                 className="text-sm text-muted-foreground hover:text-primary transition-smooth "
//               >
//                 Privacy Policy
//               </a>
//               <a
//                 href="# "
//                 className="text-sm text-muted-foreground hover:text-primary transition-smooth "
//               >
//                 Terms of Service
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import React from "react";
import { Camera, Heart, Github, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full px-4 pb-8 ">
      <footer className="mx-auto max-w-6xl rounded-3xl border border-border bg-card/30 backdrop-blur-md overflow-hidden">
        <div className="container mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
            {/* Logo and Description */}
            <div className="max-w-md">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <Camera className="h-5 w-5 text-primary" />
                </div>
                <span className="text-xl font-bold tracking-tight text-foreground">
                  ShotSense
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                AI-powered photo intelligence helping photographers understand
                what makes their photos work. Learn, improve, and master the art
                of photography.
              </p>
            </div>

            {/* Social Links - Styled as Glass Circles */}
            <div className="flex space-x-3">
              {[
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Github, label: "GitHub" },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Bar - Clean and Minimal */}
          <div className="pt-8 border-t border-border/50">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
              <p className="text-xs font-medium text-muted-foreground">
                © {currentYear} ShotSense. Made with{" "}
                <Heart className="inline h-3 w-3 text-destructive animate-pulse" /> for
                photographers.
              </p>
              
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;