import galleryStyle from './style'
import GalleryItem from '../GalleryItem';

export default function Gallery({ itemKey, itemSize, items }) {

    const GalleryItems = items.map((item, index) => <GalleryItem itemSize={itemSize} key={`${itemKey}-${index}`} {...item}/> )

    return (
        <div className="gallery-container">
            { GalleryItems }
            <style jsx>
                { galleryStyle }
            </style>
        </div>
    )
}