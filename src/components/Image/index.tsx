import Image from "next/image";

type Props = {
  alt: string;
  src: string;
  height?: number;
  width?: number;
};

const ImageComponent = ({ alt, src, height, width }: Props) => {
  return (
    <Image
      className="max-w-[250px] w-full h-auto rounded-full mx-auto p-2.5 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-500 cursor-pointer object-cover"
      width={width ?? 250}
      height={height ?? 250}
      alt={alt}
      src={src}
      priority
    />
  );
};

export default ImageComponent;
