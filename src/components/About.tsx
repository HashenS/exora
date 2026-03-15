import { motion } from 'framer-motion';
import ProfileCard from './ProfileCard';

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-black">
      {/* Clean Background */}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="display-4 fw-bold text-white mb-3">
            About <span className="text-gradient">Us</span>
          </h2>
        </motion.div>

        <div className="row align-items-center g-5">

          {/* Left Side: Biography (Editorial Style) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="col-md-7 text-start"
          >
            <div className="mb-4 mb-lg-5">
              <p className="fs-5 text-slate-300 font-extralight leading-relaxed max-w-2xl text-start">
                Exora was built on a simple idea: technology and creativity should work together to create unforgettable digital experiences.
                <br /><br />
                At Exora, we specialize in modern <span className="text-gradient">web development </span>and <span className="text-gradient">aerial cinematography</span>, combining technical precision with cinematic storytelling to help brands present themselves in a powerful and visually striking way.
              </p>
            </div>

            <div className="relative group mb-4 mb-lg-5">
              {/* Premium Bio Module */}
              <div className="relative z-10 p-1 bg-gradient-to-br from-purple-500/20 to-transparent rounded-3xl overflow-hidden backdrop-blur-3xl shadow-2xl">
                <div className="bg-slate-950/90 rounded-[22px] p-8 lg:p-14 relative overflow-hidden text-start">
                  {/* Decorative mesh */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl pointer-events-none" />

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-6 mb-8 lg:mb-10">
                    <div>
                      <h3 className="fw-bold text-white mb-1" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}> <span className="text-gradient">Hashen Shehara </span></h3>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-[1px] bg-purple-500" />
                        <span className="text-purple-400 fw-bold underline-none text-uppercase tracking-widest" style={{ fontSize: '0.7rem' }}>Founder & Creative Lead</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <span className="absolute -left-6 lg:-left-8 -top-8 lg:-top-12 text-7xl lg:text-[10rem] text-purple-600/5 select-none font-serif leading-none"></span>
                    <p className="fs-5 text-slate-200 fw-light fst-italic leading-loose relative z-10">
                      "We don’t just build websites or capture footage; we craft digital experiences that connect technology with cinematic creativity."
                    </p>
                    <p className="fs-5 text-slate-500 leading-relaxed max-w-lg border-start border-2 border-slate-900 ps-4 ms-2">
                      By merging high-end software development with aerial visual storytelling, Exora delivers digital products and visuals that are both innovative and impactful.
                    </p>
                  </div>
                </div>
              </div>
            </div>


          </motion.div>

          {/* Right Side: Profile Card (The Hero Component) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="col-md-5 d-flex justify-content-center justify-content-md-end py-5"
          >
            <div className="relative group">
              <div className="relative z-10 transform hover:scale-[1.02] transition-transform duration-700 ease-out">
                <ProfileCard
                  name="Hashen S."
                  title="Founder & Creative Lead"
                  handle="hashen"
                  status="Online"
                  contactText="Inquiry"
                  avatarUrl="/assets/avatar.jpg"
                  showUserInfo
                  enableTilt={true}
                  enableMobileTilt
                  onContactClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  behindGlowColor="rgba(168, 85, 247, 0.2)"
                  iconUrl="/assets/iconpattern.png"
                  behindGlowEnabled={false}
                  innerGradient="linear-gradient(135deg, rgba(10, 5, 25, 0.95) 0%, rgba(88, 28, 135, 0.3) 100%)"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div >
    </section >
  );
}
