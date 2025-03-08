function Experience() {
  return (
    <section id="experience" className="py-12">
      <h2 className="text-3xl font-semibold text-teal-400 mb-4">Experience</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-medium">Junior Software Engineer</h3>
          <p className="text-gray-400">
            Techdojo Limited | July 2023 - Present
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>
              Developed front-end solutions using React, React Native, and
              vanilla JavaScript.
            </li>
            <li>Designed user interfaces with Figma for seamless UX.</li>
            <li>Contributed to backend development and system integration.</li>
            <li>
              Leveraged AI tools like LangChain and OpenAI to train models and
              build custom classification systems.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
