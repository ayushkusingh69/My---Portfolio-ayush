import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiRust,
  SiTauri,
} from "react-icons/si";

function Project() {
  const projects = [
    {
      title: "NueGas",
      subtitle: "Task Management System",
      description:
        "A full-stack task management application for creating, organizing, updating, and tracking tasks. Includes REST APIs and database integration for managing application data.",
      technologies: [
        { name: "React.js", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "REST APIs", icon: <FaDatabase /> },
      ],
      category: "Full Stack",
      github: "",
      live: "",
    },

    {
      title: "Homyz",
      subtitle: "Real Estate Property Platform",
      description:
        "A full-stack real estate platform for browsing and exploring residential property listings through a responsive user interface. Includes property cards, search, testimonials, newsletter sections, backend APIs, and database integration.",
      technologies: [
        { name: "React.js", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "HTML5", icon: null },
        { name: "CSS3", icon: null },
      ],
      category: "Web Application",
      github: "",
      live: "",
    },

    {
      title: "Hotel Management System",
      subtitle: "Hotel Management Application",
      description:
        "A full-stack hotel management application for managing rooms, bookings, customer information, and core hotel operations with frontend interfaces, backend APIs, and database integration.",
      technologies: [
        { name: "React.js", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "HTML5", icon: null },
        { name: "CSS3", icon: null },
      ],
      category: "Full Stack",
      github: "",
      live: "",
    },

    {
      title: "RustyTodo",
      subtitle: "Desktop Task Management Application",
      description:
        "A lightweight cross-platform desktop task management application built using React, Tauri, and Rust. Supports task creation, completion tracking, deletion, persistent storage, and automatic task loading.",
      technologies: [
        { name: "React.js", icon: <FaReact /> },
        { name: "Rust", icon: <SiRust /> },
        { name: "Tauri", icon: <SiTauri /> },
        { name: "HTML5", icon: null },
        { name: "CSS3", icon: null },
      ],
      category: "Desktop Application",
      github: "",
      live: "",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#070A0F] text-white px-5 sm:px-8 py-24">

      {/* Ambient Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          top-10
          left-[-180px]
          w-[450px]
          h-[450px]
          rounded-full
          bg-cyan-400/[0.055]
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-10
          right-[-180px]
          w-[450px]
          h-[450px]
          rounded-full
          bg-violet-500/[0.055]
          blur-[130px]
        "
      />

      {/* Subtle Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.018]
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:48px_48px]
        "
      />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-6xl mx-auto mb-14"
      >
        <p className="text-cyan-400 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4">
          My Work
        </p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">

          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              Featured{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>

            <div className="w-20 h-1 mt-5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
          </div>

          <p className="text-slate-500 text-sm sm:text-base max-w-md leading-6 md:text-right">
            A selection of applications and software projects built with
            modern development technologies.
          </p>

        </div>
      </motion.div>


      {/* Projects Grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-5 lg:gap-6">

        {projects.map((project, index) => (

          <motion.article
            key={project.title}
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
              duration: 0.55,
              delay: index * 0.08,
            }}
            whileHover={{
              y: -6,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/[0.07]
              bg-[#0F1720]/80
              backdrop-blur-xl
              p-6
              sm:p-7
              hover:border-cyan-400/25
              hover:bg-[#111B26]
              hover:shadow-[0_25px_70px_rgba(0,0,0,0.28)]
              transition-all
              duration-300
            "
          >

            {/* Hover Glow */}
            <div
              className="
                pointer-events-none
                absolute
                -top-24
                -right-24
                w-52
                h-52
                rounded-full
                bg-cyan-400/[0.07]
                blur-3xl
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-500
              "
            />

            {/* Top Row */}
            <div className="relative z-10 flex items-center justify-between mb-7">

              <span className="font-mono text-xs text-slate-600">
                0{index + 1}
              </span>

              <span
                className="
                  px-3
                  py-1.5
                  rounded-full
                  border
                  border-cyan-400/15
                  bg-cyan-400/[0.04]
                  text-cyan-300
                  text-[11px]
                  font-medium
                "
              >
                {project.category}
              </span>

            </div>


            {/* Project Title */}
            <div className="relative z-10 mb-5">

              <p className="text-cyan-400 text-xs sm:text-sm font-medium mb-2">
                {project.subtitle}
              </p>

              <h2
                className="
                  text-2xl
                  sm:text-3xl
                  font-bold
                  tracking-tight
                  text-slate-100
                  group-hover:text-cyan-300
                  transition-colors
                  duration-300
                "
              >
                {project.title}
              </h2>

            </div>


            {/* Description */}
            <p
              className="
                relative
                z-10
                text-slate-400
                text-sm
                leading-7
                min-h-[118px]
              "
            >
              {project.description}
            </p>


            {/* Technologies */}
            <div className="relative z-10 flex flex-wrap gap-2 mt-7 mb-8">

              {project.technologies.map((tech) => (

                <span
                  key={tech.name}
                  className="
                    flex
                    items-center
                    gap-2
                    px-3
                    py-1.5
                    rounded-lg
                    bg-[#070A0F]/70
                    border
                    border-white/[0.06]
                    text-slate-400
                    text-xs
                    sm:text-sm
                    hover:border-cyan-400/25
                    hover:text-slate-200
                    transition-all
                    duration-300
                  "
                >

                  {tech.icon && (
                    <span className="text-cyan-400">
                      {tech.icon}
                    </span>
                  )}

                  {tech.name}

                </span>

              ))}

            </div>


            {/* Buttons */}
            <div className="relative z-10 flex flex-wrap gap-3">

              {/* Live Demo */}
              {project.live ? (

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    bg-cyan-400
                    text-[#070A0F]
                    font-semibold
                    px-5
                    py-2.5
                    rounded-xl
                    hover:bg-cyan-300
                    hover:-translate-y-0.5
                    hover:shadow-[0_8px_25px_rgba(34,211,238,0.16)]
                    transition-all
                    duration-300
                  "
                >
                  <FaExternalLinkAlt size={12} />
                  Live Demo
                </a>

              ) : (

                <button
                  disabled
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    bg-white/[0.035]
                    border
                    border-white/[0.06]
                    text-slate-600
                    font-semibold
                    px-5
                    py-2.5
                    rounded-xl
                    cursor-not-allowed
                  "
                >
                  <FaExternalLinkAlt size={12} />
                  Live Demo
                </button>

              )}


              {/* GitHub */}
              {project.github ? (

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    border
                    border-white/[0.08]
                    bg-white/[0.02]
                    text-slate-300
                    font-semibold
                    px-5
                    py-2.5
                    rounded-xl
                    hover:border-cyan-400/35
                    hover:text-cyan-300
                    hover:bg-cyan-400/[0.04]
                    transition-all
                    duration-300
                  "
                >
                  <FaGithub size={16} />
                  GitHub
                </a>

              ) : (

                <button
                  disabled
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    border
                    border-white/[0.06]
                    text-slate-600
                    font-semibold
                    px-5
                    py-2.5
                    rounded-xl
                    cursor-not-allowed
                  "
                >
                  <FaGithub size={16} />
                  GitHub
                </button>

              )}

            </div>

          </motion.article>

        ))}

      </div>

    </section>
  );
}

export default Project;