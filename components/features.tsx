import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

const phones = [
  {
    id: 1,
    image: '/iphone1.png',
    alt: 'Pink gradient profile',
  },
  {
    id: 2,
    image: '/iphone2.png',
    alt: 'Nuna Beauty profile',
  },
  {
    id: 3,
    image: '/iphone3.png',
    alt: 'Dark profile',
  },
  {
    id: 4,
    image: '/iphone4.png',
    alt: 'Teal gradient profile',
  },
];

const Features = () => {
  const [activePhone, setActivePhone] = useState(1);

  return (
    <section className="relative min-h-screen py-32 overflow-hidden bg-gradient-to-b from-white via-purple-50 to-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-300 to-purple-300 rounded-full filter blur-3xl opacity-15 animate-pulse animation-delay-1"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Dynamic Layered iPhones */}
          <div className="relative w-full max-w-md mx-auto h-[600px] flex items-center justify-center p-4">
            {phones.map((phone, index) => (
              <Image 
                key={phone.id}
                src={phone.image} 
                alt={phone.alt}
                layout="fill"
                objectFit="contain"
                className={`absolute w-64 h-[450px] md:w-72 md:h-[500px] shadow-2xl transition-all duration-700 ease-in-out
                  ${index === activePhone - 1
                    ? 'z-30 scale-100 opacity-100 translate-x-0 translate-y-0 rotate-0'
                    : 'z-10 scale-90 opacity-60 pointer-events-none'}
                  ${index === activePhone - 2 ? '-translate-x-20 -translate-y-10 rotate-6 blur-sm' : ''}
                  ${index === activePhone ? 'translate-x-20 translate-y-10 -rotate-6 blur-sm' : ''}
                  ${index < activePhone - 2 || index > activePhone ? 'hidden' : ''}
                `}
                style={{
                  left: '50%',
                  transform: `translateX(-50%) ${index === activePhone - 1 ? '' : ''}
                            ${index === activePhone - 2 ? 'translateX(-80px) translateY(-40px) rotate(6deg) scale(0.9)' : ''}
                            ${index === activePhone ? 'translateX(80px) translateY(40px) rotate(-6deg) scale(0.9)' : ''}`,
                  transition: 'all 0.7s ease-in-out',
                }}
              />
            ))}

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 flex space-x-3">
              {phones.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActivePhone(index + 1)}
                  className={`w-3 h-3 rounded-full transition-all duration-300
                    ${activePhone === index + 1 ? 'bg-purple-600 scale-125' : 'bg-gray-400 hover:bg-gray-500'}`}
                ></button>
              ))}
            </div>

          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-1 space-y-8 text-center lg:text-left pt-10 lg:pt-0">
            {/* Heading */}
            <div className="space-y-4">
              <div className="inline-block lg:block">
                <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-bold mb-4 shadow-md">Кастомизация</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-extrabold bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight drop-shadow-sm">
                Настройте каждый элемент
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto lg:mx-0"></div>
            </div>

            {/* Description */}
            <div className="space-y-6 text-base text-gray-700">
              <p className="leading-relaxed font-medium">
                Выбирайте макеты, шрифты и фоны, которые отражают вашу индивидуальность — от минимализма до яркости.
              </p>

              <p className="leading-relaxed">
                Посмотрите, как наши пользователи оформляют свои страницы. Каждый профиль уникален: от минимализма и строгих бизнес-страниц до ярких креативных страниц со ссылками и контентом.
              </p>

              <p className="leading-relaxed">
                Создайте стиль, который будет выделять именно вас — используйте готовые шаблоны или настройте всё под себя.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-8 space-y-6">
              <div>
                <p className="text-sm font-bold text-purple-700 mb-4">Попробовать бесплатно</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <input
                    type="text"
                    placeholder="yourname"
                    defaultValue="ClixBio"
                    className="flex-1 px-6 py-3 bg-gray-100 border-2 border-purple-300 rounded-full focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-gray-800 font-medium transition-all duration-300 shadow-lg"
                  />
                  <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full font-bold shadow-xl hover:shadow-2xl hover:shadow-purple-400/50 transition-all duration-300 flex items-center gap-2 justify-center group hover:scale-105 active:scale-95">
                    Создать
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="pt-6 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-600">
              <div className="flex -space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full border-2 border-white shadow-md"></div>
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full border-2 border-white shadow-md"></div>
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full border-2 border-white shadow-md"></div>
              </div>
              <span className="text-sm">Присоединились <span className="font-bold text-gray-800">5000+</span> пользователей</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;