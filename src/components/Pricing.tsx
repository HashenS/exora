import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

const noteVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: 0.4 },
  },
  exit: {
    opacity: 0,
    y: 15,
    transition: { duration: 0.2 },
  },
};

const Pricing = () => {
  const [activeTab, setActiveTab] = useState<"drone" | "web">("drone");

  const dronePlans = [
    {
      name: "Starter Reel",
      price: "8,000",
      features: [
        "30sec Edited Clip",
        "Basic Sound Editing",
        "45min Fly Time (1 Battery)",
        "Standard Color Correction",
      ],
    },
    {
      name: "Cinematic Pro",
      price: "19,500",
      features: [
        "30-60sec 4K Video",
        "Pro Voiceover Included",
        "1.5 Hours Fly Time (2 Batteries)", 
        "Cinematic Grade",
      ],
      popular: true,
    },
    {
      name: "Production",
      price: "35,000",
      features: [
        "1-3 Mins 4K Video",
        "Immersive Sound Design",
        "2 Hours Fly Time (3 Batteries)",
        "Cinematic Grade",
        "Premium Color Grading",
      ],
    },
  ];

  const webPlans = [
    {
      name: "Basic",
      price: "From 10,000 ($30)",
      desc: "A simple landing page with 5 sections that is fully responsive and completely functional.",
      features: [
        { text: "Functional website", included: true },
        { text: "1 page", included: true },
        { text: "E-commerce functionality", included: false },
        { text: "Payment Integration", included: true },
        { text: "Opt-in form", included: false },
        { text: "Speed optimization", included: false },
        { text: "Hosting setup", included: true },
        { text: "Social media icons", included: true },
      ],
    },
    {
      name: "Standard",
      price: "From 60,000 (~$180)",
      desc: "Ideal for multi-page business platforms requiring content management and advanced integrations.",
      popular: true,
      features: [
        { text: "Functional website", included: true },
        { text: "Up to 5 pages", included: true },
        { text: "E-commerce functionality", included: true },
        { text: "Payment Integration", included: true },
        { text: "Opt-in form", included: false },
        { text: "Speed optimization", included: false },
        { text: "Hosting setup", included: true },
        { text: "Social media icons", included: true },
      ],
    },
    {
      name: "Premium",
      price: "From 160,000 (~$482)",
      desc: "Built for businesses needing high-security, custom payment flows, and scalable architecture.",
      features: [
        { text: "Functional website", included: true },
        { text: "Up to 8 pages", included: true },
        { text: "E-commerce functionality", included: true },
        { text: "Payment Integration", included: true },
        { text: "Opt-in form", included: true },
        { text: "Speed optimization", included: true },
        { text: "Hosting setup", included: true },
        { text: "Social media icons", included: true },
      ],
    },
  ];

  const currentPlans = activeTab === "drone" ? dronePlans : webPlans;

  return (
    <section
      id="pricing"
      className="py-5 position-relative"
      style={{ paddingTop: "140px", paddingBottom: "120px" }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-2 ">
              Investment <span className="text-gradient">Plans</span>
            </h2>
            <p className="text-secondary fs-5 mb-4">
              Straightforward pricing for exceptional production value.
            </p>

            <div
              className="d-inline-flex p-2 glass-card mb-4"
              style={{
                borderRadius: "40px",
                background: "var(--bg-surface-2)",
              }}
            >
              <button
                onClick={() => setActiveTab("drone")}
                className={`btn px-4 py-2 border-0 ${activeTab === "drone" ? "text-white shadow-sm" : "text-muted"}`}
                style={{
                  borderRadius: "32px",
                  transition: "all 0.3s ease",
                  background:
                    activeTab === "drone"
                      ? "var(--accent-purple)"
                      : "transparent",
                  fontWeight: 600,
                }}
              >
                Drone Services
              </button>
              <button
                onClick={() => setActiveTab("web")}
                className={`btn px-4 py-2 border-0 ${activeTab === "web" ? "text-white shadow-sm" : "text-muted"}`}
                style={{
                  borderRadius: "32px",
                  transition: "all 0.3s ease",
                  background:
                    activeTab === "web"
                      ? "var(--accent-purple)"
                      : "transparent",
                  fontWeight: 600,
                }}
              >
                Web Solutions
              </button>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            <AnimatePresence mode="wait">
              {currentPlans.map((plan: any, idx) => (
                <motion.div
                  key={`${activeTab}-${idx}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="col-lg-4"
                >
                  <div
                    className={`glass-card h-100 p-4 relative ${plan.popular ? "border-accent" : ""}`}
                    style={{
                      border: plan.popular
                        ? "2px solid var(--accent-purple)"
                        : "1px solid var(--glass-border)",
                      background: plan.popular
                        ? "rgba(139, 92, 246, 0.12)"
                        : "var(--glass-bg)",
                    }}
                  >
                    {plan.popular && (
                      <span
                        className="position-absolute top-0 start-50 translate-middle badge rounded-pill px-4 py-2"
                        style={{
                          background: "var(--accent-purple)",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        MOST POPULAR
                      </span>
                    )}
                    <h2 className="fw-800 mb-2 mt-4 text-white fs-4 ">
                      {plan.name}
                    </h2>
                    <div className="mb-4">
                      <div className="d-flex align-items-baseline">
                        <span className="h5 text-secondary mb-0 fw-normal">
                          LKR
                        </span>
                        <span
                          className={`${plan.price.includes("–") || plan.price.includes("-") ? "fs-4" : "fs-2"} fw-bold ms-2 text-white text-nowrap`}
                        >
                          {plan.price.includes("(")
                            ? plan.price.split(" (")[0]
                            : plan.price}
                        </span>
                      </div>
                      {plan.price.includes("(") && (
                        <div className="text-secondary small mt-1">
                          {plan.price.substring(plan.price.indexOf("("))}
                        </div>
                      )}
                    </div>
                    {plan.desc && (
                      <p
                        className="text-secondary small mb-4 mt-2 lh-relaxed text-start"
                        style={{ minHeight: "50px" }}
                      >
                        {plan.desc}
                      </p>
                    )}

                    {plan.desc && (
                      <h4 className="fs-6 fw-bold text-white mb-3 mt-4 text-start">
                        What's Included
                      </h4>
                    )}

                    <div className="mb-5">
                      {plan.features.map((feature: any, i: number) => {
                        const isObject =
                          typeof feature === "object" && feature !== null;
                        const text = isObject ? feature.text : feature;
                        const included = isObject ? feature.included : true;

                        return (
                          <div
                            key={i}
                            className={`mb-3 d-flex align-items-center ${!included ? "opacity-35" : ""}`}
                          >
                            <div
                              className="me-3 d-flex align-items-center"
                              style={{
                                color: included
                                  ? "var(--accent-purple, #8b5cf6)"
                                  : "var(--text-muted, #6c757d)",
                              }}
                            >
                              <Check size={16} strokeWidth={included ? 3 : 2} />
                            </div>
                            <span
                              className="small"
                              style={{
                                color: included
                                  ? "rgba(255, 255, 255, 0.85)"
                                  : "rgba(255, 255, 255, 0.4)",
                              }}
                            >
                              {text}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <AnimatePresence>
            {activeTab === "web" && (
              <motion.div
                variants={noteVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-center mt-5"
              >
                <p className="text-secondary opacity-75 small">
                  * Note: Web package pricing scales dynamically based on your
                  custom requirements, feature list, and integrations. Contact us
                  for a personalized, exact quote.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
