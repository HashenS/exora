const Footer = () => {
  return (
    <footer className="py-4 mt-4" style={{ background: '#000000', borderTop: '1px solid rgba(139, 92, 246, 0.15)' }}>
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <img
              src="/Logo Transparent.webp"
              alt="Exora Logo"
              style={{ height: '40px', width: 'auto', marginBottom: '1.5rem' }}
            />
            <p className="text-muted small mb-0 lh-lg" style={{ maxWidth: '300px' }}>
              Premium digital experiences and cinematic aerial stories crafted with precision in Sri Lanka.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-4 mb-3">
              {['Services', 'Pricing', 'Portfolio', 'Contact'].map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-secondary text-decoration-none small hover-text-white transition-all">
                  {link}
                </a>
              ))}
            </div>
            <div className="text-muted small">
              © 2026 Exora Studio. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
