import style from "./styles.module.css";

type Props = {
  itemSize?: string;
  title?: string;
  description: string;
  footer?: string;
  url?: string;
};

const GalleryItem = ({ itemSize, title, description, footer, url }: Props) => {
  const Tag = url ? "a" : "div";
  return (
    <Tag
      style={{
        flexBasis: itemSize,
        cursor: url ? "pointer" : "auto",
      }}
      className={`${style["gallery-item"]} ${url ? style.a : ""}`}
      href={url ? `${url}` : ""}
      target={url ? "_blank" : ""}
    >
      <div>
        {title && <div className={style["gallery-item-title"]}>{title}</div>}

        {description.split("<br>").map((line, i) => {
          return (
            <p
              key={i}
              style={{ paddingBottom: footer ? "30px" : "0" }}
              className={style["gallery-item-description"]}
            >
              {line}
            </p>
          );
        })}

        {footer && <div className={style["gallery-item-footer"]}>{footer}</div>}
      </div>
    </Tag>
  );
};

export default GalleryItem;
