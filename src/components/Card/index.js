import cardStyle from './style'

export default function Card ({breakValue, id, title, description, children}) {
    return (
        <div className="card">
            <header>
                <h1> { title } </h1>
            </header>

            <div className="card-body">
                {description && 
                    description.split('<br>').map( (line, i) => {
                        return (
                            <p key={i} style={{padding: '10px', marginBottom: '20px'}}> 
                                {line} 
                            </p>
                        )
                    })
                }
                <div style={{wordBreak: breakValue || 'inherit'}} className="card-container">
                    { children }
                </div>
            </div>

            <style jsx>
                { cardStyle }
            </style>
        </div>
    );
}