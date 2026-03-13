const Footer = () => {
  return (
    <footer className="py-4 mt-4" style={{ background: '#000000', borderTop: '1px solid rgba(139, 92, 246, 0.15)' }}>
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-md-4 text-center text-md-start">
            <span className="fw-800 h3 text-white">EXO<span className="text-gradient">RA</span></span>
            <p className="text-muted small mb-0 mt-3 lh-lg" style={{ maxWidth: '300px' }}>
              Premium digital experiences and cinematic aerial stories crafted with precision in Sri Lanka.
            </p>
          </div>
          <div className="col-md-4 text-center">
             <div className="d-flex justify-content-center gap-4">
                {['Services', 'Pricing', 'Portfolio', 'Contact'].map(link => (
                  <a key={link} href={`#${link.toLowerCase()}`} className="text-secondary text-decoration-none small hover-text-white transition-all">
                    {link}
                  </a>
                ))}
             </div>
             <div className="mt-4 text-muted small">
                © 2026 Exora Studio. All rights reserved.
             </div>
          </div>
          <div className="col-md-4 text-center text-md-end">
            <div className="text-white small fw-600 mb-3">Built with React & Vite</div>
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
               <a href="#" className="glass-card p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', borderRadius: '10px' }}>
                  <i className="bi bi-github text-white"></i>
               </a>
               <a href="#" className="glass-card p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', borderRadius: '10px' }}>
                  <i className="bi bi-youtube text-white"></i>
               </a>
               <a href="#" className="glass-card p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', borderRadius: '10px' }}>
                  <i className="bi bi-linkedin text-white"></i>
               </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
