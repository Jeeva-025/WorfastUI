import React from 'react';

const Module = ({ moduleKey, type, data }) => {
  console.log(moduleKey);

  // Check if moduleKey is odd or even
  const isOdd = moduleKey % 2 !== 0;

  return (
    <div className="mt-2 md:mt-10 flex flex-col lg:flex lg:flex-row lg:justify-around lg:items-center lg:space-x-10">
      {isOdd ? (
        // If moduleKey is odd, render video first, then the content
        <>
          {/* Right Video Section */}
          <div className="order-2 py-2 md:py-10 lg:py-20 w-full xl:order-1 flex-1 xl:max-w-lg xl:py-0">
            <div className="relative rounded-lg overflow-hidden shadow-lg bg-pink-100 p-4 ">
              <video
                className="w-full h-74 rounded-lg"
                src="/videos/channel1.mp4"
                autoPlay
                loop
                muted
                playsInline
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          {/* Left Content Section */}
          <div className="order-1 xl:order-2 flex flex-col">
            <div className="flex space-x-3 items-start justify-start">
              <div className="border border-red-100 rounded-md bg-red-100 px-2">
                <p className="text-red-900">#</p>
              </div>
              <h3 className="text-2xl font-bold mb-8 text-black-800">{type}</h3>
            </div>
            <div className="mt-3 flex flex-col space-y-3">
              {data[type].map((item, index) => (
                <div
                  key={index}
                  className="bg-white px-2 py-4 shadow-lg rounded-md flex items-center space-x-3"
                >
                  <div className="text-red-600">
                    {item.icon && React.createElement(item.icon)}
                  </div>
                  <div>
                    <h2 className="text-md text-gray-900">{item.title}</h2>
                    <p className="text-xs text-gray-600">{item.para}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        // If moduleKey is even, render content first, then the video
        <>
          {/* Left Content Section */}
          <div className=" order-1  flex flex-col">
            <div className="flex space-x-3 items-start justify-start">
              <div className="border border-red-100 rounded-md bg-red-100 px-2">
                <p className="text-red-900">#</p>
              </div>
              <h3 className="text-2xl font-bold mb-8 text-black-800">{type}</h3>
            </div>
            <div className="mt-3 flex flex-col space-y-3">
              {data[type].map((item, index) => (
                <div
                  key={index}
                  className="bg-white px-2 py-4 shadow-lg rounded-md flex items-center space-x-3"
                >
                  <div className="text-red-600">
                    {item.icon && React.createElement(item.icon)}
                  </div>
                  <div>
                    <h2 className="text-md text-gray-900">{item.title}</h2>
                    <p className="text-xs text-gray-600">{item.para}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right Video Section */}
          <div className="order-2 py-2 md:py-10 lg:py-20 w-full flex-1 xl:max-w-lg xl:py-0">
            <div className="relative rounded-lg overflow-hidden shadow-lg bg-pink-100 p-4">
              <video
                className="w-full h-74 rounded-lg"
                src="/videos/channel1.mp4"
                autoPlay
                loop
                muted
                playsInline
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Module;