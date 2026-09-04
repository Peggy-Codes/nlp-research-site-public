import type { Metadata } from "next";
import Image from "next/image";
import { NavSwitcher } from "@/components/shared/NavSwitcher";
import { NeumorphicCard } from "@/components/ui/NeumorphicCard";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "歴史 - NLP Research",
};

const navOptions = [
  {
    id: "nav-1940",
    label: "1940年代",
    targetId: "era-1940",
    defaultChecked: true,
  },
  { id: "nav-1950", label: "1950～1980年", targetId: "era-1950" },
  { id: "nav-1980", label: "1980～2010年", targetId: "era-1980" },
  { id: "nav-2010", label: "2010年～現在", targetId: "era-2010" },
];

type TimelineEntryProps = {
  id: string;
  era: string;
  delayClass: string;
  children: React.ReactNode;
};

function TimelineEntry({ id, era, delayClass, children }: TimelineEntryProps) {
  return (
    <section id={id} className={`${styles.timelineCard} ${delayClass}`}>
      <div className={styles.timelineYear}>
        <span className={styles.eraBadge}>{era}</span>
      </div>
      <div className={styles.timelineDot} aria-hidden="true" />
      <div className={styles.timelineContent}>
        <NeumorphicCard as="div" className={styles.card}>
          {children}
        </NeumorphicCard>
      </div>
    </section>
  );
}

