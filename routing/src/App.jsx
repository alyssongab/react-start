import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Sobre from './pages/Sobre.jsx';
import Contato from './pages/Contato.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
