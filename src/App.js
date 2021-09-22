import './App.css';
import Header from './components/header/header';
import NavMenu from './components/navigation/navmenu';
import React from "react"

function App() {

  const [activateMenu, setActivateMenu] = React.useState(true); 

  function getMenuStatus ( status ){
    // save status to state
    setActivateMenu(status)
  }
  
  return (

    <div className="App">
      <Header callback = {getMenuStatus}/>
      <NavMenu menuStatus = {activateMenu}/>

      
    </div>
  );
}

export default App;
// width="100px" height="100px"