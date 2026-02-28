import React from 'react';
import { Zap, Users, BarChart3 } from 'lucide-react';
import FadeInSection from '../ui/FadeInSection';

const strengths = [
  { title: '高品質を、適正価格で', description: '各メンバーが大手企業の本業で培った専門領域の最新の知識・経験をもとにした支援を提供。余分なコストを徹底的に削減し、大手コンサルティングファーム品質のサービスを、スモールスタート可能な価格でご提供します。', icon: <Zap className="w-8 h-8 mx-auto mb-4 text-sky-400" /> },
  { title: '少数精鋭ならではの柔軟性', description: '私たちは意思決定が迅速な少数精鋭チームです。お客様の状況やご要望に合わせ、定型化されたサービスではなく、本当に必要な支援を柔軟かつスピーディに設計・実行します。', icon: <Users className="w-8 h-8 mx-auto mb-4 text-sky-400" /> },
  { title: '常にアップデートされる最新知見', description: 'メンバーは全員、DXや事業開発の最前線で活躍する現役プレイヤー。日々アップデートされる現場のリアルな情報と最新技術トレンドを、お客様の課題解決に活かします。', icon: <BarChart3 className="w-8 h-8 mx-auto mb-4 text-sky-400" /> }
];

const StrengthsSection: React.FC = () => {
  return (
    <section id="strengths" className="py-20 lg:py-28 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">アイラフが選ばれる理由</h2>
            <p className="mt-4 text-lg text-slate-300">本業を持つプロ集団だからこそ提供できる、3つの価値があります。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {strengths.map((strength) => (
              <div key={strength.title} className="bg-slate-800 p-8 rounded-xl border border-slate-700">
                {strength.icon}
                <h3 className="text-xl font-semibold text-sky-400 mb-3">{strength.title}</h3>
                <p className="text-slate-300 text-left">{strength.description}</p>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default StrengthsSection;
