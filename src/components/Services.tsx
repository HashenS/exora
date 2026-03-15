import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Code, Cpu, Globe, Layers, Zap } from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState<'drone' | 'web'>('drone');

  const droneServices = [
    { icon: <Camera />, image: '/Aerial Photography.webp', title: 'Aerial Photography', desc: 'Stunning high-resolution imagery tailored for real estate, commercial, and creative projects.' },
    { icon: <Zap />, image: '/Cinamatic edit.webp', title: 'Cinematic Edits', desc: 'Dynamic post-production with immersive sound design for high-impact social media content.' },
    { icon: <Layers />, image: '/DJI_20251021093347_0038_D.webp', title: 'Event Coverage', desc: 'Capturing the scale and emotion of your special moments from breathtaking aerial perspectives.' },
    { icon: <Globe />, image: '/Custom orders.webp', title: 'Custom Orders', desc: 'Have a unique idea? I accept custom drone projects tailored to your specific needs.' },
  ];

  const webServices = [
    { icon: <Code />, image: '/web_dev_custom_development_1773416151517.webp', title: 'Custom Development', desc: 'Building high-performance, scalable web applications with the latest modern technologies.' },
    { icon: <Layers />, image: '/web_dev_premium_ui_ux_1773416194482.webp', title: 'Premium UI/UX', desc: 'Meticulously crafted user interfaces that balance aesthetic beauty with functional excellence.' },
    { icon: <Globe />, image: '/web_dev_digital_strategy_1773416247412.webp', title: 'Digital Strategy', desc: 'Comprehensive SEO and brand positioning to maximize your organic growth and visibility.' },
    { icon: <Cpu />, image: '/web_dev_maintenance_1773416501402.webp', title: 'Web Maintenance', desc: 'Ensuring your digital presence remains secure, updated, and optimized for peak performance.' },
  ];


  const currentServices = activeTab === 'drone' ? droneServices : webServices;

  return (
    <section id="services" className="min-vh-100 d-flex align-items-center py-5 position-relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-3">
              Digital <span className="text-gradient">Excellence</span>
            </h2>

            <div className="d-inline-flex p-2 glass-card mb-4" style={{ borderRadius: '40px', background: 'var(--bg-surface-2)' }}>
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
                  <div
                    className="glass-card h-100 p-4 p-xl-5 text-center hover-lift hover-zoom-container position-relative overflow-hidden d-flex flex-column justify-content-center"
                    style={{ minHeight: '320px' }}
                  >
                    {service.image && (
                      <>
                        <img
                          src={service.image}
                          alt={service.title}
                          className="hover-zoom-image position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                          style={{
                            zIndex: 0,
                            transition: 'transform 0.5s ease'
                          }}
                          loading="lazy"
                        />
                        <div
                          className="position-absolute top-0 start-0 w-100 h-100"
                          style={{
                            background: 'rgba(10, 10, 15, 0.75)',
                            backdropFilter: 'blur(3px)',
                            zIndex: 1,
                            transition: 'background 0.3s ease'
                          }}
                        ></div>
                      </>
                    )}
                    <div className="position-relative" style={{ zIndex: 2 }}>
                      {!service.image && (
                        <div className="mb-4 text-gradient d-inline-block" style={{ fontSize: '2.5rem' }}>
                          {service.icon}
                        </div>
                      )}
                      <h4 className="fw-bold mb-3 text-white">{service.title}</h4>
                      <p className="text-secondary small mb-0 lh-lg">{service.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
