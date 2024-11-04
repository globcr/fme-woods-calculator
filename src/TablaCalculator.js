import React, { useState, useEffect } from 'react';

function TablaCalculator() {
  const [ancho, setAncho] = useState('');
  const [grueso, setGrueso] = useState('');
  const [largo, setLargo] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [precio, setPrecio] = useState('');
  const [total, setTotal] = useState(0);
  const [result, setResult] = useState(0);

  useEffect(() => {
    if (ancho && grueso && largo && cantidad) {
      const medidasTabla = ((ancho * grueso) / 4) * largo;
      const resultTabla = medidasTabla * cantidad;
      const totalTabla = resultTabla * precio;
      setResult(resultTabla.toFixed(2));
      setTotal(totalTabla.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    } else {
      setResult(0);
      setTotal(0);
    }
  }, [ancho, grueso, largo, cantidad, precio]);

  const clearInputs = () => {
    setAncho('');
    setGrueso('');
    setLargo('');
    setCantidad('');
    setPrecio('');
    setResult(0);
    setTotal(0);
  };

  return (
    <div className="p-4 border rounded shadow-md">
      <p className="text-lg mb-4">Calcular medidas y costo de tabla.</p>
      <input className="block w-full mb-2 p-2 border" type="number" placeholder="Ancho (pulgadas)" value={ancho} onChange={(e) => setAncho(e.target.value)} />
      <input className="block w-full mb-2 p-2 border" type="number" placeholder="Grueso (pulgadas)" value={grueso} onChange={(e) => setGrueso(e.target.value)} />
      <input className="block w-full mb-2 p-2 border" type="number" placeholder="Largo (varas)" value={largo} onChange={(e) => setLargo(e.target.value)} />
      <input className="block w-full mb-2 p-2 border" type="number" placeholder="Cantidad" value={cantidad} onChange={(e) => setCantidad(e.target.value)} />
      <input className="block w-full mb-2 p-2 border" type="number" placeholder="Precio" value={precio} onChange={(e) => setPrecio(e.target.value)} />
      <button className="bg-stone-100 text-black p-2 rounded hover:bg-stone-200" onClick={clearInputs}>Limpiar</button>
      <p className="mt-4">Cantidad: {result}</p>
      <p className="mt-4">Precio: ₡{total}</p>
    </div>
  );
}

export default TablaCalculator;