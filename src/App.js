import React from 'react'
import { HashRouter , Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import Cards from "./components/cards/Cards";
import Footer  from "./components/Footer/Footer";
import './App.css';


function App() {

  return (
    <>
        <Header />
        <Cards  />
        <Footer />
    </>
  );
}

export default App;
