import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden flex items-center justify-center p-4">
      {/* Liquid Glass Background */}
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bg-purple-300 rounded-full w-96 h-96 -top-20 -left-40 filter blur-3xl opacity-50 animate-blob-float"></div>
        <div className="absolute bg-pink-300 rounded-full w-96 h-96 -bottom-20 -right-40 filter blur-3xl opacity-50 animate-blob-float animation-delay-1"></div>
        <div className="absolute bg-blue-300 rounded-full w-96 h-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 filter blur-3xl opacity-40 animate-blob-float animation-delay-2"></div>
      </div>

      {/* Unified Glassmorphism Container */}
      <div className="relative z-10 container mx-auto bg-white/20 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/30 shadow-2xl max-w-6xl">
        <div className="flex flex-col items-center justify-center h-full text-center gap-10">
          {/* Main content - centered */}
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight drop-shadow-md animate-fade-in-slide-up">
              Создайте свою страницу за минуты
            </h1>

            <p className="text-gray-700 text-lg lg:text-xl mb-10 leading-relaxed animate-fade-in-slide-up animation-delay-1">
              Соберите свой персональный линк-хаб менше чем за 2 минуты — без
              кода, без путаницы, только ваш стиль.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <input
                type="text"
                placeholder="ClixBio\"
                className="px-8 py-4 bg-white/80 rounded-full w-full sm:w-auto text-center text-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-purple-500/50 transition-all duration-300 shadow-md"
              />
              <button className="px-10 py-4 bg-gradient-to-r from-purple-700 to-blue-600 text-white rounded-full font-bold text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 transform-gpu">
                Создать страницу
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
