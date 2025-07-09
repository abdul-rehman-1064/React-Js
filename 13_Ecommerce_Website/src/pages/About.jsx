import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-8 dark:bg-[#111111] dark:text-white">
        
        {/* Title Section */}
        <div className="text-center sm:text-center">
          <Link
            to="/"
            className="flex flex-col sm:flex-row justify-center items-center font-bold text-3xl sm:text-4xl"
          >
            About
            <span className="ml-2 text-[#efb653]">NexoraSolutions</span>
          </Link>
        </div>

        {/* Intro Paragraph */}
        <p className="text-gray-700 text-base sm:text-lg dark:text-white text-center sm:text-left">
          Welcome to{" "}
          <span className="font-semibold text-[#efb653]">NexoraSolutions</span>,
          your one-stop destination for the latest and greatest in electronics.
          From cutting-edge gadgets to must-have accessories, we’re here to
          power up your tech life with premium products and unbeatable service.
        </p>

        {/* Our Mission */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#efb653]">
            Our Mission
          </h2>
          <p className="text-gray-700 text-sm sm:text-base dark:text-white">
            At Nexora, our mission is to make innovative technology accessible
            to everyone. We’re passionate about connecting people with the tools
            and tech they need to thrive in a digital world — all at competitive
            prices and delivered with speed and care.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#efb653]">
            Why Choose NexoraSolutions?
          </h2>
          <ul className="list-disc pl-5 sm:pl-6 text-gray-700 space-y-2 dark:text-white text-sm sm:text-base">
            <li>Top-quality electronic products from trusted brands</li>
            <li>Lightning-fast and secure shipping</li>
            <li>Reliable customer support, always ready to help</li>
            <li>Easy returns and hassle-free shopping experience</li>
          </ul>
        </div>

        {/* Vision */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#efb653]">
            Our Vision
          </h2>
          <p className="text-gray-700 text-sm sm:text-base dark:text-white">
            We envision a future where technology elevates everyday life. At
            Nexora, we’re committed to staying ahead of the curve, offering
            cutting-edge solutions that are both practical and affordable.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 sm:mt-10">
          <h3 className="text-lg sm:text-xl font-semibold text-[#efb653] mb-2">
            Join the Nexora Family
          </h3>
          <p className="text-gray-700 mb-4 dark:text-white text-sm sm:text-base">
            Whether you’re a tech enthusiast, a professional, or just looking
            for something cool and functional — Nexora has something for
            everyone.
          </p>
          <Link to={"/products"}>
            <button className="bg-[#efb653] text-white px-6 py-2 rounded-xl hover:bg-[#FFCB74] transition duration-300 text-sm sm:text-base">
              Start Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
