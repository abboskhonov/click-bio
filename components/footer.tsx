import React from 'react';
import { ChevronRight, Mail, Github, Twitter, Linkedin, Instagram, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-300 py-20 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Section 1: Logo and CTA */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-white font-bold text-xl">ClixBio</span>
            </div>
            <p className="text-gray-400 text-sm font-medium">Создайте страницу бесплатно</p>
            <p className="text-gray-500 text-xs leading-relaxed">
              Создайте свою страницу бесплатно и соберите все ссылки и продукты в одном месте.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex-grow relative group">
                <input
                  type="text"
                  placeholder="yourname"
                  defaultValue="ClixBio"
                  className="w-full px-5 py-3 text-sm font-medium text-white placeholder-gray-500 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300 hover:bg-white/15"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:via-purple-500/10 group-hover:to-blue-500/10 pointer-events-none transition-all duration-300"></div>
              </div>
              <button className="relative px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-full font-semibold text-sm hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95 overflow-hidden group whitespace-nowrap">
                <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-full"></div>
                <div className="absolute inset-0 rounded-full border border-white/30"></div>
                <span className="relative flex items-center gap-1">
                  Создать
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>

          {/* Section 2: Navigation Links */}
          <div className="space-y-5">
            <h3 className="text-white font-bold text-lg bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Меню</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium hover:translate-x-1 transform transition-transform">О нас</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium hover:translate-x-1 transform transition-transform">Функции</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium hover:translate-x-1 transform transition-transform">Тарифы</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium hover:translate-x-1 transform transition-transform">Свяжитесь с нами</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium hover:translate-x-1 transform transition-transform">Политика конфиденциальности</a></li>
            </ul>
          </div>

          {/* Section 3: Subscribe */}
          <div className="space-y-5">
            <h3 className="text-white font-bold text-lg bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Подписаться</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Получайте последние новости и обновления от <span className="text-white font-bold">ClixBio</span>
            </p>
            <div className="flex items-center gap-2">
              <div className="flex-grow relative group">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-5 py-3 text-sm font-medium text-white placeholder-gray-500 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300 hover:bg-white/15"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:via-purple-500/10 group-hover:to-blue-500/10 pointer-events-none transition-all duration-300"></div>
              </div>
              <button className="relative px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-full font-semibold text-sm hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95 overflow-hidden group whitespace-nowrap">
                <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-full"></div>
                <div className="absolute inset-0 rounded-full border border-white/30"></div>
                <span className="relative flex items-center gap-1">
                  Подписаться
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>

          {/* Section 4: Social & Contact */}
          <div className="space-y-5">
            <h3 className="text-white font-bold text-lg bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Сообщества</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Присоединяйтесь к нашему сообществу и следите за новостями
            </p>
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Instagram, href: '#', label: 'Instagram' },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    title={social.label}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300 -z-10"></div>
                    <div className="relative w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-gray-300 group-hover:text-white transition-all duration-300 group-hover:bg-white/20 group-hover:border-purple-400/50 transform group-hover:scale-110">
                      <Icon className="w-5 h-5" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-blue-500/0 rounded-full blur-2xl -z-10"></div>
          <hr className="border-gray-700/30 backdrop-blur-md" />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs pt-8 gap-6">
          {/* Copyright */}
          <div className="text-gray-400">
            © 2025 <span className="font-bold text-white">ClixBio</span>. Все права защищены.
          </div>

          {/* Additional Links */}
          <div className="flex gap-6 text-gray-400 text-xs">
            <a href="#" className="hover:text-white transition-colors">Условия использования</a>
            <a href="#" className="hover:text-white transition-colors">Конфиденциальность</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;