import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"
import { useEffect, useState } from "react"

import jobtrackImg from "../assets/images/jobtrack-dashboard.png"
import rpsImg from "../assets/images/rock-paper-game.png"
import fs1 from "../assets/images/fundspark-1.png"
import fs2 from "../assets/images/fundspark-2.png"
import fs3 from "../assets/images/fundspark-3.png"
import fs4 from "../assets/images/fundspark-4.png"

function Projects() {
  const projects = [
    {
      title: "FundSpark – Crowdfunding Platform",
      desc: "A production-ready crowdfunding platform with secure donations, real-time funding tracking, and over-funding prevention logic.",
      tech: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind"],
      github:
        "https://github.com/THUTAHEMALATHA/crowdfunding-finance-frontend",
      backend: "https://github.com/THUTAHEMALATHA/backend-crowdfund",
      live: "https://crowdfunding-frontend-two.vercel.app/",
      images: [fs1, fs2, fs3, fs4],
    },
    {
      title: "Job Application Tracker",
      desc: "Full-stack job tracking platform with secure authentication and scalable REST API architecture.",
      tech: ["React", "Node.js", "Express", "Supabase", "Tailwind"],
      github: "https://github.com/THUTAHEMALATHA/jobtrack-fullstack",
      live: "https://jobtrack-fullstack.vercel.app/",
      image: jobtrackImg,
    },
    {
      title: "Rock Paper Scissors Game",
      desc: "Interactive browser game with modular JavaScript logic and responsive UI design.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/THUTAHEMALATHA/rock-paper-scissors",
      live: "https://rock-paper-scissors-zeta-topaz.vercel.app/",
      image: rpsImg,
    },
  ]

  // 🔥 auto slider state
  const [indexes, setIndexes] = useState(projects.map(() => 0))

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexes((prev) =>
        prev.map((idx, i) => {
          const p = projects[i]
          if (!p.images) return idx
          return (idx + 1) % p.images.length
        })
      )
    }, 2500)

    return () => clearInterval(interval)
  }, [])

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
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-indigo-500 hover:-translate-y-2 transition duration-300"
            >
              {/* 🔥 Image (auto slider supported) */}
              <div className="mb-5 overflow-hidden rounded-xl border border-slate-800 relative">
                <img
                  src={
                    project.images
                      ? project.images[indexes[index]]
                      : project.image
                  }
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
                />

                {/* dots */}
                {project.images && (
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                    {project.images.map((_, i) => (
                      <span
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          indexes[index] === i
                            ? "bg-white"
                            : "bg-white/40"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
                  {project.title}
                  {index === 0 && (
                    <span className="text-[10px] px-2 py-1 rounded bg-indigo-500/20 text-indigo-400">
                      Featured
                    </span>
                  )}
                </h3>

                <p className="text-gray-400 text-sm mb-5">{project.desc}</p>

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
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-sm font-medium transition"
                >
                  <FiExternalLink />
                  Live
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-slate-700 hover:border-indigo-500 rounded-lg text-sm font-medium transition"
                >
                  <FaGithub />
                  Code
                </a>
                {/* {Backend} */}
                {project.backend && (
                  <a
                     href={project.backend}
                     target="_blank"
                      rel="noopener noreferrer"
                     className="flex items-center gap-2 px-4 py-2 border border-slate-700 hover:border-indigo-500 rounded-lg text-sm font-medium transition"
                  >
                <FaGithub />
                 Backend
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects