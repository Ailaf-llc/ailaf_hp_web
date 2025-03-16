import React from 'react';

const CompanyInfo: React.FC = () => {
    return (
        <div className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-center mb-12">会社情報</h1>

                {/* アイラフについて */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6">アイラフについて</h2>
                    <p className="text-gray-700 mb-4">
                        アイラフは、変わりゆく時代と働き方に対応し、お客様の"一歩先"を照らす存在を目指しています。
                        私たちは、ビジネストランスフォーメーション（BX）とデジタルトランスフォーメーション（DX）を通じて、
                        企業や組織の変革をサポートし、新しい価値の創造に貢献します。
                    </p>
                    <p className="text-gray-700">
                        また、PTA活動のサポートや人材派遣など、多様な事業を展開することで、
                        社会のさまざまなニーズに応え、より良い未来の創造に取り組んでいます。
                    </p>
                </section>

                {/* メンバー */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6">メンバー</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" alt="宮野 聖史" className="w-32 h-32 rounded-full mx-auto mb-4" />
                            <h3 className="text-lg font-semibold">宮野 聖史</h3>
                            <p className="text-gray-600">代表社員</p>
                        </div>
                        <div className="text-center">
                            <img src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop" alt="山添 達郎" className="w-32 h-32 rounded-full mx-auto mb-4" />
                            <h3 className="text-lg font-semibold">山添 達郎</h3>
                            <p className="text-gray-600">業務執行社員</p>
                        </div>
                        <div className="text-center">
                            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" alt="田畑 佑樹" className="w-32 h-32 rounded-full mx-auto mb-4" />
                            <h3 className="text-lg font-semibold">田畑 佑樹</h3>
                            <p className="text-gray-600">業務執行社員</p>
                            <p className="text-sm text-gray-500 mt-2">中外製薬でのDX推進経験を活かし、多数の外部公演や記事執筆の実績あり</p>
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
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">2025年4月1日</dd>
                                </div>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">資本金</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">1,000,000円</dd>
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
                                            <li>PTA活動の代行及びマッチング</li>
                                            <li>PTA活動サポートシステムの構築・運営</li>
                                            <li>人材派遣</li>
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