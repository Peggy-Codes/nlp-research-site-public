# NLP Research(公開ミラー)

このリポジトリは、私有リポジトリ `nlp-research-site` から公開してよいファイルだけを書き出した**公開ミラー**です。

## 編集のルール

- **開発・変更は私有リポジトリで行う。** ここへの直接の変更は、公開版のCI・依存更新・ドキュメントの修正に限る
- 公開への反映は人間が行う(手順は私有側の `web-commons/docs/public-mirror.md`)
- 秘密情報、個人情報、個人のAI運用設定(`.claude/` `.codex/` など)はこのリポジトリに置かない

## コマンド

- 開発: `npm run dev` / ビルド: `npm run build`
- Lint: `npm run lint` / ユニットテスト: `npm test` / E2E: `npm run test:e2e`

## Git運用

- PRはsquashマージ。マージは人間が行う。コミットはConventional Commits(prefixは英語、件名と本文は日本語)
- 依存関係・`.github/workflows/` の変更は人間レビュー必須

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
