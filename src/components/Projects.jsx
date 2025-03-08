import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      name: "recipeGen",
      description:
        "A project to generate recipes, possibly using AI or machine learning for personalized suggestions.",
      tech: "Python, Machine Learning",
      link: "https://github.com/DhrubaDC1/recipeGen",
    },
    {
      name: "encryptIt",
      description:
        "Exploring encryption techniques for securing data or messages.",
      tech: "React Native, Async Storage",
      link: "https://github.com/DhrubaDC1/encryptIt",
    },
    {
      name: "playgrow-theme-react",
      description:
        "A React-based theme for Playgrow, likely a customizable web application or UI component library.",
      tech: "React, JavaScript",
      link: "https://github.com/DhrubaDC1/playgrow-theme-react",
    },
    {
      name: "Expense-Tracker",
      description:
        "A web application to track personal or business expenses, built with a user-friendly interface.",
      tech: "React, JavaScript",
      link: "https://github.com/DhrubaDC1/Expense-Tracker",
    },
    {
      name: "task-management-app",
      description:
        "A task management tool, possibly a to-do list or project tracker with scheduling features.",
      tech: "React, JavaScript",
      link: "https://github.com/DhrubaDC1/task-management-app",
    },
    {
      name: "share2Drive",
      description:
        "A file-sharing application, potentially integrated with cloud storage like Google Drive.",
      tech: "Python, Google Drive API",
      link: "https://github.com/DhrubaDC1/share2Drive",
    },
    {
      name: "img_gen",
      description:
        "An image generation tool using AI or image processing techniques.",
      tech: "Python, AI",
      link: "https://github.com/DhrubaDC1/img_gen",
    },
    {
      name: "Color Converter",
      description:
        "Simple web app to find the closest X11 color by inputting RGB values.",
      tech: "HTML, CSS, JavaScript",
      link: "https://dhrubaDC1.github.io",
    },
    {
      name: "bookSum",
      description:
        "A book summary generator or management system for organizing reading material.",
      tech: "Node JS, LLM",
      link: "https://github.com/DhrubaDC1/bookSum",
    },
    {
      name: "boiKhata",
      description:
        "An iOS app for processing PDFs, printing them, and offering home delivery services.",
      tech: "Swift",
      link: "https://github.com/DhrubaDC1/boiKhata",
    },
    {
      name: "Bengali-Sentiment-Analysis",
      description:
        "Sentiment analysis for Bengali text using machine learning and NLP techniques.",
      tech: "Python, NLP",
      link: "https://github.com/DhrubaDC1/Bengali-Sentiment-Analysis",
    },
    {
      name: "Virus-Basic-Reproduction-Calculator",
      description:
        "A tool to calculate the basic reproduction number (R0) of viruses for epidemiological analysis.",
      tech: "Python, Tkinter",
      link: "https://github.com/DhrubaDC1/Virus-Basic-Reproduction-Calculator",
    },
    {
      name: "tomato-disease",
      description:
        "A project to detect or analyze tomato plant diseases, possibly using machine learning.",
      tech: "Python, Machine Learning",
      link: "https://github.com/DhrubaDC1/tomato-disease",
    },
    {
      name: "gpad-tester",
      description:
        "A testing tool for devices or code, possibly related to gamepads or hardware.",
      tech: "JavaScript, HTML, CSS",
      link: "https://github.com/DhrubaDC1/gpad-tester",
    },
    {
      name: "newsBringer",
      description:
        "A news aggregator or delivery system fetching and displaying current events.",
      tech: "JavaScript, HTML, CSS, News API",
      link: "https://github.com/DhrubaDC1/newsBringer",
    },
    {
      name: "dont_be_broke",
      description:
        "A financial management app or interactive tool to avoid financial pitfalls.",
      tech: "JavaScript",
      link: "https://github.com/DhrubaDC1/dont_be_broke",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-semibold text-teal-400 mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-medium">{project.name}</h3>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <p className="text-teal-400 mt-2">Tech: {project.tech}</p>
            <div className="mt-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
