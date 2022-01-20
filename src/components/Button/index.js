import buttonStyle from './style'

export default function Button ({ download, downloadFile, onClick, children }) {
    return (
        <button onClick={onClick} >
            { download && downloadFile ? <a href={downloadFile} download>{children}</a> : {children} }
            <style jsx>
                { buttonStyle }
            </style>
        </button>
    );
}