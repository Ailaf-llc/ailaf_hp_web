import React from 'react';
import miyanoImage from '../assets/miyano.jpg';
import yamazoeImage from '../assets/yamazoe.jpg';
import tabataImage from '../assets/tabata.jpg';


const CompanyInfo: React.FC = () => {
    return (
        <div className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-center mb-12">会社情報</h1>

                {/* アイラフについて */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6">アイラフについて</h2>
                    <p className="text-gray-700 mb-4">私たちは、中小企業や個人事業主の皆さまが直面する「業務の複雑さ」や「デジタル化の遅れ」といった課題を解決し、よりシンプルで強い組織づくりをお手伝いします。
たとえば、業務の流れを整理して効率化したり、デジタルツールやクラウドサービスを導入して負担を減らしたりすることから始めます。</p>
                    <p className="text-gray-700">こうした取り組みは、ビジネスの進め方そのものを変革する「ビジネストランスフォーメーション（BX）」、そしてIT活用による「デジタルトランスフォーメーション（DX）」と呼ばれています。
アイラフは、これらを難しい言葉ではなく、現場で役立つかたちで支援していきます。</p>
                    <p className="text-gray-700">また、中高生を対象としたマインドセットコーチングを通じて、人生設計や学習習慣づくりをサポートし、未来を担う世代の成長にも貢献しています。</p>
                </section>

{/* メンバー */}
<section className="mb-16">
    <h2 className="text-2xl font-bold mb-6">メンバー</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 宮野 聖史 */}
        <div className="text-center">
            {/* ↓ この行の src を修正します */}
            <img src={miyanoImage} alt="宮野 聖史" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-lg font-semibold">宮野 聖史</h3>
                            <p className="text-gray-600">代表社員</p>
                            <p className="text-sm text-gray-500 mt-2">早稲田大学大学院経営管理研究科（WBS）修了。大手企業にてデジタルトランスフォーメーション（DX）推進や新規事業開発に従事し、戦略立案から現場実装まで幅広く携わる。
もっと直接的に社会貢献したいという思いから、2025年にアイラフ合同会社を共同設立。</p>
                        </div>
        {/* 山添 達郎 */}
        <div className="text-center">
            {/* ↓ この行の src を修正します */}
            <img src={yamazoeImage} alt="山添 達郎" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-lg font-semibold">山添 達郎</h3>
            {/* ...（以下略）... */}
            <p className="text-gray-600">業務執行社員</p>
                            <p className="text-sm text-gray-500 mt-2">デジタル広告と動画ソリューションで豊富な経験を持ち、営業・事業開発からパートナーシップ構築まで幅広く担当。現在はSaaSセールスとチームマネジメントを牽引中。</p>
                        </div>
        {/* 田畑 佑樹 */}
        <div className="text-center">
            {/* ↓ この行の src を修正します */}
            <img src={tabataImage} alt="田畑 佑樹" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-lg font-semibold">田畑 佑樹</h3>                            <p className="text-gray-600">業務執行社員</p>
                            <p className="text-sm text-gray-500 mt-2">インフラ企業および製薬企業でのDX推進を経験。この経験を活かし、多数の外部公演や記事執筆の実績あり</p>
                            <div className="mt-4 text-sm">
                                <p className="mb-2">
                                    <a href="https://cloud.google.com/blog/ja/topics/customers/chugai-pharm-generating-ai-to-drive-operational-efficiency-and-value-creation/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                        Google Cloud: 生成AIのビジネス適用
                                    </a>
                                </p>
                                <p className="mb-2">
                                    <a href="https://aws.amazon.com/jp/solutions/case-studies/chugai-pharm/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                        AWS: 生成AIアプリの全社導入
                                    </a>
                                </p>
                                <p>
                                    <a href="https://note.chugai-pharm.co.jp/n/n2e7083b32b68?magazine_key=m5745f166b9de" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                        note: 生成AIアプリ開発を内製アジャイルで
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 会社情報 */}
                <section>
                    <h2 className="text-2xl font-bold mb-6">会社情報</h2>
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div className="border-t border-gray-200">
                            <dl>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">商号</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">アイラフ合同会社</dd>
                                </div>
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">設立年月日</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">2025年7月7日(令和7年7月7日)</dd>
                                </div>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">資本金</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">500,000円</dd>
                                </div>
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">事業年度</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">7月1日から翌年6月30日まで</dd>
                                </div>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">代表者</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">代表社員 宮野 聖史</dd>
                                </div>
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">所在地</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        東京都内
                                        <p className="text-xs text-gray-500 mt-1">※プライバシー保護のため、詳細な住所は非公開としておりますが特定商取引法に基づき、請求があった際には速やかに開示いたします。</p>
                                    </dd>
                                </div>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">主な事業内容</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        <ul className="list-disc pl-5">
                                            <li>ビジネストランスフォーメーションコンサルティング</li>
                                            <li>デジタルトランスフォーメーションコンサルティング</li>
                                            <li>経営コンサルティング</li>
                                            <li>マインドセットコーチング</li>
                                        </ul>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CompanyInfo;
