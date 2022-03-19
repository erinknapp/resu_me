import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Pro from './pages/Pro';


function App() {
    
  return (
 
<div>
 <BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/pro' element={<Pro/>}/>
</Routes>
 
 </BrowserRouter>
 

</div>

  );
}

export default App;
