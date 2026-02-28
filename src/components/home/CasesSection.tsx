import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import FadeInSection from '../ui/FadeInSection';
import case1Image from '../../assets/case1.jpg';
import case2Image from '../../assets/case2.jpg';
import case3Image from '../../assets/case3.jpg';
import case4Image from '../../assets/case4.jpg';

const cases = [
  {
    id: 1,
    client: '株式会社ONDO様',
    category: 'クラウド移行 / 生成AI基盤',
    title: 'Dropbox移行とメール運用のGoogle統合。AI活用のための「最強の検索基盤」を構築',
    image: case1Image,
    description: '散在していたデータをPython活用で安全にGoogle Driveへ集約し、二重コストを削減。複雑化していたメール運用もGoogle Workspaceへ一元化することで、将来的に生成AIが全社データを活用できる土台を整えました。',
    comingSoon: false
  },
  {
    id: 2,
    client: 'Coming Soon',
    category: '準備中',
    title: '次なる成功事例を準備中です',
    image: case2Image,
    description: '現在、新たなプロジェクトが進行中です。公開まで今しばらくお待ちください。',
    comingSoon: true
  },
  {
    id: 3,
    client: 'Coming Soon',
    category: '準備中',
    title: '次なる成功事例を準備中です',
    image: case3Image,
    description: '現在、新たなプロジェクトが進行中です。公開まで今しばらくお待ちください。',
    comingSoon: true
  },
  {
    id: 4,
    client: 'Coming Soon',
    category: '準備中',
    title: '次なる成功事例を準備中です',
    image: case4Image,
    description: '現在、新たなプロジェクトが進行中です。公開まで今しばらくお待ちください。',
    comingSoon: true
  }
];

const CasesSection: React.FC = () => {
  return (
    <section id="cases" className="py-20 lg:py-28 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">事例紹介</h2>
            <p className="mt-4 text-lg text-gray-600">
              お客様の課題に向き合い、共に創り上げた解決策の一部をご紹介します。
            </p>
          </div>

          <div className="flex overflow-x-auto pb-8 -mx-4 px-4 space-x-6 snap-x snap-mandatory scrollbar-hide">
            {cases.map((item) => (
              <div 
                key={item.id} 
                className={`flex-shrink-0 w-[85vw] md:w-[400px] snap-center group bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 flex flex-col ${
                  item.comingSoon 
                    ? 'opacity-80 pointer-events-none grayscale'
                    : 'hover:shadow-2xl hover:-translate-y-1 cursor-pointer'
                }`}
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    loading="lazy"
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      !item.comingSoon && 'group-hover:scale-105'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  <span className={`absolute top-4 left-4 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md ${
                    item.comingSoon ? 'bg-slate-500' : 'bg-sky-600'
                  }`}>
                    {item.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-sm font-semibold text-slate-400 mb-2">
                    {item.client}
                  </div>
                  <h3 className={`text-xl font-bold text-slate-800 mb-3 leading-snug transition-colors whitespace-normal ${
                    !item.comingSoon && 'group-hover:text-sky-600'
                  }`}>
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-3 mb-6 flex-grow whitespace-normal">
                    {item.description}
                  </p>
                  
                  {!item.comingSoon && (
                    <Link to="/case/ondo" className="flex items-center text-sky-600 font-bold text-sm mt-auto group-hover:underline decoration-2 underline-offset-4">
                      詳細を見る <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default CasesSection;
