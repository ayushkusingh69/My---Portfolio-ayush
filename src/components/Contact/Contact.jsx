import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <div className=" relative min-h-screen bg-slate-950 text-white flex justify-center items-center px-6">
      <div className="absolute w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full top-20 left-10"></div>
      <div className="absolute w-72 h-72 bg-purple-500/10 blur-3xl rounded-full bottom-20 right-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          bg-slate-900/80
          backdrop-blur-md
          border
          border-slate-800
          p-10
          rounded-3xl
          w-full
          max-w-2xl
          shadow-2xl
        "
      >
        <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Contact Me
        </h1>

        <p className="text-center text-slate-400 mb-10">
          Let's connect and build something amazing together.
        </p>

        <div className="space-y-6">

          <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl">
            <FaEnvelope className="text-cyan-400 text-2xl" />
            <span>ayushkumarbgs742@gmail.com</span>
          </div>

          <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl">
            <FaLinkedin className="text-blue-400 text-2xl" />
            <span>www.linkedin.com/in/ayush-singh-79b612332</span>
          </div>

          <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl">
            <FaGithub className="text-white text-2xl" />
            <span>https://github.com/ayushkusingh69</span>
          </div>

        </div>

        <div className="flex justify-center mt-10">
          <button className="
            bg-cyan-500
            px-8
            py-3
            rounded-xl
            hover:scale-105
            hover:shadow-[0_0_25px_#06b6d4]
            transition-all
            duration-300
          ">
            Get In Touch
          </button>
        </div>

      </motion.div>

    </div>
  );
}

export default Contact;