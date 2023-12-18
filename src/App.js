import React from 'react';
import './App.css';
import LogoApp from './images/1.jpg'
import Boton from './components/Boton'
import Pantalla from './components/Pantalla'
import BotonClear from './components/BotonClear'
import { useState } from 'react';
import { evaluate } from 'mathjs';
import Swal from 'sweetalert2';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input+val);
  };

  const calcularResultado = () => {
    if(input){
      setInput(evaluate(input));
    } else {
      Swal.fire({
        title: '¡Cuidado!',
        text: 'Por favor ingrese valores para realizar los cálculos',
        background: '#ffffff', 
        confirmButtonColor: '#ffffff', // Cambia el color de fondo del botón de confirmación
        confirmButtonTextColor: '#fff',
        borderColor: '#000000',
      });
    }
  };

  return (
    <><script>
      window.HOST_NAME = 'CalculadoraMalevola';
    </script>
    <div className="App">
        <div className='logo-contenedor'>
          <img src={LogoApp}
            className='logo-app'
            alt='logo-app' />
        </div>
        <div className='contenedor-calculadora'>
          <Pantalla input={input} />
          <div className='fila'>
            <Boton manejarClick={agregarInput}>1</Boton>
            <Boton manejarClick={agregarInput}>2</Boton>
            <Boton manejarClick={agregarInput}>3</Boton>
            <Boton manejarClick={agregarInput}>+</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={agregarInput}>4</Boton>
            <Boton manejarClick={agregarInput}>5</Boton>
            <Boton manejarClick={agregarInput}>6</Boton>
            <Boton manejarClick={agregarInput}>-</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={agregarInput}>7</Boton>
            <Boton manejarClick={agregarInput}>8</Boton>
            <Boton manejarClick={agregarInput}>9</Boton>
            <Boton manejarClick={agregarInput}>*</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={calcularResultado}>=</Boton>
            <Boton manejarClick={agregarInput}>0</Boton>
            <Boton manejarClick={agregarInput}>.</Boton>
            <Boton manejarClick={agregarInput}>/</Boton>
          </div>
          <div className='fila'>
            <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
          </div>
        </div>
      </div></>
  );
}

export default App;
