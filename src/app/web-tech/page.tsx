import type { Metadata } from "next";
import { CodeBlock } from "@/components/shared/CodeBlock";
import { CollapsibleCode } from "@/components/shared/CollapsibleCode";
import { NavSwitcher } from "@/components/shared/NavSwitcher";
import { ParticleCanvas } from "@/components/shared/ParticleCanvas";
import { NeumorphicCard } from "@/components/ui/NeumorphicCard";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Web技術紹介 - NLP Research",
};

const particleCode = `// パーティクルの描画とインタラクション
this.particles.forEach((particle, i) => {
  // マウスとの距離を計算
  let dx = this.mouse.x - particle.x;
  let dy = this.mouse.y - particle.y;
  let distance = Math.sqrt(dx * dx + dy * dy);

  // マウスに近い場合は反発
  if (distance < this.mouse.radius && this.mouse.x != null) {
    let angle = Math.atan2(dy, dx);
    let force = (this.mouse.radius - distance) / this.mouse.radius;
    particle.x -= Math.cos(angle) * force * 5;
    particle.y -= Math.sin(angle) * force * 5;
  }

  // 近くのパーティクルと線を引く
  for (let j = i + 1; j < this.particles.length; j++) {
    let other = this.particles[j];
    let distance = Math.sqrt(
      (particle.x - other.x) ** 2 + (particle.y - other.y) ** 2
    );
    if (distance < 120) {
      let opacity = (1 - distance / 120) * 0.2;
      this.ctx.strokeStyle = \`rgba(74, 123, 167, \${opacity})\`;
      this.ctx.beginPath();
      this.ctx.moveTo(particle.x, particle.y);
      this.ctx.lineTo(other.x, other.y);
      this.ctx.stroke();
    }
  }
});`;

const neumorphismCode = `.neumorphic-card {
  background: #E8EDF1;  /* 背景と同じ色 */
  border-radius: 30px;
  padding: 40px;
  box-shadow:
    9px 9px 18px rgba(163, 177, 198, 0.45),   /* 右下の暗い影 */
    -9px -9px 18px rgba(255, 255, 255, 0.95); /* 左上の明るい影 */
  backdrop-filter: blur(10px);
}`;

const liquidGlassCode = `.nav-switcher {
  display: flex;
  align-items: stretch;
  gap: 4px;
  padding: 14px 18px;
  border-radius: 2rem;
  background-color: rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(12px) saturate(145%);
  -webkit-backdrop-filter: blur(12px) saturate(145%);
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.1),
    inset 1.8px 3px 0px -2px rgba(255, 255, 255, 0.9),
    inset -2px -2px 0px -2px rgba(255, 255, 255, 0.8),
    inset -3px -8px 1px -6px rgba(255, 255, 255, 0.6),
    inset -0.3px -1px 4px 0px rgba(0, 0, 0, 0.12),
    inset -1.5px 2.5px 0px -2px rgba(0, 0, 0, 0.2),
    inset 0px 3px 4px -2px rgba(0, 0, 0, 0.2),
    inset 2px -6.5px 1px -4px rgba(0, 0, 0, 0.1),
    0px 1px 5px 0px rgba(0, 0, 0, 0.1),
    0px 6px 16px 0px rgba(0, 0, 0, 0.08);
}

/* スライドする選択背景 */
.nav-switcher::after {
  content: "";
  position: absolute;
  left: var(--toggle-left, 12px);
  width: var(--toggle-width, 150px);
  background-color: rgba(255, 255, 255, 0.46);
  transition: left 400ms cubic-bezier(1, 0, 0.4, 1),
              width 400ms cubic-bezier(1, 0, 0.4, 1);
}`;

const demoOptions = [
  { id: "demo-1", label: "オプション1", targetId: "", defaultChecked: true },
  { id: "demo-2", label: "オプション2", targetId: "" },
  { id: "demo-3", label: "オプション3", targetId: "" },
];

