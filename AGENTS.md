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
