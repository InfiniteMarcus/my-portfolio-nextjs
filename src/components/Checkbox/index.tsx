type Props = {
  checked?: boolean;
  id: string;
  text: string;
};

const Checkbox = ({ checked, id, text }: Props) => {
  return (
    <div className="flex gap-4 mb-11 items-center">
      <input
        className="w-6 h-6 accent-brand-primary cursor-default rounded"
        id={id}
        type="checkbox"
        checked={checked}
        readOnly
      />
      <label
        htmlFor={id}
        className={`font-sans select-none text-white ${
          checked ? "line-through opacity-70" : ""
        }`}
      >
        {text}
      </label>
    </div>
  );
};

export default Checkbox;
