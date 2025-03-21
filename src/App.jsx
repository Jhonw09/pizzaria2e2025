import { useState } from "react"


function App(){
 
const [nome, setNome] = useState ('nome')

  return (
    <div>
     <h3>Pizzaria 2E</h3>

     <input
     classeName = "nome"
     onChange={(e)=>{setNome(e.target.value)}}
     type="text" />
     

    <button
    className="botao"
    onClick={()=>{alert(nome)}}
    >
      Clique Aqui
    </button>

    </div>
  )
}

export default App