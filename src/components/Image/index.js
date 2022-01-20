import imageStyle from './style'

export default function Image ({ alt, src }) {
    return (
        <>
            <img width="250" height="250" alt={alt} src={src}></img>                
            <style jsx>
                { imageStyle }
            </style>
        </>
    );
}