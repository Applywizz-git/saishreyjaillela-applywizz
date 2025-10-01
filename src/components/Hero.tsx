// import { motion, Variants } from 'framer-motion';
// import { ChevronRight, Download, MapPin } from 'lucide-react';
// import { content } from '../data/content';
// import { Github } from "lucide-react";

// export const Hero = () => {
//   const handleNavClick = (href: string) => {
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const itemVariants: Variants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" }
//     }
//   };
//   const handleDownload = () => {
//     // Create a temporary link
//     const link = document.createElement("a");
//     link.href = "/RESUME_SAI SHREYA JILLELLA_DA 1.pdf"; // file should be in public folder
//     link.download = "SAI SHREYA JILLELLA.pdf"; // file name for download
//     link.click();
//   };

//   const imageVariants: Variants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { 
//       opacity: 1, 
//       scale: 1,
//       transition: { duration: 0.8, ease: "easeOut" }
//     }
//   };
//     const githubUrl = "https://github.com/Jshreya-12"; // replace with your GitHub link


//   return (
//     <section id="hero" className="relative min-h-screen flex items-center pt-16">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         {/* Reorder for mobile: image first, content second */}
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Profile Image - Left on mobile, Right on desktop */}
//           <motion.div
//             variants={imageVariants}
//             className="order-1 lg:order-2 relative mx-auto w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mb-8 lg:mb-0"
//           >
//             <div className="absolute inset-0 bg-gradient-premium rounded-full blur-xl opacity-30 animate-glow-pulse" />
//             <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-premium">
//               <img
//                 src={content.profileImage}
//                 alt={`${content.name} - ${content.title}`}
//                 className="w-full h-full object-cover"
//                 loading="eager"
//               />
//             </div>
//           </motion.div>

//           {/* Content - Right on desktop, below image on mobile */}
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="order-2 lg:order-1 space-y-8 text-left lg:text-left"
//           >
//             {/* Location */}
//             {/* <motion.div
//               variants={itemVariants}
//               className="flex items-center gap-2 text-muted-foreground"
//             >
//               <MapPin className="w-4 h-4" />
//               <span className="text-sm">{content.location}</span>
//             </motion.div> */}

//             {/* Name & Title */}
//             <motion.div variants={itemVariants} className="space-y-4">
//               <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
//                 <span className="text-glow">{content.name}</span>
//               </h1>
//               <p className="text-xl md:text-2xl text-muted-foreground font-medium">
//                 {content.title}
//               </p>
//             </motion.div>

//             {/* One-liner */}
//             <motion.p
//               variants={itemVariants}
//               className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
//             >
//               {content.oneLiner}
//             </motion.p>

//             {/* CTAs */}
//             <motion.div
//               variants={itemVariants}
//               className="flex flex-col sm:flex-row items-start gap-4 pt-4"
//             >
//               <button
//                 onClick={() => handleNavClick(content.ctaPrimary.href)}
//                 className="btn-hero-small group flex items-center gap-2"
//                 aria-label={content.ctaPrimary.label}
//               >
//                 {content.ctaPrimary.label}
//                 <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
//               </button>

//               {/* <button */}
//                 {/* // onClick={() => handleNavClick(content.ctaSecondary.href)}
//                 className="btn-ghost"
//                 // aria-label={content.ctaSecondary.label} */}
//               {/* > */}
//                 {/* {content.ctaSecondary.label} */}
//               {/* </button> */}

//                <button
//       onClick={handleDownload}
//       className="btn-hero-small group flex items-center gap-2"
//     >
//       {/* <Download className="w-4 h-4 ml-2  flex group-hover:translate-x-1 transition-transform" /> */}
//       Download Resume
//        <Download className="w-4 h-4 ml-2  flex group-hover:translate-x-1 transition-transform" />
//     </button>


// {/* 
//      <a
//       href={githubUrl}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black text-white font-semibold hover:bg-gray-800 transition-all duration-300 shadow-md"
//     >
//       <Github className="w-6 h-6 ml-2  flex group-hover:translate-x-1 transition-transform" />
    
//     </a> */}
    
