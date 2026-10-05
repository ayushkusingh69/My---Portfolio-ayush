import { motion } from "framer-motion";
import {
  FaJava,
  FaGitAlt,
  FaChartBar,
  FaRobot,
  FaCertificate,
  FaArrowRight,
} from "react-icons/fa";

function Certifications() {
  const certifications = [
    {
      title: "Java & Data Structures and Algorithms",
      issuer: "Certification",
      icon: <FaJava />,
    },
    {
      title: "Git & GitHub — Version Control",
      issuer: "Certification",
      icon: <FaGitAlt />,
    },
    {
      title: "Power BI — Data Visualization & Business Intelligence",
      issuer: "Certification",
      icon: <FaChartBar />,
    },
    {
      title: "Generative AI Masterclass",
      issuer: "Certification",
      icon: <FaRobot />,
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#0B0D0F] text-[#F5F3EE] px-6 py-24 overflow-hidden">

      {/* Background Atmosphere */}
      <div className="absolute w-96 h-96 bg-emerald-500/[0.06] blur-[120px] rounded-full top-0 left-[-120px]" />

      <div className="absolute w-96 h-96 bg-amber-400/[0.04] blur-[120px] rounded-full bottom-0 right-[-120px]" />

      {/* Subtle Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.025]
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:50px_50px]
        "
      />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center mb-16"
      >
        <p className="text-emerald-400 uppercase tracking-[0.25em] text-xs sm:text-sm font-medium mb-4">
          Learning & Development
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F3EE]">
          Certifications
        </h1>

        <div className="w-16 h-[2px] bg-emerald-400 mx-auto mt-5 rounded-full" />

        <p className="text-[#8F9491] text-base md:text-lg max-w-2xl mx-auto mt-5 leading-7">
          Certifications and additional learning that support my technical
          skills and development journey.
        </p>
      </motion.div>

      {/* Certification Grid */}
      <div className="relative z-10 max-w-5xl mx-auto grid sm:grid-cols-2 gap-6">

        {certifications.map((certification, index) => (
          <motion.div
            key={certification.title}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -8,
            }}
            className="
              group
              relative
              bg-[#111417]/90
              backdrop-blur-xl
              border
              border-white/[0.08]
              rounded-[28px]
              p-6
              md:p-7
              overflow-hidden
              hover:border-emerald-400/30
              hover:shadow-[0_20px_60px_rgba(16,185,129,0.07)]
              transition-all
              duration-500
            "
          >

            {/* Top Accent */}
            <div
              className="
                absolute
                top-0
                left-0
                right-0
                h-[2px]
                bg-gradient-to-r
                from-emerald-400
                via-emerald-300
                to-transparent
                opacity-60
                group-hover:opacity-100
                transition-opacity
                duration-300
              "
            />

            {/* Icon */}
            <motion.div
              whileHover={{
                scale: 1.08,
                rotate: 3,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              className="
                w-14
                h-14
                rounded-2xl
                bg-emerald-400/[0.08]
                border
                border-emerald-400/20
                flex
                items-center
                justify-center
                text-2xl
                text-emerald-400
                mb-6
                shadow-[0_0_25px_rgba(16,185,129,0.05)]
              "
            >
              {certification.icon}
            </motion.div>

            {/* Content */}
            <div className="flex items-start gap-3">

              <div
                className="
                  w-8
                  h-8
                  rounded-lg
                  bg-emerald-400/[0.07]
                  flex
                  items-center
                  justify-center
                  shrink-0
                  mt-1
                "
              >
                <FaCertificate className="text-emerald-400 text-sm" />
              </div>

              <div>
                <h2
                  className="
                    text-xl
                    md:text-2xl
                    font-bold
                    text-[#F5F3EE]
                    leading-snug
                    group-hover:text-emerald-300
                    transition-colors
                    duration-300
                  "
                >
                  {certification.title}
                </h2>

                <p className="text-[#737976] text-sm mt-3">
                  {certification.issuer}
                </p>
              </div>

            </div>

            {/* Bottom */}
            <div className="mt-7 pt-5 border-t border-white/[0.06] flex items-center justify-between">

              <span className="text-[11px] uppercase tracking-[0.18em] text-[#5F6562]">
                Professional Learning
              </span>

              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-emerald-400"
              >
                <FaArrowRight size={13} />
              </motion.div>

            </div>

          </motion.div>
        ))}

      </div>

      {/* Bottom Note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="
          relative
          z-10
          flex
          items-center
          justify-center
          gap-3
          mt-12
        "
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

        <p className="text-[#737976] text-sm">
          Continuously learning and expanding my technical skill set.
        </p>
      </motion.div>

    </section>
  );
}

export default Certifications;