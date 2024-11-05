import React, { useState, useEffect } from 'react';

function TucaCalculator() {
  const [ancho, setAncho] = useState('');
  const [largo, setLargo] = useState('');
  const [precio, setPrecio] = useState('');
  const [total, setTotal] = useState(0);
  const [result, setResult] = useState(0);

  useEffect(() => {
    if (ancho && largo) {
      const medidasTuca = ancho / 4;
      const resultTuca = (((medidasTuca * medidasTuca) * largo) / 4);
      const totalTuca = resultTuca * precio;
      setResult(resultTuca.toFixed(2));
      setTotal(totalTuca.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    } else {
      setResult(0);
      setTotal(0);
    }
  }, [ancho, largo, precio]);

  const clearInputs = () => {
    setAncho('');
    setLargo('');
    setPrecio('');
    setResult(0);
    setTotal(0);
  };

  return (
    <div className="p-4 border rounded shadow-md">
      <p className="text-lg mb-4">Calcular medidas y costo de tuca.</p>
      <input className="block w-full mb-2 p-2 border" type="number" placeholder="Ancho (pulgadas)" value={ancho} onChange={(e) => setAncho(e.target.value)} />
      <input className="block w-full mb-2 p-2 border" type="number" placeholder="Largo (pulgadas)" value={largo} onChange={(e) => setLargo(e.target.value)} />
      <input className="block w-full mb-2 p-2 border" type="number" placeholder="Precio" value={precio} onChange={(e) => setPrecio(e.target.value)} />
      <button className="bg-stone-100 text-black p-2 rounded hover:bg-stone-200" onClick={clearInputs}>Limpiar</button>
      <p className="mt-4">Cantidad: {result}</p>
      <p className="mt-4">Precio: ₡{total}</p>
    </div>
  );
}

export default TucaCalculator;