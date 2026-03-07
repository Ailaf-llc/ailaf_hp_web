import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, Compass, Lightbulb, Users, CheckCircle2, MessageSquare, Briefcase } from 'lucide-react';

const CaseRealLifeDesign = () => {
  // ページ遷移時にトップへスクロール
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* ヘッダー画像エリア */}
      <div className="relative h-[50vh] min-h-[400px]">
        <img 
          src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="リアルライフデザイン伴走支援" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80 flex items-center justify-center">
          <div className="max-w-4xl px-6 text-center text-white">
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-600 text-sm font-bold mb-6">
              リアルライフデザイン伴走支援
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              自分のキャリアを、<br />構造から再設計する
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
              行きたい企業が見つかっても、どうアピールすべきか分からない。<br className="md:hidden"/>キャリアの方向性に確信を持てない状況からの脱却。
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* 課題セクション */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mr-4">
              <Target className="w-6 h-6 text-rose-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">ご相談の背景と課題</h2>
          </div>
          
          <div className="mb-8 p-6 bg-slate-50 rounded-xl border border-slate-100">
            <h3 className="font-bold text-lg mb-4 text-slate-800">ご相談時の状況</h3>
            <p className="text-slate-600 mb-4">
              転職を考えているものの、情報収集は進めていても自分の中で整理ができておらず、キャリアの方向性に確信を持てない状況でご相談をいただきました。
            </p>
            <ul className="list-disc leading-relaxed text-slate-600 ml-6 space-y-1">
              <li>どのような軸で企業を選ぶべきか分からない</li>
              <li>自分の強みが明確に言語化できない</li>
              <li>行きたい企業が見つかっても、どうアピールすべきか分からない</li>
              <li>納得感のある職務経歴書を作れない</li>
            </ul>
          </div>

          <div className="bg-rose-50 rounded-2xl p-8 border border-rose-100">
            <h3 className="font-bold text-lg mb-6 text-rose-900">ヒアリングを通じて整理された主な課題</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-6 h-6 bg-rose-200 text-rose-700 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">1</span>
                <div>
                  <p className="text-slate-700">これまでの経験が「点」で存在しており、一つの軸として整理されていない</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-rose-200 text-rose-700 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">2</span>
                <div>
                  <p className="text-slate-700">他者から評価されている強みと、自己認識にズレがある</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-rose-200 text-rose-700 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</span>
                <div>
                  <p className="text-slate-700">企業選びが明確な基準ではなく、感覚に頼りがちになっている</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-rose-200 text-rose-700 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">4</span>
                <div>
                  <p className="text-slate-700">職務経歴書作成が自己表現ではなく、単なる作業になっている</p>
                </div>
              </li>
            </ul>
            <p className="mt-6 text-rose-800 font-semibold border-t border-rose-200 pt-4">
              表面的なノウハウではなく、キャリアの構造整理そのものが必要な状態でした。
            </p>
          </div>
        </section>

        {/* 解決策セクション */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
              <Compass className="w-6 h-6 text-emerald-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">アプローチ</h2>
          </div>
          
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            リアルライフデザインでは、キャリアを単なる転職活動ではなく、「人生設計の一部」として整理することを重視しています。本プロジェクトでは、アドバイス型ではなく<strong>「キャリア深掘りから始まる伴走支援」</strong>を実施しました。
          </p>

          <div className="space-y-6">
            <div className="bg-white shadow-md rounded-xl p-6 border border-slate-100 flex flex-col md:flex-row gap-6 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-500"></div>
              <div className="md:w-1/3 flex-shrink-0">
                <h3 className="text-lg font-bold text-emerald-700 mb-2">キャリアの構造整理</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-slate-600">これまでの経験を時系列ではなく「価値提供」という観点で整理し直し、共通する強みや思考パターン、成果創出の再現性を言語化しました。</p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 border border-slate-100 flex flex-col md:flex-row gap-6 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-500"></div>
              <div className="md:w-1/3 flex-shrink-0">
                <h3 className="text-lg font-bold text-emerald-700 mb-2">キャリア軸の明確化</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-slate-600">単に「できること」ではなく、「どのような環境で価値が発揮されるのか」という視点でキャリアの軸を整理しました。</p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 border border-slate-100 flex flex-col md:flex-row gap-6 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-500"></div>
              <div className="md:w-1/3 flex-shrink-0">
                <h3 className="text-lg font-bold text-emerald-700 mb-2">応募企業の整理</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-slate-600">応募企業はご本人がリサーチして選定。その企業に対して、どのような視点でアプローチすべきかを一緒に整理しました。</p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 border border-slate-100 flex flex-col md:flex-row gap-6 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-500"></div>
              <div className="md:w-1/3 flex-shrink-0">
                <h3 className="text-lg font-bold text-emerald-700 mb-2">書類の再構築</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-slate-600">職務経歴書および応募理由をゼロから構築し直しました。単なる実績の羅列ではなく、企業側の視点から見て価値が伝わる構成へと整理しました。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 成果セクション */}
        <section className="mb-20">
          <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-10">支援を通じた変化</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <div className="text-emerald-400 mb-4"><Lightbulb className="w-10 h-10 mx-auto" /></div>
                <div className="text-sm text-slate-200 font-medium">自身の強みが<br/>言語化できるようになった</div>
              </div>
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <div className="text-emerald-400 mb-4"><Target className="w-10 h-10 mx-auto" /></div>
                <div className="text-sm text-slate-200 font-medium">企業選択の軸が<br/>明確になった</div>
              </div>
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <div className="text-emerald-400 mb-4"><Briefcase className="w-10 h-10 mx-auto" /></div>
                <div className="text-sm text-slate-200 font-medium">職務経歴書が「自己表現」<br/>として整理された</div>
              </div>
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <div className="text-emerald-400 mb-4"><CheckCircle2 className="w-10 h-10 mx-auto" /></div>
                <div className="text-sm text-slate-200 font-medium">面接に対する不安が<br/>軽減された</div>
              </div>
            </div>
            <p className="text-xl md:text-2xl font-bold text-emerald-300 border-t border-slate-700 pt-8 leading-relaxed">
              結果として、自信を持って選考に臨める<br className="sm:hidden" />状態が実現しました。
            </p>
          </div>
        </section>

        {/* お客様の声セクション */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                  <MessageSquare className="w-5 h-5 text-amber-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">クライアントコメント</h2>
              </div>
              <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100 shadow-sm h-full flex flex-col relative">
                <div className="absolute top-4 left-4 text-amber-200 opacity-50">
                   <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                </div>
                <div className="text-slate-700 leading-relaxed space-y-4 flex-grow relative z-10">
                  <p>「これまでバラバラだった経験が一本の軸として整理され、自分の強みが初めて明確になりました。</p>
                  <p>職務経歴書も、とりあえず作るものではなく、自分の価値を伝えるためのものに変わりました。</p>
                  <p>今は迷いがなく、自信を持って選考に臨めています。」</p>
                </div>
                <div className="mt-8 font-bold text-slate-900 text-right flex flex-col items-end">
                  <span className="text-lg">D.G. 様</span>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                  <Users className="w-5 h-5 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">担当者コメント</h2>
              </div>
              <div className="bg-indigo-50 rounded-2xl p-8 border border-indigo-100 shadow-sm h-full flex flex-col relative">
                <div className="absolute top-4 left-4 text-indigo-200 opacity-50">
                   <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                </div>
                <div className="text-slate-700 leading-relaxed space-y-4 flex-grow relative z-10">
                  <p>今回のケースに限らず、キャリアや働き方について「なんとなくモヤモヤしている」という段階でも、リアルライフデザインとしてご相談いただけます。</p>
                  <p>これまでの経験や価値観を整理し、自分自身の選択に納得できる状態をつくることを大切にしています。</p>
                  <p>特別な準備が整っている必要はありません。少しでも気になることがあれば、まずは気軽にご相談いただければと思います。</p>
                </div>
                <div className="mt-8 font-bold text-slate-900 text-right flex flex-col items-end">
                  <span className="text-sm text-slate-500 mb-1">リアルライフデザイン</span>
                  <span className="text-lg">代表社員 宮野</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 対象者・概要セクション */}
        <section className="mb-20 grid md:grid-cols-2 gap-8">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6 border-b pb-4">このような方に向いています</h3>
            <p className="text-sm text-slate-600 mb-4">リアルライフデザインは、例えば次のような悩みを持つ方からご相談をいただくことが多いサービスです。</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm">自分の強みやキャリアの軸がよく分からない</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm">経験はあるが、どう整理して伝えればよいか分からない</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm">キャリアの方向性を一度立ち止まって整理したい</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm">自分の考えを言語化するのが苦手</span>
              </li>
            </ul>
            <div className="bg-white p-4 rounded-lg border border-slate-200 text-sm text-slate-700">
              <p className="font-bold text-emerald-700 mb-1">明確な答えを持っている必要はありません。</p>
              <p>「少し整理してみたい」という段階からご相談いただけます。</p>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6 border-b pb-4">プロジェクト概要</h3>
            <div className="space-y-6">
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">支援内容</div>
                <div className="font-medium text-slate-800">リアルライフデザイン伴走支援</div>
              </div>
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">実施形式</div>
                <div className="font-medium text-slate-800">オンライン</div>
              </div>
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">セッション内容</div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-white border border-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm font-medium">キャリア深掘り</span>
                  <span className="bg-white border border-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm font-medium">キャリア軸整理</span>
                  <span className="bg-white border border-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm font-medium">職務経歴書作成支援</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* フッターアクション */}
        <div className="text-center border-t border-slate-200 pt-10">
          <Link 
            to="/" 
            className="inline-flex items-center text-slate-500 hover:text-emerald-600 font-semibold transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            トップページに戻る
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseRealLifeDesign;
