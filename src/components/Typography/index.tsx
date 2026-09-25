type Props = {
  text: string;
};

const Typography = ({ text }: Props) => {
  return (
    <div className="p-2.5 max-w-[250px] border-b-2 border-brand-primary text-center mx-auto">
      <h2 className="text-4xl font-bold">{text}</h2>
    </div>
  );
};

export default Typography;
