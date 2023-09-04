import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './Add';
import View from './View';
import Edit from './Edit';

function App() {
  return (
    <>
    <BrowserRouter>
          <Routes>
              <Route path='/' element={<Add/>}/>
              <Route path='/view' element={<View/>}/>
              <Route path='/edit/:id' element={<Edit/>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
