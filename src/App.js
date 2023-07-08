
import './App.css';
import Card from './componentes/Card';

function App() {
  return (
    <div className="App">
    <Card
      imagen='imagen1.jpg'
      alt='mi imagen'
      titulo='Esta es la imagen 1'
      parrafo=' Contenido de mi parrafo'
      />
    </div>
  );
}

export default App;
