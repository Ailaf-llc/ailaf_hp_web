import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X as CloseIcon, ChevronDown, LinkIcon, BarChart3, Bot, Briefcase, Users, Award } from 'lucide-react';

import logo from './assets/logo.png';
import miyanoImage from './assets/miyano.jpg';
import yamazoeImage from './assets/yamazoe.jpg';
import tabataImage from './assets/tabata.jpg';

// ▼▼▼ スクロールで要素をフェードインさせるためのカスタムコンポーネント ▼▼▼
const FadeInSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          // 一度表示されたら監視を停止
          observer.unobserve(entry.target);
        }
      });
    });
    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }
    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);
  return (
    <div
      ref={domRef}
      className={`transition-opacity duration-1000 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {children}
    </div>
  );
};


// ナビゲーション用のリンクコンポーネント
interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}
const NavLink: React.FC<NavLinkProps> = ({ to, children, onClick }) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const element = document.querySelector(to);
    element?.scrollIntoView({ behavior: 'smooth' });
    if (onClick) {
      onClick();
    }
  };
  return (
    <a href={to} onClick={handleClick} className="text-gray-600 hover:text-sky-600 transition-colors duration-300">
      {children}
    </a>
  );
};

// メインのAppコンポーネント
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const companyName = "アイラフ合同会社 Ailaf LLC";
  const currentYear = new Date().getFullYear();

  // --- データ定義 ---
  const services = [
    { title: 'ビジネストランスフォーメーション', description: '業務プロセスの見直しから組織文化の変革まで、事業全体の成長を支援します。', icon: <Briefcase className="w-10 h-10 text-sky-600" /> },
    { title: 'デジタルトランスフォーメーション', description: 'AIやクラウド技術を駆使し、非効率な業務を自動化、データに基づいた経営を実現します。', icon: <Bot className="w-10 h-10 text-sky-600" /> },
    { title: '経営コンサルティング', description: '新規事業の立案や資金調達など、企業の持続的な成長に向けた戦略を共に描きます。', icon: <BarChart3 className="w-10 h-10 text-sky-600" /> },
    { title: 'マインドセットコーチング', description: '将来を担う若い世代に向けた人生設計支援サービスを提供します。', icon: <Users className="w-10 h-10 text-sky-600" /> }
  ];

  const strengths = [
    { title: '現場に寄り添う伴走支援', description: '計画倒れにさせません。お客様のチームの一員として、プロジェクトの実行から定着まで責任を持ってサポートします。' },
    { title: '最新技術への深い知見', description: '生成AIやクラウドネイティブ技術など、常に最新の動向を捉え、お客様のビジネスに最適なソリューションを提案します。' },
    { title: '人 と 組織 を育むアプローチ', description: 'ツールの導入だけでなく、社員一人ひとりのスキルアップと、変化に強い組織文化の醸成を重視します。' }
  ];

  const team = [
    { name: '宮野 聖史', role: '代表社員', image: miyanoImage, bio: '早稲田大学大学院経営管理研究科（WBS）修了。大手企業にてDX推進や新規事業開発に従事し、戦略立案から現場実装まで幅広く携わる。より直接的な社会貢献を目指し、2025年にアイラフを共同設立。', links: [] },
    { name: '山添 達郎', role: '業務執行社員', image: yamazoeImage, bio: '国内外の大手企業からスタートアップまで幅広く経験し、デジタル広告と動画ソリューション領域で営業・事業開発やパートナーシップ構築に従事。事業のGTM設計やスケールアップに強みを持つ。', links: [] },
    { name: '田畑 佑樹', role: '業務執行社員', image: tabataImage, bio: 'アプリケーションからインフラまで精通する、プロダクト志向のDXアーキテクト。インフラ企業、製薬会社にてDX推進を牽引し、特に生成AIアプリ開発プロジェクトでは、アーキテクチャ設計からUI/UXデザインまで担当し全社展開を成功させた実績を持つ。技術選定からプロダクトデザインまで、一気通貫でのご支援が可能。', links: [
        { title: 'Google Cloud: 生成AIのビジネス適用', url: 'https://cloud.google.com/blog/ja/topics/customers/chugai-pharm-generating-ai-to-drive-operational-efficiency-and-value-creation/' },
        { title: 'AWS: 生成AIアプリの全社導入', url: 'https://aws.amazon.com/jp/solutions/case-studies/chugai-pharm/' },
        { title: 'note: 生成AIアプリ開発を内製アジャイルで', url: 'https://note.chugai-pharm.co.jp/n/n2e7083b32b68?magazine_key=m5745f166b9de' }
      ]
    }
  ];

  const faqs = [ /* ... FAQデータは変更なし ... */ ];
  
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="bg-white/80 border-b border-gray-200 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="#hero" onClick={(e) => { e.preventDefault(); document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' }); }} className="flex items-center">
                <img src={logo} alt={companyName} className="h-8 w-auto mr-2" />
                <span className="text-xl font-bold text-gray-800">Ailaf LLC</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
              <NavLink to="#services">事業内容</NavLink>
              <NavLink to="#strengths">選ばれる理由</NavLink>
              <NavLink to="#cases">導入実績</NavLink>
              <NavLink to="#team">Team</NavLink>
              <NavLink to="#company-profile">会社概要</NavLink>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
                {isMenuOpen ? <CloseIcon /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink to="#services" onClick={closeMenu}><span className="block px-3 py-2 text-gray-700">事業内容</span></NavLink>
            <NavLink to="#strengths" onClick={closeMenu}><span className="block px-3 py-2 text-gray-700">選ばれる理由</span></NavLink>
            <NavLink to="#cases" onClick={closeMenu}><span className="block px-3 py-2 text-gray-700">導入実績</span></NavLink>
            <NavLink to="#team" onClick={closeMenu}><span className="block px-3 py-2 text-gray-700">Team</span></NavLink>
            <NavLink to="#company-profile" onClick={closeMenu}><span className="block px-3 py-2 text-gray-700">会社概要</span></NavLink>
          </div>
        </div>
      )}

      <main>
        {/* Hero Section */}
        <section id="hero" className="bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-4rem)] py-20 md:py-0">
              <FadeInSection>
                <div className="flex flex-col md:flex-row items-center justify-center">
                  <div className="w-full md:w-1/3 flex justify-center md:justify-end mb-8 md:mb-0 md:mr-12">
                    <img src={logo} alt={companyName} className="h-40 w-auto" />
                  </div>
                  <div className="w-full md:w-2/3 text-center md:text-left">
                    <h1 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">
                      変わる時代、変わる働き方。<br />
                      あなたの"一歩先"を照らします。
                    </h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto md:mx-0 mb-8">
                      複雑な業務、遅れるデジタル化。そんな課題を「現場で役立つDX」で解決し、
                      シンプルで強い組織づくりを、計画から実行まで伴走支援します。
                    </p>
                    <div className="flex justify-center md:justify-start items-center gap-x-6 gap-y-2 flex-wrap mb-10 text-sm">
                      <span className="flex items-center text-slate-300"><CheckCircleIcon />業務プロセスの非効率</span>
                      <span className="flex items-center text-slate-300"><CheckCircleIcon />デジタル化の遅れ</span>
                      <span className="flex items-center text-slate-300"><CheckCircleIcon />ITツールの活用方法</span>
                    </div>
                    <div className="bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold cursor-not-allowed text-base opacity-80 inline-block">
                      お問い合わせ (準備中)
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 lg:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInSection>
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-gray-800">事業内容</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service) => (
                  <div key={service.title} className="bg-slate-50 p-8 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-2xl hover:-translate-y-2">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Strengths Section */}
        <section id="strengths" className="py-20 lg:py-28 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInSection>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold">アイラフが選ばれる理由</h2>
                <p className="mt-4 text-lg text-slate-300">私たちは、お客様の成功を第一に考えた3つの強みを持っています。</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {strengths.map((strength, index) => (
                  <div key={strength.title} className="bg-slate-800 p-8 rounded-xl border border-slate-700">
                    <h3 className="text-xl font-semibold text-sky-400 mb-3">{`0${index + 1}. ${strength.title}`}</h3>
                    <p className="text-slate-300">{strength.description}</p>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ▼▼▼ Case Studies Section (新規追加) ▼▼▼ */}
        <section id="cases" className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInSection>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">導入実績</h2>
                <p className="mt-4 text-lg text-gray-600">お客様の成功事例を現在準備中です。公開まで今しばらくお待ちください。</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Ghost Cards */}
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="bg-slate-50 rounded-xl p-6 blur-sm animate-pulse">
                    <div className="h-8 bg-slate-200 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-slate-200 rounded w-full mb-2"></div>
                    <div className="h-4 bg-slate-200 rounded w-5/6"></div>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 lg:py-28 bg-slate-50">
           {/* ... Team Sectionの中身は変更なし ... */}
        </section>

        {/* Company Profile Section */}
        <section id="company-profile" className="py-20 lg:py-28 bg-slate-800 text-slate-300">
           {/* ... Company Profile Sectionの中身は変更なし ... */}
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 lg:py-28">
           {/* ... FAQ Sectionの中身は変更なし ... */}
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 lg:py-28 bg-slate-900 text-white">
           {/* ... Contact Sectionの中身は変更なし ... */}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
         {/* ... Footerの中身は変更なし ... */}
      </footer>
    </div>
  );
}

// --- ヘルパーコンポーネント ---
const CheckCircleIcon = () => ( /* ... 変更なし ... */ );
const CompanyInfoRow: React.FC<{ label: string; value: string; isEven?: boolean }> = ({ label, value, isEven }) => ( /* ... 変更なし ... */ );

export default App;
