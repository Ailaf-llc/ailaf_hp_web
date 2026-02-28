import React from 'react';
import { Mail } from 'lucide-react';
import FadeInSection from '../ui/FadeInSection';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-900 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInSection>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">お問い合わせ</h2>
          <p className="text-lg text-slate-300 mb-10 leading-relaxed">
            メールでのご相談を随時受け付けております。<br />
            業務改善のご相談、費用感の確認など、まずはお気軽にご連絡ください。
          </p>
          
          <a 
            href="mailto:contact@ailaf.co.jp"
            className="group inline-flex items-center justify-center bg-white text-slate-900 hover:bg-sky-50 px-8 py-4 rounded-xl font-bold text-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <Mail className="w-6 h-6 mr-3 text-sky-600 group-hover:scale-110 transition-transform" />
            contact@ailaf.co.jp へメールを送る
          </a>
          <p className="mt-4 text-sm text-slate-400">
            ※メーラーが起動します
          </p>
        </FadeInSection>
      </div>
    </section>
  );
};

export default ContactSection;
