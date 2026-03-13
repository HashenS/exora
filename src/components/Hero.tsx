import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero-section position-relative overflow-hidden pt-5 pb-4 py-lg-6" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      {/* Dynamic Purple Background */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: -1, background: 'radial-gradient(circle at 70% 30%, #2e1065 0%, #0c0a09 100%)' }}>
        <div className="position-absolute w-100 h-100" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238b5cf6' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.3 
        }}></div>
        <div className="position-absolute bottom-0 start-0 w-100 h-50" style={{ background: 'linear-gradient(to top, #080511 0%, transparent 100%)' }}></div>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
