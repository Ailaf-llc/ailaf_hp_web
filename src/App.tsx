import React, { useState } from 'react';
import { Menu, X as CloseIcon, ChevronDown, Facebook, XIcon, Linkedin } from 'lucide-react';
import logo from './assets/logo.png';
import axios from 'axios';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('loading');
    try {
      await axios.post('http://localhost:3001/api/send-to-discord', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    }
  };

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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img src={logo} alt="アイラフ" className="h-8 w-auto mr-2" />
              <span className="text-xl font-bold">アイラフ</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="#services" className="text-gray-700 hover:text-gray-900">事業内容</a>
              <a href="#team" className="text-gray-700 hover:text-gray-900">チーム</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900">お問い合わせ</a>
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
            <a href="#services" className="block px-3 py-2 text-gray-700">事業内容</a>
            <a href="#team" className="block px-3 py-2 text-gray-700">チーム</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700">お問い合わせ</a>
          </div>
        </div>
      )}

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
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">お名前</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">メールアドレス</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">お問い合わせ内容</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-gray-900 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              disabled={submitStatus === 'loading'}
            >
              {submitStatus === 'loading' ? '送信中...' : '送信する'}
            </button>
            {submitStatus === 'success' && (
              <p className="text-green-400 text-center">お問い合わせが正常に送信されました。</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-400 text-center">送信中にエラーが発生しました。もう一度お試しください。</p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <img src={logo} alt="アイラフ" className="h-12 w-auto mb-4" />
              <h3 className="text-white text-lg font-semibold mb-4">アイラフ合同会社</h3>
              <p>〒124-0002</p>
              <p>東京都葛飾区堀切４丁目２３番地５</p>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">リンク</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="hover:text-white">事業内容</a></li>
                <li><a href="#team" className="hover:text-white">チーム</a></li>
                <li><a href="#contact" className="hover:text-white">お問い合わせ</a></li>
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
            <p>&copy; 2024 アイラフ合同会社. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;