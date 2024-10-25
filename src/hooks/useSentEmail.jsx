import emailjs from "@emailjs/browser";

const useSentEmail = () => {
  const sendEmail = async(emailData) => {
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;



    console.log("Service ID: ", serviceId);
    console.log("Template ID: ", templateId);
    console.log("Public Key: ", publicKey);

    const templateParams = { gmail: emailData.gmail , to_name: "Maia"};

    return emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response);
        return true;  
      })
      .catch((error) => {
        console.log('FAILED...', error);
        return false;  
      });
  };

  return { sendEmail };
};

export default useSentEmail;

