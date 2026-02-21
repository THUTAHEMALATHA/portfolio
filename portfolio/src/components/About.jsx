import { motion } from "framer-motion"

function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          About <span className="text-indigo-500">Me</span>
        </motion.h2>

        {/* Content Card */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-6 sm:p-10"
>
  <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-center max-w-3xl mx-auto">
    I am a Full Stack Web Developer specializing in building secure and
    scalable web applications using React, Node.js, Express, and Supabase.
    I focus on creating clean, responsive user interfaces and robust backend
    systems with strong authentication and REST API architecture.
  </p>
</motion.div>
      </div>
    </section>
  )
}

export default About