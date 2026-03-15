import { motion } from 'framer-motion';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = '94701595851';
  const message = 'Hello Exora! I am interested in your services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Chat on WhatsApp"
    >
      <div className="whatsapp-btn">
        <img 
          src="/WhatApp Icon.png" 
          alt="WhatsApp" 
          style={{ width: '38px', height: '38px', objectFit: 'contain' }} 
        />
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
