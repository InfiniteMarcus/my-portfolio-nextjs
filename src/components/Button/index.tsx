import { ReactNode } from "react";

import style from "./styles.module.css";

type Props = {
  download?: boolean;
  downloadFile?: string;
  onClick?: () => void;
  children: ReactNode;
  disabled?: boolean;
};

const Button = ({
  download,
  downloadFile,
  onClick,
  children,
  disabled,
}: Props) => {
  const hasDownload = Boolean(download && downloadFile);

  return (
    <button className={style.button} onClick={onClick} disabled={disabled}>
      {hasDownload ? (
        <a className={style.a} href={downloadFile} download>
          {children}
        </a>
      ) : (
        <>{children}</>
      )}
    </button>
  );
};

export default Button;
