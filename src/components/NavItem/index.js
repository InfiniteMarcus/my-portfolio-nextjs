import navItemStyle from './style'

export default function Navitem({ item }) {
    return ( 
        <li>
            <a href={`${item.href}`}>{item.text}</a>
            <style jsx>
                    { navItemStyle }
            </style>
        </li>
    )
}

