import type { Metadata } from "next";
import { NeumorphicCard } from "@/components/ui/NeumorphicCard";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "導入 - NLP Research",
};

const svgFont = "var(--font-page)";

function MorphologicalAnalysisDiagram() {
  return (
    <svg
      viewBox="0 0 560 220"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="私は学校に行く、という文を形態素に分解した図"
    >
      <rect width="560" height="220" fill="var(--color-surface)" />
      <text
        x="280"
        y="42"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="22"
        fill="var(--color-text-strong)"
        fontWeight="600"
      >
        私は学校に行く
      </text>
      <path
        d="M280 58 L280 82"
        stroke="var(--color-primary)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <polygon points="280,92 274,82 286,82" fill="var(--color-primary)" />

      <rect
        x="32"
        y="112"
        width="88"
        height="52"
        rx="12"
        fill="rgba(74, 123, 167, 0.12)"
        stroke="var(--color-primary)"
        strokeWidth="1.5"
      />
      <text
        x="76"
        y="145"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="22"
        fill="var(--color-text-strong)"
        fontWeight="600"
      >
        私
      </text>
      <text
        x="76"
        y="186"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="13"
        fill="var(--color-primary)"
        fontWeight="500"
      >
        名詞
      </text>

      <rect
        x="132"
        y="112"
        width="88"
        height="52"
        rx="12"
        fill="rgba(74, 123, 167, 0.06)"
        stroke="var(--color-primary-strong)"
        strokeWidth="1.5"
      />
      <text
        x="176"
        y="145"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="22"
        fill="var(--color-text-strong)"
        fontWeight="600"
      >
        は
      </text>
      <text
        x="176"
        y="186"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="13"
        fill="var(--color-primary-strong)"
        fontWeight="500"
      >
        助詞
      </text>

      <rect
        x="232"
        y="112"
        width="88"
        height="52"
        rx="12"
        fill="rgba(74, 123, 167, 0.12)"
        stroke="var(--color-primary)"
        strokeWidth="1.5"
      />
      <text
        x="276"
        y="145"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="22"
        fill="var(--color-text-strong)"
        fontWeight="600"
      >
        学校
      </text>
      <text
        x="276"
        y="186"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="13"
        fill="var(--color-primary)"
        fontWeight="500"
      >
        名詞
      </text>

      <rect
        x="332"
        y="112"
        width="88"
        height="52"
        rx="12"
        fill="rgba(74, 123, 167, 0.06)"
        stroke="var(--color-primary-strong)"
        strokeWidth="1.5"
      />
      <text
        x="376"
        y="145"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="22"
        fill="var(--color-text-strong)"
        fontWeight="600"
      >
        に
      </text>
      <text
        x="376"
        y="186"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="13"
        fill="var(--color-primary-strong)"
        fontWeight="500"
      >
        助詞
      </text>

      <rect
        x="432"
        y="112"
        width="88"
        height="52"
        rx="12"
        fill="rgba(93, 138, 184, 0.15)"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
      />
      <text
        x="476"
        y="145"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="22"
        fill="var(--color-text-strong)"
        fontWeight="600"
      >
        行く
      </text>
      <text
        x="476"
        y="186"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="13"
        fill="var(--color-accent)"
        fontWeight="500"
      >
        動詞
      </text>
    </svg>
  );
}

