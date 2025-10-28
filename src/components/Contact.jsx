import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [key, setKey] = useState(0); // 👈 to re-trigger animation

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#contact") {
        setKey(prev => prev + 1);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email address";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const subject = encodeURIComponent("Frontend Developer Inquiry");
    const body = encodeURIComponent(
      `Hi Ramanarayana,\n\nMy name is ${formData.name}.\n\n${formData.message}\n\nYou can reach me at: ${formData.email}`
    );
    window.location.href = `mailto:ramanarayana1228@gmail.com?subject=${subject}&body=${body}`;
  };

  const headingText = "Get In Touch";

  return (
    <section
      id="contact"
      key={key}
      className="max-w-6xl mx-auto px-6 py-20 text-center 
      bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Animated Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 dark:text-white">
        {headingText.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.05,
              duration: 0.3,
            }}
            className={char === "T" ? "text-blue-600" : ""}
          >
            {char}
          </motion.span>
        ))}
      </h2>

      <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
        I’m currently open to exciting projects and frontend opportunities.
        Whether it’s a job, collaboration, or just a quick chat — feel free to
        reach out!
      </p>

      {/* Contact Info */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
        <div className="flex items-center space-x-3 text-gray-800 dark:text-gray-200">
          <FaEnvelope className="text-blue-600 text-xl" />
          <a
            href="mailto:ramanarayana1228@gmail.com"
            className="hover:text-blue-600 transition"
          >
            ramanarayana1228@gmail.com
          </a>
        </div>
        <div className="flex items-center space-x-3 text-gray-800 dark:text-gray-200">
          <FaLinkedin className="text-blue-600 text-xl" />
          <a
            href="https://www.linkedin.com/in/k-ramanarayana"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            linkedin.com/in/k-ramanarayana
          </a>
        </div>
        <div className="flex items-center space-x-3 text-gray-800 dark:text-gray-200">
          <FaMapMarkerAlt className="text-blue-600 text-xl" />
          <span>Mandapeta, Andhra Pradesh</span>
        </div>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-blue-50 dark:bg-gray-800 p-8 rounded-xl shadow-md"
      >
        {/* Name */}
        <div className="mb-4 text-left">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-900 
            text-gray-800 dark:text-gray-100"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4 text-left">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-900 
            text-gray-800 dark:text-gray-100"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Message */}
        <div className="mb-4 text-left">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Message
          </label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message..."
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-900 
            text-gray-800 dark:text-gray-100"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          className="relative px-8 py-3 text-white font-semibold rounded-lg
          bg-gradient-to-r from-blue-500 to-indigo-600 
          hover:from-indigo-500 hover:to-blue-500 
          shadow-md hover:shadow-blue-400/50 transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
