import { motion } from "framer-motion";

function Skills() {
  const skills = {
    "Programming Languages": [
      { name: "Python", color: "bg-blue-600" },
      { name: "JavaScript", color: "bg-yellow-500" },
      { name: "Swift", color: "bg-orange-500" },
      { name: "HTML", color: "bg-red-500" },
      { name: "CSS", color: "bg-blue-400" },
    ],
    "Front-end Development": [
      { name: "React", color: "bg-cyan-500" },
      { name: "React Native", color: "bg-cyan-600" },
      { name: "Tailwind CSS", color: "bg-teal-500" },
      { name: "Vanilla JavaScript", color: "bg-yellow-400" },
      { name: "Figma", color: "bg-purple-500" },
    ],
    "AI & Machine Learning": [
      { name: "LangChain", color: "bg-green-500" },
      { name: "OpenAI API", color: "bg-green-600" },
      { name: "Natural Language Processing", color: "bg-lime-500" },
      { name: "Deep Learning (LSTM)", color: "bg-lime-600" },
      { name: "Predictive Analytics", color: "bg-emerald-500" },
    ],
    "Backend Development": [
      { name: "Node.js", color: "bg-green-700" },
      { name: "REST APIs", color: "bg-gray-600" },
      { name: "Database Integration", color: "bg-gray-700" },
    ],
    "Tools & Platforms": [
      { name: "Git", color: "bg-red-600" },
      { name: "GitHub", color: "bg-gray-800" },
      { name: "Vite", color: "bg-purple-600" },
      { name: "Vercel", color: "bg-black" },
      { name: "Xcode", color: "bg-blue-500" },
    ],
    "Soft Skills": [
      { name: "Quick Learner", color: "bg-indigo-500" },
      { name: "Problem Solving", color: "bg-indigo-600" },
      { name: "Innovation", color: "bg-pink-500" },
      { name: "Team Collaboration", color: "bg-pink-600" },
    ],
  };

  return (
    <motion.section
      id="skills"
      className="py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-semibold text-teal-400 mb-6 text-center">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items], index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-medium text-gray-100 mb-4">
              {category}
            </h3>
            <ul className="flex flex-wrap gap-3">
              {items.map((skill, i) => (
                <li
                  key={i}
                  className={`${skill.color} text-white px-4 py-2 rounded-full text-sm font-medium transform hover:scale-105 transition-transform duration-200`}
                >
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;
