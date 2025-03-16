# AILAF HP Web

このプロジェクトは、AILAFのホームページを構築するための静的ウェブサイトです。

## 技術スタック

- [Vite](https://vitejs.dev/): 高速な開発環境とビルドツール
- [React](https://reactjs.org/): ユーザーインターフェース構築のためのJavaScriptライブラリ
- [TypeScript](https://www.typescriptlang.org/): 型安全な JavaScript
- [TailwindCSS](https://tailwindcss.com/): ユーティリティファーストのCSSフレームワーク
- [React Router](https://reactrouter.com/): Reactアプリケーションのルーティング
- [Lucide React](https://lucide.dev/): モダンなアイコンライブラリ

## 機能概要

- レスポンシブなウェブデザイン
- ナビゲーションメニュー（デスクトップ・モバイル対応）
- ヒーローセクション
- 事業内容の紹介
  - 会社概要
  - 各メンバーの経歴と実績を詳細に表示
  - 会社情報
- 電子公告ページ
  - 法的要件を満たす公告情報の掲載
- よくある質問（FAQ）セクション
- お問い合わせ情報

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

注意: このプロジェクトは react-router-dom を使用しています。package.jsonに記載されていますが、もし問題が発生した場合は以下のコマンドで個別にインストールできます：
```
npm install react-router-dom
```

## 起動方法

開発サーバーを起動します：
```
npm run dev
```

ブラウザで表示されたURLにアクセスします（通常は http://localhost:5173 ）。

## 利用可能なスクリプト

- `npm run dev`: 開発サーバーを起動します。
- `npm run build`: プロダクション用にアプリケーションをビルドします。
- `npm run lint`: ESLintを使用してコードをリントします。
- `npm run preview`: ビルドされたアプリケーションをプレビューします。

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
