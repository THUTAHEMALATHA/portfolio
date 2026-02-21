import { motion } from "framer-motion"

function Experience() {
  const experiences = [
    {
      role: "Nanhi Kali Facilitator (Freelance)",
      org: "Naandi Foundation — Project Nanhi Kali",
      period: "Jul 2025 – Present",
      points: [
        "Managed academic support sessions and monitored student performance.",
        "Coordinated with school staff and maintained structured documentation.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-14"
        >
          Professional <span className="text-indigo-500">Experience</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l border-slate-800 ml-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="mb-10 ml-6"
            >
              
              {/* Dot */}
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 ring-8 ring-slate-950" />

              {/* Card */}
              <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-xl p-5 sm:p-6">
                
                <h3 className="text-lg font-semibold text-white">
                  {exp.role}
                </h3>

                <p className="text-indigo-400 text-sm mb-1">
                  {exp.org}
                </p>

                <p className="text-gray-500 text-xs mb-4">
                  {exp.period}
                </p>

                <ul className="space-y-2 text-sm text-gray-300 list-disc list-inside">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience