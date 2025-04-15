"use client"
import { useState, JSX } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaYoutube, FaFlask, FaBlog, FaLightbulb, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface CardData {
  title: string;
  icon: JSX.Element;
}

const Cards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards: CardData[] = [
    {
      title: "Separate R&D Center",
      icon: <FaFlask className="text-5xl text-blue-500" />
    },
    {
      title: "Informative Blogs & Articles",
      icon: <FaBlog className="text-5xl text-green-500" />
    },
    {
      title: "Vigyan Darshan YouTube",
      icon: <FaYoutube className="text-5xl text-red-500" />
    },
    {
      title: "Innovative Research Projects",
      icon: <FaLightbulb className="text-5xl text-yellow-500" />
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto py-12 px-4">
      {/* Desktop View - All cards in a grid */}
      <div className="hidden lg:grid grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-lg p-10 hover:shadow-2xl transition-all duration-300 aspect-square flex items-center justify-center cursor-pointer"
          >
            <div className="flex flex-col items-center text-center space-y-8">
              {card.icon}
              <h2 className="text-xl font-semibold text-white">{card.title}</h2>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile View - Carousel */}
      <div className="lg:hidden relative px-12"> {/* Added px-12 for arrow spacing */}
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-lg p-10 aspect-square flex items-center justify-center mx-auto max-w-[320px]"
            >
              <div className="flex flex-col items-center text-center space-y-8">
                {cards[currentIndex].icon}
                <h2 className="text-xl font-semibold text-white">{cards[currentIndex].title}</h2>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={() => setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length)}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-amber-700 p-3 rounded-full shadow-lg hover:bg-amber-600 transition-all duration-300 text-white"
        >
          <FaChevronLeft className="text-xl" />
        </button>
        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % cards.length)}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-amber-700 p-3 rounded-full shadow-lg hover:bg-amber-600 transition-all duration-300 text-white"
        >
          <FaChevronRight className="text-xl" />
        </button>

        <div className="flex justify-center mt-4 gap-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full ${
                index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;