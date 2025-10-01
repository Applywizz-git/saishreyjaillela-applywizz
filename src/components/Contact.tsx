// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import { Mail, Phone, Send, Check, AlertCircle } from 'lucide-react';
// import { sendEmail } from '../lib/email';
// import { content } from '../data/content';

// export const Contact = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     const result = await sendEmail(formData);
//     setSubmitStatus(result.success ? 'success' : 'error');
//     setIsSubmitting(false);
    
//     if (result.success) {
//       setFormData({ name: '', email: '', subject: '', message: '' });
//     }
//   };

//   return (
//     <section id="contact" className="py-20">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-4xl">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
//             <div className="w-24 h-1 bg-gradient-premium mx-auto rounded-full mb-6" />
//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               Ready to transform your data into actionable insights? Let's discuss your next project.
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-12">
//             <div className="space-y-8">
//               <div className="flex items-center gap-4">
//                 <Mail className="w-6 h-6 text-primary" />
//                 <div>
//                   <div className="font-medium text-foreground">Email</div>
//                   <a href={`mailto:${content.contact.email}`} className="text-muted-foreground link-animated">
//                     {content.contact.email}
//                   </a>
//                 </div>
//               </div>
              
//               {content.contact.enablePhone && (
//                 <div className="flex items-center gap-4">
//                   <Phone className="w-6 h-6 text-primary" />
//                   <div>
//                     <div className="font-medium text-foreground">Phone</div>
//                     <a href={`tel:${content.phone}`} className="text-muted-foreground link-animated">
//                       {content.phone}
//                     </a>
//                   </div>
//                 </div>
//               )}
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="relative">
//                 <input
//                   type="text"
//                   required
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                   className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors peer"
//                   placeholder=" "
//                 />
//                 <label className="absolute left-4 top-3 text-muted-foreground transition-all peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs">
//                   Name
//                 </label>
//               </div>

//               <div className="relative">
//                 <input
//                   type="email"
//                   required
//                   value={formData.email}
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                   className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors peer"
//                   placeholder=" "
//                 />
//                 <label className="absolute left-4 top-3 text-muted-foreground transition-all peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs">
//                   Email
//                 </label>
//               </div>

//               <div className="relative">
//                 <textarea
//                   required
//                   value={formData.message}
//                   onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                   rows={5}
//                   className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors peer resize-none"
//                   placeholder=" "
//                 />
//                 <label className="absolute left-4 top-3 text-muted-foreground transition-all peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs">
//                   Message
//                 </label>
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full btn-hero flex items-center justify-center gap-2"
//               >
//                 {isSubmitting ? (
//                   <div className="w-5 h-5 border-2 border-emerald-foreground border-t-transparent rounded-full animate-spin" />
//                 ) : submitStatus === 'success' ? (
//                   <Check className="w-5 h-5" />
//                 ) : submitStatus === 'error' ? (
//                   <AlertCircle className="w-5 h-5" />
//                 ) : (
//                   <Send className="w-5 h-5" />
//                 )}
//                 {isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Sent!' : 'Send Message'}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

















import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, Send, Check, AlertCircle, Github, Linkedin, MapPin } from 'lucide-react';
import { sendEmail } from '../lib/email';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Embedded contact data
  const contactData = {
    email: "jsaishreya01@gmail.com",
    enablePhone: false,
    phone: "",
    socials: {
      github: "https://github.com/Jshreya-12",
      linkedin: "https://www.linkedin.com/in/jillellasaishreya/",
      x: ""
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const result = await sendEmail(formData);
    setSubmitStatus(result.success ? 'success' : 'error');
    setIsSubmitting(false);
    
    if (result.success) {
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-premium mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your data into actionable insights? Let's discuss your next project.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-primary" />
                <div>
                  <div className="font-medium text-foreground">Email</div>
                  <a href={`mailto:${contactData.email}`} className="text-muted-foreground link-animated">
                    {contactData.email}
                  </a>
                </div>
              </div>
              
              {/* Phone - Conditionally rendered */}
              {contactData.enablePhone && contactData.phone && (
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">Phone</div>
                    <a href={`tel:${contactData.phone}`} className="text-muted-foreground link-animated">
                      {contactData.phone}
                    </a>
                  </div>
                </div>
              )}

              {/* GitHub */}
              {contactData.socials.github && (
                <div className="flex items-center gap-4">
                  <Github className="w-6 h-6 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">GitHub</div>
                    <a 
                      href={contactData.socials.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground link-animated"
                    >
                      {contactData.socials.github.replace('https://', '').replace('www.', '')}
                    </a>
                  </div>
                </div>
              )}

              {/* LinkedIn */}
              {contactData.socials.linkedin && (
                <div className="flex items-center gap-4">
                  <Linkedin className="w-6 h-6 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">LinkedIn</div>
                    <a 
                      href={contactData.socials.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground link-animated"
                    >
                      {contactData.socials.linkedin.replace('https://', '').replace('www.', '').replace('linkedin.com/in/', '')}
                    </a>
                  </div>
                </div>
              )}
                    <div className="flex items-center gap-4">
  <MapPin className="w-6 h-6 text-primary" />
  <div>
    <div className="font-medium text-foreground">Location</div>
    <div className="text-muted-foreground">
      Syracuse,NY
    </div>
  </div>
</div>
            </div>
      

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors peer"
                  placeholder=" "
                />
                <label className="absolute left-4 top-3 text-muted-foreground transition-all peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs">
                  Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors peer"
                  placeholder=" "
                />
                <label className="absolute left-4 top-3 text-muted-foreground transition-all peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs">
                  Email
                </label>
              </div>

              <div className="relative">
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors peer resize-none"
                  placeholder=" "
                />
                <label className="absolute left-4 top-3 text-muted-foreground transition-all peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs">
                  Message
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-hero flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-emerald-foreground border-t-transparent rounded-full animate-spin" />
                ) : submitStatus === 'success' ? (
                  <Check className="w-5 h-5" />
                ) : submitStatus === 'error' ? (
                  <AlertCircle className="w-5 h-5" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
                {isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};