# ビジネスアイデアエクスプローラー

個人開発者向けのビジネスアイデア生成・分析ツール。ボタンを押すとAIが10個のビジネスアイデアを生成し、詳細分析ができます。

## 機能

- 個人開発向けビジネスアイデアを自動生成
- 各アイデアの詳細分析（メリット、デメリット、技術スタックなど）
- Claude APIとの連携
- ローカルフォールバック機能

## 技術スタック

- React
- Tailwind CSS
- Claude API (Anthropic)
- Vite

## インストール方法

```bash
# リポジトリのクローン
git clone https://github.com/yourusername/business-idea-explorer.git
cd business-idea-explorer

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

## 使用方法

1. 「アイデアを生成する」ボタンをクリック
2. Claude APIキーを入力（または「キャンセル」でデモモード）
3. 生成された10個のアイデアから興味のあるものの「深掘り」ボタンをクリック
4. 詳細分析を確認

## APIキーの取得

Claude APIキーは以下の手順で取得できます：

1. [Anthropic](https://www.anthropic.com/)のウェブサイトにアクセス
2. アカウントを作成・ログイン
3. APIキーを取得

## ライセンス

MIT

## 作者

Your Name