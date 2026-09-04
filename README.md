# NLP Research

自然言語処理（NLP）と感情分析をテーマにした解説サイト。もともとは大学のグループ演習で制作した静的サイトを、個人で Next.js（App Router）に設計し直して再実装したものです。

## 概要

- 全8ページ構成（導入・テーマ選定理由・方法論比較・歴史・応用動向・結論・使用技術解説）
- ニューモーフィズム／グラスモーフィズムを基調としたUIと、Canvas によるパーティクルアニメーション背景
- スクロール追従するリキッドグラス風ナビゲーションスイッチャー
- シンタックスハイライト付きコードパネル（開閉・コピー機能）

## 技術スタック

- [Next.js 16](https://nextjs.org/)（App Router）/ TypeScript
- CSS Modules + デザイントークン（CSS カスタムプロパティ）
- [Prism.js](https://prismjs.com/) によるシンタックスハイライト
- [Vitest](https://vitest.dev/) + Testing Library（ユニットテスト）/ [Playwright](https://playwright.dev/)（E2E）
- [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) によるフォント最適化（Inter / Noto Sans JP / Noto Serif JP）

## 開発

```bash
npm install
npm run dev
```

## コマンド

| コマンド           | 内容                     |
| ------------------ | ------------------------ |
| `npm run dev`      | 開発サーバー起動         |
| `npm run build`    | 本番ビルド               |
| `npm run lint`     | ESLint                   |
| `npm test`         | ユニットテスト（Vitest） |
| `npm run test:e2e` | E2Eテスト（Playwright）  |

## 設計・実装

デザイン設計・コンポーネント構成・アクセシビリティ対応を含め、全体を1人で担当。共通UI（ヘッダー、ナビゲーションスイッチャー、パーティクルアニメーション、コードパネル）はコンポーネント化し、デザイントークンで一元管理しています。
