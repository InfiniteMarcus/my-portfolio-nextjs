type Props = {
  itemSize?: string;
  title?: string;
  description: string;
  footer?: string;
  url?: string;
};

const GalleryItem = ({ itemSize, title, description, footer, url }: Props) => {
  const isLink = Boolean(url);
  const Tag = isLink ? "a" : "div";

  return (
    <Tag
      style={{
        flexBasis: itemSize,
      }}
      className={`font-bold flex flex-col items-center justify-center relative bg-[#1e1e1e]/75 hover:bg-[#1e1e1e] rounded-2xl p-5 flex-1 transition-all duration-300 no-underline text-white border border-white/5 hover:border-brand-primary/40 ${
        isLink ? "cursor-pointer hover:scale-[1.03]" : "cursor-default"
      }`}
      href={url}
      target={isLink ? "_blank" : undefined}
      rel={isLink ? "noopener noreferrer" : undefined}
    >
      <div className="w-full">
        {title && (
          <div className="mb-2.5 font-bold text-lg text-white">{title}</div>
        )}

        {description.split("<br>").map((line, i) => (
          <p
            key={i}
            className={`tracking-wider text-lg sm:text-xl font-medium text-white/90 ${
              footer ? "pb-6" : "pb-0"
            }`}
          >
            {line}
          </p>
        ))}

        {footer && (
          <div className="px-4 text-sm font-normal text-white/70 mt-2 w-full text-center">
            {footer}
          </div>
        )}
      </div>
    </Tag>
  );
};

export default GalleryItem;
