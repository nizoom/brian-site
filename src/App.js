import React from "react"
import './App.css';
import Header from './components/header/header';
import NavMenu from './components/navigation/navmenu';
import Content from "./components/content/content";

function App() {

  const [activateMenu, setActivateMenu] = React.useState(false); 

  function getMenuStatus ( status ){
    // save status to state
    setActivateMenu(status)
  }
  
  return (

    <div className="App">
      <Header callback = {getMenuStatus}/>
      <NavMenu menuStatus = {activateMenu}/>
      <Content/>
      
    </div>
  );
}

export default App;
// width="100px" height="100px"