import galleryItemStyle from './style'

export default function GalleryItem({ itemSize, title, description, footer, url }) {
    const Tag = url ? 'a' : 'div';
    return (
        <Tag
            style={{
                flexBasis: itemSize,
                cursor: url ? 'pointer' : 'auto'
            }} 
            className="gallery-item" 
            href={url ? `${url}` : ''} 
            target={url ? "_blank" : ''}
        >
            <div>
                {
                    title &&
                    <div className="gallery-item-title"> 
                        {title}
                    </div>
                }

                {
                    description.split('<br>').map( (line, i) => {
                        return (
                            <p key={i} style={{paddingBottom: footer ? '30px' : '0'}} className="gallery-item-description"> 
                                {line} 
                            </p>
                        )
                    })
                }

                {
                    footer &&
                    <div className="gallery-item-footer"> 
                        {footer} 
                    </div>
                }
            </div>
            <style jsx>
                    { galleryItemStyle }
            </style>
        </Tag>
    )
}