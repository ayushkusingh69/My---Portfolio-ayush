import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaDownload,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Education", path: "/education" },
    { name: "Experience", path: "/experience" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Certifications", path: "/certifications" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  const linkStyle = ({ isActive }) =>
    `relative text-[13px] font-medium tracking-wide transition-all duration-300 ${
      isActive
        ? "text-cyan-400"
        : "text-slate-400 hover:text-white"
    }`;

  return (
    <nav
      className="
        sticky
        top-0
        z-50
        bg-[#080b12]/85
        backdrop-blur-xl
        border-b
        border-white/[0.06]
      "
    >

      {/* Main Navbar */}
      <div
        className="
          max-w-7xl
          mx-auto
          px-5
          sm:px-6
          lg:px-8
          h-[72px]
          flex
          items-center
          justify-between
        "
      >

        {/* Logo */}
        <NavLink
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-3 shrink-0"
        >

          {/* Logo Box */}
          <div
            className="
              relative
              w-10
              h-10
              rounded-xl
              bg-gradient-to-br
              from-cyan-400
              to-violet-500
              flex
              items-center
              justify-center
              text-slate-950
              font-extrabold
              text-sm
              shadow-[0_0_25px_rgba(34,211,238,0.12)]
            "
          >
            AK
          </div>

          {/* Name */}
          <div className="hidden lg:block">

            <h1 className="text-[15px] font-bold text-white leading-none">
              Ayush Kumar Singh
            </h1>

            <p className="text-[10px] text-slate-500 mt-1 tracking-wide">
              Full Stack Developer
            </p>

          </div>

        </NavLink>


        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-6">

          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={linkStyle}
            >
              {({ isActive }) => (
                <span className="relative py-2">

                  {item.name}

                  {/* Active Indicator */}
                  {isActive && (
                    <span
                      className="
                        absolute
                        left-0
                        right-0
                        -bottom-1
                        mx-auto
                        h-[2px]
                        rounded-full
                        bg-cyan-400
                        shadow-[0_0_8px_rgba(34,211,238,0.5)]
                      "
                    />
                  )}

                </span>
              )}
            </NavLink>
          ))}


          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              ml-1
              flex
              items-center
              gap-2
              bg-cyan-400
              text-slate-950
              px-4
              py-2.5
              rounded-xl
              text-xs
              font-bold
              whitespace-nowrap
              hover:bg-cyan-300
              hover:scale-[1.03]
              hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]
              transition-all
              duration-300
            "
          >
            <FaDownload size={12} />
            Resume
          </a>

        </div>


        {/* Tablet / Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            lg:hidden
            w-10
            h-10
            rounded-xl
            border
            border-white/[0.08]
            bg-white/[0.03]
            flex
            items-center
            justify-center
            text-slate-300
            hover:text-cyan-400
            hover:border-cyan-400/30
            transition-all
          "
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <FaTimes size={18} />
          ) : (
            <FaBars size={18} />
          )}
        </button>

      </div>


      {/* Mobile / Tablet Menu */}
      {menuOpen && (
        <div
          className="
            lg:hidden
            border-t
            border-white/[0.06]
            bg-[#080b12]/95
            backdrop-blur-xl
          "
        >

          <div className="max-w-7xl mx-auto px-6 py-6">

            <div className="flex flex-col gap-1">

              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `
                    px-4
                    py-3
                    rounded-xl
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "text-cyan-400 bg-cyan-400/[0.06]"
                        : "text-slate-400 hover:text-white hover:bg-white/[0.03]"
                    }
                    `
                  }
                >
                  {item.name}
                </NavLink>
              ))}

            </div>


            {/* Mobile Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="
                mt-5
                w-full
                flex
                items-center
                justify-center
                gap-2
                bg-cyan-400
                text-slate-950
                px-5
                py-3
                rounded-xl
                text-sm
                font-bold
                hover:bg-cyan-300
                transition-all
              "
            >
              <FaDownload size={13} />
              Download Resume
            </a>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;