function SyntaxAnalysisDiagram() {
  return (
    <svg
      viewBox="0 0 560 280"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="私は学校に行く、という文の構文木"
    >
      <rect width="560" height="280" fill="var(--color-surface)" />
      <text
        x="280"
        y="32"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="22"
        fill="var(--color-text-strong)"
        fontWeight="600"
      >
        私は学校に行く
      </text>
      <path
        d="M280 48 L280 68"
        stroke="var(--color-primary)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <polygon points="280,78 274,68 286,68" fill="var(--color-primary)" />

      <rect
        x="240"
        y="88"
        width="80"
        height="36"
        rx="10"
        fill="rgba(74, 123, 167, 0.06)"
        stroke="var(--color-primary-strong)"
        strokeWidth="1.5"
      />
      <text
        x="280"
        y="112"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="18"
        fill="var(--color-primary)"
        fontWeight="600"
      >
        文
      </text>
      <path
        d="M250 124 L250 140 L140 140 L140 156"
        stroke="var(--color-primary-strong)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M310 124 L310 140 L390 140 L390 156"
        stroke="var(--color-primary-strong)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />

      <rect
        x="100"
        y="156"
        width="80"
        height="36"
        rx="10"
        fill="rgba(74, 123, 167, 0.06)"
        stroke="var(--color-primary-strong)"
        strokeWidth="1.5"
      />
      <text
        x="140"
        y="180"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="16"
        fill="var(--color-primary)"
        fontWeight="600"
      >
        主部
      </text>
      <rect
        x="350"
        y="156"
        width="80"
        height="36"
        rx="10"
        fill="rgba(74, 123, 167, 0.06)"
        stroke="var(--color-primary-strong)"
        strokeWidth="1.5"
      />
      <text
        x="390"
        y="180"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="16"
        fill="var(--color-primary)"
        fontWeight="600"
      >
        述部
      </text>

      <path
        d="M140 192 L140 212"
        stroke="var(--color-primary-strong)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M370 192 L370 200 L300 200 L300 212"
        stroke="var(--color-primary-strong)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M410 192 L410 200 L460 200 L460 212"
        stroke="var(--color-primary-strong)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />

      <rect
        x="100"
        y="212"
        width="80"
        height="40"
        rx="10"
        fill="rgba(74, 123, 167, 0.12)"
        stroke="var(--color-primary)"
        strokeWidth="1.5"
      />
      <text
        x="140"
        y="238"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="18"
        fill="var(--color-text-strong)"
        fontWeight="600"
      >
        私は
      </text>
      <text
        x="140"
        y="268"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="12"
        fill="var(--color-primary)"
        fontWeight="500"
      >
        主語
      </text>

      <rect
        x="260"
        y="212"
        width="80"
        height="40"
        rx="10"
        fill="rgba(74, 123, 167, 0.12)"
        stroke="var(--color-primary)"
        strokeWidth="1.5"
      />
      <text
        x="300"
        y="238"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="18"
        fill="var(--color-text-strong)"
        fontWeight="600"
      >
        学校に
      </text>
      <text
        x="300"
        y="268"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="12"
        fill="var(--color-primary)"
        fontWeight="500"
      >
        目的地
      </text>

      <rect
        x="420"
        y="212"
        width="80"
        height="40"
        rx="10"
        fill="rgba(93, 138, 184, 0.15)"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
      />
      <text
        x="460"
        y="238"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="18"
        fill="var(--color-text-strong)"
        fontWeight="600"
      >
        行く
      </text>
      <text
        x="460"
        y="268"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="12"
        fill="var(--color-accent)"
        fontWeight="500"
      >
        述語
      </text>
    </svg>
  );
}

