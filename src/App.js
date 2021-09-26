import React from "react"
import './App.css';
import Header from './components/header/header';
import NavMenu from './components/navigation/navmenu';
import Content from "./components/content/content";

function App() {

  const [activateMenu, setActivateMenu] = React.useState(false); 

  const [clickSection, setClickedSection] = React.useState("")


  function setMenuStatus (){
  //in charge of changing menu off/on status
    setActivateMenu(!activateMenu)
  }
  
  
  
  function retrieveClick (section){ // retrieve click from nav menu and saves it in a state hook
    setClickedSection(section)
    setMenuStatus(); // closes menu
    setTimeout(() => {setClickedSection("")},500) //clears the state hook for next time //maybe not needed
  }

  const headerRef = React.headerRef

  return (

    <div className="App">
      <Header callback = {setMenuStatus} rootMenuStatus = {activateMenu} ref={headerRef}/>
      <h2 className = {!activateMenu ? "site-intro" : "gone"}> 
                Hi, my name's Brian and I Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            </h2>
      <NavMenu menuStatus = {activateMenu} callback = {retrieveClick} headerRef = {headerRef}/>
      <Content clickedSection = {clickSection}/> 
      
    </div>
  );
}

export default App;
// width="100px" height="100px"