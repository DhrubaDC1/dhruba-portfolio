function Navbar({ scrollToSection }) {
  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-10 hidden md:block">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-teal-400">Dhruba Chakraborty</h1>
        <ul className="flex space-x-6">
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-teal-400 cursor-pointer"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("experience")}
              className="hover:text-teal-400 cursor-pointer"
            >
              Experience
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-teal-400 cursor-pointer"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("skills")}
              className="hover:text-teal-400 cursor-pointer"
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-teal-400 cursor-pointer"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
