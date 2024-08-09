import style from "./styles.module.css";

type Props = {
  checked?: boolean;
  id: string;
  text: string;
};

const Checkbox = ({ checked, id, text }: Props) => {
  return (
    <div className={style["check-container"]}>
      <input
        className={style.input}
        id={id}
        type="checkbox"
        checked={checked}
        readOnly
      />
      <label
        htmlFor={id}
        style={{ textDecorationLine: checked ? "line-through" : "none" }}
      >
        {text}
      </label>
    </div>
  );
};

export default Checkbox;
