function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-teal-400">Dhruba Chakraborty</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="hover:text-teal-400">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-teal-400">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-teal-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-teal-400">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-teal-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
