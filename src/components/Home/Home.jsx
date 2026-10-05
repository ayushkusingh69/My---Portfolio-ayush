import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedinIn,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

function Home() {
  const technologies = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "Rust",
    "Tauri",
  ];

  return (
    <section className="relative min-h-[calc(100vh-73px)] bg-[#07111F] text-[#F8FAFC] overflow-hidden flex items-center px-5 sm:px-8 py-16">

      {/* ================= BACKGROUND ================= */}

      {/* Teal Glow */}
      <div
        className="
          absolute
          w-[350px]
          h-[350px]
          sm:w-[500px]
          sm:h-[500px]
          rounded-full
          bg-[#14B8A6]/10
          blur-[120px]
          -top-40
          -left-40
          pointer-events-none
        "
      />

      {/* Gold Glow */}
      <div
        className="
          absolute
          w-[300px]
          h-[300px]
          sm:w-[450px]
          sm:h-[450px]
          rounded-full
          bg-[#F59E0B]/5
          blur-[120px]
          -bottom-40
          -right-40
          pointer-events-none
        "
      />

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.025]
          pointer-events-none
          bg-[linear-gradient(to_right,#94A3B8_1px,transparent_1px),linear-gradient(to_bottom,#94A3B8_1px,transparent_1px)]
          bg-[size:50px_50px]
        "
      />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 max-w-6xl mx-auto w-full">

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-20 items-center">

          {/* ================= LEFT ================= */}

          <div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                mb-7
                rounded-full
                border
                border-[#14B8A6]/20
                bg-[#0D1B2A]
                text-[#2DD4BF]
                text-xs
                sm:text-sm
                tracking-wide
              "
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#14B8A6] opacity-60 animate-ping" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#14B8A6]" />
              </span>

              Available for opportunities
            </motion.div>


            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                font-extrabold
                tracking-tight
                leading-[1.05]
              "
            >
              Hi, I'm{" "}
              <span className="text-[#14B8A6]">
                Ayush Kumar Singh
              </span>
            </motion.h1>


            {/* Small Accent Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="
                h-1
                mt-6
                mb-7
                rounded-full
                bg-[#F59E0B]
              "
            />


            {/* Typing Role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="
                text-xl
                sm:text-2xl
                md:text-3xl
                font-semibold
                mb-6
              "
            >
              <TypeAnimation
                sequence={[
                  "Software Developer",
                  2000,
                  "Full Stack Developer",
                  2000,
                  "React.js Developer",
                  2000,
                  "Backend Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-[#2DD4BF]"
              />
            </motion.div>


            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="
                max-w-2xl
                text-[#94A3B8]
                text-base
                sm:text-lg
                leading-8
                mb-8
              "
            >
              Computer Science undergraduate and Full Stack Developer Intern
              passionate about building modern, responsive web applications,
              REST APIs, and scalable backend solutions using React.js,
              Node.js, Express.js, and MongoDB.
            </motion.p>


            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex flex-wrap gap-2.5 mb-9"
            >
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                    px-3.5
                    py-2
                    rounded-lg
                    text-xs
                    sm:text-sm
                    text-[#94A3B8]
                    bg-[#0D1B2A]
                    border
                    border-[#203247]
                    hover:border-[#14B8A6]/50
                    hover:text-[#2DD4BF]
                    hover:bg-[#12263A]
                    transition-all
                    duration-300
                  "
                >
                  {tech}
                </span>
              ))}
            </motion.div>


            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="
                flex
                flex-col
                sm:flex-row
                gap-3
              "
            >

              {/* Projects */}
              <Link to="/projects">
                <button
                  className="
                    w-full
                    sm:w-auto
                    flex
                    items-center
                    justify-center
                    gap-2
                    bg-[#14B8A6]
                    text-[#07111F]
                    font-semibold
                    px-6
                    py-3.5
                    rounded-xl
                    hover:bg-[#2DD4BF]
                    hover:-translate-y-1
                    hover:shadow-[0_12px_35px_rgba(20,184,166,0.20)]
                    transition-all
                    duration-300
                  "
                >
                  View Projects
                  <FaArrowRight size={14} />
                </button>
              </Link>


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
                    bg-[#F59E0B]
                    text-[#07111F]
                    font-semibold
                    px-6
                    py-3.5
                    rounded-xl
                    hover:bg-[#FBBF24]
                    hover:-translate-y-1
                    hover:shadow-[0_12px_35px_rgba(245,158,11,0.18)]
                    transition-all
                    duration-300
                  "
                >
                  <FaDownload size={14} />
                  Resume
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
                    border-[#203247]
                    text-[#CBD5E1]
                    font-semibold
                    px-6
                    py-3.5
                    rounded-xl
                    bg-[#0D1B2A]/60
                    hover:border-[#14B8A6]/50
                    hover:text-[#2DD4BF]
                    hover:bg-[#12263A]
                    transition-all
                    duration-300
                  "
                >
                  Contact Me
                </button>
              </Link>

            </motion.div>


            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="flex items-center gap-4 mt-8"
            >

              <span className="text-xs text-[#64748B] mr-1">
                Connect
              </span>

              <a
                href="https://github.com/ayushkusingh69"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-10
                  h-10
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  border
                  border-[#203247]
                  bg-[#0D1B2A]
                  text-[#94A3B8]
                  hover:text-[#F8FAFC]
                  hover:border-[#14B8A6]/50
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://linkedin.com/in/ayush-singh-79b612332"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-10
                  h-10
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  border
                  border-[#203247]
                  bg-[#0D1B2A]
                  text-[#94A3B8]
                  hover:text-[#F8FAFC]
                  hover:border-[#14B8A6]/50
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={18} />
              </a>

            </motion.div>

          </div>


          {/* ================= RIGHT VISUAL ================= */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >

            <div className="relative w-[380px] h-[440px]">

              {/* Outer Glow */}
              <div
                className="
                  absolute
                  inset-8
                  rounded-[2rem]
                  bg-[#14B8A6]/10
                  blur-3xl
                "
              />

              {/* Main Card */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-[2rem]
                  bg-[#0D1B2A]/90
                  border
                  border-[#203247]
                  backdrop-blur-xl
                  overflow-hidden
                  shadow-[0_25px_80px_rgba(0,0,0,0.35)]
                "
              >

                {/* Top accent */}
                <div
                  className="
                    h-1
                    w-full
                    bg-gradient-to-r
                    from-[#14B8A6]
                    via-[#14B8A6]
                    to-[#F59E0B]
                  "
                />

                <div className="p-8 h-full flex flex-col justify-between">

                  {/* Terminal Header */}
                  <div>

                    <div className="flex items-center gap-2 mb-8">
                      <span className="w-3 h-3 rounded-full bg-red-400/70" />
                      <span className="w-3 h-3 rounded-full bg-[#F59E0B]/70" />
                      <span className="w-3 h-3 rounded-full bg-[#14B8A6]/70" />

                      <span className="ml-auto text-xs text-[#475569]">
                        developer.js
                      </span>
                    </div>

                    {/* Code-style content */}
                    <div className="font-mono text-sm leading-8">

                      <p className="text-[#64748B]">
                        // hello_world
                      </p>

                      <p>
                        <span className="text-[#F59E0B]">const</span>{" "}
                        <span className="text-[#2DD4BF]">developer</span>{" "}
                        = {"{"}
                      </p>

                      <p className="pl-5">
                        <span className="text-[#94A3B8]">name:</span>{" "}
                        <span className="text-[#F59E0B]">
                          "Ayush"
                        </span>
                      </p>

                      <p className="pl-5">
                        <span className="text-[#94A3B8]">role:</span>{" "}
                        <span className="text-[#F59E0B]">
                          "Full Stack Developer"
                        </span>
                      </p>

                      <p className="pl-5">
                        <span className="text-[#94A3B8]">focus:</span>{" "}
                        <span className="text-[#F59E0B]">
                          "Web Development"
                        </span>
                      </p>

                      <p className="pl-5">
                        <span className="text-[#94A3B8]">status:</span>{" "}
                        <span className="text-[#14B8A6]">
                          "building..."
                        </span>
                      </p>

                      <p>{"};"}</p>

                    </div>

                  </div>


                  {/* Bottom Stats */}
                  <div className="grid grid-cols-2 gap-3">

                    <div
                      className="
                        rounded-xl
                        bg-[#07111F]
                        border
                        border-[#203247]
                        p-4
                      "
                    >
                      <p className="text-2xl font-bold text-[#14B8A6]">
                        5+
                      </p>
                      <p className="text-xs text-[#64748B] mt-1">
                        Projects
                      </p>
                    </div>

                    <div
                      className="
                        rounded-xl
                        bg-[#07111F]
                        border
                        border-[#203247]
                        p-4
                      "
                    >
                      <p className="text-2xl font-bold text-[#F59E0B]">
                        MERN
                      </p>
                      <p className="text-xs text-[#64748B] mt-1">
                        Stack
                      </p>
                    </div>

                  </div>

                </div>

              </div>


              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -right-6
                  top-20
                  px-4
                  py-3
                  rounded-xl
                  bg-[#12263A]
                  border
                  border-[#14B8A6]/30
                  shadow-xl
                "
              >
                <p className="text-xs text-[#64748B]">
                  Currently
                </p>
                <p className="text-sm font-semibold text-[#2DD4BF]">
                  Building & Learning
                </p>
              </motion.div>


              {/* Gold Floating Accent */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -left-6
                  bottom-24
                  w-14
                  h-14
                  rounded-2xl
                  bg-[#F59E0B]/10
                  border
                  border-[#F59E0B]/30
                  flex
                  items-center
                  justify-center
                  text-[#F59E0B]
                  font-bold
                  text-xs
                "
              >
                {"</>"}
              </motion.div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Home;