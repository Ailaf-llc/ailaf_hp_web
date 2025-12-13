# AILAF HP Web

このプロジェクトは、AILAFのホームページを構築するためのウェブサイトです。
LP（ランディングページ）を主体としつつ、事例紹介などの詳細ページへ遷移できる構成になっています。

## 技術スタック

- [Vite](https://vitejs.dev/): 高速な開発環境とビルドツール
- [React](https://reactjs.org/): ユーザーインターフェース構築
- [TypeScript](https://www.typescriptlang.org/): 型安全な JavaScript
- [TailwindCSS](https://tailwindcss.com/): ユーティリティファーストのCSSフレームワーク
- [Lucide React](https://lucide.dev/): モダンなアイコンライブラリ
- **[React Router](https://reactrouter.com/)**: ページ間ルーティング（LP ⇔ 詳細ページ）
- **[React Helmet Async](https://github.com/staylor/react-helmet-async)**: SEO対策（ページごとのmetaタグ管理）

## 機能概要

- **LP + 詳細ページ構成**
  - トップページ（`Home.tsx`）と、事例詳細ページ（`CaseOndo.tsx`等）をルーティングで管理。
- **事例紹介セクション**
  - カード型デザインによる実績紹介。
  - 「詳細を見る」から個別ページへ遷移し、プロジェクトの詳細なストーリー（課題・解決策・成果）を表示。
- **Heroセクション**: 顧客の課題に寄り添うメッセージングとCTA
- **スムーズなスクロール**: ページ内リンクでの移動
- **フェードインアニメーション**: スクロールに応じた要素の表示
- **レスポンシブデザイン**: デスクトップ・モバイル完全対応
- **その他**: クッキー同意バナーの実装、フッターへの問い合わせリンク（mailto）配置

## 環境構築手順

1.  リポジトリをクローンします：
    ```bash
    git clone [https://github.com/ya10172009/ailaf_hp_web.git](https://github.com/ya10172009/ailaf_hp_web.git)
    cd ailaf_hp_web
    ```

2.  依存関係をインストールします：
    ```bash
    npm install
    ```

## 起動方法

開発サーバーを起動します：
```bash
npm run dev
```

ブラウザで表示されたURLにアクセスします（通常は http://localhost:5173 ）。

## 利用可能なスクリプト

  - `npm run dev`: 開発サーバーを起動します。
  - `npm run build`: プロダクション用にアプリケーションをビルドします。
  - `npm run lint`: ESLintを使用してコードをリントします。
  - `npm run preview`: ビルドされたアプリケーションをプレビューします。

## ディレクトリ構造の注記

  - `src/main.tsx`: アプリケーションのエントリーポイント。RouterとHelmetProviderの設定を行います。
  - `src/App.tsx`: ルーティング定義（どのURLでどのページを開くか）を管理します。
  - `src/Home.tsx`: トップページ（LP）のメインコンポーネントです。
  - `src/CaseOndo.tsx`: 株式会社ONDO様の事例詳細ページです。

## Netlifyでのデプロイ

このプロジェクトはNetlifyでのデプロイに対応しています。以下の設定が追加されています：

1. `netlify.toml`ファイル：
   - ビルド設定とリダイレクトルールを定義しています。
   - シングルページアプリケーション（SPA）のルーティングをサポートします。

2. デプロイ手順：
   - GitHubリポジトリをNetlifyに連携します。
   - ビルド設定：
     - Build command: `npm run build`
     - Publish directory: `dist`
   - 環境変数：必要に応じてNetlifyダッシュボードで設定してください。

3. カスタムドメインの設定：
   - Netlifyダッシュボードの "Domain settings" から設定可能です。
   - 以下のDNSサーバーを取得したドメインサイト側に設定します
     - dns1.p04.nsone.net
     - dns2.p04.nsone.net
     - dns3.p04.nsone.net
     - dns4.p04.nsone.net

4. HTTPS：
   - Netlifyは自動的にLet's Encryptを使用してHTTPS証明書を提供します。

## セキュリティに関する注意事項

1. 開発環境でのベストプラクティス：
   - 開発サーバー（Vite）は常にローカル環境でのみ実行してください。
   - 信頼できないネットワークでの開発サーバーの使用は避けてください。

2. 定期的なセキュリティチェック：
   - `npm audit`を定期的に実行し、依存関係の脆弱性をチェックしてください。
   - 重大な脆弱性が発見された場合は、すぐに対応を検討してください。

3. 本番環境でのセキュリティ：
   - 本番環境にデプロイする前に、すべての依存関係が最新であることを確認してください。
   - 適切なセキュリティヘッダーの設定や、HTTPS の使用を検討してください。

## ライセンス

このプロジェクトは [MIT ライセンス](LICENSE) の下で公開されています。

