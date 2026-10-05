import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiJavascript,
  SiPython,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiRust,
  SiTauri,
} from "react-icons/si";

function Skill() {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        {
          name: "Java",
          icon: <FaJava className="text-4xl text-red-400" />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-4xl text-yellow-400" />,
        },
        {
          name: "Python",
          icon: <SiPython className="text-4xl text-blue-400" />,
        },
        {
          name: "SQL",
          icon: <SiMysql className="text-4xl text-blue-400" />,
        },
        {
          name: "Rust",
          icon: <SiRust className="text-4xl text-orange-400" />,
        },
      ],
    },

    {
      title: "Frontend",
      skills: [
        {
          name: "HTML5",
          icon: <FaHtml5 className="text-4xl text-orange-400" />,
        },
        {
          name: "CSS3",
          icon: <FaCss3Alt className="text-4xl text-blue-400" />,
        },
        {
          name: "React.js",
          icon: <FaReact className="text-4xl text-cyan-400" />,
        },
      ],
    },

    {
      title: "Backend",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-4xl text-green-400" />,
        },
        {
          name: "Express.js",
          icon: <SiExpress className="text-4xl text-slate-200" />,
        },
        {
          name: "REST APIs",
          icon: (
            <span className="text-3xl font-bold text-cyan-400">
              API
            </span>
          ),
        },
      ],
    },

    {
      title: "Databases",
      skills: [
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-4xl text-green-400" />,
        },
        {
          name: "MySQL",
          icon: <SiMysql className="text-4xl text-blue-400" />,
        },
      ],
    },

    {
      title: "Tools & Technologies",
      skills: [
        {
          name: "Git",
          icon: <FaGitAlt className="text-4xl text-orange-400" />,
        },
        {
          name: "GitHub",
          icon: <FaGithub className="text-4xl text-slate-200" />,
        },
        {
          name: "Postman",
          icon: <SiPostman className="text-4xl text-orange-400" />,
        },
        {
          name: "VS Code",
          icon: (
            <span className="text-3xl font-bold text-blue-400">
              VS
            </span>
          ),
        },
        {
          name: "Tauri",
          icon: <SiTauri className="text-4xl text-slate-200" />,
        },
      ],
    },

    {
      title: "Core Concepts",
      skills: [
        {
          name: "DSA",
          icon: (
            <span className="text-3xl font-bold text-violet-400">
              DSA
            </span>
          ),
        },
        {
          name: "OOP",
          icon: (
            <span className="text-3xl font-bold text-cyan-400">
              OOP
            </span>
          ),
        },
        {
          name: "DBMS",
          icon: (
            <span className="text-3xl font-bold text-blue-400">
              DBMS
            </span>
          ),
        },
        {
          name: "Operating Systems",
          icon: (
            <span className="text-3xl font-bold text-emerald-400">
              OS
            </span>
          ),
        },
        {
          name: "Computer Networks",
          icon: (
            <span className="text-3xl font-bold text-orange-400">
              CN
            </span>
          ),
        },
      ],
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#070b14] text-white px-5 sm:px-8 py-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-10 left-[-120px] w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="absolute bottom-10 right-[-120px] w-96 h-96 bg-violet-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center mb-16"
      >

        <p className="text-cyan-400 uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold mb-4">
          My Technical Expertise
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          Skills{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
            & Technologies
          </span>
        </h1>

        <div className="w-20 h-1 mx-auto mt-5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />

        <p className="text-slate-400 text-base md:text-lg mt-5 max-w-2xl mx-auto leading-7">
          Technologies, tools, and core concepts I use to build
          full-stack applications and software solutions.
        </p>

      </motion.div>


      {/* Categories */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-12">

        {skillCategories.map((category, categoryIndex) => (

          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: categoryIndex * 0.05,
            }}
          >

            {/* Category Heading */}
            <div className="flex items-center gap-4 mb-6">

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white whitespace-nowrap">
                {category.title}
              </h2>

              <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/30 to-transparent" />

            </div>


            {/* Skills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

              {category.skills.map((skill, index) => (

                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    y: -7,
                  }}
                  className="
                    group
                    relative
                    min-h-[145px]
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-800
                    bg-slate-900/50
                    backdrop-blur-xl
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-4
                    p-5
                    hover:border-cyan-400/40
                    hover:bg-slate-900/80
                    hover:shadow-[0_20px_45px_rgba(0,0,0,0.25)]
                    transition-all
                    duration-300
                  "
                >

                  {/* Hover Glow */}
                  <div
                    className="
                      absolute
                      -top-10
                      -right-10
                      w-24
                      h-24
                      rounded-full
                      bg-cyan-400/10
                      blur-2xl
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-500
                    "
                  />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.2 }}
                    className="relative z-10"
                  >
                    {skill.icon}
                  </motion.div>

                  {/* Name */}
                  <p
                    className="
                      relative
                      z-10
                      text-sm
                      md:text-base
                      text-slate-300
                      font-medium
                      text-center
                      group-hover:text-white
                      transition-colors
                    "
                  >
                    {skill.name}
                  </p>

                </motion.div>

              ))}

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Skill;