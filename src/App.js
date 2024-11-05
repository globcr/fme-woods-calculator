import React, { useState } from 'react';
import './App.css';
import TablaCalculator from './TablaCalculator';
import TucaCalculator from './TucaCalculator';

function App() {
  const [activeTab, setActiveTab] = useState('tabla');

  return (
    <div className="App">
      <header className="bg-gray-800 text-white min-h-[15vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl">Asseradero Brenes</h1>
      </header>
      <main className="p-10">
        <div className="flex justify-center mb-4">
          <button
            className={`px-4 py-2 mx-2 ${activeTab === 'tabla' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('tabla')}
          >
            Tabla
          </button>
          <button
            className={`px-4 py-2 mx-2 ${activeTab === 'tuca' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('tuca')}
          >
            Tuca
          </button>
        </div>
        {activeTab === 'tabla' ? <TablaCalculator /> : <TucaCalculator />}
      </main>
    </div>
  );
}

export default App;