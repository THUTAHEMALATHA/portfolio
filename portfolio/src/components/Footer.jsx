import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa"
import { Link } from "react-scroll"

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo */}
          <h2 className="text-xl font-bold text-indigo-500">
            Hemalatha
          </h2>

          {/* Social */}
          <div className="flex gap-4">
            <a
              href="https://github.com/THUTAHEMALATHA"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-800 hover:bg-indigo-600 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-800 hover:bg-indigo-600 transition"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Back to top */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer p-3 rounded-xl bg-slate-800 hover:bg-indigo-600 transition"
          >
            <FaArrowUp />
          </Link>
        </div>

        {/* Bottom */}
        <div className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Hemalatha. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
export default Footer