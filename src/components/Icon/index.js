import iconStyle from './style'
import Image from 'next/image'

function iconLoader ({ src }) {
    return src;
}

export default function Icon ({ alt, src, href }) {
    return (
        <>
            <a href={href} target="_blank">
                <Image 
                    alt={alt} 
                    src={src} 
                    loader={iconLoader}
                    width="96px"
                    height="96px"
                    loading="lazy"
                />
            </a>
            <style jsx>
                { iconStyle }
            </style>
        </>
    );
}