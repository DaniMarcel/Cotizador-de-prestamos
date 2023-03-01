import { useState, useEffect } from 'react'
import Header from "./components/Header"
import Button from "./components/Button"
import { formatearDinero, calcularTotal } from './helpers'





function App() {

  // El primer es el valor de la variable y el segundo es la funcion que la modifica
  const [cantidad, setCantidad] = useState(25000000)
  const [meses, setMeses] = useState(6)
  const [total, setTotal] = useState(0)
  const [pago, setPago] = useState(0)

  useEffect(() => {
    // Resultado total a pagar
    const resultadoTotalPagar = calcularTotal(cantidad, meses)
    setTotal(resultadoTotalPagar)

    // setPago(resultadoTotalPagar / meses)

  }, [cantidad, meses, total])

  // Calcular pago mensual
  useEffect(() => {
    setPago(total / meses)
  }, [total])
  

  //Variables que no se van a modificar
  const MIN = 0;
  const MAX = 50000000;
  const STEP = 10000;



  function handleChange(e){
    setCantidad(+e.target.value)
  }

  function handleClickDecremento() {
    const valor = cantidad - STEP

    // Validar que el valor no sea menor a 0
    if(valor < MIN) return

    setCantidad(valor)
  }

  function handleClickIncremento() {
    const valor = cantidad + STEP

    // Validar que el valor no sea mayor a 20000
    if(valor > MAX) return

    setCantidad(valor)
  }
  

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">

      <Header />

      <div className='flex justify-between my-5'>

        <Button
        operador='-'
        fn={handleClickDecremento}/>

        <Button
        operador='+' 
        fn={handleClickIncremento}/>

      </div>

      <input
      type="range"
      className="w-full h-6 bg-gray-300 accent-indigo-400 hover:accent-indigo-700 mt-10"
      onChange={ handleChange }
      min={MIN}
      max={MAX}
      step={STEP}
      value={cantidad} />

      <p className='text-center my-10 text-5xl font-extrabold text-indigo-400'>
        {formatearDinero(cantidad)}
      </p>

      <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
        Elige un <span className='text-indigo-400'>Plazo </span> a pagar
      </h2>

      <select 
        value={meses} 
        className='mt-5 w-full p-2 bg-white rounded-lg text-center text-xl font-bold text-indigo-400 border-indigo-500'
        onChange={ e => setMeses(+e.target.value)}>
        <option value="6">6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="24">24 Meses</option>
      </select>

      <div className='my-5 space-y-3 bg-gray-50 p-5'>
        <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
          Resumen <span className='text-indigo-400'>de pagos </span>
        </h2>

        <p className='text-xl text-indigo-400 text-center font-bold'>{meses} Meses</p>
        <p className='text-xl text-indigo-400 text-center font-bold'>{formatearDinero(total)} Total a pagar</p>
        <p className='text-xl text-indigo-400 text-center font-bold'>{formatearDinero(pago)} Mensuales</p>
      </div>

    </div>
  )
}

export default App