//             </motion.div>
//             <div className="flex flex-col sm:flex-row items-start gap-4 pt-4" >
//      <a
//       href={githubUrl}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="btn-hero-small group flex items-center gap-2 px-4 py-2 rounded-sm bg- text-white font-semibold hover:bg-gray-800 transition-all duration-300 shadow-md"
//     >
//       <Github className="w-6 h-6 ml-2  flex group-hover:translate-x-1 transition-transform" />
//       Github
    
//     </a></div>

//             {/* Quick stats or highlights */}
//             <motion.div
//               variants={itemVariants}
//               className="grid grid-cols-3 gap-8 pt-2"
//             >
//               <div className="text-left">
//                 <div className="text-2xl font-bold text-primary">2+</div>
//                 <div className="text-sm text-muted-foreground">Years Experience</div>
//               </div>
//               <div className="text-left">
//                 <div className="text-2xl font-bold text-accent">40%</div>
//                 <div className="text-sm text-muted-foreground">Efficiency Gains</div>
//               </div>
//               <div className="text-left">
//                 <div className="text-2xl font-bold text-amber">99%</div>
//                 <div className="text-sm text-muted-foreground">Data Quality</div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       {/* <motion.div
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1.5, duration: 0.6 }}
//       >
//         <motion.div
//           className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
//           animate={{ opacity: [1, 0.3, 1] }}
//           transition={{ duration: 2, repeat: Infinity }}
//         >
//           <motion.div
//             className="w-1 h-3 bg-primary rounded-full mt-2"
//             animate={{ y: [0, 12, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           />
//         </motion.div>
//       </motion.div> */}
//     </section>
//   );
// };































import { motion, Variants } from 'framer-motion';
import { ChevronRight, Download, MapPin } from 'lucide-react';
import { content } from '../data/content';
import { Github } from "lucide-react";
import { useState } from 'react';

export const Hero = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewResume = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResumeModal = () => {
    setIsResumeModalOpen(false);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const githubUrl = "https://github.com/Jshreya-12";

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Reorder for mobile: image first, content second */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image - Left on mobile, Right on desktop */}
          <motion.div
            variants={imageVariants}
            className="order-1 lg:order-2 relative mx-auto w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mb-8 lg:mb-0"
          >
            <div className="absolute inset-0 bg-gradient-premium rounded-full blur-xl opacity-30 animate-glow-pulse" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-premium">
              <img
                src={content.profileImage}
                alt={`${content.name} - ${content.title}`}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </motion.div>

          {/* Content - Right on desktop, below image on mobile */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1 space-y-8 text-left lg:text-left"
          >
            {/* Name & Title */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="text-glow">{content.name}</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                {content.title}
              </p>
            </motion.div>

            {/* One-liner */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              {content.oneLiner}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start gap-4 pt-4"
            >
              <button
                onClick={() => handleNavClick(content.ctaPrimary.href)}
                className="btn-hero-small group flex items-center gap-2"
                aria-label={content.ctaPrimary.label}
              >
                {content.ctaPrimary.label}
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleViewResume}
                className="btn-hero-small group flex items-center gap-2"
              >
                View Resume
                <Download className="w-4 h-4 ml-2 flex group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* GitHub Button */}
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-small group flex items-center gap-2 px-4 py-2 rounded-sm text-white font-semibold hover:bg-gray-800 transition-all duration-300 shadow-md"
              >
                <Github className="w-6 h-6 ml-2 flex group-hover:translate-x-1 transition-transform" />
                GitHub
              </a>
            </div>

            {/* Quick stats or highlights */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-8 pt-2"
            >
              <div className="text-left">
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-accent">40%</div>
                <div className="text-sm text-muted-foreground">Efficiency Gains</div>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-amber">99%</div>
                <div className="text-sm text-muted-foreground">Data Quality</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Resume Modal */}
      {isResumeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative bg-white dark:bg-gray-900 rounded-lg w-full max-w-6xl h-[95vh] mx-4 shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Resume - Sai Shreya Jillella
              </h2>
              <button
                onClick={handleCloseResumeModal}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="h-[calc(95vh-80px)] w-full">
              <iframe
                src="/RESUME_SAI SHREYA JILLELLA_DA 1.pdf"
                className="w-full h-full rounded-b-lg"
                title="Sai Shreya Jillella Resume"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};