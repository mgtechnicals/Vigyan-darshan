import React from 'react';

const Cards = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {/* Card 1 */}
        <div className="relative bg-white/10 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-xl p-8 
                      shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-2
                      hover:border-amber-500/50 group">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl opacity-0 
                        group-hover:opacity-100 transition-opacity duration-300"></div>
          <p className="text-amber-500 uppercase text-xl font-bold relative z-10 tracking-wide text-center">
            Seperate R&D Center
          </p>
        </div>

        {/* Card 2 */}
        <div className="relative bg-white/10 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-xl p-8 
                      shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-2
                      hover:border-amber-500/50 group">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl opacity-0 
                        group-hover:opacity-100 transition-opacity duration-300"></div>
          <p className="text-amber-500 uppercase text-xl font-bold relative z-10 tracking-wide text-center">
            Information Blogs & Articles
          </p>
        </div>

        {/* Card 3 */}
        <div className="relative bg-white/10 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-xl p-8 
                      shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-2
                      hover:border-amber-500/50 group">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl opacity-0 
                        group-hover:opacity-100 transition-opacity duration-300"></div>
          <p className="text-amber-500 uppercase text-xl font-bold relative z-10 tracking-wide text-center">
            Vigyan Darshan Youtube Channel
          </p>
        </div>

        {/* Card 4 */}
        <div className="relative bg-white/10 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-xl p-8 
                      shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-2
                      hover:border-amber-500/50 group">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl opacity-0 
                        group-hover:opacity-100 transition-opacity duration-300"></div>
          <p className="text-amber-500 uppercase text-xl font-bold relative z-10 tracking-wide text-center">
            Innovative Research
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
