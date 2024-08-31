import Header from './componentes/Header'
import Conhecimento from './componentes/Conhecimento'
import Projetos from './componentes/Projetos'
import Contato from './componentes/Contato'
import Nav from './componentes/Nav'
import './/App.css'


function App() {
  return (
    <div className='Header'>
      <Nav />
      <Header/>
      <Conhecimento />
      <Projetos />
      <Contato />  
      </div>
     
        

  );
}

export default App;
