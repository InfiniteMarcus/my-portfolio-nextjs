import iconStyle from './style'
import Image from 'next/image'

function iconLoader ({ src }) {
    return src;
}

export default function Icon ({ alt, src, href }) {
    return (
        <>
            <a href={href} target="_blank">
                <div className="iconImg">
                    <Image 
                        alt={alt} 
                        src={src} 
                        loader={iconLoader}
                        unoptimized="true"
                        width="96px"
                        height="96px"
                    />
                </div>
            </a>
            <style jsx>
                { iconStyle }
            </style>
        </>
    );
}
