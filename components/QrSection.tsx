import Image from 'next/image';

const QrSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-white min-h-screen flex items-center justify-center">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 z-0 radial-gradient"></div>

      {/* Blurred background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob-float"></div>
        <div className="absolute -bottom-32 left-1/2 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob-float animation-delay-2"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob-float animation-delay-3"></div>
      </div>

      {/* prujina.png in top left with glow */}
      <div className="absolute -top-10 -left-10 w-64 h-64 pointer-events-none z-0 opacity-70">
        <Image
          src="/prujina.png"
          alt="Decorative Spring"
          layout="fill"
          objectFit="contain"
          className="filter drop-shadow-lg animate-pulse-slow"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left section - Personal QR code card */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative w-full max-w-sm">
              {/* Card with liquid glass effect */}
              <div className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl p-8 pt-12 text-center border border-gray-200 transform hover:scale-105 transition-transform duration-300 ease-in-out">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Свой персональный<br />QR-код
                </h3>

                {/* QR Code container */}
                <div className="flex justify-center mb-8">
                  <div className="relative w-64 h-64 bg-white bg-opacity-90 backdrop-filter backdrop-blur-sm rounded-2xl p-4 border-2 border-purple-200 shadow-inner flex items-center justify-center">
                    <Image
                      src="/qrcode.png"
                      alt="QR Code"
                      width={256}
                      height={256}
                      className="object-contain w-full h-full rounded-lg"
                    />
                  </div>
                </div>

                {/* Subtle branding at bottom */}
                <p className="text-sm font-medium text-gray-500">ClixBio</p>
              </div>
            </div>
          </div>

          {/* Right section - Instant QR codes */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8 text-center lg:text-left">
              <div>
                <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight mb-6">
                  МГНОВЕННЫЕ<br />QR-КОДЫ
                </h2>
                <p className="text-gray-600 text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Генерируйте и скачивайте свой персональный QR-код, идеально подходящий для визиток и постеров.
                </p>
              </div>

              {/* Input and button container */}
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto lg:mx-0 pt-4">
                <input
                  type="text"
                  placeholder="ClixBio/ваш-профиль"
                  className="flex-grow px-6 py-4 text-base border-2 border-gray-300 rounded-full focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition duration-300 bg-white font-medium text-gray-700 shadow-sm placeholder-gray-400"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white font-extrabold rounded-full shadow-lg hover:shadow-xl hover:from-blue-600 hover:via-purple-600 hover:to-indigo-700 transition duration-300 whitespace-nowrap transform hover:-translate-y-1 active:translate-y-0 active:shadow-md">
                  Создать страницу
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QrSection;