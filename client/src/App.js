import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Pro from './pages/Pro';
import Light from './pages/Light';


function App() {
    
  return (
 
<div>
 <BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/pro' element={<Pro/>}/>
  <Route path='/light' element={<Light/>}/>
</Routes>
 
 </BrowserRouter>
 

</div>

  );
}

export default App;
