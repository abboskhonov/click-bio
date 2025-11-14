import React from 'react';
import Image from 'next/image';

const ContactSection = () => {
  return (
    <section className="relative bg-white py-20 md:py-32 overflow-hidden text-gray-900">
      {/* Blurred background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 left-1/4 w-80 h-80 bg-purple-300 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-blue-300 rounded-full filter blur-3xl opacity-20 animate-pulse animation-delay-1"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl">
        {/* Left Column - Text Content */}
        <div className="text-center lg:text-left">
          <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight drop-shadow-sm">
            БУДЬТЕ НА СВЯЗИ
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4 max-w-xl lg:max-w-none mx-auto lg:mx-0">
            Позвольте поклонникам и клиентам связаться с вами напрямую
            через формы обратной связи или кнопки сообщений.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-xl lg:max-w-none mx-auto lg:mx-0">
            Создайте простой и удобный способ коммуникации: посетители
            смогут отправлять вам сообщения, оставлять отзывы, делать
            запросы на сотрудничество или задавать вопросы — всё это без
            перехода на сторонние платформы.
            Вы выбираете, как именно получать отклики — на email, в Telegram
            или через встроенную панель сообщений.
          </p>

          <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 max-w-md mx-auto lg:mx-0">
            <input
              type="text"
              placeholder="ClixBio\"
              className="flex-1 px-8 py-4 bg-gray-100 border-2 border-purple-300 rounded-full focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-gray-800 font-medium transition-all duration-300 shadow-lg"
            />
            <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full font-bold shadow-xl hover:shadow-2xl hover:shadow-purple-400/50 transition-all duration-300 flex items-center gap-2 justify-center group hover:scale-105 active:scale-95">
              Создать страницу
            </button>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="flex items-center justify-center lg:justify-end mt-16 lg:mt-0">
          <Image
            src="/sms.png"
            alt="Contact Message"
            width={500}
            height={500}
            priority
            className="w-full max-w-md h-auto object-contain drop-shadow-2xl animate-pulse animation-delay-0.5"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

