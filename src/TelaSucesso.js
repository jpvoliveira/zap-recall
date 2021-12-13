export default function TelaSucesso(){
    return(
        <div className="tela-sucesso">
            <div className="posicao-final">   
                <div className="textos" >   
                    <p>PARABÉNS!<img src="./assets/party.png"></img></p> 
                    <h2>Voce não esqueceu de nenhum flashcard!</h2>
                </div>
                <div className="botao-reiniciar" onClick={()=>window.location.reload(true)}>
                    <span>Tente Novamente</span>
                    <img src="./assets/next.png"></img>
                </div>
            </div>    
        </div>
    )
}