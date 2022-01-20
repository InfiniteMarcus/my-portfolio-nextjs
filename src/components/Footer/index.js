import footerStyle from './style'

export default function Footer({children}) {
    return (
        <footer>
            <span>
                {children}
            </span>

            <style jsx>
                { footerStyle }
            </style>
        </footer>
    )
}