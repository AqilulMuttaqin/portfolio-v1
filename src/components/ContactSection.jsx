import { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add your form submission logic here (e.g., API call)
  };

  return (
    <div id="contact" className="flex justify-center min-h-svh bg-white py-16">
      <div className="flex flex-col items-center justify-center text-center max-w-screen-lg mx-auto px-4 w-full">
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-900 to-cyan-800 bg-clip-text text-transparent">
            Get In Touch
          </p>
          <div className="mt-1 flex flex-col items-center space-y-1">
            <div className="w-15 h-1 bg-gradient-to-r from-cyan-900 to-cyan-800 rounded-full"></div>
            <div className="w-6 h-0.5 bg-gradient-to-r from-cyan-900 to-cyan-800 rounded-full"></div>
          </div>
        </div>
        <p className="text-sm sm:text-base text-gray-800 my-4">
          Ready to bring your ideas to life? Let's discuss how we can work
          together to create something amazing.
        </p>

        <div className="flex flex-col md:flex-row gap-12 w-full mt-8 text-left">
          {/* Social Media Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-xl sm:text-2xl text-center sm:text-left font-bold text-gray-800 mb-4">
              Connect With Me
            </h2>
            <p className="text-xs sm:text-sm text-center sm:text-left text-gray-600 mb-4">
              Follow me on social media to stay updated with my latest projects,
              tech insights, and development journey. Let's connect and build
              something great together!
            </p>

            <div className="space-y-4">
              {/* LinkedIn */}
              <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition w-full">
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-cyan-900 to-cyan-800 p-2 sm:p-3 rounded-lg mr-4">
                    <FaLinkedin className="text-white text-lg sm:text-xl" />
                  </div>
                  <div>
                    <div className="flex items-center text-xs sm:text-sm mb-1">
                      <h3 className="font-semibold text-gray-800">LinkedIn</h3>
                      <p className="text-gray-500 font-medium ms-2">
                        @muhammad-aqilul-muttaqin
                      </p>
                    </div>
                    <p className="text-gray-600 text-[0.625rem] sm:text-xs">
                      Connect with me professionally and see my career journey
                    </p>
                  </div>
                </div>
              </div>

              {/* GitHub */}
              <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition w-full">
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-cyan-900 to-cyan-800 p-2 sm:p-3 rounded-lg mr-4">
                    <FaGithub className="text-white text-lg sm:text-xl" />
                  </div>
                  <div>
                    <div className="flex items-center text-xs sm:text-sm mb-1">
                      <h3 className="font-semibold text-gray-800">GitHub</h3>
                      <p className="text-gray-500 font-medium ms-2">
                        @aqilulmuttaqin
                      </p>
                    </div>
                    <p className="text-gray-600 text-[0.625rem] sm:text-xs">
                      Check out my latest projects and open source contributions
                    </p>
                  </div>
                </div>
              </div>

              {/* Instagram */}
              <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition w-full">
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-cyan-900 to-cyan-800 p-2 sm:p-3 rounded-lg mr-4">
                    <FaInstagram className="text-white text-lg sm:text-xl" />
                  </div>
                  <div>
                    <div className="flex items-center text-xs sm:text-sm mb-1">
                      <h3 className="font-semibold text-gray-800">Instagram</h3>
                      <p className="text-gray-500 font-medium ms-2">
                        @aql_mtqn
                      </p>
                    </div>
                    <p className="text-gray-600 text-[0.625rem] sm:text-xs">
                      Behind the scenes of my development journey
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-xl sm:text-2xl text-center sm:text-left font-bold text-gray-800 mb-4">
              Contact Form
            </h2>
            <p className="text-xs sm:text-sm text-center sm:text-left text-gray-600 mb-4">
              Have a project in mind? Send me a message and I'll get back to you
              as soon as possible.
            </p>

            <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition w-full">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col sm:flex-row items-center gap-2 mb-2">
                  <div className="w-full">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      Name <span className="text-cyan-800">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full text-sm px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-800 focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="w-full">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-cyan-800">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full text-sm px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-800 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry, collaboration, etc."
                    className="w-full text-sm px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-800 focus:border-transparent"
                  />
                </div>

                <div className="mb-2">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-cyan-800">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell me about your project, requirements, timeline, and budget..."
                    className="w-full text-sm px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-800 focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center px-3 py-1.5 bg-gradient-to-r from-cyan-900 to-cyan-800 text-white text-sm font-normal rounded-lg shadow-md hover:from-cyan-950 hover:to-cyan-900 transition-colors duration-300"
                >
                  <FaPaperPlane className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
