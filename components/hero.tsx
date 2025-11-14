import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden flex items-center justify-center p-4 text-white">
      {/* Background overlay for subtle effects */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        {/* Main content - centered and animated */}
        <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg animate-fade-in-slide-up animation-delay-0.2">
          Создайте свою страницу за минуты
        </h1>

        <p className="text-lg lg:text-xl mb-10 leading-relaxed drop-shadow-md animate-fade-in-slide-up animation-delay-0.4">
          Соберите свой персональный линк-хаб менше чем за 2 минуты — без
          кода, без путаницы, только ваш стиль.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-slide-up animation-delay-0.6 w-full px-4 sm:w-auto">
          <input
            type="text"
            placeholder="Ваш ClixBio" /* Updated placeholder */
            className="px-8 py-4 bg-white/10 border border-white/20 rounded-full w-full sm:w-auto text-center text-lg text-white placeholder-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-500/60 transition-all duration-300 shadow-lg"
          />
          <button className="px-10 py-4 bg-gradient-to-r from-purple-700 to-blue-600 text-white rounded-full font-bold text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 transform-gpu hover:from-purple-600 hover:to-blue-500 focus:outline-none focus:ring-4 focus:ring-purple-500/60">
            Создать страницу
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
