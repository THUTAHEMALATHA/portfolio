import { motion } from "framer-motion"
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa"
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiSupabase,
  SiFirebase,
  SiPostman,
  SiVercel,
} from "react-icons/si"

function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express", icon: <SiExpress className="text-gray-300" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
    { name: "Supabase", icon: <SiSupabase className="text-green-400" /> },
    { name: "Firebase", icon: <SiFirebase className="text-orange-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "Vercel", icon: <SiVercel className="text-white" /> },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-14"
        >
          Technical <span className="text-indigo-500">Skills</span>
        </motion.h2>

        {/* Skills Grid */}
            <motion.div
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={{
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  }}
  className="
    grid
    grid-cols-3
    sm:grid-cols-4
    md:grid-cols-6
    gap-6
    justify-items-center
  "
>
  {skills.map((skill) => (
    <motion.div
      key={skill.name}
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.9 },
        show: { opacity: 1, y: 0, scale: 1 },
      }}
      whileHover={{
        scale: 1.12,
        y: -6,
      }}
      transition={{ type: "spring", stiffness: 200 }}
      className="
        group
        relative
        flex flex-col items-center gap-2
        p-4 rounded-2xl
        bg-slate-900/60
        border border-slate-800
        hover:border-indigo-500/60
        w-24
        overflow-hidden
      "
    >
      {/* glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-indigo-500/10 blur-xl" />

      {/* icon */}
      <div className="text-3xl relative z-10 group-hover:scale-110 transition">
        {skill.icon}
      </div>

      {/* label */}
      <span className="text-xs text-gray-300 text-center relative z-10">
        {skill.name}
      </span>
    </motion.div>
  ))}
</motion.div>
      </div>
    </section>
  )
}

export default Skills