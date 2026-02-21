import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"

function Projects() {
  const projects = [
    {
      title: "Job Application Tracker",
      desc: "Full-stack job tracking platform with secure authentication and scalable REST API architecture.",
      tech: ["React", "Node.js", "Express", "Supabase", "Tailwind"],
      github: "#",
      live: "#",
    },
    {
      title: "Rock Paper Scissors Game",
      desc: "Interactive browser game with modular JavaScript logic and responsive UI design.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "#",
      live: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-14"
        >
          Featured <span className="text-indigo-500">Projects</span>
        </motion.h2>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-indigo-500 hover:-translate-y-2 transition duration-300"
            >
              
              {/* Top */}
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6">
                  {project.desc}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-sm font-medium transition"
                >
                  <FiExternalLink />
                  Live
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 border border-slate-700 hover:border-indigo-500 rounded-lg text-sm font-medium transition"
                >
                  <FaGithub />
                  Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects