import profilePic from "../assets/profile-pic.jpg"; // Adjust the filename as needed

function About() {
  return (
    <section id="about" className="py-12">
      <h2 className="text-3xl font-semibold text-teal-400 mb-6 text-center">
        About Me
      </h2>
      <div className="flex flex-col items-center md:flex-row md:items-start gap-8 max-w-4xl mx-auto">
        <img
          src={profilePic}
          alt="Dhruba Chakraborty"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg border-4 border-teal-500"
        />
        <div className="text-center md:text-left">
          <p className="text-lg text-gray-300 leading-relaxed">
            I’m Dhruba Chakraborty, an innovator and passionate programmer with
            a knack for learning quickly. I hold a BSc in Computer Science and
            Engineering from BRAC University (GPA 3.62, 2022) and currently work
            as a Junior Software Engineer at Techdojo Limited since July 2023. I
            thrive on exploring new technologies—whether it’s building web apps
            with React, crafting AI models with LangChain, or designing sleek
            UIs in Figma. My journey is all about solving problems and creating
            impactful solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
