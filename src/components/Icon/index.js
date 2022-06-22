import iconStyle from './style'
import Image from 'next/image'

function iconLoader ({ src }) {
    return src;
}

const ImageStyle = {
    maxWidth: '250px',
    width: '100%',
    height: 'auto',
    borderRadius: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '2px',
    opacity: '0.9',
    transition: 'all 0.5s',
    padding: '10px'
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
