// import Image from 'next/image';
import React from 'react';

const Cards = () => {
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-20 p-6">
        {/* Card 1 */}
        <div className="border rounded-lg p-6 text-center backdrop-blur-xs shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <p className="text-amber-500 uppercase text-xl font-semibold">Seperate R&D Center</p>
        </div>

        {/* Card 2 */}
        <div className="border rounded-lg p-6 text-center backdrop-blur-xs shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <p className="text-amber-500 uppercase text-xl font-semibold">Information Blogs & Articles</p>
        </div>

        {/* Card 3 */}
        <div className="border rounded-lg p-6 text-center backdrop-blur-xs shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <p className="text-amber-500 uppercase text-xl font-semibold">Vigyan Darshan Youtube Channel</p>
        </div>

        {/* Card 4 */}
        <div className="border rounded-lg p-6 text-center backdrop-blur-xs shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <p className="text-amber-500 uppercase text-xl font-semibold">Advisory Members</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
