import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaDownload,
  FaArrowRight,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaLayerGroup,
} from "react-icons/fa";

function About() {
  const infoCards = [
    {
      icon: <FaGraduationCap />,
      label: "Education",
      title: "B.Tech",
      description: "Computer Science & Information Technology",
      meta: "SIRT, Bhopal • 2023–2027",
      color: "cyan",
    },
    {
      icon: <FaCode />,
      label: "Academic Performance",
      title: "7.04",
      description: "Current CGPA",
      meta: "B.Tech Academic Record",
      color: "violet",
    },
    {
      icon: <FaBriefcase />,
      label: "Experience",
      title: "Full Stack Intern",
      description: "Nexolabz Solutions",
      meta: "Jun 2026 – Present",
      color: "blue",
    },
    {
      icon: <FaLayerGroup />,
      label: "Development",
      title: "Full Stack",
      description: "Frontend, Backend, REST APIs & Database Integration",
      meta: "React • Node • Express • MongoDB",
      color: "cyan",
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#070B14] text-white px-5 sm:px-8 py-24 overflow-hidden">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute top-0 left-[-180px] w-[420px] h-[420px] bg-cyan-500/[0.07] rounded-full blur-[130px]" />

      <div className="absolute bottom-0 right-[-180px] w-[420px] h-[420px] bg-violet-500/[0.07] rounded-full blur-[130px]" />

      {/* Subtle Grid */}
      <div
        className="
          absolute inset-0
          opacity-[0.018]
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:48px_48px]
        "
      />

      {/* ================= CONTENT ================= */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto"
      >

        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >

          <p className="
            text-cyan-400
            text-xs sm:text-sm
            font-semibold
            tracking-[0.28em]
            uppercase
            mb-4
          ">
            Get to know me
          </p>

          <h1 className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            font-extrabold
            tracking-tight
            text-white
          ">
            About{" "}
            <span className="
              bg-gradient-to-r
              from-cyan-300
              via-cyan-400
              to-violet-400
              bg-clip-text
              text-transparent
            ">
              Me
            </span>
          </h1>

          <div className="
            w-16
            h-[3px]
            mt-5
            rounded-full
            bg-gradient-to-r
            from-cyan-400
            to-violet-500
          " />

        </motion.div>


        {/* ================= MAIN GRID ================= */}

        <div className="
          grid
          lg:grid-cols-[1.05fr_0.95fr]
          gap-14
          items-center
        ">


          {/* ================= LEFT CONTENT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <div className="
              space-y-6
              text-slate-300
              text-base
              sm:text-lg
              leading-8
            ">

              <p>
                I'm{" "}
                <span className="text-white font-semibold">
                  Ayush Kumar Singh
                </span>
                , a Computer Science & Information Technology undergraduate
                and Full Stack Developer passionate about building modern web
                applications and software solutions.
              </p>

              <p>
                I have hands-on experience in frontend and backend development,
                REST APIs, and database integration using technologies such as{" "}
                <span className="text-cyan-300 font-medium">
                  React.js, Node.js, Express.js, and MongoDB.
                </span>
              </p>

              <p>
                Currently, I'm working as a{" "}
                <span className="text-white font-semibold">
                  Full Stack Developer Intern at Nexolabz Solutions
                </span>
                , where I contribute to full-stack applications, backend APIs,
                database integration, and software projects.
              </p>

            </div>


            {/* ================= BUTTONS ================= */}

            <div className="
              flex
              flex-col
              sm:flex-row
              gap-4
              mt-9
            ">

              {/* Resume */}

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="
                    w-full
                    sm:w-auto
                    flex
                    items-center
                    justify-center
                    gap-2
                    bg-cyan-400
                    text-[#061018]
                    font-bold
                    px-6
                    py-3.5
                    rounded-xl
                    hover:bg-cyan-300
                    hover:-translate-y-1
                    hover:shadow-[0_12px_35px_rgba(34,211,238,0.22)]
                    transition-all
                    duration-300
                  "
                >
                  <FaDownload size={14} />
                  Download Resume
                </button>
              </a>


              {/* Contact */}

              <Link to="/contact">
                <button
                  className="
                    w-full
                    sm:w-auto
                    flex
                    items-center
                    justify-center
                    gap-2
                    border
                    border-slate-700
                    bg-white/[0.02]
                    text-slate-200
                    font-semibold
                    px-6
                    py-3.5
                    rounded-xl
                    hover:border-cyan-400/60
                    hover:text-cyan-300
                    hover:bg-cyan-400/[0.04]
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >
                  Contact Me
                  <FaArrowRight size={14} />
                </button>
              </Link>

            </div>

          </motion.div>


          {/* ================= RIGHT CARDS ================= */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid sm:grid-cols-2 gap-4"
          >

            {infoCards.map((card, index) => (

              <motion.div
                key={card.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -7,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  min-h-[210px]
                  p-6
                  rounded-2xl
                  border
                  border-white/[0.06]
                  bg-[#0B1120]/80
                  backdrop-blur-xl
                  hover:border-cyan-400/25
                  hover:bg-[#0D1424]
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.30)]
                  transition-all
                  duration-300
                "
              >

                {/* Card Glow */}

                <div
                  className={`
                    absolute
                    -top-20
                    -right-20
                    w-36
                    h-36
                    rounded-full
                    blur-[70px]
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                    ${
                      card.color === "violet"
                        ? "bg-violet-500/20"
                        : card.color === "blue"
                        ? "bg-blue-500/20"
                        : "bg-cyan-500/20"
                    }
                  `}
                />


                {/* Top Accent */}

                <div
                  className={`
                    absolute
                    top-0
                    left-6
                    right-6
                    h-px
                    opacity-40
                    group-hover:opacity-100
                    transition-opacity
                    ${
                      card.color === "violet"
                        ? "bg-violet-400"
                        : card.color === "blue"
                        ? "bg-blue-400"
                        : "bg-cyan-400"
                    }
                  `}
                />


                {/* Icon */}

                <div
                  className={`
                    relative
                    w-11
                    h-11
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    mb-5
                    border
                    transition-all
                    duration-300
                    group-hover:scale-105
                    ${
                      card.color === "violet"
                        ? "bg-violet-400/[0.08] border-violet-400/20 text-violet-400"
                        : card.color === "blue"
                        ? "bg-blue-400/[0.08] border-blue-400/20 text-blue-400"
                        : "bg-cyan-400/[0.08] border-cyan-400/20 text-cyan-400"
                    }
                  `}
                >
                  {card.icon}
                </div>


                {/* Label */}

                <p className="
                  text-[11px]
                  uppercase
                  tracking-[0.18em]
                  text-slate-500
                  mb-2
                ">
                  {card.label}
                </p>


                {/* Title */}

                <h2 className="
                  text-xl
                  font-bold
                  text-white
                  mb-2
                  group-hover:text-slate-100
                ">
                  {card.title}
                </h2>


                {/* Description */}

                <p className="
                  text-sm
                  text-slate-400
                  leading-6
                ">
                  {card.description}
                </p>


                {/* Meta */}

                <p className="
                  text-xs
                  text-slate-600
                  mt-4
                ">
                  {card.meta}
                </p>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </motion.div>

    </section>
  );
}

export default About;