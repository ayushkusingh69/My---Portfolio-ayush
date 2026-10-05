import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaCalendarAlt,
  FaArrowRight,
} from "react-icons/fa";

function Education() {
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
          Academic Background
        </p>

        <h1
          className="
            text-4xl
            md:text-5xl
            lg:text-6xl
            font-bold
            tracking-tight
            text-[#F5F3EE]
          "
        >
          Education
        </h1>

        <div className="w-16 h-[2px] bg-emerald-400 mx-auto mt-5 rounded-full" />

        <p className="text-[#8F9491] text-base md:text-lg max-w-2xl mx-auto mt-5 leading-7">
          My academic journey and educational background.
        </p>
      </motion.div>

      {/* Education Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <div
          className="
            relative
            bg-[#111417]/90
            backdrop-blur-xl
            border
            border-white/[0.08]
            rounded-[28px]
            p-6
            md:p-10
            overflow-hidden
            hover:border-emerald-400/30
            hover:shadow-[0_20px_80px_rgba(16,185,129,0.08)]
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
            "
          />

          {/* Main Content */}
          <div className="flex flex-col md:flex-row gap-8 items-start">

            {/* Graduation Icon */}
            <motion.div
              whileHover={{ scale: 1.08, rotate: 3 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="
                w-20
                h-20
                shrink-0
                rounded-2xl
                bg-emerald-400/[0.08]
                border
                border-emerald-400/20
                flex
                items-center
                justify-center
                text-emerald-400
                text-4xl
                shadow-[0_0_30px_rgba(16,185,129,0.06)]
              "
            >
              <FaGraduationCap />
            </motion.div>

            {/* Education Details */}
            <div className="flex-1">

              <p
                className="
                  text-emerald-400
                  text-xs
                  sm:text-sm
                  uppercase
                  tracking-[0.2em]
                  font-medium
                  mb-3
                "
              >
                Bachelor's Degree
              </p>

              <h2
                className="
                  text-2xl
                  md:text-3xl
                  font-bold
                  text-[#F5F3EE]
                  leading-tight
                  mb-4
                "
              >
                B.Tech — Computer Science & Information Technology
              </h2>

              {/* University */}
              <div className="flex items-start gap-3 text-[#B5B9B6] mb-7">

                <FaUniversity className="text-emerald-400 mt-1 shrink-0" />

                <span className="leading-6">
                  Sagar Institute of Research & Technology (SIRT), Bhopal
                </span>

              </div>

              {/* Education Info */}
              <div className="grid sm:grid-cols-2 gap-4">

                {/* Duration */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="
                    group
                    bg-[#181C1F]
                    border
                    border-white/[0.07]
                    rounded-2xl
                    p-5
                    hover:border-emerald-400/25
                    transition-all
                    duration-300
                  "
                >
                  <div className="flex items-center gap-3 mb-3">

                    <div
                      className="
                        w-9
                        h-9
                        rounded-lg
                        bg-emerald-400/[0.08]
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <FaCalendarAlt className="text-emerald-400 text-sm" />
                    </div>

                    <span className="text-sm text-[#737976]">
                      Duration
                    </span>

                  </div>

                  <p className="text-[#F5F3EE] font-semibold text-lg">
                    2023 – 2027
                  </p>
                </motion.div>

                {/* CGPA */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="
                    group
                    bg-[#181C1F]
                    border
                    border-white/[0.07]
                    rounded-2xl
                    p-5
                    hover:border-emerald-400/25
                    transition-all
                    duration-300
                  "
                >
                  <p className="text-sm text-[#737976] mb-3">
                    Current CGPA
                  </p>

                  <div className="flex items-end gap-2">

                    <p className="text-3xl font-bold text-emerald-400">
                      7.04
                    </p>

                    <span className="text-[#737976] text-sm mb-1">
                      / 10
                    </span>

                  </div>
                </motion.div>

              </div>

              {/* Small Status */}
              <div className="flex items-center gap-2 mt-7">

                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

                <span className="text-sm text-[#737976]">
                  Currently pursuing degree
                </span>

              </div>

            </div>

          </div>

          {/* Bottom Accent */}
          <div className="mt-10 pt-6 border-t border-white/[0.06] flex items-center justify-between">

            <span className="text-xs uppercase tracking-[0.18em] text-[#5F6562]">
              Academic Journey
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
              <FaArrowRight />
            </motion.div>

          </div>

        </div>
      </motion.div>

    </section>
  );
}

export default Education;