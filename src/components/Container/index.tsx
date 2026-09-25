import { ReactNode } from "react";

type Props = {
  id: string;
  children: ReactNode;
  className?: string;
};

const Container = ({ id, children, className = "" }: Props) => {
  return (
    <section
      id={id}
      className={`flex flex-col items-center justify-around w-full mx-auto gap-8 py-16 scroll-mt-24 ${className}`}
    >
      {children}
    </section>
  );
};

export default Container;
