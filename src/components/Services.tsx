import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Code, Cpu, Globe, Layers, Zap } from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState<'drone' | 'web'>('drone');

  const droneServices = [
    { icon: <Camera />, title: 'Aerial Photography', desc: 'Stunning high-resolution imagery tailored for real estate, commercial, and creative projects.' },
    { icon: <Zap />, title: 'Cinematic Edits', desc: 'Dynamic post-production with immersive sound design for high-impact social media content.' },
    { icon: <Layers />, title: 'Event Coverage', desc: 'Capturing the scale and emotion of your special moments from breathtaking aerial perspectives.' },
    { icon: <Globe />, title: 'Site Inspection', desc: 'Detailed and secure aerial assessments for construction, agriculture, and infrastructure projects.' },
  ];

  const webServices = [
    { icon: <Code />, title: 'Custom Development', desc: 'Building high-performance, scalable web applications with the latest modern technologies.' },
    { icon: <Layers />, title: 'Premium UI/UX', desc: 'Meticulously crafted user interfaces that balance aesthetic beauty with functional excellence.' },
    { icon: <Globe />, title: 'Digital Strategy', desc: 'Comprehensive SEO and brand positioning to maximize your organic growth and visibility.' },
    { icon: <Cpu />, title: 'Web Maintenance', desc: 'Ensuring your digital presence remains secure, updated, and optimized for peak performance.' },
  ];

  const currentServices = activeTab === 'drone' ? droneServices : webServices;

  return (
    <section id="services" className="py-5 position-relative">
      <div className="container">
        <div className="text-center mb-5">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="display-4 fw-bold mb-3"
          >
            Digital <span className="text-gradient">Excellence</span>
          </motion.h2>
          
          <div className="d-inline-flex p-2 glass-card mb-4" style={{ borderRadius: '40px', background: 'rgba(30, 20, 50, 0.6)' }}>
            <button 
              onClick={() => setActiveTab('drone')}
              className={`btn px-4 py-2 border-0 ${activeTab === 'drone' ? 'text-white shadow-sm' : 'text-muted'}`}
              style={{ 
                borderRadius: '32px', 
                transition: 'all 0.3s ease',
                background: activeTab === 'drone' ? 'var(--accent-purple)' : 'transparent',
                fontWeight: 600
              }}
            >
              Drone Services
            </button>
            <button 
              onClick={() => setActiveTab('web')}
              className={`btn px-4 py-2 border-0 ${activeTab === 'web' ? 'text-white shadow-sm' : 'text-muted'}`}
              style={{ 
                borderRadius: '32px', 
                transition: 'all 0.3s ease',
                background: activeTab === 'web' ? 'var(--accent-purple)' : 'transparent',
                fontWeight: 600
              }}
            >
              Web Solutions
            </button>
          </div>
        </div>

        <div className="row g-4">
          <AnimatePresence mode="wait">
            {currentServices.map((service, idx) => (
              <motion.div 
                key={`${activeTab}-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="col-md-6 col-lg-3"
              >
                <div className="glass-card h-100 p-4 p-xl-5 text-center hover-lift">
                  <div className="mb-4 text-gradient d-inline-block" style={{ fontSize: '2.5rem' }}>
                    {service.icon}
                  </div>
                  <h4 className="fw-bold mb-3 text-white">{service.title}</h4>
                  <p className="text-secondary small mb-0 lh-lg">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Services;
