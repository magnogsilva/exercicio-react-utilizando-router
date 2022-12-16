import './Style.css'
import SeuNome from '../components/SeuNome'
import Frase from '../components/Frase'

function Inicio() {

    const name = 'magno gomes'
    const newName = name.toUpperCase()

    return (

        <div>
            <h1>Primeira Página</h1>
            <h2>Conteúdo da página</h2>
            <p>{newName}</p>
            <h3>
                Componente Principal
            </h3>
            <Frase/>
            <SeuNome 
                nome='Magno'
                idade='37'
                profissao='Estudante Softex'
            />
        </div>
        
    )
}

export default Inicio
