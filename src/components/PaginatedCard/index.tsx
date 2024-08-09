"use client";

import { ReactNode, useState } from "react";

import style from "./styles.module.css";
import Button from "../Button";
import { useTranslations } from "next-intl";
import Typography from "../Typography";

type Props = {
  breakValue?: "normal" | "break-all" | "keep-all" | "break-word";
  title: string;
  description?: string[];
  pages: {
    description?: string[];
    component: ReactNode;
  }[];
};

const PaginatedCard = ({ breakValue, title, description, pages }: Props) => {
  const [page, setPage] = useState<number>(0);
  const t = useTranslations("General");

  const previousPage = page - 1;
  const nextPage = page + 1;

  const goToNextPage = () => {
    if (nextPage >= pages.length) {
      return;
    }

    setPage((prev) => prev + 1);
  };

  const goToPreviousPage = () => {
    if (previousPage < 0) {
      return;
    }

    setPage((prev) => prev - 1);
  };

  const actualPage = pages[page];

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

        <div
          style={{ wordBreak: breakValue || "inherit" }}
          className={style["card-container"]}
        >
          {actualPage.description &&
            actualPage.description.map((line, i) => {
              return (
                <p key={i} style={{ padding: "10px" }}>
                  {line}
                </p>
              );
            })}

          <div className={style["page"]}>{actualPage.component}</div>
        </div>
      </div>

      <div className={style.buttons}>
        <Button onClick={goToPreviousPage} disabled={previousPage < 0}>
          {t("Previous")}
        </Button>
        <Button onClick={goToNextPage} disabled={nextPage >= pages.length}>
          {t("Next")}
        </Button>
      </div>
    </div>
  );
};

export default PaginatedCard;
