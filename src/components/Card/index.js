import cardStyle from './style'

export default function Card ({ id, title, description, children }) {
    return (
        <div className="card">
            <header>
                <h1> { title } </h1>
            </header>

            <div className="cardBody">
                { description }
                { children }
            </div>

            <style jsx>
                { cardStyle }
            </style>
        </div>
    );
}