import iconStyle from './style'

export default function Icon ({ alt, src, href }) {
    return (
        <>
            <a href={href} target="_blank">
                <img alt={alt} src={src}></img>
            </a>
            <style jsx>
                { iconStyle }
            </style>
        </>
    );
}