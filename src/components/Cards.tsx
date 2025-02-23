// import Image from 'next/image';
import React from 'react';

const Cards = () => {
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-20 p-6">
        {/* Card 1 */}
        <div className="border rounded-lg p-6 text-center backdrop-blur-xs shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex justify-center mb-4 p-10 px-4">
            {/* <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full">
              <Image width={200} height={200} src="https://via.placeholder.com/40" alt="Icon" />
            </div> */}
          </div>
          <h2 className="text-3xl text-red-100 font-bold p-2"></h2>
          <p className="text-amber-500 uppercase text-xl font-semibold">Advanced R&D Center</p>
        </div>

        {/* Card 2 */}
        <div className="border rounded-lg p-6 text-center backdrop-blur-xs shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex justify-center mb-4 p-10">
            {/* <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full">
              <Image width={200} height={200} src="https://via.placeholder.com/40" alt="Icon" />
            </div> */}
          </div>
          {/* <h2 className="text-3xl text-red-100 font-bold p-2">5</h2> */}
          <p className="text-amber-500 uppercase text-xl font-semibold">Years of Experience</p>
        </div>

        {/* Card 3 */}
        <div className="border rounded-lg p-6 text-center backdrop-blur-xs shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex justify-center mb-4 p-10">
            {/* <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full">
              <Image width={200} height={200} src="https://via.placeholder.com/40" alt="Icon" />
            </div> */}
          </div>
          {/* <h2 className="text-3xl text-red-100 font-bold p-2">100%</h2> */}
          <p className="text-amber-500 uppercase text-xl font-semibold">Motivated Staff</p>
        </div>

        {/* Card 4 */}
        <div className="border rounded-lg p-6 text-center backdrop-blur-xs shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex justify-center mb-4 p-10">
            {/* <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full">
              <Image width={200} height={200} src="https://via.placeholder.com/40" alt="Icon" />
            </div> */}
          </div>
          {/* <h2 className="text-3xl text-red-100 font-bold p-2">50+</h2> */}
          <p className="text-amber-500 uppercase text-xl font-semibold">Advisory Members</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
