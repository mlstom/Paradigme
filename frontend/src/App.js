import React from 'react';
import { Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Lekari from './Lekari/Lekari';
import Onama from './Onama/Onama'
import Usluge from './Usluge/Usluge'
import Vesti from './Vesti/Vesti';
import Cenovnik from './Cenovnik/Cenovnik';
import Kontakt from './Kontakt/Kontakt';

import PitajteNas from './PitajteNas/PitajteNas';
import SavetiZaPac from './SavetiZaPac/SavetiZaPac';

function App() {

  return (
      <Routes>
            <Route path='/*' element={<Home />} />
            <Route path='/onama' element={<Onama />} />
            <Route path='/usluge' element={<Usluge />} />
            <Route path='/vesti' element={<Vesti />} />
            <Route path='/lekari' element={<Lekari />} />
            <Route path='/cenovnik' element={<Cenovnik />} />
            <Route path='/kontakt' element={<Kontakt />} />
            <Route path='/pitajtenas' element={<PitajteNas />} />
            <Route path='/saveti-za-pacijente' element={<SavetiZaPac />} />
            <Route path='/vesti' element={<Vesti />} />
      </Routes>
  );
}

export default App;
