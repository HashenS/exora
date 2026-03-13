import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="navbar navbar-expand-lg fixed-top"
      style={{
        background: 'rgba(8, 5, 17, 0.6)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(139, 92, 246, 0.1)',
        padding: '1.2rem 0'
      }}
    >
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <span className="fw-800 text-white" style={{ letterSpacing: '2px', fontSize: '1.5rem' }}>
            EXO<span className="text-gradient">RA</span>
          </span>
        </a>
        <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1) hue-rotate(250deg)' }}></span>
        </button>
        <div id="nav" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {['Services', 'Pricing', 'Portfolio', 'Contact'].map((item) => (
              <li className="nav-item" key={item}>
                <a className="nav-link text-white-50 px-3 fs-6 hover-text-vibrant" href={`#${item.toLowerCase()}`} style={{ fontWeight: 500, transition: 'all 0.3s' }}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
