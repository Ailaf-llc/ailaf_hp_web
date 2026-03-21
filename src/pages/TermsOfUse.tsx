import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const TermsOfUse: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      <Helmet>
        <title>サイト利用規約 | アイラフ合同会社 (Ailaf LLC)</title>
      </Helmet>

      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex-grow">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">サイト利用規約</h1>
        <div className="text-slate-500 mb-12 space-y-1">
          <p>制定日：2025年7月7日</p>
          <p>最終改定日：2026年3月21日</p>
        </div>

        <div className="bg-white px-8 py-12 lg:px-12 rounded-xl shadow-sm border border-slate-100 space-y-10">
          <p className="leading-relaxed text-slate-700">
            この利用規約（以下、「本規約」といいます。）は、アイラフ合同会社（以下、「当社」といいます。）が提供するウェブサイトおよび関連サービス（以下、「本サービス」といいます。）の利用条件を定めるものです。本サービスをご利用になる方（以下、「利用者」といいます。）は、本規約に同意したものとみなされます。
          </p>

          <section>
            <h2 className="text-xl font-bold text-sky-800 border-l-4 border-sky-600 pl-3 mb-4">第1条（適用）</h2>
            <p className="leading-relaxed text-slate-700">
              本規約は、利用者と当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。当社等の提供するコンサルティング業務やコーチング業務を正式に契約する場合には、別途定める業務委託契約書等の規定が優先して適用されます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-sky-800 border-l-4 border-sky-600 pl-3 mb-4">第2条（サービス内容）</h2>
            <p className="leading-relaxed text-slate-700">
              当社は、中小企業向けのDX・業務改善支援サービス、DX組織の内製化・スキルトランスファー、および学生・若手向けのキャリア・ライフデザインコーチング等の情報提供を行います。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-sky-800 border-l-4 border-sky-600 pl-3 mb-4">第3条（禁止事項）</h2>
            <p className="leading-relaxed mb-4 text-slate-700">
              利用者は、本サービスの利用にあたり、以下の行為をしてはなりません。
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>当社、本サービスの他の利用者、または第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
              <li>当社のサービスの運営を妨害するおそれのある行為</li>
              <li>他の利用者に関する個人情報等を収集または蓄積する行為</li>
              <li>不正アクセスをし、またはこれを試みる行為</li>
              <li>その他、当社が不適切と判断する行為</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-sky-800 border-l-4 border-sky-600 pl-3 mb-4">第4条（知的財産権）</h2>
            <p className="leading-relaxed text-slate-700">
              本ウェブサイトに掲載されている文章、画像、デザイン、ロゴマーク等に関する著作権、商標権その他の知的財産権は、当社または正当な権利者に帰属します。無断での複製、転載、改変、頒布等を禁止します。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-sky-800 border-l-4 border-sky-600 pl-3 mb-4">第5条（免責事項）</h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>1. 当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。</p>
              <p>2. 当社が提供するDX支援やコーチングに関する各種情報は、成果や特定の目的の達成を絶対的に保証するものではありません。情報の利用は利用者の自己責任において行われるものとします。</p>
              <p>3. 当社は、本サービスに起因して利用者に生じたあらゆる損害について一切の責任を負いません。ただし、消費者契約法その他の強行法規の適用を受ける場合には、この限りではありません。</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-sky-800 border-l-4 border-sky-600 pl-3 mb-4">第6条（サービス内容の変更等）</h2>
            <p className="leading-relaxed text-slate-700">
              当社は、利用者に通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによって利用者に生じた損害について一切の責任を負いません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-sky-800 border-l-4 border-sky-600 pl-3 mb-4">第7条（準拠法・裁判管轄）</h2>
            <p className="leading-relaxed text-slate-700">
              本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfUse;
