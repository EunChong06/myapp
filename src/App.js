import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Api from './screen/Api';
import Repead from './screen/repead';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/api' element={<Api/>}/>
            <Route path='/repead' element={<Repead/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
