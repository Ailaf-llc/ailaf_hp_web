import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import FadeInSection from '../ui/FadeInSection';

const faqs = [
  { question: 'サービスの対象地域はどこですか？', answer: '東京都内および近郊を中心にサービスを提供しています。完全オンラインでのご対応も可能ですので、日本全国からご利用いただけます。' },
  { question: 'プロジェクト期間はどれくらいですか？', answer: 'プロジェクトの規模や目的によって異なりますが、弊社の特性上、数週間から数ヶ月単位の比較的短期プロジェクトを多く手掛けております。お客様の状況に合わせた柔軟なご提案が可能です。' },
  { question: '対応可能な業種はありますか？', answer: '特定の業種に限らず、幅広い分野の中小規模事業者様をご支援可能です（一部お受けできない業種・領域がございます）。特に「業務プロセス改善」や「デジタル化」に課題を感じているお客様に適しています。まずはお気軽にご相談ください。' },
  { question: '相談の段階でもお願いできますか？', answer: 'はい。「何から手をつけて良いかわからない」という状況こそ、私たちが得意とする領域です。明確な課題が固まっていない段階でも、ぜひご相談ください。' },
  { question: '費用感を知りたいのですが？', answer: 'ご依頼内容や期間によって変動いたします。お客様のご予算に応じて柔軟なご提案が可能ですので、まずはお気軽にお問い合わせいただき、無料相談をご活用ください。' },
  { question: 'オンラインでの打ち合わせは可能ですか？', answer: 'はい。オンラインミーティングツールを活用して、全国どこからでも打ち合わせ可能です。対面打ち合わせをご希望の場合はご相談ください。' },
];

const FaqSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-gray-800">よくある質問</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="border border-slate-200 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center text-gray-800 focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  // 重要度低：アコーディオンUIのアクセシビリティ対応
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-medium">{faq.question}</span>
                  <ChevronDown className={`transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div id={`faq-answer-${index}`} className="px-6 pb-4 text-gray-600">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default FaqSection;
