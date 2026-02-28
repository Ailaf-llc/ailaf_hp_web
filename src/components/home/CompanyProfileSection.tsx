import React from 'react';
import FadeInSection from '../ui/FadeInSection';

const companyName = "アイラフ合同会社 Ailaf LLC";

const CompanyInfoRow: React.FC<{ label: string; value: string; isEven?: boolean }> = ({ label, value, isEven }) => (
  <div className={`px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4 ${isEven ? 'bg-slate-800' : 'bg-slate-900'}`}>
    <dt className="text-sm font-medium text-slate-400">{label}</dt>
    <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">{value}</dd>
  </div>
);

const CompanyProfileSection: React.FC = () => {
  return (
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
  );
};

export default CompanyProfileSection;
