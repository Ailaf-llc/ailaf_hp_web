
import { Helmet } from 'react-helmet-async';
import CookieConsent from 'react-cookie-consent';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/home/HeroSection';
import ServicesSection from './components/home/ServicesSection';
import StrengthsSection from './components/home/StrengthsSection';
import CasesSection from './components/home/CasesSection';
import TeamSection from './components/home/TeamSection';
import CompanyProfileSection from './components/home/CompanyProfileSection';
import FaqSection from './components/home/FaqSection';
import ContactSection from './components/home/ContactSection';
import heroImage from './assets/hero.jpg';

function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Helmet>
        <title>Ailaf LLC | DXを、もっと身近に。あなたのペースで。</title>
        <meta name="description" content="アイラフは、大手企業でDXの最前線を担う現役プロフェッショナルによるチームです。専門用語ではない「現場で使える言葉」で、あなたの会社の課題解決を伴走します。" />
        <meta property="og:title" content="Ailaf LLC | DXを、もっと身近に。あなたのペースで。" />
        <meta property="og:description" content="アイラフは、大手企業でDXの最前線を担う現役プロフェッショナルによるチームです。中小企業の業務改善・DX推進を伴走支援します。" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={heroImage} />
      </Helmet>

      <Header />

      <main>
        <HeroSection />
        <ServicesSection />
        <StrengthsSection />
        <CasesSection />
        <TeamSection />
        <CompanyProfileSection />
        <FaqSection />
        <ContactSection />
      </main>

      <Footer />

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
  );
}

export default Home;