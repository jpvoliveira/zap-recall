import TelaInicio from './TelaInicio'

import ReactDOM from 'react-dom'
ReactDOM.render(<App/>, document.querySelector(".root"))

function App(){
    return(
        <div className="container">
            <TelaInicio/>
        </div>
    )
}
