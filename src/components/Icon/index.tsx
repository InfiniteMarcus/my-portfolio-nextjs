"use client";

import Image from "next/image";

import style from "./styles.module.css";

type Props = {
  alt: string;
  src: string;
  href: string;
};

const Icon = ({ alt, src, href }: Props) => {
  return (
    <>
      <a className={style.a} href={href} target="_blank">
        <div className={style.iconImg}>
          <Image
            alt={alt}
            src={src}
            loader={({ src }) => src}
            unoptimized={true}
            width={96}
            height={96}
          />
        </div>
      </a>
    </>
  );
};

export default Icon;
