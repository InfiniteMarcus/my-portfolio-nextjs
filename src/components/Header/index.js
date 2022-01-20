
import headerStyle from './style'

import Navbar from '../Navbar'

export default function Header({ title, items }) {

    return (
        <header>
            <h1 className="title"><a href="/"> {title} </a></h1>
            <Navbar items={items}/>
            <style jsx>
                { headerStyle }
            </style>
        </header>
    )
}