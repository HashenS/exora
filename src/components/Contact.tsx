import { motion } from 'framer-motion';
import { Mail, Phone, Youtube, Github } from 'lucide-react';

const Contact = () => {
  const socials = [
    { icon: <Mail />, label: 'Email Us', link: 'mailto:dev.exora@gmail.com', desc: 'Queries & Bookings' },
    { icon: <Phone />, label: 'Call Now', link: 'tel:+94701595851', desc: '+94 70 159 5851' },
    { icon: <Youtube />, label: 'YouTube', link: 'https://youtube.com', desc: '@exora.studio' },
    { icon: <Github />, label: 'Exora Dev', link: 'https://github.com/exora-dev', desc: 'Source Code' },
  ];

  return (
    <section id="contact" className="py-5 position-relative">
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
               className="glass-card p-5"
               style={{ background: 'var(--bg-surface)' }}
             >
                <form>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="form-floating mb-0">
                        <input type="text" className="form-control bg-transparent text-white border-0 border-bottom rounded-0 px-0" id="name" placeholder="John Doe" style={{ borderBottom: '1px solid var(--glass-border) !important' }} />
                        <label htmlFor="name" className="text-secondary small px-0">Full Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating mb-0">
                        <input type="email" className="form-control bg-transparent text-white border-0 border-bottom rounded-0 px-0" id="email" placeholder="name@example.com" style={{ borderBottom: '1px solid var(--glass-border) !important' }} />
                        <label htmlFor="email" className="text-secondary small px-0">Email Address</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating mb-4">
                        <textarea className="form-control bg-transparent text-white border-0 border-bottom rounded-0 px-0" id="message" placeholder="Your Message" style={{ height: '150px', borderBottom: '1px solid var(--glass-border) !important' }}></textarea>
                        <label htmlFor="message" className="text-secondary small px-0">Brief Project Overview</label>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-gold btn-lg w-100 py-3 mt-2 shadow-lg">Send Message</button>
                </form>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
