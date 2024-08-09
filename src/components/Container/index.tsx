import { ReactNode } from "react";

import style from "./styles.module.css";

type Props = {
  id: string;
  children: ReactNode;
};

const Container = ({ id, children }: Props) => {
  return (
    <div id={id} className={style.div}>
      {children}
    </div>
  );
};

export default Container;
