import cardStyle from './style'

export default function Card ({ id, title, description, children }) {
    return (
        <div className="card">
            <header>
                <h1> { title } </h1>
            </header>

            <div className="card-body">
                {description && 
                    description.split('<br>').map( (line, i) => {
                        return (
                            <p key={i} style={{marginBottom: '20px'}}> 
                                {line} 
                            </p>
                        )
                    })
                }
                { children }
            </div>

            <style jsx>
                { cardStyle }
            </style>
        </div>
    );
}