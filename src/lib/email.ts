// Mock email service - easily replaceable with real service

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<{ success: boolean; message: string }> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Mock validation
  if (!data.name || !data.email || !data.message) {
    return {
      success: false,
      message: 'Please fill in all required fields.'
    };
  }

  // Mock success/failure
  const success = Math.random() > 0.1; // 90% success rate

  if (success) {
    console.log('Mock email sent:', data);
    return {
      success: true,
      message: 'Thank you! Your message has been sent successfully.'
    };
  } else {
    return {
      success: false,
      message: 'Sorry, there was an error sending your message. Please try again.'
    };
  }
};

// To replace with real email service:
// 1. Install your preferred email service SDK (e.g., @sendgrid/mail, nodemailer, emailjs)
// 2. Replace the mock implementation above with actual API calls
// 3. Add any required environment variables
// 4. Update error handling as needed

// Example with EmailJS:
// import emailjs from '@emailjs/browser';
// 
// export const sendEmail = async (data: EmailData) => {
//   try {
//     await emailjs.send(
//       'YOUR_SERVICE_ID',
//       'YOUR_TEMPLATE_ID',
//       data,
//       'YOUR_PUBLIC_KEY'
//     );
//     return { success: true, message: 'Message sent successfully!' };
//   } catch (error) {
//     return { success: false, message: 'Failed to send message.' };
//   }
// };