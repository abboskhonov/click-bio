import React from 'react';
import Image from 'next/image';

const CustomizeSection = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full grid grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* LEFT COLUMN - 2 stacked phones */}
          <div className="col-span-12 lg:col-span-3 flex flex-col items-center justify-center space-y-12">
            {/* Pink Phone */}
            <div className="relative w-full max-w-xs">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '9/18' }}>
                <Image
                  src="/placeholder.svg?height=600&width=300"
                  alt="Pink Profile Phone"
                  width={300}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Phone frame accent */}
              <div className="absolute -inset-2 border-8 border-gray-900 rounded-3xl pointer-events-none"></div>
            </div>

            {/* Beige Phone */}
            <div className="relative w-full max-w-xs">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '9/18' }}>
                <Image
                  src="/placeholder.svg?height=600&width=300"
                  alt="Beige Services Phone"
                  width={300}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Phone frame accent */}
              <div className="absolute -inset-2 border-8 border-gray-900 rounded-3xl pointer-events-none"></div>
            </div>
          </div>

          {/* CENTER COLUMN - Large phone with services */}
          <div className="col-span-12 lg:col-span-3 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '9/20' }}>
                <Image
                  src="/placeholder.svg?height=680&width=340"
                  alt="Services Phone"
                  width={340}
                  height={680}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Phone frame accent */}
              <div className="absolute -inset-2 border-8 border-gray-900 rounded-3xl pointer-events-none"></div>
            </div>
          </div>

          {/* RIGHT COLUMN - Text content and bottom phone */}
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-start space-y-8">
            {/* Heading */}
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-blue-500 leading-tight">
                Настройте<br />каждый элемент
              </h2>

              {/* Description paragraphs */}
              <div className="space-y-5">
                <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                  Выбирайте макеты, шрифты и фоны, которые отражают вашу индивидуальность — от минимализма до яркости.
                </p>

                <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                  Посмотрите, как наши пользователи оформляют свои страницы. Каждый профиль уникален: от минимализма и строгих бизнес-страниц до ярких креативных страниц со ссылками и контентом.
                </p>

                <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                  Создайте стиль, который будет выделять именно вас — используйте готовые шаблоны или настройте всё под себя.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="space-y-6 pt-4">
              <a href="#" className="text-blue-500 hover:text-blue-600 font-medium text-base transition-colors">
                Попробовать
              </a>

              <div className="flex items-center gap-4">
                <span className="text-gray-600 font-medium text-sm">ClixBio\</span>
                <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-shadow text-sm whitespace-nowrap">
                  Создать страницу
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative blobs - bottom right */}
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full filter blur-3xl opacity-20 pointer-events-none"></div>
        <div className="absolute -bottom-20 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-300 to-purple-500 rounded-full filter blur-3xl opacity-15 pointer-events-none"></div>
      </div>

      {/* Bottom teal phone - positioned absolutely */}
      <div className="absolute bottom-8 right-8 hidden lg:block w-48">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '9/18' }}>
          <Image
            src="/placeholder.svg?height=480&width=240"
            alt="Teal Gradient Phone"
            width={240}
            height={480}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Phone frame accent */}
        <div className="absolute -inset-2 border-6 border-gray-900 rounded-3xl pointer-events-none"></div>
      </div>
    </section>
  );
};

export default CustomizeSection;
