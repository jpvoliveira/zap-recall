import ReactDOM from 'react-dom'
import TelaInicio from './TelaInicio'

function App(){
    return(
        <div className="container">
            <TelaInicio/>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector(".root"))