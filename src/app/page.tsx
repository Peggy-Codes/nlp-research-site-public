import type { Metadata } from "next";
import Link from "next/link";
import { ParticleCanvas } from "@/components/shared/ParticleCanvas";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "NLP Research - Japanese Text Analysis",
};

const sections = [
  {
    href: "/intro",
    title: "導入",
    description:
      "自然言語処理の基本概念と、本研究における日本語テキスト解析の重要性について概説する。",
  },
  {
    href: "/theme",
    title: "テーマ選択理由",
    description:
      "なぜ日本語テキスト解析を研究テーマとして選んだのか、その動機と社会的背景を説明する。",
  },
  {
    href: "/methodology",
    title: "方法論・比較",
    description:
      "本研究で採用した具体的な手法と、既存のモデルとの性能比較を詳細に解説する。",
  },
  {
    href: "/history",
    title: "歴史",
    description:
      "日本語自然言語処理の発展の歴史と、主要な技術的マイルストーンを振り返る。",
  },
  {
    href: "/applications",
    title: "応用・最新動向",
    description:
      "チャットボットや翻訳などの実用例と、大規模言語モデル（LLM）を含む最新の研究動向について解説する。",
  },
  {
    href: "/conclusion",
    title: "結論",
    description:
      "研究の総括として、感情分析がビジネスや顧客体験にもたらす価値と今後の展望を述べる。",
  },
  {
    href: "/web-tech",
    title: "Web技術",
    description:
      "本サイトで使用しているパーティクルアニメーションやニューモーフィズムなどのモダンなWeb技術について解説する。",
  },
] as const;

const members: ReadonlyArray<{ name: string; role: string; leader?: boolean }> =
  [
    { name: "メンバーA", role: "導入、結論" },
    { name: "メンバーB", role: "歴史" },
    { name: "メンバーC", role: "方法論" },
    { name: "メンバーD", role: "応用・最新動向" },
    {
      name: "枌春輝",
      role: "テーマ選定理由、設計、デザイン、Web技術",
      leader: true,
    },
  ];

export default function Home() {
  return (
    <main className={styles.main}>
      <ParticleCanvas variant="page-background" />
      <section className={styles.heroSection}>
        <div>
          <h1 className={styles.heroTitle}>
            自然言語処理における
            <br />
            感情分析
          </h1>
          <p className={styles.heroSubtitle}>
            日本語テキストの感情分析についての調査を行う
          </p>
        </div>
      </section>

      <section className={styles.contentGrid} aria-label="コンテンツ一覧">
        {sections.map((section) => (
          <Link
            href={section.href}
            className={styles.contentCard}
            key={section.href}
          >
            <h3>{section.title}</h3>
            <p>{section.description}</p>
          </Link>
        ))}
      </section>

      <section className={styles.teamSection}>
        <div className={styles.teamContainer}>
          <h2 className={styles.teamTitle}>制作メンバー - Bグループ</h2>
          <div className={styles.teamGrid}>
            {members.map((member) => (
              <div
                className={`${styles.teamMember} ${member.leader ? styles.teamLeader : ""}`}
                key={member.name}
              >
                <div className={styles.memberName}>{member.name}</div>
                <div className={styles.memberRole}>{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
