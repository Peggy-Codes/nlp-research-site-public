"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./SiteHeader.module.css";

const navigation = [
  { href: "/", label: "トップ" },
  { href: "/theme", label: "テーマ" },
  { href: "/intro", label: "導入" },
  { href: "/methodology", label: "方法論" },
  { href: "/history", label: "歴史" },
  { href: "/applications", label: "応用" },
  { href: "/conclusion", label: "結論" },
  { href: "/web-tech", label: "Web技術" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.brand}>
          <div className={styles.logo} aria-hidden="true">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"
                fill="var(--color-primary)"
              />
            </svg>
          </div>
          <h2>NLP Research</h2>
        </div>
        <nav aria-label="メインナビゲーション">
          <ul className={styles.navigation}>
            {navigation.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={isActive ? styles.active : undefined}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
