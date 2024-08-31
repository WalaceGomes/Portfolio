import '../Nav/style.css'
import logo from '../logo/logo.png'

function Nav()
{
    return(
        <div className='Nav'>
            <img className='logo' src={logo} alt="logo"></img>
            <ul className='ul-nav'>
                <li className='li-nav'><a className='a-nav' href='#'>Home</a></li>
                <li className='li-nav'><a className='a-nav' href='#'>Conhecimento</a></li>
                <li className='li-nav'><a className='a-nav' href='#'>Projetos</a></li>
                <li className='li-nav'><a className='a-nav' href='#'>Contato</a></li>
            </ul>
        </div>
    )
}

export default Nav