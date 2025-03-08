function Contact() {
  const contactMethods = [
    {
      type: "GitHub",
      value: "dhrubaDC1",
      link: "https://github.com/DhrubaDC1",
      color: "bg-gray-800",
      hoverColor: "hover:bg-gray-700",
    },
    {
      type: "Email",
      value: "dhruba_chakraborty.2000@gmail.com", // Replace with your actual email
      link: "mailto:dhruba_chakraborty.2000@gmail.com",
      color: "bg-teal-600",
      hoverColor: "hover:bg-teal-500",
    },
    {
      type: "LinkedIn",
      value: "Dhruba Chakraborty", // Replace with your actual LinkedIn handle
      link: "https://www.linkedin.com/in/dhruba-chakraborty", // Replace with your actual URL
      color: "bg-blue-600",
      hoverColor: "hover:bg-blue-500",
    },
    {
      type: "Instagram",
      value: "@d_c_y_1", // Replace with your actual LinkedIn handle
      link: "https://www.instagram.com/d_c_y_1/", // Replace with your actual URL
      color: "bg-pink-600",
      hoverColor: "hover:bg-pink-500",
    },
  ];

  return (
    <section id="contact" className="py-12">
      <h2 className="text-3xl font-semibold text-teal-400 mb-6 text-center">
        Get in Touch
      </h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg text-gray-300 mb-8 text-center">
          I’m always excited to collaborate on innovative projects, discuss tech
          ideas, or explore new opportunities. Feel free to reach out through
          any of the methods below!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${method.color} ${method.hoverColor} p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-between`}
            >
              <div>
                <h3 className="text-xl font-medium text-white">
                  {method.type}
                </h3>
                <p className="text-gray-100 mt-2">{method.value}</p>
              </div>
              <span className="text-white text-2xl">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
