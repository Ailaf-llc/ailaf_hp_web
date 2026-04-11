
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "アイラフ合同会社",
    "alternateName": "Ailaf LLC",
    "url": "https://ailaf.co.jp",
    "logo": "https://ailaf.co.jp/logo192.png",
    "description": "アイラフは、大手企業でDXの最前線を担う現役プロフェッショナルによるチームです。中小企業の業務改善・DX推進や、若手向けのキャリア・ライフデザイン支援を行います。",
    "foundingDate": "2025-07-07",
    "founder": {
      "@type": "Person",
      "name": "宮野 聖史"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "東京都",
      "addressCountry": "JP"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "DX・業務改善支援",
          "description": "「何から始めれば？」という段階から伴走します。業務プロセスの可視化、最適なITツール選定、データ活用基盤の構築まで支援します。"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "キャリア・ライフデザイン支援",
          "description": "VUCA時代を生き抜くための「自分だけの軸」作りをお手伝い。実践的なキャリア設計と学習戦略をコーチングします。"
        }
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "サービスの対象地域はどこですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "東京都内および近郊を中心にサービスを提供しています。完全オンラインでのご対応も可能ですので、日本全国からご利用いただけます。"
        }
      },
      {
        "@type": "Question",
        "name": "プロジェクト期間はどれくらいですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "プロジェクトの規模や目的によって異なりますが、弊社の特性上、数週間から数ヶ月単位の比較的短期プロジェクトを多く手掛けております。お客様の状況に合わせた柔軟なご提案が可能です。"
        }
      },
      {
        "@type": "Question",
        "name": "対応可能な業種はありますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "特定の業種に限らず、幅広い分野の中小規模事業者様をご支援可能です（一部お受けできない業種・領域がございます）。特に「業務プロセス改善」や「デジタル化」に課題を感じているお客様に適しています。"
        }
      },
      {
        "@type": "Question",
        "name": "相談の段階でもお願いできますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい。「何から手をつけて良いかわからない」という状況こそ、私たちが得意とする領域です。明確な課題が固まっていない段階でも、ぜひご相談ください。"
        }
      },
      {
        "@type": "Question",
        "name": "費用感を知りたいのですが？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ご依頼内容や期間によって変動いたします。お客様のご予算に応じて柔軟なご提案が可能ですので、まずはお気軽にお問い合わせいただき、無料相談をご活用ください。"
        }
      },
      {
        "@type": "Question",
        "name": "オンラインでの打ち合わせは可能ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい。オンラインミーティングツールを活用して、全国どこからでも打ち合わせ可能です。対面打ち合わせをご希望の場合はご相談ください。"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Helmet>
        <title>Ailaf LLC | DXを、もっと身近に。あなたのペースで。</title>
        <meta name="description" content="アイラフは、大手企業でDXの最前線を担う現役プロフェッショナルによるチームです。専門用語ではない「現場で使える言葉」で、あなたの会社の課題解決を伴走します。" />
        <meta property="og:title" content="Ailaf LLC | DXを、もっと身近に。あなたのペースで。" />
        <meta property="og:description" content="アイラフは、大手企業でDXの最前線を担う現役プロフェッショナルによるチームです。中小企業の業務改善・DX推進を伴走支援します。" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={heroImage} />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
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