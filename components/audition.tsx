import React from 'react';
import Image from 'next/image';

const Audition = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 py-20 overflow-hidden text-gray-900">
      {/* Blurred background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bg-blue-300 rounded-full w-80 h-80 -top-20 -left-40 filter blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute bg-purple-300 rounded-full w-96 h-96 -bottom-40 -right-20 filter blur-3xl opacity-50 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bg-pink-300 rounded-full w-72 h-72 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 filter blur-3xl opacity-40 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
        <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight drop-shadow-sm">
          Узнайте свою аудиторию
        </h2>
        
        <div className="flex items-center justify-center mb-6 space-x-2">
          <div className="flex -space-x-2 overflow-hidden">
            <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-blue-400 text-white text-sm font-bold border-2 border-white shadow-md">A</span>
            <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-green-400 text-white text-sm font-bold border-2 border-white shadow-md">B</span>
            <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-red-400 text-white text-sm font-bold border-2 border-white shadow-md">C</span>
          </div>
          <span className="text-lg font-semibold text-gray-700">1 000 +</span>
        </div>
        
        <p className="text-gray-700 text-lg lg:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
          Отслеживайте клики, посетителей и тренды вовлеченности,
          чтобы понять, что действительно работает.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <div className="relative flex-1 sm:flex-none">
            <input
              type="text"
              placeholder="ClixBio"
              className="px-8 py-4 bg-white/90 rounded-full w-full sm:w-auto text-center text-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-purple-400 transition-all duration-300 shadow-lg hover:shadow-xl border border-purple-200"
            />
          </div>
          <button className="px-10 py-4 bg-gradient-to-r from-purple-700 to-blue-600 text-white rounded-full font-bold text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 transform-gpu hover:from-purple-600 hover:to-blue-500">
            Создать страницу
          </button>
        </div>
        
        {/* Dashboard Image */}
        <div className="relative mt-10 p-4 bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/60 transform hover:scale-105 transition-transform duration-300 mx-auto max-w-4xl hover:shadow-purple-200/50">
          <Image
            src="/dashboard.png"
            alt="Dashboard Analytics"
            width={1300}
            height={800}
            className="w-full h-auto object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Audition;