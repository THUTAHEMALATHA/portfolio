import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import profileImg from "../assets/images/profile.jpg"

function Hero() {
  return (
   <section
  id="home"
  className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24 bg-slate-950"
>
  <div className="max-w-4xl mx-auto text-center">
    
    {/* Profile Image */}
<div className="flex justify-center mb-10">
  <motion.div
    animate={{ y: [0, -12, 0] }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="relative"
  >
    <img
      src={profileImg}
      alt="Hemalatha profile"
      className="
        w-44 h-44
        sm:w-52 sm:h-52
        md:w-60 md:h-60
        object-cover
        rounded-full
        border-4 border-indigo-500
        shadow-[0_0_40px_rgba(99,102,241,0.35)]
      "
    />
  </motion.div>
</div>
    {/* Name */}
    <h1 className="text-4xl md:text-6xl font-bold mb-4">
      Hi, I'm <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-600 bg-clip-text text-transparent">
  Hemalatha
</span>
    </h1>

    {/* Role */}
    <div className="text-lg md:text-2xl text-gray-300 mb-6 font-medium">
  <TypeAnimation
    sequence={[
      "Full Stack Web Developer",
      2000,
      "React Developer",
      2000,
      "Node.js Developer",
      2000,
      "Building Scalable Apps",
      2000,
    ]}
    speed={50}
    repeat={Infinity}
  />
</div>
    {/* Description */}
    <p className="max-w-2xl mx-auto text-gray-400 mb-10">
      I build secure, scalable web applications using React, Node.js,
      and modern cloud tools with clean and responsive user experiences.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="#projects"
        className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-semibold transition"
      >
        View Projects
      </a>

      <a
        href="https://drive.google.com/file/d/1jJqCMjtDr6vINPxm7sX9ntlyeuoU2d6H/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-3 border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white rounded-xl font-semibold transition"
      >
        Download Resume
      </a>
    </div>
  </div>
</section>
  )
}

export default Hero