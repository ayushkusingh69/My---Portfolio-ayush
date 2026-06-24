import { motion } from "framer-motion";

function Project() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-slate-950 text-white px-6 py-24"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
      >
        Projects
      </motion.h1>

      <p className="text-center text-slate-400 text-lg mb-12">
        Showcasing my journey through web development, problem solving,
        and real-world project building.
      </p>

      <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">

        {/* Project 1 */}
        <motion.div
          whileHover={{
            scale: 1.05,
            y: -10,
          }}
          transition={{ type: "spring", stiffness: 300 }}
          className="
bg-slate-900/80
backdrop-blur-md
border
border-slate-800
rounded-3xl
p-8
min-h-[280px]
flex
flex-col
justify-between
hover:shadow-[0_0_35px_#06b6d4]
transition-all
duration-300
"
        >
          <h2 className="text-2xl font-bold mb-3 text-cyan-400">
            Spotify Clone
          </h2>

          <p className="text-gray-300 mb-6">
            A Spotify-inspired music player UI built using HTML, CSS and JavaScript.
          </p>

          <div className="flex gap-2 mb-6">
            <span className="bg-slate-800 px-3 py-1 rounded-full text-sm">
              HTML
            </span>

            <span className="bg-slate-800 px-3 py-1 rounded-full text-sm">
              CSS
            </span>

            <span className="bg-slate-800 px-3 py-1 rounded-full text-sm">
              JavaScript
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600 transition">
              Live Demo
            </button>

            <button className="border border-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-500 transition">
              GitHub
            </button>
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          whileHover={{
            scale: 1.03,
            y: -12,
          }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:shadow-[0_0_30px_#8b5cf6]"
        >
          <h2 className="text-2xl font-bold mb-3 text-purple-400">
            AI Mock Interview System
          </h2>
          <p className="text-gray-300 mb-6">
            AI-powered platform that helps students prepare for technical and HR interviews.
          </p>

          <div className="flex gap-2 mb-6">
            <span className="bg-slate-800 px-3 py-1 rounded-full text-sm">
              React
            </span>

            <span className="bg-slate-800 px-3 py-1 rounded-full text-sm">
              AI
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="bg-purple-500 px-4 py-2 rounded-lg hover:bg-purple-600 transition">
              Live Demo
            </button>

            <button className="border border-purple-500 px-4 py-2 rounded-lg hover:bg-purple-500 transition">
              GitHub
            </button>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}

export default Project;