import Image from 'next/image'
import React from 'react'

const CommingSoon = () => {
  return (
    <div className="bg-gray-900 dark:bg-gray-800">
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-2xl w-full px-4">
          <div className="hover:animate-none transition-all flex justify-center mb-8">
            <Image
              src="/logo.png"
              alt="Vigyan Darshan Logo - Exploring Science, Philosophy & Spirituality"
              width={150}
              height={150}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 drop-shadow-2xl transition-transform duration-500 hover:rotate-180"
              priority
              loading="eager"
            />
          </div>
          <h1 className='text-6xl font-bold text-center mb-8 text-amber-500 dark:text-white'>
            Vigyan Darshan
          </h1>
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-100 dark:text-white">
            Coming Soon!.....
          </h1>
          <p className="text-lg text-gray-100 dark:text-gray-300 text-center mb-12">
            Our website is under construction.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CommingSoon
