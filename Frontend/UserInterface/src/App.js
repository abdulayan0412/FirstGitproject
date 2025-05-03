import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Components/Home/home";
import About from "./Components/About/about";
import Header from "./Components/HeaderComponent/header"
import Contact from "./Components/Contact/contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/contact" element = {<Contact/>}/>
        <Route path="/about" element = {<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
