import { useRef } from 'react';
import { motion } from 'framer-motion';
import ShinyText from './ShinyText';
import RippleGrid from './RippleGrid';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className="hero-section position-relative overflow-hidden pt-5 pb-4 py-lg-6" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      {/* Black Professional Background */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: -1, background: '#000000' }}>
        <RippleGrid
          enableRainbow={false}
          gridColor="#8b5cf6"
          rippleIntensity={0.06}
          gridSize={12}
          gridThickness={25}
          mouseInteraction={true}
          mouseInteractionRadius={1.8}
          opacity={0.6}
          interactiveTargetRef={sectionRef}
        />
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="display-2 fw-800 mb-3 text-white lh-sm">
                Elevate Your Digital <br />
                <span className="text-gradient">Perspective</span>
              </h1>
              <p className="lead fs-4 mb-4" style={{ maxWidth: '650px', color: '#cbd5e1', fontWeight: 400 }}>
                Bespoke <span className="text-white fw-600">Web Development</span> & Cinematic <span className="text-white fw-600">Drone Videography</span>. 
                Crafting premium digital experiences and aerial stories that captivate.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <button className="btn btn-gold px-5 py-3 shadow-lg">
                  Explore Packages
                </button>
                <button className="btn btn-glass px-5 py-3">
                  Let's Talk
                </button>
              </div>
            </motion.div>
          </div>

          <div className="col-lg-5 text-center text-lg-end mt-5 mt-lg-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="d-inline-block"
              style={{ background: 'transparent' }}
            >
              <ShinyText
                text="exora"
                speed={3}
                delay={0}
                color="#f8fafc"
                shineColor="#8b5cf6"
                spread={90}
                direction="left"
                yoyo={true}
                pauseOnHover={true}
                disabled={false}
                className="fw-900"
                style={{ 
                  fontFamily: '"Orbitron", sans-serif', 
                  fontSize: '8rem', 
                  letterSpacing: '0.05em',
                  textTransform: 'lowercase',
                  lineHeight: '1'
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
