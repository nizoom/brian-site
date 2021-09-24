import React from "react"
import './App.css';
import Header from './components/header/header';
import NavMenu from './components/navigation/navmenu';
import Content from "./components/content/content";

function App() {

  const [activateMenu, setActivateMenu] = React.useState(false); 

  const [clickSection, setClickedSection] = React.useState("")
 // const [refState, setRefState] = React.useState([])

  //const refSaver = React.useRef([]);

  function getMenuStatus ( status ){
    // save status to state
    setActivateMenu(status)
  }
  
  
  
  function retrieveClick (section){
    //console.log(section)
    setClickedSection(section)
    setActivateMenu(!activateMenu)
    setTimeout(() => {setClickedSection("")},500)
  }

  const headerRef = React.headerRef

  return (

    <div className="App">
      <Header callback = {getMenuStatus} rootMenuStatus = {activateMenu} ref={headerRef}/>
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