function SemanticAnalysisDiagram() {
  return (
    <svg
      viewBox="0 0 560 340"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="多義語、上位下位関係、照応関係を示す意味解析の図"
    >
      <rect width="560" height="340" fill="var(--color-surface)" />
      <defs>
        <marker
          id="arrow-blue"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="var(--color-primary)" />
        </marker>
        <marker
          id="arrow-teal"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="var(--color-accent)" />
        </marker>
      </defs>

      <text
        x="140"
        y="28"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="13"
        fill="var(--color-primary)"
        fontWeight="600"
      >
        多義語の解消
      </text>
      <rect
        x="50"
        y="42"
        width="60"
        height="36"
        rx="8"
        fill="rgba(74, 123, 167, 0.12)"
        stroke="var(--color-primary)"
        strokeWidth="1.5"
      />
      <text
        x="80"
        y="66"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="15"
        fill="var(--color-text-strong)"
        fontWeight="600"
      >
        はし
      </text>
      <text
        x="130"
        y="66"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="14"
        fill="var(--color-primary-strong)"
      >
        →
      </text>
      <rect
        x="150"
        y="42"
        width="60"
        height="36"
        rx="8"
        fill="rgba(74, 123, 167, 0.06)"
        stroke="var(--color-primary-strong)"
        strokeWidth="1.5"
      />
      <text
        x="180"
        y="66"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="14"
        fill="var(--color-text-strong)"
        fontWeight="600"
      >
        橋
      </text>
      <rect
        x="220"
        y="42"
        width="60"
        height="36"
        rx="8"
        fill="rgba(74, 123, 167, 0.06)"
        stroke="var(--color-primary-strong)"
        strokeWidth="1.5"
      />
      <text
        x="250"
        y="66"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="14"
        fill="var(--color-text-strong)"
        fontWeight="600"
      >
        箸
      </text>

      <text
        x="420"
        y="28"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="13"
        fill="var(--color-primary)"
        fontWeight="600"
      >
        上位・下位関係
      </text>
      <rect
        x="380"
        y="42"
        width="80"
        height="36"
        rx="8"
        fill="rgba(74, 123, 167, 0.12)"
        stroke="var(--color-primary)"
        strokeWidth="1.5"
      />
      <text
        x="420"
        y="66"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="15"
        fill="var(--color-text-strong)"
        fontWeight="600"
      >
        動物
      </text>
      <text
        x="490"
        y="66"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="11"
        fill="var(--color-primary-strong)"
      >
        上位
      </text>
      <path
        d="M420 78 L420 92"
        stroke="var(--color-primary-strong)"
        strokeWidth="1.5"
        fill="none"
      />
      <rect
        x="350"
        y="102"
        width="60"
        height="36"
        rx="8"
        fill="rgba(74, 123, 167, 0.06)"
        stroke="var(--color-primary-strong)"
        strokeWidth="1.5"
      />
      <text
        x="380"
        y="126"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="15"
        fill="var(--color-text-strong)"
        fontWeight="600"
      >
        犬
      </text>
      <rect
        x="420"
        y="102"
        width="60"
        height="36"
        rx="8"
        fill="rgba(74, 123, 167, 0.06)"
        stroke="var(--color-primary-strong)"
        strokeWidth="1.5"
      />
      <text
        x="450"
        y="126"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="15"
        fill="var(--color-text-strong)"
        fontWeight="600"
      >
        猫
      </text>
      <text
        x="510"
        y="126"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="11"
        fill="var(--color-primary-strong)"
      >
        下位
      </text>
      <path
        d="M420 92 L380 92 L380 102"
        stroke="var(--color-primary-strong)"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M420 92 L450 92 L450 102"
        stroke="var(--color-primary-strong)"
        strokeWidth="1.5"
        fill="none"
      />

      <line
        x1="40"
        y1="160"
        x2="520"
        y2="160"
        stroke="var(--color-primary-strong)"
        strokeWidth="1"
        strokeDasharray="4,4"
        opacity="0.5"
      />
      <text
        x="280"
        y="190"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="13"
        fill="var(--color-primary)"
        fontWeight="600"
      >
        照応解析
      </text>
      <text
        x="280"
        y="220"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="18"
        fill="var(--color-text-strong)"
        fontWeight="500"
      >
        <tspan fill="var(--color-primary)" fontWeight="700">
          太郎
        </tspan>
        <tspan>は</tspan>
        <tspan fill="var(--color-accent)" fontWeight="700">
          本
        </tspan>
        <tspan>を買った。</tspan>
        <tspan fill="var(--color-primary)" fontWeight="700">
          彼
        </tspan>
        <tspan>は</tspan>
        <tspan fill="var(--color-accent)" fontWeight="700">
          それ
        </tspan>
        <tspan>を読んだ。</tspan>
      </text>

      <rect
        x="70"
        y="258"
        width="70"
        height="40"
        rx="10"
        fill="rgba(74, 123, 167, 0.12)"
        stroke="var(--color-primary)"
        strokeWidth="1.5"
      />
      <text
        x="105"
        y="284"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="16"
        fill="var(--color-text-strong)"
        fontWeight="600"
      >
        太郎
      </text>
      <rect
        x="170"
        y="258"
        width="70"
        height="40"
        rx="10"
        fill="rgba(93, 138, 184, 0.15)"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
      />
      <text
        x="205"
        y="284"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="16"
        fill="var(--color-text-strong)"
        fontWeight="600"
      >
        本
      </text>
      <rect
        x="320"
        y="258"
        width="70"
        height="40"
        rx="10"
        fill="rgba(74, 123, 167, 0.06)"
        stroke="var(--color-primary)"
        strokeWidth="1.5"
        strokeDasharray="5,3"
      />
      <text
        x="355"
        y="284"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="16"
        fill="var(--color-primary)"
        fontWeight="600"
      >
        彼
      </text>
      <rect
        x="420"
        y="258"
        width="70"
        height="40"
        rx="10"
        fill="rgba(93, 138, 184, 0.08)"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
        strokeDasharray="5,3"
      />
      <text
        x="455"
        y="284"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="16"
        fill="var(--color-accent)"
        fontWeight="600"
      >
        それ
      </text>
      <path
        d="M355 298 L355 325 L105 325 L105 298"
        stroke="var(--color-primary)"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#arrow-blue)"
      />
      <path
        d="M455 258 L455 238 L205 238 L205 258"
        stroke="var(--color-accent)"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#arrow-teal)"
      />
    </svg>
  );
}

