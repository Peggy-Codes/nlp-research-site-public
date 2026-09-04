import type { Metadata } from "next";
import { NeumorphicCard } from "@/components/ui/NeumorphicCard";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "応用・最新動向 - NLP Research",
};

export default function ApplicationsPage() {
  return (
    <main className={styles.page}>
      <section className={styles.titleSection}>
        <h1>応用・最新動向</h1>
        <p>実用例と最新の研究トレンド</p>
      </section>

      <section id="applications" className={styles.sectionCard}>
        <NeumorphicCard className={styles.card}>
          <h2 className={styles.cardHeader}>応用・最新動向</h2>
          <div className={styles.contentSection}>
            <h3>実用例</h3>
            <p>
              自然言語処理は、日常のさまざまなサービスの裏側で活用されている。
              代表的なものとして、SNSやレビューを分析してユーザーの感情を把握する「感情分析」があり、企業はこれを用いて、サービスへの満足度や不満点を把握し改善につなげている。
              また、チャットボットや音声アシスタントでは、ユーザーの意図を正確に理解するために自然言語処理が利用され、検索体験を大きく向上させている。
              さらに、ニュース記事の自動要約や言語の自動翻訳など、情報量が膨大な現代において人間が処理しきれないタスクを補助する技術としても重要な役割を担っている。
              このように自然言語処理は、「ユーザー体験の向上」と「業務の効率化」の両面で大きな価値を持っていると言える。
            </p>
          </div>
          <div className={styles.contentSection}>
            <h3>最新動向</h3>
            <p>
              近年は大規模言語モデル（LLM）の進化が自然言語処理の中心的なトレンドとなっている。これまでのモデルと比べ、文脈理解や推論能力が大幅に向上し、人間に近い自然な文章生成が可能になった。
              また、未ラベルの大量データから学習する&quot;自己教師あり学習&quot;が主流となったことにより、データ量が少ない領域でもモデルを活用しやすくなっている。
              最近は、モデルの振る舞いを分かりやすく説明する「説明可能なAI」への関心も高まっている。医療や法務など判断の根拠が求められる分野での活用が進むにつれて、AIがどのように結論に至ったのかを明示することが重要になる。
              今後は、より小さな計算資源で動く軽量モデルや、画像・音声と統合したマルチモーダルAIの発展が期待されている。
              自然言語処理は、これからも日常生活とビジネスの両方で、中心的な技術であり続けるだろう。
            </p>
          </div>
        </NeumorphicCard>
      </section>
    </main>
  );
}
