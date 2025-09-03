const ContactSection = () => {
  return (
    <div id="contact" className="flex justify-center min-h-svh bg-white">
      <div className="flex flex-col items-center justify-center text-center max-w-screen-lg mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-900 to-cyan-800 bg-clip-text text-transparent">
            Contact Me
          </p>
          <div className="mt-1 flex flex-col items-center space-y-1">
            <div className="w-15 h-1 bg-gradient-to-r from-cyan-900 to-cyan-800 rounded-full"></div>
            <div className="w-6 h-0.5 bg-gradient-to-r from-cyan-900 to-cyan-800 rounded-full"></div>
          </div>
        </div>
        <p className="text-base text-gray-800 mt-4 mb-8">
          Passionate about creating innovations solutions through technology
        </p>
      </div>
    </div>
  );
};

export default ContactSection;