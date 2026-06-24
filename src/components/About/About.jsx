import { motion } from "framer-motion";

function About() {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl w-full"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h1>

            <p className="text-gray-300 text-lg leading-8">
              I'm Ayush Kumar, a passionate Computer Science student
              focused on Full Stack Development, React, Java and DSA.
              I enjoy building modern web applications and solving
              real-world problems through technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="bg-cyan-500 px-6 py-3 rounded-xl hover:scale-105 hover:shadow-[0_0_30px_#06b6d4] transition-all duration-300">
                Download Resume
              </button>

              <button className="border border-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-500 transition-all duration-300">
                Contact Me
              </button>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-2 gap-5"
          >
            <div className="
bg-slate-900/80
backdrop-blur-md
border
border-slate-800
p-6
rounded-2xl
hover:scale-105
hover:shadow-[0_0_25px_#06b6d4]
transition-all
duration-300
">
              <h2 className="text-cyan-400 text-3xl font-bold">Education</h2>
              <p className="text-gray-400">B.Tech CSIT</p>
            </div>

            <div className="
bg-slate-900/80
backdrop-blur-md
border
border-slate-800
p-6
rounded-2xl
hover:scale-105
hover:shadow-[0_0_25px_#06b6d4]
transition-all
duration-300
">
              <h2 className="text-cyan-400 text-3xl font-bold">CGPA</h2>
              <p className="text-gray-400">7.04</p>
            </div>

            <div className="
bg-slate-900/80
backdrop-blur-md
border
border-slate-800
p-6
rounded-2xl
hover:scale-105
hover:shadow-[0_0_25px_#06b6d4]
transition-all
duration-300
">
              <h2 className="text-cyan-400 text-3xl font-bold">Projects</h2>
              <p className="text-gray-400">5+</p>
            </div>

            <div className="
bg-slate-900/80
backdrop-blur-md
border
border-slate-800
p-6
rounded-2xl
hover:scale-105
hover:shadow-[0_0_25px_#06b6d4]
transition-all
duration-300
">
              < h2 className="text-cyan-400 text-3xl font-bold" > Programming</h2 >
              <p className="text-gray-400">Frontend & Backend</p>
            </div >
          </motion.div >

        </div >
      </motion.div >
    </section >
  );
}

export default About;