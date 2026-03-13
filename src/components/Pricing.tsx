import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
  const dronePlans = [
    { name: 'Starter Reel', price: '12,000', features: ['1-Min Edited Clip', 'Licensed BG Music', '1.5 Hours Fly Time', 'Standard Color Correction'] },
    { name: 'Cinematic Pro', price: '16,000', features: ['2-3 Min 4K Video', 'Pro Voiceover Included', '3 Hours Fly Time', 'Cinematic Grade (Log)'], popular: true },
    { name: 'Production', price: '22,000', features: ['5-Min UHD Master', 'Immersive Sound Design', '5 Hours Fly Time', '25KM Travel Included'] },
  ];

  return (
    <section id="pricing" className="py-5 position-relative">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-2">Investment <span className="text-gradient">Plans</span></h2>
          <p className="text-secondary fs-5">Straightforward pricing for exceptional production value.</p>
        </div>

        <div className="row g-4 justify-content-center">
          {dronePlans.map((plan, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="col-lg-4"
            >
              <div className={`glass-card h-100 p-5 position-relative ${plan.popular ? 'border-accent' : ''}`} 
                   style={{ 
                     border: plan.popular ? '2px solid var(--accent-purple)' : '1px solid var(--glass-border)',
                     background: plan.popular ? 'rgba(139, 92, 246, 0.08)' : 'var(--glass-bg)'
                   }}>
                {plan.popular && (
                  <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-purple px-4 py-2 mt-2" 
                        style={{ background: 'var(--accent-purple)', fontSize: '0.8rem', letterSpacing: '0.05em' }}>
                    MOST POPULAR
                  </span>
                )}
                <h3 className="fw-800 mb-2 mt-2 text-white">{plan.name}</h3>
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
                
                <button className={`btn w-100 py-3 ${plan.popular ? 'btn-gold shadow-lg' : 'btn-glass'}`} style={{ borderRadius: '16px' }}>
                  Choose Plan
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