export default function HistoryPage() {
  return (
    <main className={styles.main}>
      <section className={styles.titleSection}>
        <h1>歴史</h1>
        <p>自然言語処理の発展の歴史</p>
      </section>

      <NavSwitcher
        name="era"
        ariaLabel="年代セクションの切り替え"
        variant="history"
        options={navOptions}
      />

      <section className={`${styles.introSection} ${styles.delayOne}`}>
        <NeumorphicCard as="div" className={styles.card}>
          <h2>はじめに</h2>
          <p>
            自然言語処理は現在に至るまで多くの停滞や進化を繰り返してきた。
            <br />
            今回はコンピュータが誕生した1940年代から4つの主要な時代に分け、歴史を辿っていく。
          </p>
        </NeumorphicCard>
      </section>

      <TimelineEntry id="era-1940" era="1940年代" delayClass={styles.delayTwo}>
        <p>
          この時代の主な出来事として、1946年に世界初の本格的な電子式コンピュータ
          <strong>「エニアック（ENIAC）」</strong>
          がペンシルベニア大学によって誕生した。
          <br />
          これによりコンピュータの発展の歴史が幕を開けたのだ。
        </p>
        <div className={styles.historyImageContainer}>
          <Image
            src="/history/eniac.jpeg"
            alt="ENIAC（エニアック）- 世界初の本格的な電子式コンピュータ"
            width={281}
            height={179}
          />
          <p>ENIAC（エニアック）- 1946年、ペンシルベニア大学</p>
        </div>
      </TimelineEntry>

      <TimelineEntry
        id="era-1950"
        era="1950～1980年"
        delayClass={styles.delayThree}
      >
        <h3 className={styles.eraSubtitle}>
          ルールベースの時代～人が知能を定義する～
        </h3>
        <p>
          この時代は、文章のルールや辞書を人手で定義し、コンピュータに処理させる
          <strong>ルールベース型</strong>の手法が主流であった。
          <br />
          1950年代から自然言語処理（NLP）の研究が本格化したが、1960年代には実用化が進まず、ルールの増加による管理の困難性や精度の限界が大きな課題となった。
          <br />
          <br />
          この時代を象徴する例として、1964年に開発された
          <strong>対話型プログラム「ELIZA」</strong>が挙げられる。
          <br />
          ELIZAはパターンマッチングを用いて人間との対話を模倣するシステムで、対話型AIの先駆けとなった。
          <br />
          しかし、当時のAI研究全体は<strong>フレーム問題</strong>や
          <strong>組み合わせ爆発</strong>
          といった課題に直面し、第一次AIブームは停滞に向かった。
        </p>
      </TimelineEntry>

      <TimelineEntry
        id="era-1980"
        era="1980～2010年"
        delayClass={styles.delayFour}
      >
        <h3 className={styles.eraSubtitle}>
          統計的手法の時代～来たぞビッグデータの時代～
        </h3>
        <p>
          1980年代には、専門家の知識をコンピュータに与えて推論させる
          <strong>エキスパートシステム</strong>が発展した。
          <br />
          その代表例である<strong>MYCIN</strong>
          （1970年代後半〜）は感染症の診断を支援するシステムで、第二次AIブームの象徴となった。
          <br />
          しかし、知識を手動で登録する負担が大きく、限界も明らかになった。
          <br />
          <br />
          その反省から、1990年代以降は<strong>統計的手法</strong>
          が自然言語処理に本格的に導入され、コンピュータの性能向上とともに精度が飛躍的に向上した。
          <br />
          さらに2000年代後半からは、膨大なデータを活用する
          <strong>「ビッグデータ」</strong>
          の時代が訪れ、AIが自ら規則性を発見して学習する
          <strong>機械学習</strong>が主流となっていった。
        </p>
      </TimelineEntry>

      <TimelineEntry
        id="era-2010"
        era="2010年～現在"
        delayClass={styles.delayFive}
      >
        <h3 className={styles.eraSubtitle}>ディープラーニングとNLPの革新</h3>
        <p>
          2010年代以降、NLPには<strong>ディープラーニング</strong>が導入され、
          <strong>RNN</strong>や<strong>LSTM</strong>
          といった時系列データの処理に優れたモデルが大きく注目を集めた。
          <br />
          これにより、文脈理解や文章生成の精度は劇的に向上した。
          <br />
          <br />
          2017年にはGoogleが<strong>Transformerモデル</strong>
          を発表し、長距離依存関係の処理の困難さ、学習の非効率性といったRNNの弱点を解決した。
          <br />
          このモデルは現在の深層学習において最も重要なアーキテクチャのひとつとなっている。
          <br />
          <br />
          翌2018年には<strong>BERT</strong>
          が発表され、多くの言語で検索精度向上に貢献した。
          <br />
          さらにOpenAIからはTransformerを基盤とした<strong>GPT</strong>
          シリーズが開発され、2020年には最新モデル<strong>GPT-3</strong>
          が公開され、生成AIの飛躍的発展をもたらした。
        </p>
      </TimelineEntry>

      <section className={`${styles.referencesSection} ${styles.delaySix}`}>
        <NeumorphicCard as="div" className={styles.card}>
          <h2>参考資料</h2>
          <ol className={styles.referencesList}>
            <li>
              自然言語理解AIラボ, &quot;自然言語処理の歴史&quot;, 2022/10/6,{" "}
              <a
                href="https://ai-dx-lab.com/colum5/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://ai-dx-lab.com/colum5/
              </a>
              , 2025/11/12.
            </li>
            <li>
              すえっぐのNLP&amp;LLM,
              &quot;どうやってここまで進化した？NLPの歴史まとめ&quot;,{" "}
              <a
                href="https://nlpillustration.tech/?p=2408"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://nlpillustration.tech/?p=2408
              </a>
              , 2025/11/12.
            </li>
            <li>
              LeapLeaper,
              &quot;AIにとっての「言葉」である自然言語処理の発展の歴史を振り返ろう&quot;,{" "}
              <a
                href="https://www.leapleaper.jp/2024/09/26/dev-history-of-natural-language-processing-by-ai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.leapleaper.jp/2024/09/26/dev-history-of-natural-language-processing-by-ai/
              </a>
              , 2025/11/12.
            </li>
            <li>
              Splunk, Stephen Watts, &quot;自然言語処理の概要&quot;,{" "}
              <a
                href="https://www.splunk.com/ja_jp/blog/artificial-intelligence/natural-language-processing-nlp.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.splunk.com/ja_jp/blog/artificial-intelligence/natural-language-processing-nlp.html
              </a>
              , 2025/11/12.
            </li>
            <li>
              StudySEC,
              &quot;自然言語処理(NLP)とは？仕組みから最新技術・活用事例まで徹底解説！&quot;,
              2025/9/23,{" "}
              <a
                href="https://study-sec.com/nlp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://study-sec.com/nlp/
              </a>
              , 2025/11/12.
            </li>
          </ol>
        </NeumorphicCard>
      </section>
    </main>
  );
}
