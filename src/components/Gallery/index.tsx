import style from "./styles.module.css";
import GalleryItem from "../GalleryItem";

type Props = {
  itemKey: string;
  itemSize: string;
  items: any[];
};

const Gallery = ({ itemKey, itemSize, items }: Props) => {
  const GalleryItems = items.map((item, index) => (
    <GalleryItem key={`${itemKey}-${index}`} itemSize={itemSize} {...item} />
  ));

  return <div className={style["gallery-container"]}>{GalleryItems}</div>;
};

export default Gallery;
