import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from '../Home';

const renderHome = () => {
  return render(
    <HelmetProvider>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </HelmetProvider>
  );
};

describe('Ailaf LLC Home Page - User Stories', () => {
  
  describe('1. Header & Navigation', () => {
    test('US-1.01: Company name "Ailaf LLC" is visible in the header', () => {
      renderHome();
      expect(screen.getAllByText(/Ailaf LLC/i)[0]).toBeInTheDocument();
    });

    test('US-1.02: Navigation links are present', () => {
      renderHome();
      expect(screen.getAllByText('事業内容')[0]).toBeInTheDocument();
      expect(screen.getAllByText('選ばれる理由')[0]).toBeInTheDocument();
      expect(screen.getAllByText('事例紹介')[0]).toBeInTheDocument();
    });
  });

  describe('2. Hero Section', () => {
    test('US-2.01: Hero message and CTA button are visible', () => {
      renderHome();
      expect(screen.getByText(/DXを、もっと身近に。/i)).toBeInTheDocument();
      expect(screen.getAllByText(/無料相談・お問い合わせ/)[0]).toBeInTheDocument();
    });
  });

  describe('3. Contents & Features', () => {
    test('US-3.01: Services (DX支援 & キャリア支援) are displayed', () => {
      renderHome();
      expect(screen.getByText('DX・業務改善支援')).toBeInTheDocument();
      expect(screen.getByText('キャリア・ライフデザイン支援')).toBeInTheDocument();
    });

    test('US-3.03: Team members (宮野, 山添, 田畑) are listed', () => {
      renderHome();
      expect(screen.getByText('宮野 聖史')).toBeInTheDocument();
      expect(screen.getByText('山添 達郎')).toBeInTheDocument();
      expect(screen.getByText('田畑 佑樹')).toBeInTheDocument();
    });

    test('US-3.04: "Read More" button expands the bio text', () => {
      renderHome();
      const readMoreButtons = screen.getAllByRole('button', { name: '続きを読む' });
      expect(readMoreButtons.length).toBeGreaterThan(0);
      
      // Click the first "Read More" button
      fireEvent.click(readMoreButtons[0]);
      expect(screen.getAllByRole('button', { name: '閉じる' }).length).toBeGreaterThan(0);
    });

    test('US-3.05: Company info is visible', () => {
      renderHome();
      expect(screen.getAllByText(/アイラフ合同会社/)[0]).toBeInTheDocument();
    });

    test('US-3.06: FAQ accordion functionality works', () => {
      renderHome();
      const faqQuestion = screen.getByText('サービスの対象地域はどこですか？');
      
      // Answer should not be visible initially
      expect(screen.queryByText(/東京都内および近郊を中心にサービスを提供しています/)).not.toBeInTheDocument();
      
      // Click question to reveal answer
      fireEvent.click(faqQuestion);
      expect(screen.getByText(/東京都内および近郊を中心にサービスを提供しています/)).toBeInTheDocument();
    });
  });

  describe('4. Footer & Contact', () => {
    test('US-4.01: Email contact button is present', () => {
      renderHome();
      const contactLink = screen.getByRole('link', { name: /contact@ailaf.co.jp へメールを送る/i });
      expect(contactLink).toBeInTheDocument();
      expect(contactLink).toHaveAttribute('href', 'mailto:contact@ailaf.co.jp');
    });

    test('US-4.02: Footer copyright is present', () => {
      renderHome();
      expect(screen.getAllByText((content, element) => {
        return element?.textContent === `© ${new Date().getFullYear()} アイラフ合同会社 Ailaf LLC. All rights reserved.`;
      })[0]).toBeInTheDocument();
    });
  });

});
