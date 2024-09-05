import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { BrowserRouter,Routes, Route  } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/dash" element={<Dashboard/>}/>
   </Routes>
</BrowserRouter>

    </>
    </div>
  );
}

export default App;
