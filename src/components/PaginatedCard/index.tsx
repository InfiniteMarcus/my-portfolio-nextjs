"use client";

import { ReactNode, useState } from "react";
import Button from "../Button";
import { useTranslations } from "next-intl";
import Typography from "../Typography";
import { parseRichText } from "../../utils/richText";

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
    <div className="w-full text-center max-w-[1000px] min-h-[250px] px-4">
      {title && <Typography text={title} />}

      <div className="p-5 text-xl sm:text-2xl text-white/95">
        {description &&
          description.map((line, i) => (
            <p key={i} className="mb-5 leading-relaxed">
              {parseRichText(line)}
            </p>
          ))}

        <div
          style={{ wordBreak: breakValue || "inherit" }}
          className="flex flex-col mx-auto justify-center gap-5"
        >
          {actualPage.description &&
            actualPage.description.map((line, i) => (
              <p key={i} className="p-2.5">
                {parseRichText(line)}
              </p>
            ))}

          <div className="h-[350px] overflow-y-auto overflow-x-hidden px-2.5">
            {actualPage.component}
          </div>
        </div>
      </div>

      <div className="flex gap-5 items-center justify-center mt-4">
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
