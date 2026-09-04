import type { Metadata } from "next";
import { NeumorphicCard } from "@/components/ui/NeumorphicCard";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "結論 - NLP Research",
};

export default function ConclusionPage() {
  return (
    <main className={styles.page}>
      <section className={styles.titleSection}>
        <h1>結論</h1>
        <p>研究のまとめと今後の展望</p>
      </section>

      <section className={styles.conclusionSection}>
        <NeumorphicCard className={styles.conclusionBox}>
          <h2 className={styles.conclusionTitle}>
            結論：感情分析による価値創造
          </h2>
          <p className={styles.conclusionParagraph}>
            今回は、<strong>自然言語処理（NLP）</strong>
            の進化の道のりを確認し、その最も重要な応用分野の一つである
            <strong>感情分析</strong>に焦点を当てた。
          </p>
          <p className={styles.conclusionParagraph}>
            感情分析は、感情辞書、ディープラーニング、既存APIといった多様な方法論を通じて、テキストデータから
            <strong>ユーザーの真の感情や意図</strong>を深く読み取る。
          </p>
          <p className={styles.conclusionParagraph}>
            現代のビジネスにおいて、この技術は単なるデータ処理を超え、膨大な顧客の声から
            <strong>潜在的な不満やニーズ</strong>を抽出し、
            <strong>
              サービス改善、意思決定の高度化、顧客体験の劇的な向上
            </strong>
            を実現する戦略的なコアツールとなっている。
          </p>
          <p className={styles.conclusionParagraph}>
            感情分析は、急速に進化するNLP技術の中心に位置し続け、今後も企業と顧客の関係を強化し、新たな価値を創造していくだろう。
          </p>
        </NeumorphicCard>
      </section>
    </main>
  );
}
