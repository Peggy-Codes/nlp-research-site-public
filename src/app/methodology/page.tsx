import type { Metadata } from "next";
import { NavSwitcher } from "@/components/shared/NavSwitcher";
import { NeumorphicCard } from "@/components/ui/NeumorphicCard";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "方法論・比較 - NLP Research",
};

const navOptions = [
  {
    id: "nav-dict",
    label: "シンプルな感情辞書",
    targetId: "dictionary",
    defaultChecked: true,
  },
  {
    id: "nav-deep",
    label: "ディープラーニングによる教師あり学習",
    targetId: "deeplearning",
  },
  { id: "nav-api", label: "既存のAPIを使う", targetId: "api" },
];

function SentimentExample({ negative = false }: { negative?: boolean }) {
  return (
    <div className={styles.example}>
      <div className={styles.exampleTitle}>
        例：「{negative ? "悪" : "美"}」グループ
      </div>
      <svg
        viewBox="0 0 320 100"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.exampleDiagram}
        aria-label={
          negative
            ? "悪のつく言葉は感情値マイナス1"
            : "美のつく言葉は感情値プラス1"
        }
        role="img"
      >
        <rect width="320" height="100" fill="transparent" />
        {negative ? (
          <>
            <text
              x="80"
              y="30"
              textAnchor="middle"
              fontFamily="'Noto Sans JP', sans-serif"
              fontSize="15"
              fill="#2C3E50"
              fontWeight="500"
            >
              悪天気
            </text>
            <text
              x="80"
              y="52"
              textAnchor="middle"
              fontFamily="'Noto Sans JP', sans-serif"
              fontSize="15"
              fill="#2C3E50"
              fontWeight="500"
            >
              悪口を言う
            </text>
            <text
              x="80"
              y="74"
              textAnchor="middle"
              fontFamily="'Noto Sans JP', sans-serif"
              fontSize="15"
              fill="#2C3E50"
              fontWeight="500"
            >
              悪意がある / 悪夢
            </text>
          </>
        ) : (
          <>
            <text
              x="80"
              y="30"
              textAnchor="middle"
              fontFamily="'Noto Sans JP', sans-serif"
              fontSize="15"
              fill="#2C3E50"
              fontWeight="500"
            >
              花が美しい
            </text>
            <text
              x="80"
              y="52"
              textAnchor="middle"
              fontFamily="'Noto Sans JP', sans-serif"
              fontSize="15"
              fill="#2C3E50"
              fontWeight="500"
            >
              ラーメンが美味しい
            </text>
            <text
              x="80"
              y="74"
              textAnchor="middle"
              fontFamily="'Noto Sans JP', sans-serif"
              fontSize="15"
              fill="#2C3E50"
              fontWeight="500"
            >
              美点 / 美意識
            </text>
          </>
        )}
        <path
          d="M165 50 L195 50"
          stroke={negative ? "#5D8AB8" : "#4A7BA7"}
          strokeWidth="3"
          fill="none"
        />
        <polygon
          points="205,50 195,44 195,56"
          fill={negative ? "#5D8AB8" : "#4A7BA7"}
        />
        <text
          x="265"
          y="62"
          textAnchor="middle"
          fontFamily="'Noto Sans JP', sans-serif"
          fontSize="36"
          fill={negative ? "#5D8AB8" : "#4A7BA7"}
          fontWeight="900"
        >
          {negative ? "-1" : "+1"}
        </text>
      </svg>
    </div>
  );
}

