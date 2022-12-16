import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <ul>
          <Link to='/'>Início  |</Link>
          <Link to='/Segunda'>  Segunda</Link>
        </ul>
    )
}

export default NavBar
