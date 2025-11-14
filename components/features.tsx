import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const CustomizeSection = () => {
  const [activePhone, setActivePhone] = useState(1);

  const phones = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=300&h=600&fit=crop',
      alt: 'Pink gradient profile',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=300&h=600&fit=crop',
      alt: 'Nuna Beauty profile',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=300&h=600&fit=crop',
      alt: 'Dark profile',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=300&h=600&fit=crop',
      alt: 'Teal gradient profile',
    },
  ];

  const activePhoneData = phones.find(p => p.id === activePhone);

  return (
    <section className="relative min-h-screen py-32 overflow-hidden bg-gradient-to-b from-white via-purple-50 to-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-300 to-purple-300 rounded-full filter blur-3xl opacity-15"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column - 4 Phone Thumbnails */}
          <div className="lg:col-span-2 flex lg:flex-col gap-4 lg:gap-6 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
            {phones.map((phone) => (
              <div
                key={phone.id}
                onClick={() => setActivePhone(phone.id)}
                className={`flex-shrink-0 cursor-pointer transition-all duration-500 transform ${
                  activePhone === phone.id
                    ? 'scale-100 ring-3 ring-purple-500 ring-offset-2'
                    : 'scale-85 opacity-60 hover:opacity-80 hover:scale-90'
                }`}
              >
                <div className="relative w-24 lg:w-28 h-48 lg:h-56 rounded-3xl overflow-hidden shadow-lg border-4 border-gray-900 bg-gray-200">
                  <img 
                    src={phone.image} 
                    alt={phone.alt}
                    className="w-full h-full object-cover"
                  />
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-3 bg-black rounded-b-lg z-20"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Center Column - Featured Phone */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative perspective">
              {/* Phone Frame */}
              <div className={`relative transition-all duration-500 drop-shadow-2xl`}>
                {/* Main Phone Body */}
                <div className="relative w-64 lg:w-80 rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-900 bg-gray-200">
                  {/* Actual Image Screenshot */}
                  <img 
                    src={activePhoneData.image}
                    alt={activePhoneData.alt}
                    className="w-full h-full object-cover aspect-[9/19]"
                  />
                  
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-20"></div>

                  {/* Camera */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-800 rounded-full z-30"></div>

                  {/* Home Indicator */}
                  <div className="absolute bottom-3 w-32 h-1.5 bg-gray-900 rounded-full z-20"></div>
                </div>

                {/* Glossy Shine Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white via-transparent to-transparent opacity-30 pointer-events-none border-8 border-transparent"></div>

                {/* Shadow underneath */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-72 h-10 bg-black/25 rounded-full filter blur-2xl"></div>
              </div>

              {/* Floating particles around phone */}
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-purple-300 rounded-full opacity-20 filter blur-2xl"></div>
              <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-blue-300 rounded-full opacity-15 filter blur-3xl"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-5 space-y-8">
            {/* Heading */}
            <div className="space-y-4">
              <div className="inline-block">
                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-semibold mb-4">Кастомизация</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-black bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                Настройте каждый элемент
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
            </div>

            {/* Description */}
            <div className="space-y-5 text-lg">
              <p className="text-gray-700 leading-relaxed font-medium">
                Выбирайте макеты, шрифты и фоны, которые отражают вашу индивидуальность — от минимализма до яркости.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Посмотрите, как наши пользователи оформляют свои страницы. Каждый профиль уникален: от минимализма и строгих бизнес-страниц до ярких креативных страниц со ссылками и контентом.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Создайте стиль, который будет выделять именно вас — используйте готовые шаблоны или настройте всё под себя.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-6 space-y-5">
              <div>
                <p className="text-sm font-semibold text-purple-600 mb-4">Попробовать бесплатно</p>
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="yourname"
                    defaultValue="ClixBio"
                    className="flex-1 px-6 py-4 bg-gray-100 border-2 border-transparent rounded-full focus:outline-none focus:border-purple-500 focus:bg-white text-gray-800 font-medium transition-all duration-300"
                  />
                  <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-full font-bold shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2 group hover:scale-105 active:scale-95">
                    Создать
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="pt-4 flex items-center gap-3 text-sm text-gray-600">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full border-2 border-white"></div>
              </div>
              <span>Присоединились <span className="font-bold text-gray-800">5000+</span> пользователей</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizeSection;