import emailjs from "@emailjs/browser";

// Initialize EmailJS with your public key
emailjs.init("dDqUdU12oA25wL-w6");

// Get current date and time in UTC
const getCurrentDateTime = () => {
  const now = new Date();
  const year = now.getUTCFullYear();
  const month = String(now.getUTCMonth() + 1).padStart(2, '0');
  const day = String(now.getUTCDate()).padStart(2, '0');
  const hours = String(now.getUTCHours()).padStart(2, '0');
  const minutes = String(now.getUTCMinutes()).padStart(2, '0');
  const seconds = String(now.getUTCSeconds()).padStart(2, '0');
  
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

const mail = ({ name, email, message }) =>
  emailjs.send(
    "service_5xbe9wn",
    "template_r53o0q6",
    {
      to_email: "shubhamdalvi775@gmail.com",  // 🔹 Your email
      from_name: name,                         // 🔹 Sender name
      from_email: email,                       // 🔹 Sender email
      message: message,                        // 🔹 Message content
      reply_to: email,                         // 🔹 Reply to sender
      submitted_date: getCurrentDateTime(),    // 🔹 Current date/time (UTC)
      user_login: "Shubham23593",              // 🔹 Your username
    }
  );

export default mail;