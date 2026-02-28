import React from 'react';
import { Building, BrainCircuit } from 'lucide-react';
import FadeInSection from '../ui/FadeInSection';

const services = [
  {
    target: '中小企業の皆様へ',
    title: 'DX・業務改善支援',
    description: '「何から始めれば？」という段階から伴走します。業務プロセスの可視化、最適なITツール選定、データ活用基盤の構築まで、明日から実感できる変化を創出します。',
    icon: <Building className="w-10 h-10 text-sky-600" />
  },
  {
    target: '学生・若手社会人の皆様へ',
    title: 'キャリア・ライフデザイン支援',
    description: 'VUCA時代を生き抜くための「自分だけの軸」作りをお手伝い。大手企業で活躍する現役ビジネスパーソンが、実践的なキャリア設計と学習戦略をコーチングします。',
    icon: <BrainCircuit className="w-10 h-10 text-sky-600" />
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-gray-800">事業内容</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-slate-50 p-8 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-2xl hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <p className="ml-4 font-semibold text-gray-500">{service.target}</p>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default ServicesSection;
