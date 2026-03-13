import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
  const [activeTab, setActiveTab] = useState<'drone' | 'web'>('drone');

  const dronePlans = [
    { name: 'Starter Reel', price: '12,000', features: ['1-Min Edited Clip', 'Licensed BG Music', '1.5 Hours Fly Time', 'Standard Color Correction'] },
    { name: 'Cinematic Pro', price: '16,000', features: ['2-3 Min 4K Video', 'Pro Voiceover Included', '3 Hours Fly Time', 'Cinematic Grade (Log)'], popular: true },
    { name: 'Production', price: '22,000', features: ['5-Min UHD Master', 'Immersive Sound Design', '5 Hours Fly Time', '25KM Travel Included'] },
  ];

  const webPlans = [
    { name: 'Landing Page', price: '8,500', features: ['Single Page Design', 'Responsive Layout', 'Contact Form Integration', 'Basic SEO Setup'] },
    { name: 'Business Suite', price: '18,500', features: ['Up to 5 Pages', 'Custom UI/UX Design', 'CMS Integration', 'Advanced SEO Setup'], popular: true },
    { name: 'E-Commerce', price: '45,000', features: ['Full Online Store', 'Payment Gateway Integration', 'Inventory Management', 'Premium Performance Optimization'] },
  ];

  const currentPlans = activeTab === 'drone' ? dronePlans : webPlans;

  return (
    <section id="pricing" className="py-5 position-relative">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-2">Investment <span className="text-gradient">Plans</span></h2>
          <p className="text-secondary fs-5 mb-4">Straightforward pricing for exceptional production value.</p>

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

        <div className="row g-4 justify-content-center">
          <AnimatePresence mode="wait">
            {currentPlans.map((plan, idx) => (
              <motion.div
                key={`${activeTab}-${idx}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="col-lg-4"
              >
                <div className={`glass-card h-100 p-5 position-relative ${plan.popular ? 'border-accent' : ''}`}
                  style={{
                    border: plan.popular ? '2px solid var(--accent-purple)' : '1px solid var(--glass-border)',
                    background: plan.popular ? 'rgba(139, 92, 246, 0.12)' : 'var(--glass-bg)'
                  }}>
                  {plan.popular && (
                    <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill px-4 py-2"
                      style={{ background: 'var(--accent-purple)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', transform: 'translate(-50%, -50%)' }}>
                      MOST POPULAR
                    </span>
                  )}
                  <h3 className="fw-800 mb-2 mt-4 text-white">{plan.name}</h3>
                  <div className="d-flex align-items-baseline mb-5">
                    <span className="h4 text-secondary mb-0 fw-400">RS</span>
                    <span className="display-4 fw-800 mx-2 text-white">{plan.price}</span>
                  </div>

                  <div className="mb-5">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="mb-4 d-flex align-items-start">
                        <div className="bg-success bg-opacity-10 p-1 rounded-circle me-3" style={{ marginTop: '2px' }}>
                          <Check size={16} className="text-success" />
                        </div>
                        <span className="text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
