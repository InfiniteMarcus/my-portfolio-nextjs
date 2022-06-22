
import Image from 'next/image'
import headerStyle from './style'

import Navbar from '../Navbar'

export default function Header({ title, image, alt, width, height, items }) {

    return (
        <header>
            {image && 
                <a className="image" href="/">
                    <Image alt={alt} src={`/images/${image}`} width={width} height={height} />
                </a>
            }

            {title && 
                <h1 className="title"><a href="/"> {title} </a></h1>
            }

            <Navbar items={items}/>
            <style jsx>
                { headerStyle }
            </style>
        </header>
    )
}