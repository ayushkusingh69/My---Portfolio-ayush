import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaGitAlt, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

function Skill() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-4xl text-orange-500 mb-3" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-4xl text-blue-500 mb-3" /> },
    { name: "JavaScript", icon: <IoLogoJavascript className="text-4xl text-yellow-400 mb-3" /> },
    { name: "React", icon: <FaReact className="text-4xl text-cyan-400 mb-3" /> },
    { name: "Java", icon: <FaJava className="text-4xl text-red-500 mb-3" /> },
    { name: "Git", icon: <FaGitAlt className="text-4xl text-orange-600 mb-3" /> },
    { name: "GitHub", icon: <FaGithub className="text-4xl text-white mb-3" /> },
    { name: "DSA", icon: <span className="text-4xl mb-3">🧠</span> },
  ];

  return (
    <div className="relative min-h-screen bg-slate-950 text-white px-6 py-24 overflow-hidden">

      <div className="absolute w-80 h-80 bg-cyan-500/10 blur-3xl rounded-full top-20 left-20"></div>

      <div className="absolute w-80 h-80 bg-purple-500/10 blur-3xl rounded-full bottom-20 right-20"></div>

      <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
        Skills
      </h1>

      <p className="text-center text-slate-400 text-lg mb-16">
        Technologies and tools I use to build modern web applications.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">

        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
            }}
            whileHover={{
              scale: 1.05,
              y: -10,
              rotate: 2,
            }}
            className="
bg-slate-900/80
border
border-slate-800
rounded-2xl
h-40
p-5
flex
items-center
justify-center
"
          >
            <div className="flex flex-col items-center">
              <motion.div
                animate={{
                  y: [0, -5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              >
                {skill.icon}
              </motion.div>

              <p>{skill.name}</p>
            </div>
          </motion.div>
        ))}

      </div>

    </div>
  );
}

export default Skill;