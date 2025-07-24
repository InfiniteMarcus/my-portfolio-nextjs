import Image from "next/image";

import style from "./styles.module.css";

type Props = {
  alt: string;
  src: string;
  height?: number;
  width?: number;
};

const ImageComponent = ({ alt, src, height, width }: Props) => {
  return (
    <>
      <Image
        className={style.img}
        width={width ?? "250"}
        height={height ?? "250"}
        alt={alt}
        src={src}
      />
    </>
  );
};

export default ImageComponent;
