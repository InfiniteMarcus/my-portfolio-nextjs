import { ReactNode } from "react";

import style from "./styles.module.css";
import Typography from "../Typography";

type Props = {
  breakValue?: "normal" | "break-all" | "keep-all" | "break-word";
  description?: string[];
  title?: string;
  children?: ReactNode;
  containerHeight?: number;
};

export default function Card({
  breakValue,
  title,
  description,
  children,
  containerHeight,
}: Props) {
  return (
    <div className={style.card}>
      {title && <Typography text={title} />}

      <div className={style["card-body"]}>
        {description &&
          description.map((line, i) => {
            return (
              <p key={i} style={{ padding: "10px", marginBottom: "20px" }}>
                {line}
              </p>
            );
          })}
        {children && (
          <div
            style={{
              wordBreak: breakValue || "inherit",
              height: containerHeight,
            }}
            className={style["card-container"]}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
