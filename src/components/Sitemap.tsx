import React from 'react';
import { Link } from 'react-router-dom';

const Sitemap: React.FC = () => {
    return (
        <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-center mb-8">サイトマップ</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-xl font-semibold mb-4">メインページ</h2>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-blue-600 hover:underline">ホーム</Link></li>
                            <li><Link to="/#services" className="text-blue-600 hover:underline">事業内容</Link></li>
                            <li><Link to="/#team" className="text-blue-600 hover:underline">チーム</Link></li>
                            <li><Link to="/#contact" className="text-blue-600 hover:underline">お問い合わせ</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-4">会社情報</h2>
                        <ul className="space-y-2">
                            <li><Link to="/company-info" className="text-blue-600 hover:underline">会社概要</Link></li>
                            <li><Link to="/electronic-public-notice" className="text-blue-600 hover:underline">電子公告</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-4">ポリシーと規約</h2>
                        <ul className="space-y-2">
                            <li><Link to="/privacy-policy" className="text-blue-600 hover:underline">プライバシーポリシー</Link></li>
                            <li><Link to="/terms-of-service" className="text-blue-600 hover:underline">利用規約</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-4">その他</h2>
                        <ul className="space-y-2">
                            <li><Link to="/sitemap" className="text-blue-600 hover:underline">サイトマップ</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sitemap;