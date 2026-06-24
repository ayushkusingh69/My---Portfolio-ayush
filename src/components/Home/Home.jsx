
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
// import portfoliopic from "../../assets/portfoliopic.jpg"


function Home() {
  return (
    <div className=" relative min-h-screen flex flex-col justify-center items-center bg-slate-950 text-white overflow-hidden px-4">

      <div className="absolute w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full top-20 left-20"></div>

      <div className="absolute w-96 h-96 bg-purple-500/20 blur-3xl rounded-full bottom-20 right-20"></div>

      {/* <motion.img
        src={portfoliopic}
        alt="Profile"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-cyan-400 mb-8 z-10"
      /> */}

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity
        }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 z-10 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
        Ayush Kumar Singh
        <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6 z-10"></div>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-slate-400 text-center max-w-xl mb-8 z-10"
      >
        Passionate Full Stack Developer focused on building
        modern, responsive and user-friendly web applications.
      </motion.p>

      <div className="mb-4 z-10">
        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            2000,
            "React Developer",
            2000,
            "Java Programmer",
            2000,
            "DSA Enthusiast",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-2xl text-cyan-400 mb-3 z-10"
        />
      </div>

      <p className="text-gray-400 text-lg mb-8 z-10">
        React • Java • DSA
      </p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex flex-col sm:flex-row gap-4 z-10"
      >
        <Link to="/projects">
          <button className="
  bg-cyan-500
  px-6
  py-3
  rounded-xl
  hover:scale-105
  hover:shadow-[0_0_30px_#06b6d4]
  transition-all
  duration-300
  ">
            View Projects
          </button>
        </Link>

        <Link to="/contact">
          <button className="
  border
  border-cyan-500
  px-6
  py-3
  rounded-xl
  hover:bg-cyan-500
  hover:scale-105
  transition-all
  duration-300
  ">
            Contact Me
          </button>
        </Link>
      </motion.div>

    </div>
  );
}

export default Home;
