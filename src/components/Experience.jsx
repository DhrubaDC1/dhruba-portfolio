import { motion } from "framer-motion";

function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mx-auto px-4"
    >
      <h2 className="text-4xl font-semibold text-teal-400 mb-4">Experience</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-medium">Junior Software Engineer</h3>
          <p className="text-gray-400">TechDojo | July 2023 - Present</p>
          <ul className="list-disc list-inside mt-2 text-gray-300">
            <li>
              Built UIs with React.js, Next.js, and Three.js for 3D experiences.
            </li>
            <li>
              Created backend APIs with Node.js, MongoDB, and mobile apps with
              React Native.
            </li>
            <li>
              Added AI features using OpenAI and LangChain; designed UI/UX with
              Figma.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-medium">
            WordPress Web Developer Intern
          </h3>
          <p className="text-gray-400">SOFTFY | Apr 2023 - May 2023</p>
          <ul className="list-disc list-inside mt-2 text-gray-300">
            <li>Developed WordPress sites with WooCommerce.</li>
            <li>Customized themes and optimized responsive designs.</li>
            <li>Delivered web solutions for business growth.</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
