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
      <Header callback = {getMenuStatus} style = {{outline:" 1px red solid !important", visibility: "visible !important" }}/>
      <h2 className = {!activateMenu ? "site-intro" : "gone"}> 
                Hi My names Brian and I Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            </h2>
      <NavMenu menuStatus = {activateMenu}/>
      <Content/> 
      
    </div>
  );
}

export default App;
// width="100px" height="100px"