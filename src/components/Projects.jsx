import React, { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";

const Projects = () => {
  const [key, setKey] = useState(0); // 👈 Used to restart animation when revisiting section

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#projects") {
        setKey((prev) => prev + 1);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const projects = [
    {
      title: "Nxt Trendz (E-Commerce Clone)",
      description:
        "A clone of Amazon/Flipkart where users can log in, browse products, apply filters, and view details. Includes authentication, search, and JWT-based login persistence.",
      technologies: [
        "React JS",
        "JavaScript",
        "CSS",
        "Bootstrap",
        "REST API",
        "JWT",
      ],
      liveLink: "https://nxt-tendz2.vercel.app/",
      loginInfo: "user: rahul | pass: rahul@2021",
      image:
        "https://res.cloudinary.com/dnn94cb0w/image/upload/v1755488781/ecommerce_tcqk8d.webp",
    },
    {
      title: "Jobby App",
      description:
        "A job search web app where users can log in and browse jobs with filters by employment type and salary range. Includes protected routes and search functionality.",
      technologies: [
        "React JS",
        "JavaScript",
        "CSS",
        "Bootstrap",
        "REST API",
        "JWT",
      ],
      liveLink: "https://ramanarayana-jobby-app.vercel.app",
      loginInfo: "user: rahul | pass: rahul@2021",
      image:
        "https://res.cloudinary.com/dnn94cb0w/image/upload/v1755488769/content_igryst.webp",
    },
    {
      title: "Todos Application",
      description:
        "A simple and responsive CRUD app to manage daily tasks. Users can add, edit, delete, and persist todos using LocalStorage.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "LocalStorage"],
      liveLink: "https://ramanarayana-todo-app.vercel.app",
      image:
        "https://res.cloudinary.com/dnn94cb0w/image/upload/v1761545968/istockphoto-1384700413-612x612_bhw5kp.jpg",
    },
  ];

  const headingText = "My Projects";

  return (
    <section
      id="projects"
      key={key}
      className="max-w-6xl mx-auto px-6 py-20 md:py-28 text-center overflow-x-hidden"
    >
      {/* ✨ Animated Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
        {headingText.split("").map((char, index) => (
          <Motion.span
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.05,
              duration: 0.3,
            }}
            className={char === "P" ? "text-blue-600" : ""}
          >
            {char}
          </Motion.span>
        ))}
      </h2>

      {/* 🧩 Projects Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Motion.div
            key={index}
            className="bg-blue-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl 
            transition duration-300 transform hover:-translate-y-2 overflow-hidden"
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                {project.description}
              </p>
              {project.loginInfo && (
                <p className="text-sm text-gray-500 mb-2">
                  <strong>Login:</strong> {project.loginInfo}
                </p>
              )}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-blue-300 
                    text-xs font-medium px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Stylish Button */}
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-blue-600 text-blue-600 dark:text-blue-400 
                dark:border-blue-400 font-semibold px-5 py-2 rounded-lg 
                hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 
                transition-all duration-300"
              >
                View Live
              </a>
            </div>
          </Motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
