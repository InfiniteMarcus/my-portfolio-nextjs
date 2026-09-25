import GalleryItem from "../GalleryItem";

type Props = {
  itemKey: string;
  itemSize: string;
  items: {
    title?: string;
    description: string;
    url?: string;
    footer?: string;
  }[];
};

const Gallery = ({ itemKey, itemSize, items }: Props) => {
  return (
    <div className="flex justify-center flex-wrap w-full gap-5">
      {items.map((item, index) => (
        <GalleryItem
          key={`${itemKey}-${index}`}
          itemSize={itemSize}
          {...item}
        />
      ))}
    </div>
  );
};

export default Gallery;
