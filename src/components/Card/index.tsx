import { ReactNode } from "react";
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
    <div className="w-full text-center max-w-[1000px] min-h-[250px] px-4">
      {title && <Typography text={title} />}

      <div className="p-5 text-xl sm:text-2xl text-white/95">
        {description &&
          description.map((line, i) => (
            <p key={i} className="p-2.5 mb-5 leading-relaxed">
              {line}
            </p>
          ))}
        {children && (
          <div
            style={{
              wordBreak: breakValue || "inherit",
              height: containerHeight,
            }}
            className="flex mx-auto justify-center gap-5 overflow-y-auto overflow-x-hidden p-2.5 max-h-[600px]"
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
