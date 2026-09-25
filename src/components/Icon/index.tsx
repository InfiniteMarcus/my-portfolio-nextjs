import Image from "next/image";

type Props = {
  alt: string;
  src: string;
  href: string;
};

const Icon = ({ alt, src, href }: Props) => {
  return (
    <a
      className="block max-w-[112px] w-24 h-24 sm:w-28 sm:h-28 mx-auto transition-transform duration-300"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={alt}
    >
      <div className="w-full h-full rounded-full opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-500 cursor-pointer overflow-hidden flex items-center justify-center">
        <Image
          alt={alt}
          src={src}
          unoptimized={true}
          width={112}
          height={112}
          className="w-full h-auto object-contain"
        />
      </div>
    </a>
  );
};

export default Icon;
