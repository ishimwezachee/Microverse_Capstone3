import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Covid from './components/CovidList';
import NavBar from './components/Navbar';
import Item from './components/CovidItem';

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<Covid />} />
      <Route path="/:country" element={<Item />} />
    </Routes>
  </BrowserRouter>
);

export default App;
