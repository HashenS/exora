import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Youtube, Volume2, VolumeX } from 'lucide-react';

const ProjectCard = ({ project, activeTab, idx }: { project: any, activeTab: string, idx: number }) => {
  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const toggleMute = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      const func = isMuted ? 'unMute' : 'mute';
      iframeRef.current.contentWindow.postMessage(JSON.stringify({ event: 'command', func: func, args: [] }), '*');
      setIsMuted(!isMuted);
    }
  };

  const videoUrl = project.videoUrl ? `${project.videoUrl}&enablejsapi=1` : '';

  return (
    <motion.div
      key={`${activeTab}-${idx}`}
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="col-md-6 col-lg-4"
    >
      <div className="glass-card overflow-hidden h-100 p-0 border-0 shadow-lg d-flex flex-column position-relative">
        {project.videoUrl && (
          <button 
            onClick={toggleMute} 
            className="position-absolute top-0 end-0 m-3 btn btn-glass btn-sm rounded-circle p-2 d-flex align-items-center justify-content-center" 
            style={{ zIndex: 10, width: '36px', height: '36px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.2)' }}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <VolumeX size={16} className="text-white" /> : <Volume2 size={16} className="text-white" />}
          </button>
        )}
        {activeTab === 'web' ? (
          <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center p-4" style={{ background: 'rgba(0,0,0,0.4)', minHeight: '260px' }}>
            <div className="monitor-mockup group w-100" style={{ maxWidth: '320px' }}>
              <div className="ratio ratio-16x9 monitor-screen">
                {/* @ts-ignore */}
                <iframe
                  ref={iframeRef}
                  src={videoUrl}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ pointerEvents: 'none', width: '100%', height: '100%', top: 0, left: 0, position: 'absolute' }}
                ></iframe>
              </div>
            </div>
            <div className="monitor-stand"></div>
            <div className="monitor-base mb-2"></div>
          </div>
        ) : (
          <div className="ratio ratio-16x9 position-relative overflow-hidden group">
            {/* @ts-ignore */}
            {project.videoUrl ? (
              <iframe
                ref={iframeRef}
                src={videoUrl}
                title={project.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{ pointerEvents: 'none', width: '150%', height: '150%', top: '-25%', left: '-25%', position: 'absolute' }}
              ></iframe>
            ) : (
              <>
                <img src={project.thumb} alt={project.title} className="object-fit-cover transition-transform duration-700 hover-scale-110" style={{ transition: 'transform 0.7s ease' }} />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center opacity-0 hover-opacity-100 transition-opacity" style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(4px)' }}>
                  <button className="btn btn-glass">View Project</button>
                </div>
              </>
            )}
          </div>
        )}

        <div className="p-4 bg-surface mt-auto d-flex justify-content-between align-items-end" style={{ background: 'var(--bg-surface)' }}>
          <div>
            <span className="text-gradient small fw-700 mb-2 d-block text-uppercase letter-spacing-1">{project.type}</span>
            <h5 className="fw-700 mb-0 text-white">{project.title}</h5>
          </div>
          {/* @ts-ignore */}
          {project.externalLink && (
            <a 
              href={(project as any).externalLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-glass btn-sm rounded-pill px-3 py-2 fw-600 d-inline-flex align-items-center"
              style={{ fontSize: '0.85rem' }}
            >
              Visit Site <span className="ms-1" style={{ fontSize: '1.2em', lineHeight: 1 }}>↗</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState<'drone' | 'web'>('drone');

  const droneProjects = [
    {
      title: 'Mobile Shop Advertisement',
      type: 'Production',
      thumb: 'https://images.unsplash.com/photo-1473960104372-8af718532bb0?q=80&w=800&auto=format&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/crNN7G453ec?autoplay=1&mute=1&controls=0&loop=1&playlist=crNN7G453ec&modestbranding=1&start=3'
    },
    {
      title: 'Abans Advertisement',
      type: 'Production',
      thumb: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/oLZvu4wbwqI?autoplay=1&mute=1&controls=0&loop=1&playlist=oLZvu4wbwqI&modestbranding=1'
    },
    {
      title: 'Hotel Shans | Cinematic Aerial',
      type: 'Aerial Coverage',
      thumb: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/VkzxhiHaC_0?autoplay=1&mute=1&controls=0&loop=1&playlist=VkzxhiHaC_0&modestbranding=1'
    },

  ];

  const webProjects = [
    {
      title: 'Gym Website',
      type: 'Development',
      thumb: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=800&auto=format&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/VgfdvQLhV8g?autoplay=1&mute=1&controls=0&loop=1&playlist=VgfdvQLhV8g&modestbranding=1',
      externalLink: 'https://urbanfit-lanka.vercel.app'
    },
    {
      title: 'Portfolio Website',
      type: 'Development',
      thumb: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/MjSh741ScaQ?autoplay=1&mute=1&controls=0&loop=1&playlist=MjSh741ScaQ&modestbranding=1',
      externalLink: 'https://hashen.vercel.app'
    }
  ];

  const currentProjects = activeTab === 'drone' ? droneProjects : webProjects;

  return (
    <section id="portfolio" className="min-vh-100 d-flex align-items-center py-5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-3">Creative <span className="text-gradient">Showcase</span></h2>
            <p className="text-secondary fs-5 mb-4">A curation of high-impact digital and aerial projects.</p>

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
              {currentProjects.map((project, idx) => (
                <ProjectCard key={`${activeTab}-${idx}`} project={project} activeTab={activeTab} idx={idx} />
              ))}
            </AnimatePresence>
          </div>

          <div className="text-center mt-5">
            <motion.a
              href="https://www.youtube.com/@exora-i1o"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-glass px-5 py-3 d-inline-flex align-items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ borderRadius: '40px', border: '1px solid rgba(139, 92, 246, 0.3)' }}
            >
              <Youtube size={24} className="text-danger" />
              <span className="fw-600 text-white fs-5">Watch More on YouTube</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
