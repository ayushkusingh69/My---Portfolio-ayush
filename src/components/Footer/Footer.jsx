import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[#070B14] text-white border-t border-white/[0.06] overflow-hidden">

      {/* ================= BACKGROUND ================= */}

      <div className="
        absolute
        -top-40
        left-[15%]
        w-80
        h-80
        rounded-full
        bg-cyan-500/[0.05]
        blur-[120px]
        pointer-events-none
      " />

      <div className="
        absolute
        -bottom-40
        right-[15%]
        w-80
        h-80
        rounded-full
        bg-violet-500/[0.05]
        blur-[120px]
        pointer-events-none
      " />

      {/* Subtle Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.015]
          pointer-events-none
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:48px_48px]
        "
      />


      {/* ================= CONTENT ================= */}

      <div className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        sm:px-8
        py-14
      ">


        {/* ================= TOP ================= */}

        <div className="
          flex
          flex-col
          md:flex-row
          items-center
          md:items-start
          justify-between
          gap-10
        ">


          {/* Identity */}

          <div className="text-center md:text-left">

            <div className="
              flex
              items-center
              justify-center
              md:justify-start
              gap-3
            ">

              {/* Logo */}

              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                }}
                className="
                  w-10
                  h-10
                  rounded-xl
                  bg-gradient-to-br
                  from-cyan-300
                  to-violet-500
                  flex
                  items-center
                  justify-center
                  text-[#061018]
                  font-extrabold
                  text-sm
                  shadow-[0_0_25px_rgba(34,211,238,0.10)]
                  cursor-default
                "
              >
                AK
              </motion.div>


              <div>

                <h2 className="
                  text-lg
                  font-bold
                  tracking-tight
                  text-white
                ">
                  Ayush Kumar Singh
                </h2>

                <p className="
                  text-xs
                  text-slate-500
                  mt-0.5
                ">
                  Full Stack Developer
                </p>

              </div>

            </div>


            <p className="
              text-sm
              text-slate-500
              leading-6
              mt-4
              max-w-md
            ">
              Building modern, responsive and practical software
              solutions with clean code and thoughtful design.
            </p>

          </div>


          {/* ================= SOCIAL ================= */}

          <div className="
            flex
            items-center
            gap-3
          ">

            {/* GitHub */}

            <motion.a
              href="https://github.com/ayushkusingh69"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -4,
                scale: 1.06,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
                group
                w-11
                h-11
                rounded-xl
                flex
                items-center
                justify-center
                bg-white/[0.025]
                border
                border-white/[0.07]
                text-slate-400
                hover:text-white
                hover:border-cyan-400/30
                hover:bg-cyan-400/[0.04]
                transition-all
                duration-300
              "
              aria-label="GitHub"
            >
              <FaGithub
                size={18}
                className="group-hover:scale-110 transition-transform"
              />
            </motion.a>


            {/* LinkedIn */}

            <motion.a
              href="https://linkedin.com/in/ayush-singh-79b612332"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -4,
                scale: 1.06,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
                group
                w-11
                h-11
                rounded-xl
                flex
                items-center
                justify-center
                bg-white/[0.025]
                border
                border-white/[0.07]
                text-slate-400
                hover:text-blue-400
                hover:border-blue-400/30
                hover:bg-blue-400/[0.04]
                transition-all
                duration-300
              "
              aria-label="LinkedIn"
            >
              <FaLinkedin
                size={18}
                className="group-hover:scale-110 transition-transform"
              />
            </motion.a>


            {/* Email */}

            <motion.a
              href="mailto:ayushkumarbgs742@gmail.com"
              whileHover={{
                y: -4,
                scale: 1.06,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
                group
                w-11
                h-11
                rounded-xl
                flex
                items-center
                justify-center
                bg-white/[0.025]
                border
                border-white/[0.07]
                text-slate-400
                hover:text-cyan-400
                hover:border-cyan-400/30
                hover:bg-cyan-400/[0.04]
                transition-all
                duration-300
              "
              aria-label="Email"
            >
              <FaEnvelope
                size={17}
                className="group-hover:scale-110 transition-transform"
              />
            </motion.a>


            {/* Back To Top */}

            <motion.button
              onClick={scrollToTop}
              whileHover={{
                y: -4,
                scale: 1.06,
              }}
              whileTap={{
                scale: 0.95,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
                group
                w-11
                h-11
                rounded-xl
                bg-cyan-400
                text-[#061018]
                flex
                items-center
                justify-center
                hover:bg-cyan-300
                hover:shadow-[0_0_25px_rgba(34,211,238,0.20)]
                transition-all
                duration-300
              "
              aria-label="Back to top"
            >
              <FaArrowUp
                size={15}
                className="group-hover:-translate-y-0.5 transition-transform"
              />
            </motion.button>

          </div>

        </div>


        {/* ================= DIVIDER ================= */}

        <div className="
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/[0.08]
          to-transparent
          my-10
        " />


        {/* ================= BOTTOM ================= */}

        <div className="
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-3
          text-xs
        ">

          <p className="
            text-slate-600
            text-center
          ">
            © {new Date().getFullYear()} Ayush Kumar Singh.
            All rights reserved.
          </p>


          <div className="
            flex
            items-center
            gap-2
            text-slate-600
          ">
            <span>Built with</span>

            <span className="text-cyan-400">
              React
            </span>

            <span>•</span>

            <span className="text-violet-400">
              Tailwind CSS
            </span>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;