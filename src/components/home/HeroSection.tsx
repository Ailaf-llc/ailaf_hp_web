import React from 'react';
import FadeInSection from '../ui/FadeInSection';
import heroImage from '../../assets/hero.jpg';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative text-white">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-20 md:py-0">
          <FadeInSection>
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight text-white">
                DXを、もっと身近に。<br />
                明日から変わる業務改善を、あなたのペースで。
              </h1>
              <p className="text-lg text-slate-200 max-w-3xl mx-auto mb-12">
                アイラフは、大手企業でDXの最前線を担う現役プロフェッショナルによるチームです。<br />
                専門用語ではない「現場で使える言葉」で、あなたの会社の課題解決を伴走します。
              </p>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-sky-500/30 hover:-translate-y-1 inline-block"
              >
                無料相談・お問い合わせ
              </a>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
