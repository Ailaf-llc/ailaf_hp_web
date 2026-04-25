import React, { useState } from 'react';
import { LinkIcon } from 'lucide-react';
import FadeInSection from '../ui/FadeInSection';

import miyanoImage from '../../assets/miyano.jpg';
import yamazoeImage from '../../assets/Tatsuro Yamazoe_202604.png';
import tabataImage from '../../assets/tabata.jpg';

const team = [
  { 
    name: '宮野 聖史', 
    role: '代表社員・CEO', 
    image: miyanoImage, 
    bio: '製薬企業にて臨床開発業務からキャリアを開始し、別の製薬企業ではデジタルソリューション開発やDX推進に従事。戦略立案から現場実装まで幅広く携わる中で、より体系的に経営を学びたいと考え、早稲田大学大学院経営管理研究科（WBS）に進学。2025年3月に修了。事業や組織の全体像を設計するビジネスアーキテクトとして、戦略策定からシステム設計・導入定着まで一貫してリードできる点を強みとする。多様な働き方が可能となった現在、より直接的に社会へ価値を還元したいとの思いから、志を同じくする仲間とともに2025年に兼業集団としてアイラフを共同設立。各メンバーが本業で培った専門性を持ち寄ることで、多角的な視点と柔軟な発想を活かした少数精鋭のチームとして活動している。中小企業の持続的成長を支援し、社会に直接的に貢献することを目指している。', 
    links: [
      { title: 'LinkedIn Profile', url: 'https://www.linkedin.com/in/seishi-miyano-b02145185' }
    ] 
  },
  { 
    name: '山添 達郎', 
    role: '業務執行社員・CBO', 
    image: yamazoeImage, 
    bio: '国内外の大手企業からスタートアップまで幅広く経験し、デジタル広告と動画ソリューション領域で営業・事業開発やパートナーシップ構築に従事。事業のGTM設計やスケールアップに強みを持つ。', 
    links: [
      { title: 'LinkedIn Profile', url: 'https://www.linkedin.com/in/tatsuro-yamazoe-519ab543/' }
    ] 
  },
  {
    name: '田畑 佑樹', 
    role: '業務執行社員・CDO', 
    image: tabataImage, 
    bio: 'アプリケーションからインフラまで精通する、プロダクト志向のDXアーキテクト。インフラ企業、製薬会社にてDX推進を牽引し、特に生成AIアプリ開発プロジェクトでは、アーキテクチャ設計からUI/UXデザインまで担当し全社展開を成功させた実績を持つ。技術選定からプロダクトデザインまで、一気通貫でのご支援が可能。', 
    links: [
      { title: 'LinkedIn Profile', url: 'https://www.linkedin.com/in/佑樹-田畑-4078701b5' }
    ]
  }
];

const TeamSection: React.FC = () => {
  // 重要度中：モバイル向けの長いテキストを省略表示するステート
  const [expandedProfiles, setExpandedProfiles] = useState<Record<string, boolean>>({});

  const toggleProfile = (name: string) => {
    setExpandedProfiles(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  return (
    <section id="team" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-gray-800">Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => {
              const isExpanded = expandedProfiles[member.name];
              return (
                <div key={member.name} className="bg-white p-8 rounded-xl shadow-xl flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-slate-100">
                  <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-4 ring-slate-200" />
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-sky-600 font-semibold mb-4">{member.role}</p>
                  
                  <div className="flex-grow mb-4 text-left">
                    <p className={`text-gray-600 text-sm ${!isExpanded ? 'line-clamp-4' : ''}`}>
                      {member.bio}
                    </p>
                    {/* Read Moreボタン */}
                    <button 
                      onClick={() => toggleProfile(member.name)}
                      className="text-sky-600 text-sm font-semibold mt-2 hover:underline focus:outline-none"
                    >
                      {isExpanded ? '閉じる' : '続きを読む'}
                    </button>
                  </div>

                  {member.links.length > 0 && (
                    <div className="mt-auto pt-4 border-t border-slate-200">
                      <h4 className="font-semibold text-left mb-2 text-sm text-gray-500">関連リンク</h4>
                      <ul className="space-y-2">
                        {member.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline text-sm flex items-start text-left">
                              <LinkIcon className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{link.title}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default TeamSection;
