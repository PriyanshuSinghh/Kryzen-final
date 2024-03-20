import './App.css';
import './tabler.min.css'
import { Route, Routes } from "react-router-dom";
import Welcome from './components/Welcome';
import Home from './components/home';
import NavigationBar from './components/NavigationBar';
import Pricewatcher from './components/Pricewatcher';
import Footer from './components/footer';
import Table from './components/table';




function App() {
  return (
    <>
<Routes>
<Route path='/' element={<Welcome />}/>
<Route path="/Home" element={<Home />} />
<Route path='/NavigationBar' element={<NavigationBar />}/>
<Route path='/Pricewatcher' element={<Pricewatcher />}/>
<Route path='/Footer' element={<Footer />}/>
<Route path='/table' element={<Table />}/>









</Routes>
    </>
  );
}

export default App;
