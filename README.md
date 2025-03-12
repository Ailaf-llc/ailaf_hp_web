# AILAF HP Web

このプロジェクトは、AILAFのホームページを構築するためのウェブアプリケーションです。

## 技術スタック

- [Vite](https://vitejs.dev/): 高速な開発環境とビルドツール
- [React](https://reactjs.org/): ユーザーインターフェース構築のためのJavaScriptライブラリ
- [TypeScript](https://www.typescriptlang.org/): 型安全な JavaScript
- [TailwindCSS](https://tailwindcss.com/): ユーティリティファーストのCSSフレームワーク
- [Express](https://expressjs.com/): Node.js用のウェブアプリケーションフレームワーク

## 機能概要

### フロントエンド

- レスポンシブなウェブデザイン
- ナビゲーションメニュー（デスクトップ・モバイル対応）
- ヒーローセクション
- 事業内容の紹介
- チームメンバーの紹介
- よくある質問（FAQ）セクション
- 問い合わせフォーム（Discordと連携）

### バックエンド

- Express.jsを使用したサーバー
- CORSサポート
- 問い合わせフォームのデータをDiscordに送信する機能

## 環境構築手順

1. リポジトリをクローンします：
   ```
   git clone https://github.com/ya10172009/ailaf_hp_web.git
   cd ailaf_hp_web
   ```

2. 依存関係をインストールします：
   ```
   npm install
   ```

3. 環境変数の設定：
   バックエンドサーバーを実行する前に、以下の環境変数を設定する必要があります：

   ```
   export DISCORD_WEBHOOK_URL="https://discord.com/api/webhooks/your_webhook_url_here"
   ```

   注意: 実際のDiscord WebhookのURLに置き換えてください。

## 起動方法

### フロントエンド

開発サーバーを起動します：
```
npm run dev
```

ブラウザで表示されたURLにアクセスします（通常は http://localhost:5173 ）。

### バックエンド

サーバーを起動します：
```
node server.js
```

サーバーは通常、ポート3001で起動します。

## 利用可能なスクリプト

- `npm run dev`: フロントエンドの開発サーバーを起動します。
- `npm run build`: プロダクション用にアプリケーションをビルドします。
- `npm run lint`: ESLintを使用してコードをリントします。
- `npm run preview`: ビルドされたアプリケーションをプレビューします。

## ライセンス

このプロジェクトは [MIT ライセンス](LICENSE) の下で公開されています。
