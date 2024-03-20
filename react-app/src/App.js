import './App.css';
import './tabler.min.css'
import { Route, Routes } from "react-router-dom";
import Welcome from './components/Welcome';
import Home from './components/home';
import NavigationBar from './components/NavigationBar';
import Pricewatcher from './components/Pricewatcher';


function App() {
  return (
    <>
<Routes>
<Route path='/' element={<Welcome />}/>

<Route path='/' element={<Home />}/>
<Route path='/NavigationBar' element={<NavigationBar />}/>
<Route path='/Pricewatcher' element={<Pricewatcher />}/>





</Routes>
    </>
  );
}

export default App;
