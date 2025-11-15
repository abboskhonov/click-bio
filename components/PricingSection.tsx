import React from 'react';
import Image from 'next/image';

const PricingSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-white min-h-screen flex items-center justify-center">
      {/* Background gradient effect */}
      <div className="absolute inset-0 z-0 radial-gradient-pricing"></div>

      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Section - Main Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight mb-6">
              ОДИН ТАРИФ ВСЁ<br />ВКЛЮЧЕНО
            </h2>
            <p className="text-gray-600 text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
              Получите доступ ко всем профессиональным инструментам
              и экономьте больше с долгосрочными планами — просто,
              прозрачно, выгодно.
            </p>

            {/* Input and button container */}
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto lg:mx-0 pt-4">
              <input
                type="text"
                placeholder="ClixBio\"
                className="flex-grow px-6 py-4 text-base border-2 border-gray-300 rounded-full focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition duration-300 bg-white font-medium text-gray-700 shadow-sm placeholder-gray-400"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-600 text-white font-extrabold rounded-full shadow-lg hover:shadow-xl hover:from-purple-600 hover:via-blue-600 hover:to-indigo-700 transition duration-300 whitespace-nowrap transform hover:-translate-y-1 active:translate-y-0 active:shadow-md">
                Создать страницу
              </button>
            </div>
          </div>

          {/* Right Section - Features and Illustration */}
          <div className="relative mt-16 lg:mt-0">
            {/* Line illustration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 700 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 450 C 200 300, 500 200, 650 50" stroke="url(#gradient-line)" strokeWidth="4" strokeLinecap="round" />
                <defs>
                  <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a78bfa" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Feature Cards */}
            <div className="relative space-y-8">
              {/* Выгодно Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm ml-auto mr-10 relative z-10 transform translate-x-10 -translate-y-20">
                <h3 className="text-xl font-bold text-gray-800 mb-2">ВЫГОДНО</h3>
                <p className="text-gray-600">Один Тариф Даёт Доступ Ко Всем Функциям Сразу</p>
              </div>

              {/* Просто Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm relative z-10 transform -translate-x-10 translate-y-10">
                <h3 className="text-xl font-bold text-gray-800 mb-2">ПРОСТО</h3>
                <p className="text-gray-600">Всё Работает Интуитивно: Никаких Сложных Настроек</p>
              </div>

              {/* Прозрачно Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm ml-auto mr-0 relative z-10 transform translate-x-10 translate-y-40">
                <h3 className="text-xl font-bold text-gray-800 mb-2">ПРОЗРАЧНО</h3>
                <p className="text-gray-600">Без Скрытых Комиссий И Мелкого Шрифта</p>
              </div>
            </div>

            {/* Message PNG */}
            <div className="absolute -bottom-20 right-1/2 translate-x-1/2 w-48 h-48 pointer-events-none z-0">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
