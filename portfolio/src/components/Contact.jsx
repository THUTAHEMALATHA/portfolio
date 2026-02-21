import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-14"
        >
          Get In <span className="text-indigo-500">Touch</span>
        </motion.h2>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-6 sm:p-10"
        >
            <div className="flex justify-center">
            
            {/* Left Info */}
            <div className="space-y-6 text-center max-w-xl">
              
              <h3 className="text-xl font-semibold text-white">
                Let's build something great
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                I’m open to full-stack developer opportunities and
                collaborative projects. Feel free to reach out.
              </p>

              {/* Contact items */}
              <div className="space-y-4 text-sm">
                
                <div className="flex items-center justify-center gap-3 text-gray-300">
                  <FaEnvelope className="text-indigo-400" />
                  <span>thutahemalatha@gmail.com</span>
                </div>

                <div className="flex items-center justify-center gap-3 text-gray-300">
                  <FaMapMarkerAlt className="text-indigo-400" />
                  <span>Visakhapatnam, India</span>
                </div>

              </div>

              {/* Social */}
                              

              <div className="flex justify-center gap-4 pt-2">
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

                <div className="flex items-center justify-center gap-3 text-gray-300">
  <FaPhoneAlt className="text-indigo-400" />
  <span>+91 8977361605</span>
</div>


              </div>
            </div>

            {/* Right Form (UI only for now) */}
           
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact