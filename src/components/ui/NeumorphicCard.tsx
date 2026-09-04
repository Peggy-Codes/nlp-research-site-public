import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import styles from "./NeumorphicCard.module.css";

type NeumorphicCardProps<T extends ElementType = "section"> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function NeumorphicCard<T extends ElementType = "section">({
  as,
  children,
  className,
  ...props
}: NeumorphicCardProps<T>) {
  const Component = as ?? "section";
  const classes = [styles.card, className].filter(Boolean).join(" ");

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
