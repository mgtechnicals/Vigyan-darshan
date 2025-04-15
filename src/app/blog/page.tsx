import { metadata } from './metadata'

export { metadata }

export default function Blog() {
  return (
    <div className="min-h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 mix-blend-overlay"
        style={{
          backgroundImage: "url('/bg-pattern.png')",
          backgroundSize: '200px 200px',
        }}
      />
      <div className="container mx-auto px-4 py-24 sm:py-32 relative">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-amber-500 mb-8 sm:mb-12">
          Vigyan Darshan Blog
        </h1>
        
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-xl p-8 space-y-6">
            <div className="text-7xl mb-6">✨</div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Coming Soon
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              We are working hard to bring you fascinating articles about science, technology, and innovation. Stay tuned!
            </p>
            <div className="inline-block bg-amber-500 text-l text-gyay-100 px-4 py-2 rounded-full">
              Under Development
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
