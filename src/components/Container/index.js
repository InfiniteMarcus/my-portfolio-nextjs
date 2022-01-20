import containerStyle from './style'

export default function Header({ children }) {
    return (
        <div>
            {children}
            <style jsx>
                { containerStyle }
            </style>
        </div>
    )
}