import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-20 md:py-28 flex flex-col items-center text-center"
    >
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
        About <span className="text-blue-600">Me</span>
      </h2>

      {/* About Content */}
      <div className="text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed space-y-4">
        <p>
          I’m <span className="font-semibold text-blue-600">Ramanarayana Kudupudi</span>, 
          a passionate Frontend Developer from Andhra Pradesh, India.  
          I love creating interactive, responsive, and user-friendly web applications using 
          modern web technologies.
        </p>

        <p>
          Currently, I’m pursuing my <span className="font-semibold">Industry Ready Certification 
          in Full-Stack Development</span> from Nxtwave Disruptive Technologies, where I’ve built 
          real-world projects using <strong>React.js, JavaScript, HTML, CSS, Bootstrap, and REST APIs</strong>.
        </p>

        <p>
          My goal is to craft seamless user experiences, write clean code, 
          and continue learning new technologies every day.  
          I enjoy turning creative ideas into real, functional, and impactful web products.
        </p>
      </div>

      {/* Education Box */}
      <div className="mt-10 grid md:grid-cols-2 gap-6 w-full max-w-3xl">
        <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-blue-600 mb-2">
            Education
          </h3>
          <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              🎓 <strong>Government Degree College, Mandapeta</strong>  
              <br />B.Sc Computer Science — <span className="text-gray-500">2023 | CGPA: 7.0</span>
            </li>
            <li>
              📘 <strong>Vidya Vikas Junior College</strong>  
              <br />Intermediate - MPC — <span className="text-gray-500">2020 | 56%</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-blue-600 mb-2">
            Certification
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            🏅 Industry Ready Certification in Full-Stack Development  
            <br />Nxtwave Disruptive Technologies (2024 - 2025)
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
