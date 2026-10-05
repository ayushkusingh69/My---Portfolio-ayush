import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const contactDetails = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "ayushkumarbgs742@gmail.com",
      link: "mailto:ayushkumarbgs742@gmail.com",
      color: "text-cyan-400",
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "linkedin.com/in/ayush-singh-79b612332",
      link: "https://linkedin.com/in/ayush-singh-79b612332",
      color: "text-blue-400",
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "github.com/ayushkusingh69",
      link: "https://github.com/ayushkusingh69",
      color: "text-violet-400",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Bhopal, Madhya Pradesh, India",
      link: null,
      color: "text-emerald-400",
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#080b12] text-white flex items-center justify-center px-5 sm:px-8 py-24 overflow-hidden">

      {/* Background Effects */}
      <div className="absolute top-20 left-[-120px] w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-10 right-[-120px] w-96 h-96 bg-violet-500/10 blur-[130px] rounded-full" />

      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="
          relative
          z-10
          w-full
          max-w-5xl
          rounded-[2rem]
          border
          border-white/[0.08]
          bg-white/[0.035]
          backdrop-blur-2xl
          p-6
          sm:p-10
          md:p-14
          shadow-[0_25px_80px_rgba(0,0,0,0.35)]
        "
      >

        {/* Top Accent */}
        <div className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-32
          h-[2px]
          bg-gradient-to-r
          from-cyan-400
          to-violet-500
          rounded-full
        " />

        {/* Heading */}
        <div className="text-center mb-12">

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cyan-400 uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold mb-4"
          >
            Let's Connect
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-bold
              tracking-tight
            "
          >
            Get In{" "}
            <span className="
              bg-gradient-to-r
              from-cyan-400
              via-blue-400
              to-violet-500
              bg-clip-text
              text-transparent
            ">
              Touch
            </span>
          </motion.h1>

          <p className="
            text-slate-400
            text-sm
            sm:text-base
            md:text-lg
            max-w-2xl
            mx-auto
            mt-5
            leading-7
          ">
            Have a project, opportunity, or idea in mind?
            I'd be happy to connect and discuss how we can build
            something meaningful together.
          </p>

        </div>


        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-4">

          {contactDetails.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -5 }}
            >

              {item.link ? (
                <a
                  href={item.link}
                  target={
                    item.link.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    item.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="
                    group
                    flex
                    items-center
                    gap-4
                    h-full
                    p-5
                    rounded-2xl
                    bg-white/[0.025]
                    border
                    border-white/[0.07]
                    hover:border-cyan-400/30
                    hover:bg-white/[0.045]
                    transition-all
                    duration-300
                  "
                >

                  <div className={`
                    shrink-0
                    w-12
                    h-12
                    rounded-xl
                    bg-white/[0.04]
                    border
                    border-white/[0.06]
                    flex
                    items-center
                    justify-center
                    text-xl
                    ${item.color}
                    group-hover:scale-110
                    transition-transform
                    duration-300
                  `}>
                    {item.icon}
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">
                      {item.title}
                    </p>

                    <p className="text-sm sm:text-base text-slate-200 truncate group-hover:text-white transition-colors">
                      {item.value}
                    </p>
                  </div>

                </a>
              ) : (
                <div className="
                  flex
                  items-center
                  gap-4
                  h-full
                  p-5
                  rounded-2xl
                  bg-white/[0.025]
                  border
                  border-white/[0.07]
                ">

                  <div className={`
                    shrink-0
                    w-12
                    h-12
                    rounded-xl
                    bg-white/[0.04]
                    border
                    border-white/[0.06]
                    flex
                    items-center
                    justify-center
                    text-xl
                    ${item.color}
                  `}>
                    {item.icon}
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">
                      {item.title}
                    </p>

                    <p className="text-sm sm:text-base text-slate-200">
                      {item.value}
                    </p>
                  </div>

                </div>
              )}

            </motion.div>
          ))}

        </div>


        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-10"
        >

          <a
            href="mailto:ayushkumarbgs742@gmail.com?subject=Portfolio%20Contact"
            className="
              group
              flex
              items-center
              justify-center
              gap-3
              bg-cyan-400
              text-slate-950
              font-semibold
              px-8
              py-3.5
              rounded-xl
              hover:bg-cyan-300
              hover:scale-[1.03]
              hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]
              transition-all
              duration-300
            "
          >
            <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            Send Me a Message
          </a>

        </motion.div>


        {/* Bottom */}
        <div className="flex items-center justify-center gap-3 mt-10">

          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

          <p className="text-slate-500 text-xs sm:text-sm">
            Open to software development opportunities
          </p>

        </div>

      </motion.div>

    </section>
  );
}

export default Contact;