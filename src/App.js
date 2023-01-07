import React from 'react'
import './App.css'
import Topo from './topo/Topo'
import Corpo from './corpo/Corpo';

function App() {
  return (
    <div className="App">
      
      <div className="Topo"><Topo /></div>

      <div className="Corpo"><Corpo /></div>
      
      <div className="Rodape">Rodape</div>

    </div>
  );
}

export default App
