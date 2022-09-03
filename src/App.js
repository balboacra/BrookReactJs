import './App.css';
import MyProductContainer from './components/MyProductContainer';
import NavBar from './components/NavBar';


function App() {

  return (
    <div className="container">
      <NavBar />
      <div className="container">
        <MyProductContainer/>
      </div>
    </div>
  );
}

export default App;