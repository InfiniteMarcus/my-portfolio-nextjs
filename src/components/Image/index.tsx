import Image from "next/image";

import style from "./styles.module.css";

type Props = {
  alt: string;
  src: string;
};

const ImageComponent = ({ alt, src }: Props) => {
  return (
    <>
      <Image
        className={style.img}
        width="250"
        height="250"
        alt={alt}
        src={src}
      />
    </>
  );
};

export default ImageComponent;
