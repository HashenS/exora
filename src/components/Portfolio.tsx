import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    { title: 'Cinematic Reel 2024', type: 'Production', thumb: 'https://images.unsplash.com/photo-1473960104372-8af718532bb0?q=80&w=800&auto=format&fit=crop' },
    { title: 'Nexus UI Dashboard', type: 'Design', thumb: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=800&auto=format&fit=crop' },
    { title: 'Luxury Estate Tour', type: 'Production', thumb: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop' },
    { title: 'FitZone Global', type: 'Development', thumb: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section id="portfolio" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3">Creative <span className="text-gradient">Showcase</span></h2>
          <p className="text-secondary fs-5">A curation of high-impact digital and aerial projects.</p>
        </div>

        <div className="row g-4">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="col-md-6 col-lg-3"
            >
              <div className="glass-card overflow-hidden h-100 p-0 border-0 shadow-lg">
                <div className="ratio ratio-16x9 position-relative overflow-hidden group">
                  <img src={project.thumb} alt={project.title} className="object-fit-cover transition-transform duration-700 hover-scale-110" style={{ transition: 'transform 0.7s ease' }} />
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center opacity-0 hover-opacity-100 transition-opacity" style={{ background: 'rgba(8, 5, 17, 0.6)', backdropFilter: 'blur(4px)' }}>
                     <button className="btn btn-glass">View Project</button>
                  </div>
                </div>
                <div className="p-4 bg-surface" style={{ background: 'rgba(30, 20, 50, 0.3)' }}>
                  <span className="text-gradient small fw-700 mb-2 d-block text-uppercase letter-spacing-1">{project.type}</span>
                  <h5 className="fw-700 mb-0 text-white">{project.title}</h5>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
