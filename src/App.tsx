import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CookieConsent from 'react-cookie-consent';
import { Menu, X as CloseIcon, ChevronDown, LinkIcon, BarChart3, Bot, Briefcase, Users, BrainCircuit, Building, Zap, Mail, BookOpen, Linkedin, Twitter } from 'lucide-react';

import logo from './assets/logo.png';
import miyanoImage from './assets/miyano.jpg';
import yamazoeImage from './assets/yamazoe.jpg';
import tabataImage from './assets/tabata.jpg';

// スクロールで要素をフェードインさせるためのカスタムコンポーネント
const FadeInSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
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
  const heroImageUrl = "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg";

  // --- データ定義 ---
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

  const strengths = [
    { title: '高品質を、適正価格で', description: '各メンバーが大手企業の本業で培った専門領域の最新の知識・経験をもとにした支援を提供。余分なコストを徹底的に削減し、大手コンサルティングファーム品質のサービスを、スモールスタート可能な価格でご提供します。', icon: <Zap className="w-8 h-8 mx-auto mb-4 text-sky-400" /> },
    { title: '少数精鋭ならではの柔軟性', description: '私たちは意思決定が迅速な少数精鋭チームです。お客様の状況やご要望に合わせ、定型化されたサービスではなく、本当に必要な支援を柔軟かつスピーディに設計・実行します。', icon: <Users className="w-8 h-8 mx-auto mb-4 text-sky-400" /> },
    { title: '常にアップデートされる最新知見', description: 'メンバーは全員、DXや事業開発の最前線で活躍する現役プレイヤー。日々アップデートされる現場のリアルな情報と最新技術トレンドを、お客様の課題解決に活かします。', icon: <BarChart3 className="w-8 h-8 mx-auto mb-4 text-sky-400" /> }
  ];

  const team = [
    { name: '宮野 聖史', role: '代表社員・CEO', image: miyanoImage, bio: '製薬企業にて臨床開発業務からキャリアを開始し、別の製薬企業ではデジタルソリューション開発やDX推進に従事。戦略立案から現場実装まで幅広く携わる中で、より体系的に経営を学びたいと考え、早稲田大学大学院経営管理研究科（WBS）に進学。2025年3月に修了。事業や組織の全体像を設計するビジネスアーキテクトとして、戦略策定からシステム設計・導入定着まで一貫してリードできる点を強みとする。多様な働き方が可能となった現在、より直接的に社会へ価値を還元したいとの思いから、志を同じくする仲間とともに2025年に兼業集団としてアイラフを共同設立。各メンバーが本業で培った専門性を持ち寄ることで、多角的な視点と柔軟な発想を活かした少数精鋭のチームとして活動している。中小企業の持続的成長を支援し、社会に直接的に貢献することを目指している。', links: [] },
    { name: '山添 達郎', role: '業務執行社員・CBO', image: yamazoeImage, bio: '国内外の大手企業からスタートアップまで幅広く経験し、デジタル広告と動画ソリューション領域で営業・事業開発やパートナーシップ構築に従事。事業のGTM設計やスケールアップに強みを持つ。', links: [] },
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

  const faqs = [
    { question: 'サービスの対象地域はどこですか？', answer: '東京都内および近郊を中心にサービスを提供しています。完全オンラインでのご対応も可能ですので、日本全国からご利用いただけます。' },
    { question: 'プロジェクト期間はどれくらいですか？', answer: 'プロジェクトの規模や目的によって異なりますが、弊社の特性上、数週間から数ヶ月単位の比較的短期プロジェクトを多く手掛けております。お客様の状況に合わせた柔軟なご提案が可能です。' },
    { question: '対応可能な業種はありますか？', answer: '特定の業種に限らず、幅広い分野の中小規模事業者様をご支援可能です（一部お受けできない業種・領域がございます）。特に「業務プロセス改善」や「デジタル化」に課題を感じているお客様に適しています。まずはお気軽にご相談ください。' },
    { question: '相談の段階でもお願いできますか？', answer: 'はい。「何から手をつけて良いかわからない」という状況こそ、私たちが得意とする領域です。明確な課題が固まっていない段階でも、ぜひご相談ください。' },
    { question: '費用感を知りたいのですが？', answer: 'ご依頼内容や期間によって変動いたします。お客様のご予算に応じて柔軟なご提案が可能ですので、まずはお気軽にお問い合わせいただき、無料相談をご活用ください。' },
    { question: 'オンラインでの打ち合わせは可能ですか？', answer: 'はい。オンラインミーティングツールを活用して、全国どこからでも打ち合わせ可能です。対面打ち合わせをご希望の場合はご相談ください。' },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white font-sans">
        
        <Helmet>
          <title>Ailaf LLC | DXを、もっと身近に。あなたのペースで。</title>
          <meta name="description" content="アイラフは、大手企業でDXの最前線を担う現役プロフェッショナルによるチームです。専門用語ではない「現場で使える言葉」で、あなたの会社の課題解決を伴走します。" />
          <meta property="og:title" content="Ailaf LLC | DXを、もっと身近に。あなたのペースで。" />
          <meta property="og:description" content="アイラフは、大手企業でDXの最前線を担う現役プロフェッショナルによるチームです。中小企業の業務改善・DX推進を伴走支援します。" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={heroImageUrl} />
        </Helmet>

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
                <NavLink to="#cases">事例紹介</NavLink>
                <NavLink to="#team">Team</NavLink>
                <NavLink to="#company-profile">会社概要</NavLink>
                
                {/* ▼▼▼ ヘッダーのアイコン横並びエリア ▼▼▼ */}
                <div className="flex items-center space-x-5 pl-4 border-l border-gray-200">
                  {/* Note */}
                  <a 
                    href="https://note.com/ailaf_038" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-[#2cb696] transition-colors duration-300"
                    aria-label="Note"
                  >
                    {/* ▼▼▼ BookOpen を NoteIcon (w-10 h-10) に変更してサイズ調整 ▼▼▼ */}
                    <NoteIcon className="w-10 h-10" />
                  </a>

                  {/* X (Twitter) */}
                  <a 
                    href="https://x.com/Ailafllc202577" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-black transition-colors duration-300"
                    aria-label="X"
                  >
                    <XIcon className="w-5 h-5" />
                  </a>

                  {/* LinkedIn */}
                  <a 
                    href="https://www.linkedin.com/company/ailaf-llc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-[#0a66c2] transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="md:hidden flex items-center">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
                  {isMenuOpen ? <CloseIcon /> : <Menu />}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="fixed top-16 md:hidden w-full bg-white border-b shadow-lg z-40">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink to="#services" onClick={closeMenu}><span className="block px-3 py-2 text-gray-700">事業内容</span></NavLink>
              <NavLink to="#strengths" onClick={closeMenu}><span className="block px-3 py-2 text-gray-700">選ばれる理由</span></NavLink>
              <NavLink to="#cases" onClick={closeMenu}><span className="block px-3 py-2 text-gray-700">事例紹介</span></NavLink>
              <NavLink to="#team" onClick={closeMenu}><span className="block px-3 py-2 text-gray-700">Team</span></NavLink>
              <NavLink to="#company-profile" onClick={closeMenu}><span className="block px-3 py-2 text-gray-700">会社概要</span></NavLink>
              
              {/* ▼▼▼ スマホメニュー用SNSアイコンエリア ▼▼▼ */}
              <div className="flex items-center space-x-8 px-3 py-4 mt-2 border-t border-gray-100">
                <a href="https://note.com/ailaf_038" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#2cb696]">
                   {/* ▼▼▼ NoteIcon (w-12 h-12) に変更してサイズ調整 ▼▼▼ */}
                  <NoteIcon className="w-12 h-12" />
                </a>
                <a href="https://x.com/Ailafllc202577" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black">
                  <XIcon className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/company/ailaf-llc" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0a66c2]">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        )}

        <main>
          {/* Hero Section */}
          <section id="hero" className="relative text-white">
            <div className="absolute inset-0">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroImageUrl})` }}
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

          <section id="cases" className="py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeInSection>
                <div className="text-center mb-16">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">事例紹介</h2>
                  <p className="mt-4 text-lg text-gray-600">お客様の成功事例を現在準備中です。公開まで今しばらくお待ちください。</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

          <section id="team" className="py-20 lg:py-28 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeInSection>
                <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-gray-800">Our Expert Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {team.map((member) => (
                    <div key={member.name} className="bg-white p-8 rounded-xl shadow-xl flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                      <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-4 ring-slate-200" />
                      <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                      <p className="text-sky-600 font-semibold mb-4">{member.role}</p>
                      <p className="text-gray-600 text-left text-sm mb-4 flex-grow">{member.bio}</p>
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
                  ))}
                </div>
              </FadeInSection>
            </div>
          </section>

          <section id="company-profile" className="py-20 lg:py-28 bg-slate-800 text-slate-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeInSection>
                <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-16">会社概要</h2>
                <div className="bg-slate-900 shadow-lg overflow-hidden rounded-xl">
                  <dl>
                    <CompanyInfoRow label="商号" value={companyName} />
                    <CompanyInfoRow label="設立年月日" value="2025年7月7日(令和7年7月7日)" isEven />
                    <CompanyInfoRow label="資本金" value="500,000円" />
                    <CompanyInfoRow label="事業年度" value="7月1日から翌年6月30日まで" isEven />
                    <CompanyInfoRow label="代表者" value="代表社員 宮野 聖史" />
                    <div className="px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4 bg-slate-800">
                      <dt className="text-sm font-medium text-slate-400">所在地</dt>
                      <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
                        東京都内
                        <p className="text-xs text-slate-500 mt-1">※プライバシー保護のため、詳細な住所は非公開としておりますが特定商取引法に基づき、請求があった際には速やかに開示いたします。</p>
                      </dd>
                    </div>
                  </dl>
                </div>
              </FadeInSection>
            </div>
          </section>

          <section id="faq" className="py-20 lg:py-28">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeInSection>
                <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-gray-800">よくある質問</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={faq.question} className="border border-slate-200 rounded-lg">
                      <button
                        className="w-full px-6 py-4 text-left flex justify-between items-center text-gray-800"
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      >
                        <span className="font-medium">{faq.question}</span>
                        <ChevronDown className={`transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                      </button>
                      {openFaq === index && (
                        <div className="px-6 pb-4 text-gray-600">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </FadeInSection>
            </div>
          </section>

          {/* Contact Section */}
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
        </main>

        <footer className="bg-slate-900 text-slate-400 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <img src={logo} alt={companyName} className="h-12 w-auto mb-4 mx-auto" />
              <h3 className="text-white text-lg font-semibold mb-2">{companyName}</h3>
              
              {/* ▼▼▼ 追加: フッターにもお問い合わせメール ▼▼▼ */}
              <a 
                href="mailto:contact@ailaf.co.jp" 
                className="inline-flex items-center text-slate-400 hover:text-sky-400 transition-colors duration-300 mb-6"
              >
                <Mail className="w-4 h-4 mr-2" />
                contact@ailaf.co.jp
              </a>

              {/* ▼▼▼ 修正: Firework風 SNSアイコンのみの表示 ▼▼▼ */}
              <div className="flex justify-center items-center space-x-6 mb-8">
                {/* Note */}
                <a 
                  href="https://note.com/ailaf_038" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-400 hover:text-[#2cb696] transition-transform hover:scale-110 duration-300"
                  aria-label="Note"
                >
                   {/* ▼▼▼ NoteIcon (w-12 h-12) に変更してサイズ調整 ▼▼▼ */}
                  <NoteIcon className="w-12 h-12" />
                </a>

                {/* X */}
                <a 
                  href="https://x.com/Ailafllc202577" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-400 hover:text-white transition-transform hover:scale-110 duration-300"
                  aria-label="X"
                >
                  <XIcon className="w-6 h-6" />
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/company/ailaf-llc" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-400 hover:text-[#0a66c2] transition-transform hover:scale-110 duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* ▼▼▼ 修正: テキストリンクからSNSを削除 ▼▼▼ */}
            <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 text-sm mb-8">
              <NavLink to="#services">事業内容</NavLink>
              <NavLink to="#strengths">選ばれる理由</NavLink>
              <NavLink to="#cases">事例紹介</NavLink>
              <NavLink to="#team">Team</NavLink>
              <NavLink to="#company-profile">会社概要</NavLink>
              <NavLink to="#faq">FAQ</NavLink>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-700 text-center">
              <p className="text-sm">&copy; {currentYear} {companyName}. All rights reserved.</p>
            </div>
          </div>
        </footer>

        <CookieConsent
          location="bottom"
          buttonText="同意する"
          cookieName="ailaf-cookie-consent"
          style={{ background: "#1e293b", alignItems: "center" }}
          buttonStyle={{ 
            background: "#0284c7",
            color: "#ffffff", 
            fontSize: "13px", 
            borderRadius: "6px",
            padding: "8px 20px",
            fontWeight: "bold"
          }}
          expires={150}
        >
          <span className="text-sm">
            当サイトでは、サービスの向上とお客様へのより良い体験の提供のためにクッキー（Cookie）を使用しています。
          </span>
        </CookieConsent>

      </div>
    </HelmetProvider>
  );
}

// --- ヘルパーコンポーネント ---
const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-sky-400">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const CompanyInfoRow: React.FC<{ label: string; value: string; isEven?: boolean }> = ({ label, value, isEven }) => (
  <div className={`px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4 ${isEven ? 'bg-slate-800' : 'bg-slate-900'}`}>
    <dt className="text-sm font-medium text-slate-400">{label}</dt>
    <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">{value}</dd>
  </div>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    aria-hidden="true"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const NoteIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 493 493" // ★公式SVGのviewBoxが0 0 100 100などの場合はここも合わせて修正してください
    fill="currentColor" 
    className={className}
    aria-hidden="true"
  >
    <path d="m139.57,142.06c41.19,0,97.6-2.09,138.1-1.04,54.34,1.39,74.76,25.06,75.45,83.53.69,33.06,0,127.73,0,127.73h-58.79c0-82.83.35-96.5,0-122.6-.69-22.97-7.25-33.92-24.9-36.01-18.69-2.09-71.07-.35-71.07-.35v158.96h-58.79v-210.22Z" />
  </svg>
);

export default App;