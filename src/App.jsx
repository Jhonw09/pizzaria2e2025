import { useState } from "react"
 
function App(){
 
  const [nome, setNome] = useState('JONAS')
  const [idade, setIdade] = useState(16)
  const [time, setTime] = useState('Corinthianhs')
  const [pi] = useState(3.14)
 
  //var idade = 18;
  //let time = 'Corinthians';
  //const pi = 3.14;
 
  const Formulario = (props)=> {
    const [valoe, setValor] = useState()
   
    return (
      <div>
        <input
          className = "nome"
          placeholder= {props.sombra}
          onChange={(e)=>{setNome(e.target.value)}}
          type="text" />
 
        <button
          className="botao"
          onClick= {()=>{
            if(setValor.length > 0)
              alert(valor)
          }
            else{
              
          alert={()=>{alert(props.nome + ' sua idade é ' + props.idade)}}    
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
 


       <Formulario nome= "JONAS"
       idade= {16}
       sombra= "Digite nome.."/>

      <Formulario  nome= "JONAS" sombra= "Digite nome..." />
      <Formulario  nome= "KARINE" sombra= "Digite sua idade..."/>
      <Formulario  nome= "JONAS" sombra= "Digite seu time..."/>
      <Formulario  nome= "KARINE" sombra= "Dvalor de pi" />
 
    </div>
  )
}
 
export default App
 