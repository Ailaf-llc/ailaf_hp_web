import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      <Helmet>
        <title>プライバシーポリシー | アイラフ合同会社 (Ailaf LLC)</title>
      </Helmet>

      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex-grow">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">プライバシーポリシー</h1>
        <div className="text-slate-500 mb-12 space-y-1">
          <p>制定日：2025年7月7日</p>
          <p>最終改定日：2026年3月21日</p>
        </div>

        <div className="bg-white px-8 py-12 lg:px-12 rounded-xl shadow-sm border border-slate-100 space-y-10">
          <p className="leading-relaxed text-slate-700">
            アイラフ合同会社（以下「当社」といいます。）は、当社が提供するサービス（以下「本サービス」といいます。）における、利用者の個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定めます。
          </p>

          <section>
            <h2 className="text-xl font-bold text-sky-800 border-l-4 border-sky-600 pl-3 mb-4">第1条（個人情報の定義）</h2>
            <p className="leading-relaxed text-slate-700">
              本ポリシーにおいて「個人情報」とは、氏名、会社名、メールアドレス、電話番号その他の記述等により特定の個人を識別できる情報をいいます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-sky-800 border-l-4 border-sky-600 pl-3 mb-4">第2条（個人情報の取得方法）</h2>
            <p className="leading-relaxed mb-4 text-slate-700">
              当社は、以下の方法により個人情報を取得することがあります。
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>お問い合わせフォームへの入力</li>
              <li>サービス提供に伴うヒアリング・打ち合わせ</li>
              <li>名刺交換、メール、SNS等による連絡</li>
              <li>その他、適法かつ公正な手段</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-sky-800 border-l-4 border-sky-600 pl-3 mb-4">第3条（利用目的）</h2>
            <p className="leading-relaxed mb-4 text-slate-700">
              当社は、取得した個人情報を以下の目的で利用します。
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>本サービスの提供・運営</li>
              <li>お問い合わせへの対応（本人確認を含む）</li>
              <li>サービスに関するご案内・連絡</li>
              <li>契約の履行および請求・支払い管理</li>
              <li>サービス改善および新サービスの検討</li>
              <li>必要に応じた重要お知らせの通知</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-sky-800 border-l-4 border-sky-600 pl-3 mb-4">第4条（利用目的の変更）</h2>
            <p className="leading-relaxed text-slate-700">
              当社は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-sky-800 border-l-4 border-sky-600 pl-3 mb-4">第5条（個人情報の第三者提供）</h2>
            <p className="leading-relaxed mb-4 text-slate-700">
              当社は、以下の場合を除き、あらかじめ本人の同意を得ることなく第三者に個人情報を提供しません。
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要な場合</li>
              <li>公衆衛生の向上または児童の健全育成の推進のために特に必要な場合</li>
              <li>国の機関等への協力が必要な場合</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-sky-800 border-l-4 border-sky-600 pl-3 mb-4">第6条（個人情報の管理）</h2>
            <p className="leading-relaxed text-slate-700">
              当社は、個人情報の正確性および安全性を確保するため、適切な安全管理措置を講じます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-sky-800 border-l-4 border-sky-600 pl-3 mb-4">第7条（個人情報の開示・訂正・削除）</h2>
            <p className="leading-relaxed text-slate-700">
              本人から個人情報の開示、訂正、追加、削除、利用停止等の請求があった場合には、本人確認の上、合理的な範囲で速やかに対応します。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-sky-800 border-l-4 border-sky-600 pl-3 mb-4">第8条（Cookie等の利用）</h2>
            <p className="leading-relaxed text-slate-700">
              当社は、サービスの利便性向上やアクセス解析のため、Cookie等の技術を使用する場合があります。<br />
              利用者はブラウザ設定によりCookieの受け取りを拒否することができます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-sky-800 border-l-4 border-sky-600 pl-3 mb-4">第9条（アクセス解析ツール）</h2>
            <p className="leading-relaxed text-slate-700">
              当社は、Google Analytics等のアクセス解析ツールを利用する場合があります。<br />
              これにより収集されるデータは匿名であり、個人を特定するものではありません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-sky-800 border-l-4 border-sky-600 pl-3 mb-4">第10条（プライバシーポリシーの変更）</h2>
            <p className="leading-relaxed text-slate-700">
              本ポリシーの内容は、法令等の変更に応じて予告なく変更されることがあります。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-sky-800 border-l-4 border-sky-600 pl-3 mb-4">第11条（お問い合わせ窓口）</h2>
            <p className="leading-relaxed mb-4 text-slate-700">
              本ポリシーに関するお問い合わせは、下記までご連絡ください。
            </p>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 mt-4 text-slate-700 leading-relaxed font-medium">
              <p>アイラフ合同会社 (Ailaf LLC)</p>
              <p>Email: <a href="mailto:contact@ailaf.co.jp" className="text-sky-600 hover:underline">contact@ailaf.co.jp</a></p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
