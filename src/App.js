import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="container">

      <NavBar/>

      <ItemListContainer greeting={'Puedes comenzar a llenar tu carrito'}/>
      
    </div>
  );
  }


export default App;