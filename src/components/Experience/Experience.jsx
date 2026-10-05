import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
} from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Nexolabz Solutions",
      duration: "Jun 2026 – Present",
      type: "Current Internship",
      icon: <FaBriefcase />,
      description:
        "Contributing to the development and improvement of full-stack web applications and software projects, with involvement in frontend and backend development, application features, REST APIs, and database integration.",
      responsibilities: [
        {
          icon: <FaCode />,
          title: "Frontend Development",
          description:
            "Working on frontend development and application features for full-stack web applications.",
        },
        {
          icon: <FaServer />,
          title: "Backend Development",
          description:
            "Working on backend functionality and REST APIs for application features and services.",
        },
        {
          icon: <FaDatabase />,
          title: "Database Integration",
          description:
            "Working with database integration for managing and handling application data.",
        },
        {
          icon: <FaTools />,
          title: "Software Projects",
          description:
            "Collaborating on web-based applications and management system projects using modern development tools and technologies.",
        },
      ],
    },

    {
      role: "Web Development Intern",
      company: "Zidio Development",
      duration: "Jun 1, 2026 – Aug 31, 2026",
      type: "Completed Internship",
      icon: <FaBriefcase />,
      description:
        "Successfully completed an internship program focused on Web Development, gaining practical exposure to web development and professional project work.",
      responsibilities: [
        {
          icon: <FaCode />,
          title: "Web Development",
          description:
            "Worked on web development activities as part of the internship program.",
        },
        {
          icon: <FaTools />,
          title: "Practical Experience",
          description:
            "Gained practical exposure to professional development workflows and project-based work.",
        },
        {
          icon: <FaBriefcase />,
          title: "Professional Growth",
          description:
            "Developed practical skills and professional experience through the internship program.",
        },
        {
          icon: <FaDatabase />,
          title: "Development Exposure",
          description:
            "Built hands-on understanding of web development concepts in a professional internship environment.",
        },
      ],
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#0B0F0E] text-[#F5F5F0] px-6 py-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-emerald-500/10 blur-3xl rounded-full top-10 left-[-180px]" />

      <div className="absolute w-96 h-96 bg-teal-400/5 blur-3xl rounded-full bottom-10 right-[-180px]" />

      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:45px_45px]" />

      {/* ================= HEADER ================= */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center mb-20"
      >
        <p className="text-emerald-400 uppercase tracking-[0.2em] text-xs font-medium mb-4">
          Professional Journey
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Experience
        </h1>

        <div className="w-16 h-[2px] bg-emerald-400 mx-auto mt-6 mb-6" />

        <p className="text-[#8F9A95] text-base md:text-lg max-w-2xl mx-auto leading-7">
          My experience in web development, full-stack development,
          and software projects.
        </p>
      </motion.div>

      {/* ================= TIMELINE ================= */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Timeline Line */}
        <div
          className="
            absolute
            left-6
            md:left-1/2
            top-0
            bottom-0
            w-px
            bg-gradient-to-b
            from-emerald-400
            via-emerald-400/30
            to-transparent
            hidden
            sm:block
          "
        />

        <div className="space-y-16">

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              className="relative"
            >

              {/* Timeline Dot */}
              <div
                className="
                  hidden
                  sm:flex
                  absolute
                  left-1/2
                  -translate-x-1/2
                  w-12
                  h-12
                  rounded-full
                  bg-[#0B0F0E]
                  border
                  border-emerald-400/60
                  items-center
                  justify-center
                  text-emerald-400
                  z-20
                  shadow-[0_0_25px_rgba(52,211,153,0.12)]
                "
              >
                <FaBriefcase size={17} />
              </div>

              {/* Card */}
              <div
                className={`
                  w-full
                  md:w-[calc(50%-48px)]
                  ${index % 2 === 0
                    ? "md:mr-auto"
                    : "md:ml-auto"
                  }
                `}
              >

                <motion.div
                  whileHover={{ y: -6 }}
                  className="
                    relative
                    bg-[#111715]/90
                    backdrop-blur-md
                    border
                    border-[#26312D]
                    rounded-2xl
                    p-6
                    md:p-8
                    overflow-hidden
                    hover:border-emerald-400/40
                    hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
                    transition-all
                    duration-300
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
                      bg-emerald-400
                    "
                  />

                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">

                    {/* Icon */}
                    <div
                      className="
                        w-12
                        h-12
                        shrink-0
                        rounded-xl
                        bg-emerald-400/10
                        border
                        border-emerald-400/20
                        flex
                        items-center
                        justify-center
                        text-emerald-400
                        text-xl
                      "
                    >
                      {experience.icon}
                    </div>

                    <div className="min-w-0">

                      {/* Status */}
                      <span
                        className="
                          inline-block
                          text-[11px]
                          font-medium
                          px-3
                          py-1
                          rounded-full
                          mb-2
                          bg-emerald-400/10
                          text-emerald-400
                          border
                          border-emerald-400/10
                        "
                      >
                        {experience.type}
                      </span>

                      <h2 className="text-xl md:text-2xl font-bold text-white">
                        {experience.role}
                      </h2>

                      <p className="text-[#A7B0AC] mt-1">
                        {experience.company}
                      </p>

                    </div>

                  </div>

                  {/* Duration */}
                  <div
                    className="
                      inline-flex
                      px-4
                      py-2
                      rounded-lg
                      bg-[#0B0F0E]
                      border
                      border-[#26312D]
                      text-emerald-400
                      text-sm
                      mb-6
                    "
                  >
                    {experience.duration}
                  </div>

                  {/* Description */}
                  <p className="text-[#8F9A95] leading-7 mb-8">
                    {experience.description}
                  </p>

                  {/* Responsibilities */}
                  <div>

                    <h3 className="text-lg font-semibold text-white mb-4">
                      Experience Highlights
                    </h3>

                    <div className="space-y-3">

                      {experience.responsibilities.map((item) => (
                        <motion.div
                          key={item.title}
                          whileHover={{ x: 4 }}
                          className="
                            flex
                            items-start
                            gap-3
                            bg-[#0B0F0E]/70
                            border
                            border-[#26312D]
                            rounded-xl
                            p-4
                            hover:border-emerald-400/30
                            transition-all
                            duration-300
                          "
                        >

                          <div
                            className="
                              w-8
                              h-8
                              shrink-0
                              rounded-lg
                              bg-emerald-400/10
                              text-emerald-400
                              flex
                              items-center
                              justify-center
                              mt-0.5
                            "
                          >
                            {item.icon}
                          </div>

                          <div>

                            <h4 className="font-medium text-white">
                              {item.title}
                            </h4>

                            <p className="text-sm text-[#7F8A85] leading-6 mt-1">
                              {item.description}
                            </p>

                          </div>

                        </motion.div>
                      ))}

                    </div>

                  </div>

                </motion.div>

              </div>

            </motion.div>
          ))}

        </div>
      </div>

    </section>
  );
}

export default Experience;