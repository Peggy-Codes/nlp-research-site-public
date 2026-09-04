import type { Metadata } from "next";
import { NeumorphicCard } from "@/components/ui/NeumorphicCard";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "テーマ選択理由 - NLP Research",
};

export default function ThemePage() {
  return (
    <main className={styles.page}>
      <section className={styles.titleSection}>
        <h1>このテーマを選んだ理由</h1>
        <p>感情分析AIとの出会いから研究テーマへ</p>
      </section>

      <section className={styles.reasonCard}>
        <NeumorphicCard className={styles.card}>
          <h2>きっかけ：感情分析AIとの出会い</h2>
          <p>
            このテーマを選んだきっかけは、
            <strong>感情分析AIを実際に使ってみて面白いと感じた</strong>
            ことから始まった。
          </p>
          <div className={styles.highlightBox}>
            <p>
              テキストを入力するだけで、そこに込められた感情を数値化し、ポジティブかネガティブかを判定する技術に驚きを覚えた。
              人間が直感的に感じ取る「感情」を、コンピュータがどのように理解し処理しているのか、その仕組みに強い興味を持った。
            </p>
          </div>
        </NeumorphicCard>
      </section>

      <section className={styles.reasonCard}>
        <NeumorphicCard className={styles.card}>
          <h2>研究テーマとしての魅力</h2>
          <p>
            感情分析AIを体験したことで、自然言語処理という技術分野全体に関心が広がった。以下の3つの理由から、このテーマを深く掘り下げることに決めた。
          </p>
          <ul className={styles.reasonList}>
            <li>
              <strong>身近な技術</strong>
              ：SNS分析、レビュー評価、チャットボットなど、日常生活の中で既に活用されている
            </li>
            <li>
              <strong>技術の進化</strong>
              ：ルールベースから機械学習、そしてディープラーニングへと発展してきた歴史が興味深い
            </li>
            <li>
              <strong>未来への可能性</strong>
              ：大規模言語モデルの登場により、今後さらに高度な応用が期待できる
            </li>
          </ul>
        </NeumorphicCard>
      </section>

      <section className={styles.reasonCard}>
        <NeumorphicCard className={styles.card}>
          <h2>まとめ</h2>
          <p>
            感情分析AIを使ってみた体験が、自然言語処理という技術分野への興味を深めるきっかけとなった。
          </p>
          <p>
            この技術がどのような歴史を辿り、現在どのように活用され、そして未来にどのような可能性を秘めているのかを探求したいと考え、このテーマを選定した。
          </p>
        </NeumorphicCard>
      </section>
    </main>
  );
}
