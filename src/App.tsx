import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Menu, X as CloseIcon, ChevronDown, Facebook, XIcon, Linkedin, Mail } from 'lucide-react';
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

  const contactEmail = 'contact@ailaf.com'; // 実際の問い合わせ用メールアドレスに置き換えてください

  const currentYear = new Date().getFullYear();

  const services = [
    {
      title: 'PTA活動の代行及びマッチング',
      description: 'PTA活動の代行及びマッチングサービスの提供',
      icon: '👥'
    },
    {
      title: 'PTA活動サポートシステム',
      description: 'PTA活動サポートに関するシステムの構築・運営',
      icon: '💻'
    },
    {
      title: '人材派遣',
      description: 'シルバー人材や地域人材の派遣',
      icon: '🤝'
    },
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
    }
  ];

  const team = [
    {
      name: '宮野 聖史',
      role: '代表社員',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
    },
    {
      name: '山添 達郎',
      role: '業務執行社員',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop'
    },
    {
      name: '田畑 佑樹',
      role: '業務執行社員',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
    }
  ];

  const faqs = [
    {
      question: 'PTA活動の代行サービスの料金はいくらですか？',
      answer: '活動内容や時間によって料金は異なります。詳細はお問い合わせください。'
    },
    {
      question: 'サービスの対象地域はどこですか？',
      answer: '現在は東京都内を中心にサービスを提供しています。'
    },
    {
      question: 'コンサルティングの期間はどのくらいですか？',
      answer: 'プロジェクトの規模や目的によって異なりますが、通常3ヶ月から1年程度です。'
    }
  ];

  return (
    <Router>
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
                <Link to="/#services" className="text-gray-700 hover:text-gray-900">事業内容</Link>
                <Link to="/team-members" className="text-gray-700 hover:text-gray-900">チーム</Link>
                <Link to="/#contact" className="text-gray-700 hover:text-gray-900">お問い合わせ</Link>
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
                <img src={logo} alt="アイラフ" className="h-6 w-auto mr-2" />
                <span className="font-semibold">アイラフ</span>
              </div>
              <Link to="/#services" className="block px-3 py-2 text-gray-700">事業内容</Link>
              <Link to="/team-members" className="block px-3 py-2 text-gray-700">チーム</Link>
              <Link to="/#contact" className="block px-3 py-2 text-gray-700">お問い合わせ</Link>
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
                    現代社会の多様化するライフスタイル。アイラフは新しい働き方を提案して、<br />
                    未来の社会の在り方を創造する。
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
              <section id="contact" className="py-20 bg-gray-900 text-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-3xl font-bold text-center mb-12">お問い合わせ</h2>
                  <div className="text-center">
                    <p className="mb-6">お問い合わせは以下のメールアドレスまでお願いいたします。</p>
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
                <p className="text-sm mt-2">※プライバシー保護のため、詳細な住所は非公開としております。</p>
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold mb-4">リンク</h3>
                <ul className="space-y-2">
                  <li><Link to="/#services" className="hover:text-white">事業内容</Link></li>
                  <li><Link to="/team-members" className="hover:text-white">チーム</Link></li>
                  <li><Link to="/#contact" className="hover:text-white">お問い合わせ</Link></li>
                  <li><Link to="/company-info" className="hover:text-white">会社情報</Link></li>
                  <li><Link to="/electronic-public-notice" className="hover:text-white">電子公告</Link></li>
                  <li><Link to="/privacy-policy" className="hover:text-white">プライバシーポリシー</Link></li>
                  <li><Link to="/terms-of-service" className="hover:text-white">利用規約</Link></li>
                  <li><Link to="/sitemap" className="hover:text-white">サイトマップ</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold mb-4">SNS</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-white"><Facebook /></a>
                  <a href="#" className="hover:text-white"><XIcon /></a>
                  <a href="#" className="hover:text-white"><Linkedin /></a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center">
              <p>&copy; {currentYear} アイラフ合同会社. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;