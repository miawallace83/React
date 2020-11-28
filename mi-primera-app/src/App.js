//import logo from './logo.svg';
import './App.css';
import Saludar from "./Components/Saludar";
import AdiosMundo from './Components/AdiosMundo';

function App() {
  
  //const user = {
  //nombre: "Lucia Rivero",
  //edad: 37,
  //color: "Verde"
  //};

  //const saludarfn = (nombre, edad) => {
  //console.log('Hola ' + nombre)

  //console.log("Hola " + nombre + " tiene " + edad + " anios.");
  //console.log(`Hola ${nombre} tiene ${edad} anios.`);
//}

 const enviarSaludo = nombre => {
   console.log("Hola " + nombre);
 };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mi primer componente</h1>
        {/*<Saludar userInfo={user} saludarfn={saludarfn} />
        <Saludar userInfo={user} saludarfn={saludarfn} />*/}
        <Saludar nombre="Lucia" apellidos="Rivero Schang" enviarSaludo={enviarSaludo}/>
        <Saludar nombre="Lucia" apellidos="Rivero Schang"/>
        <AdiosMundo />
      </header>
    </div>
  );
}

export default App;
