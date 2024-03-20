import './App.css';
import './tabler.min.css'
import { Route, Routes } from "react-router-dom";
import Welcome from './components/Welcome';

import NavigationBar from './components/NavigationBar';
import Pricewatcher from './components/Pricewatcher';
import Footer from './components/Footer';



function App() {
  return (
    <>
<Routes>
<Route path='/' element={<Welcome />}/>

<Route path='/NavigationBar' element={<NavigationBar />}/>
<Route path='/Pricewatcher' element={<Pricewatcher />}/>
<Route path='/Footer' element={<Footer />}/>








</Routes>
    </>
  );
}

export default App;
