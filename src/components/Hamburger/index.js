import hamburgerStyle from './style'

export default function Hamburger({ onClick }) {

    return ( 
        <div className="hamburguer">
            <a className="icon" onClick={onClick}>
                <i className="fa fa-bars fa-3x"></i>
            </a>
            <style jsx>
                { hamburgerStyle }
            </style>
        </div>
    )
}

