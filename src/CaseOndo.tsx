import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Cloud, Search, Database, BarChart3, Lock, Zap, Quote } from 'lucide-react';

const CaseOndo = () => {
  // ページ遷移時にトップへスクロール
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* ヘッダー画像エリア */}
      <div className="relative h-[50vh] min-h-[400px]">
        <img 
          src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="ONDO様事例" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80 flex items-center justify-center">
          <div className="max-w-4xl px-6 text-center text-white">
            <span className="inline-block py-1 px-3 rounded-full bg-sky-600 text-sm font-bold mb-6">
              株式会社ONDO様
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Dropbox移行とメール運用のGoogle統合。<br />
              AI活用のための「最強の検索基盤」を構築
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
              散在するデータと二重コストを解消し、<br className="md:hidden"/>「探す時間」をゼロにするデジタル改革
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* 課題セクション */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mr-4">
              <Zap className="w-6 h-6 text-rose-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">抱えていた課題</h2>
          </div>
          <div className="bg-rose-50 rounded-2xl p-8 border border-rose-100">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-6 h-6 bg-rose-200 text-rose-700 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">1</span>
                <div>
                  <h3 className="font-bold text-lg mb-1">コストの二重発生と管理負荷</h3>
                  <p className="text-slate-600">Dropbox (1TB) とGoogle Workspaceを併用しており、コストが重複。さらにメールサーバーがGoogle Workspaceと別サービスで管理され、運用が複雑化していました。</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-rose-200 text-rose-700 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">2</span>
                <div>
                  <h3 className="font-bold text-lg mb-1">情報の散在と検索性の低さ</h3>
                  <p className="text-slate-600">「あのファイルどこだっけ？」が頻発。会社データと個人データが混在し、必要な情報にすぐに辿り着けない状況でした。</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-rose-200 text-rose-700 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</span>
                <div>
                  <h3 className="font-bold text-lg mb-1">ガバナンスへの懸念</h3>
                  <p className="text-slate-600">個人活動と法人活動のデータの境界が曖昧で、セキュリティと情報管理の観点でリスクがありました。</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* 解決策セクション */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mr-4">
              <Database className="w-6 h-6 text-sky-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Ailafのアプローチ</h2>
          </div>
          
          <div className="space-y-12">
            <div className="relative pl-8 border-l-2 border-sky-200">
              <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-sky-600"></span>
              <h3 className="text-xl font-bold text-sky-700 mb-2">Phase 1: 基盤整備と完全移行</h3>
              <div className="bg-white shadow-lg rounded-xl p-6 border border-slate-100">
                <p className="mb-4">Pythonスクリプトによる自動化で、Dropbox上の全データをハッシュチェック（整合性確認）を行いながらGoogle Driveへ安全に移行。同時にメールサーバをGoogle Workspaceへ一元化しました。</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm">Python移行</span>
                  <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm">メール一元化</span>
                  <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm">コスト削減</span>
                </div>
              </div>
            </div>

            <div className="relative pl-8 border-l-2 border-sky-200">
              <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-sky-600"></span>
              <h3 className="text-xl font-bold text-sky-700 mb-2">Phase 2: AI検索による「探せない」の撲滅</h3>
              <div className="bg-white shadow-lg rounded-xl p-6 border border-slate-100">
                <p className="mb-4">Google Cloud Searchを導入し、ファイルの中身まで横断検索できる環境を構築。「デジタル大掃除」を実施し、古いファイルや重複データを整理・アーカイブ化しました。</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm">Cloud Search</span>
                  <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm">断捨離</span>
                </div>
              </div>
            </div>

            <div className="relative pl-8 border-l-2 border-transparent">
              <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-sky-300"></span>
              <h3 className="text-xl font-bold text-sky-700 mb-2">Phase 3: 資産化 (Future)</h3>
              <div className="bg-white shadow-lg rounded-xl p-6 border border-slate-100">
                <p className="mb-4">データが整理されたことで、生成AIを活用し、議事録からのインサイト抽出や資料作成の自動化を目指す基盤が整いました。</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm">NotebookLM基盤</span>
                  <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm">ナレッジ活用</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* お客様の声セクション */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
              <Quote className="w-6 h-6 text-amber-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">お客様の声</h2>
          </div>
          
          <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100 relative shadow-sm">
            <div className="relative z-10 text-slate-700 leading-relaxed space-y-4">
              <p>
                「Dropboxに保存されている膨大なデータをGoogle Driveに移管するデータのお引越しが、こんなに手間がかかるものだとは正直思っていませんでした。
              </p>
              <p>
                Ailafの皆様には、移管をきっかけに『情報を資産として活用できる』状態を作りましょうと前向きな提案をいただきました。
                メールの不具合や検索についてなど、ブラックボックス化していたことも丁寧に説明いただき、一つ一つ納得しながら進められたことが非常にありがたかったです。
              </p>
              <p>
                作成いただいた運用マニュアルも非常にわかりやすく、メンバーとの情報共有がよりスムーズに進みそうだと感じています。ありがとうございました！！」
              </p>
            </div>
            <div className="mt-6 font-bold text-slate-900 text-right flex flex-col items-end">
               <span>株式会社ONDO</span>
               <span>代表取締役社長 谷 益美 様</span>
            </div>
          </div>
        </section>

        {/* 成果セクション */}
        <section className="mb-20">
          <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-10">導入効果</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-sky-400 mb-2"><BarChart3 className="w-10 h-10 mx-auto" /></div>
                <div className="text-4xl font-bold mb-2">Cost Down</div>
                <div className="text-slate-400 text-sm">Dropbox解約による<br/>固定費の削減</div>
              </div>
              <div>
                <div className="text-sky-400 mb-2"><Search className="w-10 h-10 mx-auto" /></div>
                <div className="text-4xl font-bold mb-2">Time Zero</div>
                <div className="text-slate-400 text-sm">AI検索導入による<br/>情報検索時間の極小化</div>
              </div>
              <div>
                <div className="text-sky-400 mb-2"><Lock className="w-10 h-10 mx-auto" /></div>
                <div className="text-4xl font-bold mb-2">Security</div>
                <div className="text-slate-400 text-sm">公私分離と<br/>権限管理の適正化</div>
              </div>
            </div>
          </div>
        </section>

        {/* フッターアクション */}
        <div className="text-center border-t border-slate-200 pt-10">
          <Link 
            to="/" 
            className="inline-flex items-center text-slate-500 hover:text-sky-600 font-semibold transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            トップページに戻る
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseOndo;