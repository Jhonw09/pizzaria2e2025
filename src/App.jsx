import { useState } from "react"
import poke from './assets/pokeapi_256.png'

function App(){

  const [nome, setNome] = useState('JONAS')
  const [idade, setIdade] = useState(18)
  const [time, setTime] = useState('Corinthians')
  const [pi] = useState(3.14)

  //var idade = 18;
  //let time = 'Corinthians';
  //const pi = 3.14;

  const Formulario = (props) => {
    const [valor, setValor] = useState()
    
    return (
      <div>
        <input 
          className = "nome"
          placeholder= {props.sombra}
          onChange={(e)=>{setValor(e.target.value)}}
          type="text" />

        <button 
          className="botao"
          onClick={()=>{
            if(valor.length > 0){
              alert(valor);
            }
            else{
              alert(props.nome + ' idade é ' + props.idade);
            }
            }}      
        >
          CLIQUE AQUI
        </button>
      </div>
    )
  }


  return (
    <div>
      <h3>Pizzaria 2E</h3>
      <img src= {poke} style={{width:330}}/>

      <Formulario nome="Jonas"
          idade={45}
          sombra="Digite nome..." />
      <Formulario nome="Jonas" sombra="Digite sua idade..."/>
      <Formulario nome="Karine" sombra="Digite seu time..." />
      <Formulario nome="Karine" sombra="valor de pi" />
      <Formulario />
      <Formulario />
      <Formulario />
      <Formulario />
    </div>
  )
}

export default App