export default function WebTechPage() {
  return (
    <main className={styles.main}>
      <section className={styles.titleSection}>
        <h1>使用Web技術</h1>
        <p>このサイトで使用されているモダンなデザイン技術の解説</p>
      </section>

      <section className={`${styles.techSection} ${styles.delayOne}`}>
        <NeumorphicCard as="div" className={styles.card}>
          <h2 className={styles.techTitle}>パーティクルアニメーション</h2>
          <div className={styles.techDescription}>
            <h3>概要</h3>
            <p>
              パーティクルアニメーションは、多数の小さな粒子（パーティクル）を動かすことで、動的で魅力的な視覚効果を生み出す技術です。本サイトのトップページでは、背景に浮遊する粒子とそれらを結ぶ線によって、先進的かつ洗練された印象を与えています。
            </p>
          </div>
          <div className={styles.demoContainer}>
            <h3>デモ</h3>
            <div className={styles.demoBox}>
              <ParticleCanvas variant="demo" />
              <p className={styles.demoInstruction}>
                マウスを動かしてみてください
              </p>
            </div>
          </div>
          <div className={styles.techFeatures}>
            <h3>実装にあたって</h3>
            <p>
              HTML5のCanvas
              APIを使って、複数のパーティクル（粒子）を動的に生成している。各パーティクルは基準となる位置と現在の位置という二つの座標を持ち、通常時は微小な速度で画面上をゆっくりと浮遊する。マウスカーソルが近づくと、距離に応じた反発力が計算され、粒子が自然に遠ざかる動きを見せる。この計算には三角関数が使われており、力の向きと強さを適切に分解している。
            </p>
            <p>
              粒子同士を結ぶ接続線は、すべての粒子ペアについて距離を測定し、一定距離内にある場合のみ描画される。線の透明度は距離が近いほど濃く、遠いほど薄く表示される。アニメーションには
              requestAnimationFrame
              という仕組みを使用しており、ブラウザの画面更新に合わせることで滑らかな動きを実現している。画面の端に到達した粒子は進む方向を反転させ、常に画面内に留まる設計だ。
            </p>
          </div>
          <CollapsibleCode>
            <p>トップページ（index.html）のパーティクル描画部分の抜粋：</p>
            <CodeBlock language="javascript" code={particleCode} />
            <p>
              このコードは、各フレームごとにマウス位置との距離を計算し、反発力を適用している。また、全てのパーティクルペアに対して距離判定を行い、近接する粒子間に半透明の線を描画することで、動的なネットワーク構造を視覚化している。
            </p>
          </CollapsibleCode>
        </NeumorphicCard>
      </section>

      <section className={`${styles.techSection} ${styles.delayTwo}`}>
        <NeumorphicCard as="div" className={styles.card}>
          <h2 className={styles.techTitle}>ニューモーフィズム</h2>
          <div className={styles.techDescription}>
            <h3>概要</h3>
            <p>
              ニューモーフィズムは「New +
              Skeuomorphism（新しい擬似デザイン）」を組み合わせた造語で、2020年頃から注目されているUIデザインスタイルです。背景と同じ色を使いながら、光と影のみで立体感を表現することで、柔らかく洗練された印象を与えます。本サイトでは、すべてのコンテンツカードにこの技術を採用しています。
            </p>
          </div>
          <div className={styles.demoContainer}>
            <h3>デモ</h3>
            <div className={styles.neuroDemoGrid}>
              <div className={`${styles.neuroDemoItem} ${styles.neuroRaised}`}>
                <span className={styles.demoLabel}>凸型（Raised）</span>
                <p>背景から浮き出たような効果</p>
              </div>
              <div className={`${styles.neuroDemoItem} ${styles.neuroPressed}`}>
                <span className={styles.demoLabel}>凹型（Pressed）</span>
                <p>背景に押し込まれたような効果</p>
              </div>
              <div className={`${styles.neuroDemoItem} ${styles.neuroFlat}`}>
                <span className={styles.demoLabel}>フラット型</span>
                <p>背景と同化した効果</p>
              </div>
            </div>
          </div>
          <div className={styles.techFeatures}>
            <h3>実装にあたって</h3>
            <p>
              ニューモーフィズムの核心は、背景色と要素の色を完全に一致させ、box-shadow（影）のみで立体感を表現する点にある。本サイトでは、右下方向に暗めの影、左上方向に明るめの影を配置することで、光源が左上にあるような錯覚を生み出している。この二つの影を対角線上に配置することで、要素が背景から浮き上がったような視覚効果が生まれる仕組みだ。
            </p>
            <p>
              重要なのは、影のぼかし具合と不透明度のバランスである。ぼかしが強すぎると影がぼやけて立体感が失われ、弱すぎると硬く不自然な印象になる。また、角を丸くすることで光の反射が柔らかく見えるよう配慮している。マウスカーソルをカードに重ねると影がより強調され、要素がさらに浮き上がる演出を加えている。この繊細なバランス調整が、まるで物理的に触れられるような質感を持つUIを実現している。
            </p>
          </div>
          <CollapsibleCode>
            <p>
              web-tech.cssおよび共通スタイル（common/style.css）のニューモーフィックカード定義：
            </p>
            <CodeBlock language="css" code={neumorphismCode} />
            <p>
              このCSSは、背景色と要素色を一致させ、光と影のみで深度を表現している。cubic-bezier関数による滑らかなトランジションと、ホバー時の3層の影が、リアルな浮遊感を実現する鍵となっている。
            </p>
          </CollapsibleCode>
        </NeumorphicCard>
      </section>

      <section className={`${styles.techSection} ${styles.delayThree}`}>
        <NeumorphicCard as="div" className={styles.card}>
          <h2 className={styles.techTitle}>
            リキッドグラス（グラスモーフィズム）
          </h2>
          <div className={styles.techDescription}>
            <h3>概要</h3>
            <p>
              リキッドグラスは、半透明な背景にぼかし効果を加えることで、まるでガラス越しに見ているような視覚効果を生み出すデザイン手法です。本サイトでは、ヘッダーのナビゲーションバーと、方法論・歴史ページのインジケーターにこの技術を採用しています。
            </p>
          </div>
          <div className={styles.demoContainer}>
            <h3>デモ</h3>
            <div className={styles.glassDemoWrapper}>
              <div className={styles.glassDemoBackground}>
                <div className={styles.glassDemoText}>サンプルテキスト</div>
                <div className={styles.glassDemoElement}>
                  <h4>リキッドグラス効果</h4>
                  <p>背景がぼやけて透けて見える</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.demoContainer}>
            <h3>インタラクティブデモ</h3>
            <div className={styles.liquidDemoWrapper}>
              <NavSwitcher
                name="demo"
                ariaLabel="デモの切り替え"
                options={demoOptions}
                mode="demo"
              />
              <p className={styles.staticDemoInstruction}>
                クリックして切り替えてみてください
              </p>
            </div>
          </div>
          <div className={styles.techFeatures}>
            <h3>実装にあたって</h3>
            <p>
              リキッドグラスエフェクトの実現には、backdrop-filter
              というCSSプロパティが中心的な役割を果たす。本サイトの方法論・歴史ページのナビゲーションでは、背景にぼかし効果を加えつつ、色の彩度を高めることでガラス越しに見るような独特の視覚効果を生み出している。背景色には非常に低い不透明度の白色を使用し、下層のコンテンツが自然に透けて見えるようにしている。
            </p>
            <p>
              特筆すべきは、複数の inset
              シャドウ（内側の影）を重ねることで実現される立体的なガラスの質感だ。明るい影と暗い影を異なる角度で配置することで、光の屈折や反射を模倣している。選択されたオプションを示すスライド背景には
              CSS変数を使用しており、JavaScriptで値を動的に更新することで滑らかに移動する。このアニメーションは最初は速く、後半でゆっくりと減速する自然な動きになるよう調整されている。
            </p>
          </div>
          <CollapsibleCode>
            <p>
              方法論・歴史ページ（methodology.css /
              history.css）のナビゲーションスイッチャー定義：
            </p>
            <CodeBlock language="css" code={liquidGlassCode} />
            <p>
              このCSSは、複数のinsetシャドウを精密に配置することで、ガラスのような複雑な光学特性を再現している。JavaScriptで動的に更新されるCSS変数により、選択背景が選択されたオプションに向かって流れるように移動する。
            </p>
          </CollapsibleCode>
        </NeumorphicCard>
      </section>

      <section className={`${styles.techSection} ${styles.delayFour}`}>
        <NeumorphicCard as="div" className={styles.card}>
          <h2 className={styles.techTitle}>技術の組み合わせによる相乗効果</h2>
          <div className={styles.techDescription}>
            <p>
              本サイトでは、これら3つの技術を戦略的に組み合わせることで、統一感がありながらも各要素が際立つデザインを実現している。
            </p>
            <p>
              <strong>トップページ</strong>
              では、パーティクルアニメーションとニューモーフィズムを組み合わせている。動的な背景と静的なカードの対比により、視線を自然とコンテンツに誘導できる。
            </p>
            <p>
              <strong>ナビゲーション</strong>
              では、リキッドグラスとニューモーフィズムを組み合わせている。透明感のあるナビゲーションと、しっかりとしたコンテンツの組み合わせで階層を明確化している。
            </p>
            <p>
              <strong>ページ遷移</strong>
              では、全技術を統合している。各ページで異なる技術を適切に使い分け、統一感を保ちながら変化を演出している。
            </p>
          </div>
        </NeumorphicCard>
      </section>

      <section className={`${styles.referencesSection} ${styles.delayFive}`}>
        <NeumorphicCard as="div" className={styles.card}>
          <h2>参考資料</h2>
          <div className={styles.referenceCategory}>
            <h3>パーティクルアニメーション</h3>
            <ul className={styles.referencesList}>
              <li>
                ぜんちゃん（財前 咲季）,
                &quot;【canvas初学者必見】マウスカーソルを避けていくパーティクルアニメーションを作ろう！&quot;,
                LIG, 2021/08/31,{" "}
                <a
                  href="https://liginc.co.jp/560218"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://liginc.co.jp/560218
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.referenceCategory}>
            <h3>リキッドグラス（グラスモーフィズム）</h3>
            <ul className={styles.referencesList}>
              <li>
                Lucas Romero Di Benedetto, &quot;Liquid move&quot;, CodePen,{" "}
                <a
                  href="https://codepen.io/lucasromerodb/pen/vEOWpYM"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://codepen.io/lucasromerodb/pen/vEOWpYM
                </a>
              </li>
              <li>
                Den, &quot;glassmorphism&quot;, CodePen,{" "}
                <a
                  href="https://codepen.io/DenDionigi/pen/JodwNzX"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://codepen.io/DenDionigi/pen/JodwNzX
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.referenceCategory}>
            <h3>ニューモーフィズム</h3>
            <ul className={styles.referencesList}>
              <li>
                Dribbble, &quot;Neumorphism Smart Home app&quot;,{" "}
                <a
                  href="https://dribbble.com/shots/9916835-Neumorphism-Smart-Home-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://dribbble.com/shots/9916835-Neumorphism-Smart-Home-app
                </a>
              </li>
            </ul>
          </div>
        </NeumorphicCard>
      </section>
    </main>
  );
}
