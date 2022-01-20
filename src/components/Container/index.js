import containerStyle from './style'

export default function Header({ id, children }) {
    return (
        <div id={id}>
            {children}
            <style jsx>
                { containerStyle }
            </style>
        </div>
    )
}