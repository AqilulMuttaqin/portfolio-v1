import { useState, useRef, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { SOCIAL_LINKS } from "../constants";

const EMPTY_FORM = { name: "", email: "", subject: "", message: "" };

const ContactSection = () => {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef(null);
  const statusTimeout = useRef(null);

  useEffect(
    () => () => window.clearTimeout(statusTimeout.current),
    []
  );

  const handleChange = (e) => {
    setFormData((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));
  };

  const scheduleStatusReset = () => {
    window.clearTimeout(statusTimeout.current);
    statusTimeout.current = window.setTimeout(
      () => setSubmitStatus(null),
      5000
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Honeypot: real users never see this field, bots fill everything in.
    // Pretend the send succeeded so the bot gets no useful signal.
    if (formRef.current?.elements.company?.value) {
      setSubmitStatus("success");
      setFormData(EMPTY_FORM);
      scheduleStatusReset();
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      console.error("EmailJS environment variables are not set");
      setSubmitStatus("error");
      setIsSubmitting(false);
      scheduleStatusReset();
      return;
    }

    emailjs
      .sendForm(serviceID, templateID, formRef.current, publicKey)
      .then(
        () => {
          setSubmitStatus("success");
          setFormData(EMPTY_FORM);
        },
        (error) => {
          console.error("Failed to send email:", error?.text ?? error);
          setSubmitStatus("error");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
        scheduleStatusReset();
      });
  };

  return (
    <section id="contact" className="flex justify-center min-h-svh bg-white py-16">
      <div className="flex flex-col items-center justify-center text-center max-w-screen-lg mx-auto px-4 w-full">
        <div
          className="flex flex-col items-center justify-center"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-900 to-cyan-800 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="mt-1 flex flex-col items-center space-y-1">
            <div
              className="w-15 h-1 bg-gradient-to-r from-cyan-900 to-cyan-800 rounded-full"
              data-aos="zoom-in"
              data-aos-delay="150"
            ></div>
            <div
              className="w-6 h-0.5 bg-gradient-to-r from-cyan-900 to-cyan-800 rounded-full"
              data-aos="zoom-in"
              data-aos-delay="200"
            ></div>
          </div>
        </div>

        <p
          className="text-sm sm:text-base text-gray-800 my-4"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Ready to bring your ideas to life? Let&apos;s discuss how we can work
          together to create something amazing.
        </p>

        <div className="flex flex-col md:flex-row gap-12 w-full mt-8 text-left">
          {/* Social Media Section */}
          <div
            className="w-full md:w-1/2"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h3 className="text-xl sm:text-2xl text-center sm:text-left font-bold text-gray-800 mb-4">
              Connect With Me
            </h3>
            <p className="text-xs sm:text-sm text-center sm:text-left text-gray-600 mb-4">
              Follow me on social media to stay updated with my latest projects,
              tech insights, and development journey. Let&apos;s connect and
              build something great together!
            </p>

            <div className="space-y-4">
              {SOCIAL_LINKS.map(
                ({ href, name, handle, description, label, Icon }, index) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="block bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow w-full"
                    data-aos="fade-up"
                    data-aos-delay={250 + index * 80}
                  >
                    <div className="flex items-start">
                      <div className="bg-gradient-to-r from-cyan-900 to-cyan-800 p-2 sm:p-3 rounded-lg mr-4 shrink-0">
                        <Icon className="text-white text-lg sm:text-xl" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center text-xs sm:text-sm mb-1">
                          <h4 className="font-semibold text-gray-800">
                            {name}
                          </h4>
                          <p className="text-gray-500 font-medium ms-2 break-all">
                            {handle}
                          </p>
                        </div>
                        <p className="text-gray-600 text-[0.625rem] sm:text-xs">
                          {description}
                        </p>
                      </div>
                    </div>
                  </a>
                )
              )}
            </div>
          </div>

          {/* Contact Form Section */}
          <div
            className="w-full md:w-1/2"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h3 className="text-xl sm:text-2xl text-center sm:text-left font-bold text-gray-800 mb-4">
              Contact Form
            </h3>
            <p className="text-xs sm:text-sm text-center sm:text-left text-gray-600 mb-4">
              Have a project in mind? Send me a message and I&apos;ll get back
              to you as soon as possible.
            </p>

            <div
              className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow w-full"
              data-aos="zoom-in"
              data-aos-delay="250"
            >
              {/* Status Message */}
              <div aria-live="polite">
                {submitStatus === "success" && (
                  <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                    Failed to send message. Please try again or contact me
                    directly via email.
                  </div>
                )}
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot — hidden from users, catches automated submissions. */}
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute w-px h-px -m-px overflow-hidden opacity-0 pointer-events-none"
                />

                <div className="flex flex-col sm:flex-row items-start gap-2 mb-2">
                  <div className="w-full">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                    >
                      Name <span className="text-cyan-800">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      autoComplete="name"
                      className="w-full text-sm px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-800 focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="w-full">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                    >
                      Email <span className="text-cyan-800">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      autoComplete="email"
                      className="w-full text-sm px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-800 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry, collaboration, etc."
                    className="w-full text-sm px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-800 focus:border-transparent"
                  />
                </div>

                <div className="mb-2">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                  >
                    Message <span className="text-cyan-800">*</span>
                  </label>
                  <textarea
                    id="contact-message"
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
                  disabled={isSubmitting}
                  className="flex items-center justify-center px-3 py-1.5 bg-gradient-to-r from-cyan-900 to-cyan-800 text-white text-sm font-normal rounded-lg shadow-md cursor-pointer hover:from-cyan-950 hover:to-cyan-900 transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
