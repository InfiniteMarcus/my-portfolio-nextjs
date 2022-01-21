import cardStyle from './style'

export default function Card ({ id, title, description, children }) {
    return (
        <div className="card">
            <header>
                <h1> { title } </h1>
            </header>

            <div className="card-body">
                {description && 
                    <div className="card-text">
                        { description }
                    </div>
                }
                { children }
            </div>

            <style jsx>
                { cardStyle }
            </style>
        </div>
    );
}