import style from "./styles.module.css";

type Props = {
  text: string;
};

const Typography = ({ text }: Props) => {
  return (
    <div className={style.container}>
      <h1 className={style.h1}> {text} </h1>
    </div>
  );
};

export default Typography;
