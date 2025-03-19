import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="p-8 max-w-md mx-auto"
    >
      <p className="text-4xl font-bold text-teal-400 pb-4">
        Dhruba Chakraborty
      </p>
      <p className="text-lg text-gray-300 leading-relaxed">
        I’m a passionate programmer with a BSc in Computer Science and
        Engineering. I enjoy building web apps with React, exploring AI, and
        designing UIs. My goal is to create impactful solutions through
        technology.
      </p>
    </motion.div>
  );
}

export default About;
