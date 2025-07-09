import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-[#e6b054] flex items-center justify-center px-4 py-8 sm:py-12">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl w-full max-w-6xl p-4 sm:p-6 md:p-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-6 sm:mb-10 leading-tight">
          Get in Touch with <span className="text-[#edaf44]">NexoraSolution</span>
        </h2>

        <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-10">
          
          {/* Contact Info Section */}
          <div className="w-full md:w-1/2 text-white space-y-5 text-sm sm:text-base">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">Contact Info</h3>
              <p className="text-gray-300 leading-relaxed">
                Have a question or need support? We're here to help you with your electronics journey.
              </p>
            </div>
            <div className="space-y-2">
              <p>
                <strong>Address:</strong>{' '}
                <span className="text-[#edaf44] block sm:inline">House No 1045, Street 39, Ghakkhar, Gujranwala</span>
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <span className="text-[#edaf44] block sm:inline">arehman.ansari1004@gmail.com</span>
              </p>
              <p>
                <strong>Phone:</strong>{' '}
                <span className="text-[#edaf44] block sm:inline">+92 322 5547677</span>
              </p>
            </div>
          </div>

          {/* Form Section */}
          <form className="w-full md:w-1/2 space-y-4 sm:space-y-6 text-sm sm:text-base">
            <div>
              <label className="block text-white mb-1">Your Name</label>
              <input
                type="text"
                placeholder="Abdul Rehman"
                className="w-full px-4 py-2 bg-white/20 border border-white/30 text-white rounded-xl placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-[#bba630de]"
              />
            </div>
            <div>
              <label className="block text-white mb-1">Email Address</label>
              <input
                type="email"
                placeholder="arehman@example.com"
                className="w-full px-4 py-2 bg-white/20 border border-white/30 text-white rounded-xl placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-[#bba630de]"
              />
            </div>
            <div>
              <label className="block text-white mb-1">Your Message</label>
              <textarea
                rows="4"
                placeholder="Type your message..."
                className="w-full px-4 py-2 bg-white/20 border border-white/30 text-white rounded-xl placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-[#bba630de]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#e6b054] to-black text-white font-semibold py-2 rounded-xl hover:opacity-90 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
