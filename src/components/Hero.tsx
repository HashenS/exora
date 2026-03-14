import { motion } from 'framer-motion';
import ShinyText from './ShinyText';
import ColorBends from './ColorBends';

const Hero = () => {
  return (
    <section className="hero-section position-relative overflow-hidden d-flex align-items-center" style={{ minHeight: '100vh' }}>
      {/* ColorBends Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, background: '#000' }}>
        <ColorBends
          colors={["#5227FF", "#f000e8", "#666bff"]}
          rotation={45}
          speed={0.2}
          scale={0.6}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          parallax={0.5}
          noise={0.05}
          transparent={true}
          autoRotate={0}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        />
        {/* Vignette overlay for text readability */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.5) 100%)' }} />
        {/* Bottom fade — blends hero into next section */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '180px', background: 'linear-gradient(to bottom, transparent, #000000)', pointerEvents: 'none' }} />
      </div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
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
                Bespoke <span className="text-white fw-600">Web Development</span> &amp; Cinematic <span className="text-white fw-600">Drone Videography</span>.{' '}
                Crafting premium digital experiences and aerial stories that captivate.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <button className="btn btn-purple px-5 py-3 shadow-lg">
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
