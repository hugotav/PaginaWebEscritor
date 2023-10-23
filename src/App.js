import logo from './logo.svg';
import './App.css';

import Navbar from './componentes/Navbar';
import Home from './componentes/Home';
import ImagensCarrossel from './componentes/ImagensCarrossel';
import Livros from './componentes/Livros';

const App = () => {
  
  return (
    <div>
      <Navbar/>
      <div className="container">
        <ImagensCarrossel/>
      </div>
      
    </div>
  );
};

export default App;