function ProsAndCons({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <div className={styles.prosCons}>
      <div className={styles.pros}>
        <h3>メリット</h3>
        <ul>
          {pros.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={styles.cons}>
        <h3>デメリット</h3>
        <ul>
          {cons.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function MethodologyPage() {
  return (
    <main className={styles.main}>
      <section className={styles.titleSection}>
        <h1>方法論・比較</h1>
        <p>感情分析の方法論とその特徴</p>
      </section>

      <NavSwitcher
        name="methodology"
        ariaLabel="手法セクションの切り替え"
        variant="methodology"
        options={navOptions}
      />

      <section
        id="dictionary"
        className={`${styles.methodologyCard} ${styles.delayOne}`}
      >
        <NeumorphicCard as="div" className={styles.card}>
          <h2 className={styles.cardHeader}>シンプルな感情辞書</h2>
          <p>
            「美味しい」はポジティブ、「不味い」はネガティブといった単語でポジネガ判定することをベースにした単純なロジックである。
          </p>
          <ProsAndCons
            pros={[
              "ポジネガ判定の結果が解釈しやすい",
              "単純な単語辞書レベルのポジネガ判定だけならコーディングが楽",
            ]}
            cons={[
              "ルールベースであるため、厳密性を求める場合多くのルールを作成する必要あり",
              "感情辞書に載っていない単語があると対応できない",
            ]}
          />
        </NeumorphicCard>
      </section>

      <section
        id="deeplearning"
        className={`${styles.methodologyCard} ${styles.delayTwo}`}
      >
        <NeumorphicCard as="div" className={styles.card}>
          <h2 className={styles.cardHeader}>
            ディープラーニングによる教師あり学習
          </h2>
          <div className={styles.exampleContainer}>
            <SentimentExample />
            <SentimentExample negative />
          </div>
          <p>
            自動的に感情値に寄与する文字や熟語、表現を抽出する。
            機械学習の要領で学習させていくと、
            「『美』という語は感情値としてプラスである」や「『悪』という語はマイナスである」
            といった判断を自動的に行う。
          </p>
          <ProsAndCons
            pros={[
              "形態素解析や感情辞書作成やルール作成が不要",
              "つまり、コーディングがとても楽である",
            ]}
            cons={[
              "多くの正解データの準備する必要がある",
              "モデルのブラックボックス問題",
            ]}
          />
          <div className={styles.example}>
            <div className={styles.exampleTitle}>ブラックボックス問題:</div>
            「モデルが導き出した感情値が、どんなふうに考えて出してきたのか分からない」という問題である。
            <br />
            「なんでこの文章がポジティブ？どこがポジティブ表現なの？」となる。
            <br />
            とは言っても自然言語かつ日本語なので、文章読めばなんとなく理解できる。
          </div>
        </NeumorphicCard>
      </section>

      <section
        id="api"
        className={`${styles.methodologyCard} ${styles.delayThree}`}
      >
        <NeumorphicCard as="div" className={styles.card}>
          <h2 className={styles.cardHeader}>既存のAPIを使う</h2>
          <div className={styles.apiIntro}>
            <div className={styles.apiHeading}>
              <span aria-hidden="true">🔗</span>
              <h3>APIとは？</h3>
            </div>
            <p>
              API（Application Programming
              Interface）とは、アプリケーション同士が機能やデータをやり取りするための仕組みである。
              <br />
              たとえば、感情分析を行うプログラムが外部の感情分析サービスと連携して結果を取得する場合、このAPIを通して通信を行う。
              <br />
              これにより、自分で一から学習モデルを作らなくても、高精度な感情分析を簡単に利用できるようになる。
            </p>
          </div>
          <p>
            文章を入力すると感情分析してくれる便利なAPIやサービスが公開されている。
          </p>
          <ul className={styles.apiList}>
            <li>GCPのNATURAL LANGUAGE API</li>
            <li>UserLocal AIテキストマイニング</li>
          </ul>
          <ProsAndCons
            pros={[
              "実装が非常に簡単",
              "高度なモデルを自前で構築・維持する必要がない",
              "常に最新の技術を利用できる",
            ]}
            cons={[
              "利用制限やコストがかかる場合がある",
              "カスタマイズ性が低い",
              "外部サービスに依存するため、サービスの変更や終了の影響を受ける",
            ]}
          />
        </NeumorphicCard>
      </section>
    </main>
  );
}
