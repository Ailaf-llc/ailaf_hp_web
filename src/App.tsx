import React, { useState, useEffect, useCallback } from 'react';
import { Route, Routes, Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X as CloseIcon, ChevronDown, Facebook, XIcon, Linkedin, Mail } from 'lucide-react';

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

  const services = [
    {
      title: 'ビジネストランスフォーメーション',
      description: 'ビジネストランスフォーメーションコンサルティング',
      icon: '📈'
    },
    {
      title: 'デジタルトランスフォーメーション',
      description: 'デジタルトランスフォーメーションコンサルティング',
      icon: '🌐'
    },
    {
      title: '経営コンサルティング',
      description: '経営コンサルティング',
      icon: '📊'
    },
    {
      title: 'マインドセットコーチング',
      description: '将来を担う若い世代に向けた人生設計支援サービスを提供します。',
      icon: '👥'
    }
  ];

  const team = [
    {
      name: '宮野 聖史',
      role: '代表社員',
      image: './assets/miyano.jpg'
    },
    {
      name: '山添 達郎',
      role: '業務執行社員',
      image: './assets/yamazoe.jpg'
    },
    {
      name: '田畑 佑樹',
      role: '業務執行社員',
      image: './assets/tabata.jpg'
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
      <nav className="bg-white border-b">
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
              <NavLink to="#contact">お問い合わせ</NavLink>
              <Link to="/company-info" className="text-gray-700 hover:text-gray-900">会社情報</Link>
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
              <img alt="アイラフ" className="h-6 w-auto mr-2" />
              <span className="font-semibold">アイラフ</span>
            </div>
            <Link to="/" className="block px-3 py-2 text-gray-700">ホーム</Link>
            <NavLink to="#services">
              <span className="block px-2 py-2 text-gray-700">事業内容</span>
            </NavLink>
            <NavLink to="#team">
              <span className="block px-3 py-2 text-gray-700">Our Expert Team</span>
            </NavLink>
            <NavLink to="#contact">
              <span className="block px-3 py-2 text-gray-700">お問い合わせ</span>
            </NavLink>
            <Link to="/company-info" className="block px-3 py-2 text-gray-700">会社情報</Link>
          </div>
        </div>
      )}

      <Routes>
        <Route path="/" element={
          <>
            {/* Hero Section */}
            <div className="bg-gray-900 text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                <img src={logo} alt="アイラフ" className="h-32 w-auto mx-auto mb-8" />
                <h1 className="text-4xl font-bold mb-4">
                  変わる時代、変わる働き方。<br />
                  アイラフが、あなたの"一歩先"を照らします。
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  私たちは、中小企業や個人事業主の皆さまが直面する<br />
                  「業務の複雑さ」や「デジタル化の遅れ」といった課題を解決し、<br />
                  よりシンプルで強い組織づくりをお手伝いします。<br />
                  たとえば、業務の流れを整理して効率化したり、<br />
                  デジタルツールやクラウドサービスを導入して負担を減らしたりすることから始めます。<br />
                  <br />
                  こうした取り組みは、ビジネスの進め方そのものを変革する「ビジネストランスフォーメーション（BX）」、<br />
                  そしてIT活用による「デジタルトランスフォーメーション（DX）」と呼ばれています。<br />
                  アイラフは、これらを難しい言葉ではなく、現場で役立つかたちで支援していきます。<br />
                  <br />
                  また、中高生を対象としたマインドセットコーチングを通じて、<br />
                  人生設計や学習習慣づくりをサポートし、未来を担う世代の成長にも貢献しています。<br />
                </p>
                <a href="#contact" className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                  お問い合わせ
                </a>
              </div>
            </div>

            {/* Services Section */}
            <section id="services" className="py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">事業内容</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services.map((service, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Team Section */}
            <section id="team" className="py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">Our Expert Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {team.map((member, index) => (
                    <div key={index} className="text-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                      />
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-gray-600">{member.role}</p>
                    </div>
                  ))}
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
{/*             <section id="contact" className="py-20 bg-gray-900 text-white">
              <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">お問い合わせ</h2>
                <div className="text-center">
                  <p className="mb-6">お問い合わせは以下よりお願いいたします。</p>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700"
                  >
                    <Mail className="mr-2" />
                    {contactEmail}
                  </a>
                </div>
              </div>
            </section>
          </> */}
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
