import React, { useState, useEffect, useCallback } from 'react';
import { Route, Routes, Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X as CloseIcon, ChevronDown, Facebook, XIcon, Linkedin, Mail } from 'lucide-react';
import { BarChart3, Bot, Briefcase, Users } from 'lucide-react';
import { LinkIcon } from 'lucide-react';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (location.pathname === '/') {
      const element = document.querySelector(to);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: to.substring(1) } });
    }
  };

  return (
    <a href={to} onClick={handleClick} className="text-gray-700 hover:text-gray-900">
      {children}
    </a>
  );
};
import logo from './assets/logo.png';
import miyanoImage from './assets/miyano.jpg';
import yamazoeImage from './assets/yamazoe.jpg';
import tabataImage from './assets/tabata.jpg';
import ElectronicPublicNotice from './components/ElectronicPublicNotice';
import CompanyInfo from './components/CompanyInfo';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Sitemap from './components/Sitemap';
import TeamMembers from './components/TeamMembers';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const contactEmail = 'contact@ailaf.com'; // 実際の問い合わせ用メールアドレスに置き換えてください

  const currentYear = new Date().getFullYear();

  const handleScroll = useCallback((event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = event.currentTarget;
    const targetId = target.getAttribute('href')?.substring(1);
    const targetElement = document.getElementById(targetId || '');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    if (location.state && (location.state as { scrollTo?: string }).scrollTo) {
      const targetId = (location.state as { scrollTo: string }).scrollTo;
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
      navigate('/', { replace: true, state: {} });
    }
  }, [location, navigate]);

  // 2. services配列のiconをSVGアイコンコンポーネントに変更します
  const services = [
    {
      title: 'ビジネストランスフォーメーション',
      description: '業務プロセスの見直しから組織文化の変革まで、事業全体の成長を支援します。',
      icon: <Briefcase className="w-10 h-10 text-blue-600" />
    },
    {
      title: 'デジタルトランスフォーメーション',
      description: 'AIやクラウド技術を駆使し、非効率な業務を自動化、データに基づいた経営を実現します。',
      icon: <Bot className="w-10 h-10 text-blue-600" />
    },
    {
      title: '経営コンサルティング',
      description: '新規事業の立案や資金調達など、企業の持続的な成長に向けた戦略を共に描きます。',
      icon: <BarChart3 className="w-10 h-10 text-blue-600" />
    },
    {
      title: 'マインドセットコーチング',
      description: '将来を担う若い世代に向けた人生設計支援サービスを提供します。',
      icon: <Users className="w-10 h-10 text-blue-600" />
    }
  ];

  // 3. 「強み」セクションで表示するためのデータ配列を新しく定義します
  const strengths = [
    {
      title: '現場に寄り添う伴走支援',
      description: '計画倒れにさせません。お客様のチームの一員として、プロジェクトの実行から定着まで責任を持ってサポートします。',
    },
    {
      title: '最新技術への深い知見',
      description: '生成AIやクラウドネイティブ技術など、常に最新の動向を捉え、お客様のビジネスに最適なソリューションを提案します。',
    },
    {
      title: '人 と 組織 を育むアプローチ',
      description: 'ツールの導入だけでなく、社員一人ひとりのスキルアップと、変化に強い組織文化の醸成を重視します。',
    },
  ];

  const team = [
    {
      name: '宮野 聖史',
      role: '代表社員',
      image: miyanoImage, // './assets/miyano.jpg' から変更
      bio: '早稲田大学大学院経営管理研究科（WBS）修了。大手企業にてDX推進や新規事業開発に従事し、戦略立案から現場実装まで幅広く携わる。より直接的な社会貢献を目指し、2025年にアイラフを共同設立。',
      links: []
    },
    {
      name: '山添 達郎',
      role: '業務執行社員',
      image: yamazoeImage, // './assets/yamazoe.jpg' から変更
      bio: 'デジタル広告と動画ソリューションで豊富な経験を持ち、営業・事業開発からパートナーシップ構築まで幅広く担当。現在はSaaSセールスとチームマネジメントを牽引中。',
      links: []
    },
    {
      name: '田畑 佑樹',
      role: '業務執行社員',
      image: tabataImage, // './assets/tabata.jpg' から変更,
      bio: 'インフラ企業および製薬企業でのDX推進を経験。この経験を活かし、多数の外部公演や記事執筆の実績を持つ専門家。',
      links: [
        { title: 'Google Cloud: 生成AIのビジネス適用', url: 'https://cloud.google.com/blog/ja/topics/customers/chugai-pharm-generating-ai-to-drive-operational-efficiency-and-value-creation/' },
        { title: 'AWS: 生成AIアプリの全社導入', url: 'https://aws.amazon.com/jp/solutions/case-studies/chugai-pharm/' },
        { title: 'note: 生成AIアプリ開発を内製アジャイルで', url: 'https://note.chugai-pharm.co.jp/n/n2e7083b32b68?magazine_key=m5745f166b9de' }
      ]
    }
  ];

  const faqs = [
    {
      question: 'サービスの対象地域はどこですか？',
      answer: '東京都内および近郊を中心にサービスを提供しています。完全オンラインでのご対応も可能ですので、日本全国からご利用いただけます。'
    },
    {
      question: 'コンサルティングの期間はどのくらいですか？',
      answer: '完全に案件依存で、プロジェクトの規模や目的によって異なります。弊社の特性上、数週間から数か月単位の比較的短期プロジェクトが多い想定です。'
    },
    {
      question: '対応可能な業種はありますか？',
      answer: '特定の業種に限らず、幅広い分野の中小規模事業者様をご支援可能です。特に「業務プロセス改善」や「デジタル化」に課題を感じているお客様に適しています。まずは豪相談頂ければ幸いです。'
    },
    {
      question: '相談の段階でもお願いできますか？',
      answer: 'はい。明確な課題が固まっていない段階でもご相談いただけます。「何から手をつけて良いかわからない」という状況こそ、私たちが得意とする領域です。'
    },
    {
      question: '費用感を知りたいのですが？',
      answer: 'ご依頼内容や期間によって変動します。初回相談は無料で承っておりますので、お気軽にお問い合わせください。'
    },
    {
      question: 'オンラインでの打ち合わせは可能ですか？',
      answer: 'はい。オンラインミーティングツールを活用して、全国どこからでも打ち合わせ可能です。対面打ち合わせをご希望の場合はご相談ください。'
    },
    {
      question: 'マインドセットコーチングは誰が対象ですか？',
      answer: '主に中高生を対象としていますが、保護者の方との同席相談や、大学生・若手社会人への応用も可能です。'
    },
    {
      question: 'コーチングの形式はどのようになりますか？',
      answer: 'オンラインでの1on1セッションを基本とし、必要に応じて保護者同席や少人数グループでの実施も行っています。ご自宅等での対面実施もう。'
    }
  ];

 return (
  <div className="min-h-screen bg-white">
    {/* Navigation */}
    <nav className="bg-white border-b sticky top-0 z-50">
      {/* ...ナビゲーションバーの中身は変更なし... */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="アイラフ" className="h-8 w-auto mr-2" />
              <span className="text-xl font-bold">アイラフ</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-gray-900">ホーム</Link>
            <NavLink to="#services">事業内容</NavLink>
            <NavLink to="#team">Our Expert Team</NavLink>
            <NavLink to="#company-profile">会社情報</NavLink>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <CloseIcon /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
    </nav>

    {/* Mobile menu */}
    {isMenuOpen && (
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <div className="flex items-center px-3 py-2">
            <img src={logo} alt="アイラフ" className="h-6 w-auto mr-2" />
            <span className="font-semibold">アイラフ</span>
          </div>
          <Link to="/" className="block px-3 py-2 text-gray-700">ホーム</Link>
          <NavLink to="#services">
            <span className="block px-2 py-2 text-gray-700">事業内容</span>
          </NavLink>
          <NavLink to="#team">
            <span className="block px-3 py-2 text-gray-700">Our Expert Team</span>
          </NavLink>
          <NavLink to="#company-profile">
            <span className="block px-3 py-2 text-gray-700">会社情報</span>
          </NavLink>
        </div>
      </div>
    )}

    {/* ▼▼▼ ここから <Routes> と <Route> を削除し、セクションを直接配置します ▼▼▼ */}
    
    {/* Hero Section */}
    <div className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <img src={logo} alt="アイラフ" className="h-24 w-auto mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-4">
          変わる時代、変わる働き方。<br />
          あなたの"一歩先"を照らします。
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          複雑な業務、遅れるデジタル化。そんな課題を「現場で役立つDX」で解決し、
          シンプルで強い組織づくりを、計画から実行まで伴走支援します。
        </p>
        <div className="flex justify-center items-center gap-x-6 gap-y-2 flex-wrap mb-12">
          <span className="flex items-center text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-400"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            業務プロセスの非効率
          </span>
          <span className="flex items-center text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-400"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            デジタル化の遅れ
          </span>
          <span className="flex items-center text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-400"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            ITツールの活用方法
          </span>
        </div>
        <div className="bg-gray-500 text-white px-8 py-3 rounded-lg font-semibold cursor-not-allowed text-lg opacity-75">
          お問い合わせ (準備中)
        </div>
      </div>
    </div>

            {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">事業内容</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              // カードのデザインを少し変更
              <div key={index} className="bg-gray-50 p-8 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-2">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
                  {/* 4. Strengths Section (ここから新規追加) */}
      <section id="strengths" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">アイラフが選ばれる理由</h2>
            <p className="mt-4 text-lg text-gray-300">私たちは、お客様の成功を第一に考えた3つの強みを持っています。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {strengths.map((strength, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-400 mb-3">{`0${index + 1}. ${strength.title}`}</h3>
                <p className="text-gray-300">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section (リッチコンテンツ版) */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-lg shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-4 ring-gray-200"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 text-left text-sm mb-4">{member.bio}</p>
                {member.links.length > 0 && (
                  <div className="mt-4 pt-4 border-t">
                    <h4 className="font-semibold text-left mb-2 text-sm">関連リンク</h4>
                    <ul className="space-y-2">
                      {member.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm flex items-start text-left">
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
        </div>
      </section>

  
      {/* Company Profile Section (新規追加) */}
      <section id="company-profile" className="py-20 bg-gray-800 text-gray-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">会社概要</h2>
          <div className="bg-gray-900 shadow-lg overflow-hidden rounded-lg">
            <dl>
              {/* 各項目を交互の背景色で表示 */}
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-400">商号</dt>
                <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">アイラフ合同会社</dd>
              </div>
              <div className="bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-400">設立年月日</dt>
                <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">2025年7月7日(令和7年7月7日)</dd>
              </div>
              {/* ... 他の会社情報項目も同様の構造で追加 ... */}
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-400">所在地</dt>
                <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
                  東京都内
                  <p className="text-xs text-gray-500 mt-1">※プライバシー保護のため、詳細な住所は非公開としておりますが特定商取引法に基づき、請求があった際には速やかに開示いたします。</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

            {/* FAQ Section */}
            <section className="py-20">
              <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">よくある質問</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border rounded-lg">
                      <button
                        className="w-full px-6 py-4 text-left flex justify-between items-center"
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      >
                        <span className="font-medium">{faq.question}</span>
                        <ChevronDown className={`transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                      </button>
                      {openFaq === index && (
                        <div className="px-6 py-4 bg-gray-50">
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

{/* Contact Section */}
<section id="contact" className="py-20 bg-gray-900 text-white">
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl font-bold mb-4">お問い合わせ</h2>
    <p className="text-lg text-gray-300 mb-8">
      現在、お問い合わせフォームの準備を進めております。<br />
      ご不便をおかけしますが、開設まで今しばらくお待ちください。
    </p>

    {/* ▼▼▼ メールアドレス設定後、以下のコメントアウトを解除してください ▼▼▼ */}
    {/*
    <a
      href={`mailto:${contactEmail}`} // contactEmail変数はAppコンポーネントの先頭で定義してください
      className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 transition-colors"
    >
      <Mail className="mr-2" />
      メールでのお問い合わせ
    </a>
    */}
  </div>
</section>
          </>
        } />
        <Route path="/company-info" element={<CompanyInfo />} />
        <Route path="/team-members" element={<TeamMembers />} />
        <Route path="/electronic-public-notice" element={<ElectronicPublicNotice />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/sitemap" element={<Sitemap />} />
      </Routes>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <img src={logo} alt="アイラフ" className="h-12 w-auto mb-4" />
              <h3 className="text-white text-lg font-semibold mb-4">アイラフ合同会社</h3>
              <p>所在地: 東京都内</p>
              <p className="text-sm mt-2">※プライバシー保護のため、詳細な住所は非公開としておりますが特定商取引法に基づき、請求があった際には速やかに開示いたします。</p>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">リンク</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-white">ホーム</Link></li>
{/*                 <li><NavLink to="#services"><span className="hover:text-white">事業内容</span></NavLink></li> */}
{/*                 <li><NavLink to="#team"><span className="hover:text-white">Our Expert Team</span></NavLink></li> */}
{/*                 <li><NavLink to="#contact"><span className="hover:text-white">お問い合わせ</span></NavLink></li> */}
                <li><Link to="/company-info" className="hover:text-white">会社情報</Link></li>
{/*                 <li><Link to="/electronic-public-notice" className="hover:text-white">電子公告</Link></li> */}
              </ul>
            </div>
{/*             <div>
              <h3 className="text-white text-lg font-semibold mb-4">SNS</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white"><Facebook /></a>
                <a href="#" className="hover:text-white"><XIcon /></a>
                <a href="#" className="hover:text-white"><Linkedin /></a>
              </div>
            </div> */}
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; {currentYear} アイラフ合同会社. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}


export default App;
