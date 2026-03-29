import React from "react";

const OfficeBearersCard = ({ officeBearers }) => {
  return (
    <div className="bg-box-color rounded-2xl shadow-lg overflow-hidden w-full max-w-4xl mx-auto p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      {officeBearers.map((bearer, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } ${index > 0 ? "mt-10" : ""}`}
        >
          {/* Photo Section */}
          <div className="w-48 h-48 rounded-lg overflow-hidden shadow-md">
            <img
              className="w-full h-full object-cover object-[center_30%] hover:scale-110 transition duration-300"
              src={bearer.photo}
              alt={bearer.name}
            />
          </div>

          {/* Content Section */}
          <div
            className={`w-full md:w-2/3 mt-6 md:mt-0 text-center md:text-left ${
              index % 2 !== 0 ? "md:pr-6" : "md:pl-6"
            }`}
          >
            {/* Designation */}
            <div className="bg-blue-col px-4 py-2 rounded-lg shadow-md inline-block">
              <p className="text-lg font-semibold">
                {bearer.designation}
              </p>
            </div>

            {/* Name */}
            <h2 className="text-2xl font-bold text-gray-800 mt-4">
              {bearer.name}
            </h2>

            {/* About */}
            <p className="text-gray-600 text-lg mt-3">
              {bearer.about}
            </p>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-4 mt-5">
              <a href={bearer.linkedin} target="_blank" rel="noopener noreferrer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="LinkedIn"
                  className="w-8 h-8 hover:scale-110 transition"
                />
              </a>
              <a href={bearer.instagram} target="_blank" rel="noopener noreferrer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                  alt="Instagram"
                  className="w-8 h-8 hover:scale-110 transition"
                />
              </a>
              <a href={bearer.whatsapp} target="_blank" rel="noopener noreferrer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/220/220236.png"
                  alt="WhatsApp"
                  className="w-8 h-8 hover:scale-110 transition"
                />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OfficeBearersCard;