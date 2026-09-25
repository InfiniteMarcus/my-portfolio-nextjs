import { ReactNode } from "react";

type Props = {
  download?: boolean;
  downloadFile?: string;
  onClick?: () => void;
  children: ReactNode;
  disabled?: boolean;
  className?: string;
};

const Button = ({
  download,
  downloadFile,
  onClick,
  children,
  disabled,
  className = "",
}: Props) => {
  const baseClasses = `inline-flex items-center justify-center p-5 text-lg sm:text-xl font-sans rounded-2xl text-white bg-brand-primary opacity-80 hover:opacity-100 active:opacity-100 transition-all duration-200 cursor-pointer disabled:bg-brand-card disabled:cursor-not-allowed disabled:opacity-60 no-underline ${className}`;

  if (download && downloadFile) {
    return (
      <a className={baseClasses} href={downloadFile} download onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
