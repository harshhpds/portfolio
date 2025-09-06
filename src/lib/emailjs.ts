import emailjs from '@emailjs/browser';

// EmailJS Configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_harsh_portfolio',
  TEMPLATE_ID_TO_HARSH: 'template_adchk9r',
  TEMPLATE_ID_AUTO_REPLY: 'template_t8fb8ft',
  PUBLIC_KEY: 'zEKg4PW-o_xm1P_LN'
};

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
};

// Send email to Harsh
const sendEmailToHarsh = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_email: 'harshabhang@gmail.com',
    reply_to: formData.email
  };

  return emailjs.send(
    EMAILJS_CONFIG.SERVICE_ID,
    EMAILJS_CONFIG.TEMPLATE_ID_TO_HARSH,
    templateParams,
    EMAILJS_CONFIG.PUBLIC_KEY
  );
};

// Send auto-reply to user
const sendAutoReplyToUser = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    to_email: formData.email
  };

  return emailjs.send(
    EMAILJS_CONFIG.SERVICE_ID,
    EMAILJS_CONFIG.TEMPLATE_ID_AUTO_REPLY,
    templateParams,
    EMAILJS_CONFIG.PUBLIC_KEY
  );
};

// Combined send function
export const sendEmail = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  try {
    // Send both emails simultaneously
    const [harshEmail, autoReply] = await Promise.all([
      sendEmailToHarsh(formData),
      sendAutoReplyToUser(formData)
    ]);

    return { harshEmail, autoReply };
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw error;
  }
};