import galleryItemStyle from './style'

export default function GalleryItem({ itemSize, title, description, tech }) {
    return (
        <div style={{flexBasis: itemSize}} className="gallery-item">
            {
                title &&
                <div className="gallery-item-title"> 
                    {title}
                </div>
            }

            <p style={{paddingBottom: tech ? '50px' : '0'}} className="gallery-item-description"> 
                {description} 
            </p>

            {
                tech &&
                <div className="gallery-item-tech"> 
                    {tech} 
                </div>
            }

            <style jsx>
                { galleryItemStyle }
            </style>
        </div>
    )
}