import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Youtube, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const socials = [
    { icon: <Mail />, label: 'Email Us', link: 'mailto:dev.exora@gmail.com', desc: 'Queries & Bookings' },
    { icon: <Phone />, label: 'Call Now', link: 'tel:+94701595851', desc: '+94 70 159 5851' },
    { icon: <MessageCircle />, label: 'WhatsApp', link: 'https://wa.me/94701595851', desc: 'Chat with us' },
    { icon: <Youtube />, label: 'YouTube', link: 'https://www.youtube.com/@exora-i1o', desc: '@exora.studio' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: "edba4316-7a97-4803-a599-4ec427cdf0bf",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: "Exora Portfolio"
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error("Submission failed:", result);
        setStatus('idle');
        alert("Something went wrong. Please try again or use direct email.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('idle');
      alert("Something went wrong. Please try again or use direct email.");
    }
    
    // Reset success message after 5 seconds
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="min-vh-100 d-flex align-items-center py-5 position-relative">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="display-4 fw-bold mb-3">Start Your <br /><span className="text-gradient">Journey</span></h2>
              <p className="text-secondary fs-5 mb-4">
                Ready to transform your vision into cinematic reality or digital excellence? Let's build something exceptional together.
              </p>

              <div className="row g-4">
                {socials.map((social, idx) => (
                  <div key={idx} className="col-12">
                    <a href={social.link} className="glass-card p-3 p-xl-4 d-flex align-items-center text-decoration-none hover-lift w-100">
                      <div className="bg-purple bg-opacity-10 p-3 rounded-circle me-4 text-gradient">
                        {social.icon}
                      </div>
                      <div>
                        <div className="text-white fw-700 mb-0">{social.label}</div>
                        <div className="text-secondary small">{social.desc}</div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="col-lg-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-5 overflow-hidden"
              style={{ background: 'var(--bg-surface)', minHeight: '400px' }}
            >
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="h-100 d-flex flex-column align-items-center justify-content-center text-center py-5"
                  >
                    <CheckCircle2 size={80} className="text-success mb-4" />
                    <h3 className="text-white fw-bold mb-2">Message Received!</h3>
                    <p className="text-secondary">We'll get back to you within 24 hours. Stay cinematic.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="form-floating mb-0">
                          <input 
                            type="text" 
                            className="form-control bg-transparent text-white border-0 border-bottom rounded-0 px-0" 
                            id="name" 
                            placeholder="John Doe" 
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            style={{ borderBottom: '1px solid var(--glass-border) !important' }} 
                          />
                          <label htmlFor="name" className="text-secondary small px-0">Full Name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating mb-0">
                          <input 
                            type="email" 
                            className="form-control bg-transparent text-white border-0 border-bottom rounded-0 px-0" 
                            id="email" 
                            placeholder="name@example.com" 
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            style={{ borderBottom: '1px solid var(--glass-border) !important' }} 
                          />
                          <label htmlFor="email" className="text-secondary small px-0">Email Address</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-4">
                          <textarea 
                            className="form-control bg-transparent text-white border-0 border-bottom rounded-0 px-0" 
                            id="message" 
                            placeholder="Your Message" 
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            style={{ height: '150px', borderBottom: '1px solid var(--glass-border) !important' }}
                          ></textarea>
                          <label htmlFor="message" className="text-secondary small px-0">Brief Project Overview</label>
                        </div>
                      </div>
                    </div>
                    <button 
                      type="submit" 
                      disabled={status === 'submitting'}
                      className="btn btn-purple btn-lg w-100 py-3 mt-2 shadow-lg d-flex align-items-center justify-content-center gap-2"
                    >
                      {status === 'submitting' ? (
                        <>
                          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                          Processing...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
