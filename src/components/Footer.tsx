// import { motion } from 'framer-motion';
// import { Linkedin, Heart } from 'lucide-react';
// import { content } from '../data/content';

// export const Footer = () => {
//   return (
//     <footer className="bg-muted/30 border-t border-border py-12">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//           <div className="text-center md:text-left">
//             <div className="text-xl font-bold text-primary mb-2">{content.name}</div>
//             <div className="text-sm text-muted-foreground">{content.title}</div>
//           </div>

//           <div className="flex items-center gap-6">
//             {content.socials.linkedin && (
//               <motion.a
//                 href={content.socials.linkedin}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-muted-foreground hover:text-primary transition-colors link-animated"
//                 whileHover={{ scale: 1.1 }}
//                 aria-label="LinkedIn profile"
//               >
//                 <Linkedin className="w-5 h-5 text-blue-600" />
//               </motion.a>
//             )}  
//           </div>
//         </div>

//         {/* <div className="mt-8 pt-8 border-t border-border text-center">
//           <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
//             Made with <Heart className="w-4 h-4 text-crimson" /> by {content.name} © 2024
//           </p>
//         </div> */}
//       </div>
//     </footer>
//   );
// };




















import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Heart } from 'lucide-react';
import { content } from '../data/content';

export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold text-primary mb-2">{content.name}</div>
            <div className="text-sm text-muted-foreground">{content.title}</div>
          </div>

          <div className="flex items-center gap-6">
            {/* Email */}
            {content.email && (
              <motion.a
                href={`mailto:${content.email}`}
                className="text-muted-foreground hover:text-primary transition-colors link-animated"
                whileHover={{ scale: 1.1 }}
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            )}

            {/* GitHub */}
            {content.socials.github && (
              <motion.a
                href={content.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors link-animated"
                whileHover={{ scale: 1.1 }}
                aria-label="GitHub profile"
              >
                <Github className="w-5 h-5" />
              </motion.a>
            )}

            {/* LinkedIn */}
            {content.socials.linkedin && (
              <motion.a
                href={content.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors link-animated"
                whileHover={{ scale: 1.1 }}
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-5 h-5 " />
              </motion.a>
            )}
          </div>
        </div>

        {/* <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-crimson" /> by {content.name} © 2024
          </p>
        </div> */}
      </div>
    </footer>
  );
};
