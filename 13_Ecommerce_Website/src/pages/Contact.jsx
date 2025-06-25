import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-[#e6b054] flex items-center justify-center px-4 py-10 ">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-10 w-full max-w-5xl">
        <h2 className="text-4xl font-bold text-white text-center mb-10">Get in Touch with <span className="text-[#edaf44]">NexoraSolution</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="text-white space-y-6">
            <div>
              <h3 className="text-2xl font-semibold">Contact Info</h3>
              <p className="text-gray-300">Have a question or need support? We're here to help you with your electronics journey.</p>
            </div>
            <div>
              <p><strong>Address:</strong> <span className='text-[#edaf44]'>House No 1045 ,Street 39 ,Ghakkhar,Gujranwala</span></p>
              <p><strong>Email:</strong> <span className='text-[#edaf44]'>arehman.ansari1004@gmail.com</span></p>
              <p><strong>Phone:</strong> <span className='text-[#edaf44]'>+923225547677</span></p>
            </div>
          </div>

          {/* Form Section */}
          <form className="space-y-6">
            <div>
              <label className="block text-white mb-1">Your Name</label>
              <input type="text" placeholder="Abdul Rehman" className="w-full px-4 py-2 bg-white/20 border border-white/30 text-white rounded-xl placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-[#bba630de]" />
            </div>
            <div>
              <label className="block text-white mb-1">Email Address</label>
              <input type="email" placeholder="arehman@example.com" className="w-full px-4 py-2 bg-white/20 border border-white/30 text-white rounded-xl placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-[#bba630de]" />
            </div>
            <div>
              <label className="block text-white mb-1">Your Message</label>
              <textarea rows="4" placeholder="Type your message..." className="w-full px-4 py-2 bg-white/20 border border-white/30 text-white rounded-xl placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-[#bba630de] "></textarea>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-[#e6b054] to-black text-white font-semibold py-2 rounded-xl hover:opacity-90 transition-all duration-300">
              Send Message 
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;