function ContextAnalysisDiagram() {
  return (
    <svg
      viewBox="0 0 560 220"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="寒いね、という発言の文脈から意図を読み取る図"
    >
      <rect width="560" height="220" fill="var(--color-surface)" />
      <rect
        x="180"
        y="25"
        width="200"
        height="50"
        rx="12"
        fill="rgba(74, 123, 167, 0.06)"
        stroke="var(--color-primary-strong)"
        strokeWidth="1.5"
      />
      <text
        x="280"
        y="58"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="20"
        fill="var(--color-text-strong)"
        fontWeight="600"
      >
        「寒いね」
      </text>
      <path
        d="M280 75 L280 100"
        stroke="var(--color-primary)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <polygon points="280,110 274,100 286,100" fill="var(--color-primary)" />
      <text
        x="280"
        y="132"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="13"
        fill="var(--color-primary-strong)"
        fontWeight="500"
      >
        言葉の裏にある意図を読み取る
      </text>
      <rect
        x="60"
        y="150"
        width="140"
        height="48"
        rx="12"
        fill="rgba(74, 123, 167, 0.08)"
        stroke="var(--color-primary-strong)"
        strokeWidth="1.5"
      />
      <text
        x="130"
        y="180"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="15"
        fill="var(--color-text-strong)"
        fontWeight="600"
      >
        窓を閉めて
      </text>
      <rect
        x="210"
        y="150"
        width="140"
        height="48"
        rx="12"
        fill="rgba(74, 123, 167, 0.08)"
        stroke="var(--color-primary-strong)"
        strokeWidth="1.5"
      />
      <text
        x="280"
        y="180"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="15"
        fill="var(--color-text-strong)"
        fontWeight="600"
      >
        暖房つけて
      </text>
      <rect
        x="360"
        y="150"
        width="140"
        height="48"
        rx="12"
        fill="rgba(74, 123, 167, 0.08)"
        stroke="var(--color-primary-strong)"
        strokeWidth="1.5"
      />
      <text
        x="430"
        y="180"
        textAnchor="middle"
        fontFamily={svgFont}
        fontSize="15"
        fill="var(--color-text-strong)"
        fontWeight="600"
      >
        上着を貸して
      </text>
    </svg>
  );
}

const steps = [
  {
    number: "01",
    title: "形態素解析",
    diagram: <MorphologicalAnalysisDiagram />,
  },
  { number: "02", title: "構文解析", diagram: <SyntaxAnalysisDiagram /> },
  { number: "03", title: "意味解析", diagram: <SemanticAnalysisDiagram /> },
  { number: "04", title: "文脈解析", diagram: <ContextAnalysisDiagram /> },
] as const;

export default function IntroPage() {
  return (
    <main className={styles.page}>
      <section className={styles.titleSection}>
        <h1>導入</h1>
        <p>自然言語処理の基本概念と日本語テキスト解析の重要性</p>
      </section>

      <div className={styles.contentContainer}>
        <section className={styles.contentSection}>
          <NeumorphicCard className={styles.card}>
            <h2 className={styles.sectionTitle}>自然言語処理(NLP)とは</h2>
            <p>
              <strong>自然言語処理(NLP)</strong>
              とは、コンピュータが人間の言語(自然言語)を理解、処理し、適切な応答を生成するための技術である。自然言語処理の最大の目的は、
              <strong>
                人間とコンピュータ間のスムーズなコミュニケーションを可能にする
              </strong>
              ことにある。
            </p>
          </NeumorphicCard>
        </section>

        <section className={styles.contentSection}>
          <NeumorphicCard className={styles.card}>
            <h2 className={styles.sectionTitle}>主要な処理ステップ</h2>
            <p className={styles.introText}>
              自然言語をコンピュータが扱うために、主に以下の4つの処理ステップが含まれる。
            </p>
            <div className={styles.stepsGrid}>
              {steps.map((step) => (
                <div className={styles.stepItem} key={step.number}>
                  <div className={styles.stepHeader}>
                    <div className={styles.stepNumber}>{step.number}</div>
                    <h3>{step.title}</h3>
                  </div>
                  <div className={styles.stepIllustration}>{step.diagram}</div>
                </div>
              ))}
            </div>
          </NeumorphicCard>
        </section>

        <section className={styles.contentSection}>
          <NeumorphicCard className={styles.card}>
            <h2 className={styles.sectionTitle}>自然言語処理に注目する理由</h2>
            <p>
              私たちは、日常の中で自然言語処理技術に触れる機会が増えていることに着目。この技術がどのような歴史を辿り、そしてこれからどのような未来が待っているのかという点に強い興味を持ったため、今回このテーマを選定した。
            </p>
          </NeumorphicCard>
        </section>

        <section className={styles.contentSection}>
          <NeumorphicCard className={`${styles.card} ${styles.focusCard}`}>
            <h2 className={styles.sectionTitle}>今回のフォーカス：感情分析</h2>
            <p>
              今回は特に、自然言語処理の応用分野の一つである
              <strong>感情分析</strong>に焦点を当てて深掘りしていく。
            </p>
          </NeumorphicCard>
        </section>
      </div>
    </main>
  );
}
