import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const faqData = [
  {
    question: "What makes PocketLink different from other link-in-bio tools for affiliate marketers?",
    answer: "PocketLink offers AI-powered analytics, deep integration with various affiliate programs, and advanced tracking to optimize your commissions, unlike basic link-in-bio tools.",
  },
  {
    question: "How does PocketLink help increase my affiliate commissions?",
    answer: "Our AI analyzes your audience behavior and recommends optimal product placements, conversion strategies, and personalized content, leading to higher click-through rates and commissions.",
  },
  {
    question: "Which affiliate programs does PocketLink integrate with?",
    answer: "PocketLink integrates with a wide range of popular affiliate programs including Amazon Associates, ShareASale, CJ Affiliate, ClickBank, and many more. We are continuously expanding our integrations.",
  },
  {
    question: "How does the AI-powered analytics system work?",
    answer: "Our AI system tracks user engagement, clicks, conversions, and revenue. It uses machine learning to identify patterns, forecast trends, and provide actionable insights to improve your performance.",
  },
  {
    question: "Is PocketLink free for affiliate marketers?",
    answer: "Yes, PocketLink offers a robust free tier with essential features for all affiliate marketers. Premium plans are available with advanced analytics and additional tools.",
  },
  {
    question: "How does PocketLink handle affiliate link tracking and attribution?",
    answer: "We use advanced tracking mechanisms to ensure accurate click and conversion attribution across various platforms, providing you with reliable data for performance analysis.",
  },
  {
    question: "Can I use PocketLink with social platforms that restrict affiliate links?",
    answer: "Yes, PocketLink creates a single, compliant link that bypasses common restrictions on platforms like Instagram and TikTok, allowing you to effectively promote your affiliate products.",
  },
  {
    question: "Does PocketLink work for both digital and physical product affiliates?",
    answer: "Absolutely! PocketLink is designed to cater to both digital product affiliates (e.g., software, courses, ebooks) and physical product affiliates (e.g., e-commerce goods).",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-white min-h-screen py-20 overflow-hidden text-gray-900">
      {/* Decorative background elements */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
            transform: scaleY(0.95);
            padding-top: 0;
            padding-bottom: 0;
          }
          to {
            opacity: 1;
            max-height: 1000px;
            transform: scaleY(1);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 1;
            max-height: 1000px;
            transform: scaleY(1);
          }
          to {
            opacity: 0;
            max-height: 0;
            transform: scaleY(0.95);
            padding-top: 0;
            padding-bottom: 0;
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.7;
          }
        }

        .faq-item {
          animation: fadeInUp 0.5s ease-out forwards;
        }

        .faq-answer {
          animation: slideDown 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          transform-origin: top;
        }

        .faq-answer-closing {
          animation: slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          transform-origin: top;
        }

        .blob-pulse {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .blob-pulse-delay-1 {
          animation-delay: 1s;
        }

        .blob-pulse-delay-3 {
          animation-delay: 3s;
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none">
        {/* Large spiral element (left) */}
        <div className="absolute top-0 left-0 w-[20rem] h-[20rem] z-50">
          <Image
            src="/prujina.png"
            alt="Prujina"
            layout="fill"
            objectFit="contain"
            className="opacity-100 blur-none"
          />
        </div>

        {/* Diamond element (right) */}
        <div className="absolute right-20 top-40 w-48 h-48 flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M50 0L100 50L50 100L0 50L50 0Z"
              fill="url(#paint1_linear_1_2)"
            />
            <defs>
              <linearGradient id="paint1_linear_1_2" x1="0" y1="50" x2="100" y2="50" gradientUnits="userSpaceOnUse">
                <stop stopColor="#93C5FD" />
                <stop offset="1" stopColor="#FCA5A5" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute w-full h-full bg-gradient-to-br from-blue-200 to-pink-200 opacity-50 blur-2xl rounded-xl transform rotate-45"></div>
        </div>

        {/* Smaller blobs */}
        <div className="absolute -bottom-10 left-1/4 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 blob-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 blob-pulse blob-pulse-delay-3"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">FAQ</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Everything you need to know about how PocketLink helps maximize your affiliate marketing efforts.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3 h-auto">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="faq-item bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                className="flex justify-between items-center w-full px-6 py-4 text-left focus:outline-none group hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-medium text-gray-800 group-hover:text-purple-600 transition-colors duration-200">{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-all duration-300 flex-shrink-0 ml-4 ${
                    openIndex === index ? 'rotate-180 text-purple-600' : 'group-hover:text-purple-400'
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="faq-answer max-h-96 px-6 pb-4 pt-2 text-gray-600 text-sm border-t border-gray-200 overflow-y-auto">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg mb-6">Still have questions about affiliate marketing?</p>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto space-x-2">
            <span>Contact our affiliate specialists</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;