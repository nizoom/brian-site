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
    //if window is 800px or below change menu status
    if(window.innerWidth < 800){
      setMenuStatus(); // closes menu
      setTimeout(() => {setClickedSection("")},500) //clears the state hook for next time //maybe not needed
    }
    
  }

  // React.useEffect(() => {

  // }, [])
  const headerRef = React.useRef();

  return (

    <div className="App">
      <Header callback = {setMenuStatus} rootMenuStatus = {activateMenu} ref={headerRef} callback = {retrieveClick}/>
      <h2 className = {!activateMenu ? "site-intro" : "gone"}> 
                Hi, my name's Brian  <br/>
                <span className = "intro-description"> I Lorem ipsum dolor sit amet, consectetur adipiscing elit, </span>
            </h2>
      <NavMenu menuStatus = {activateMenu} callback = {retrieveClick}/>
      <Content clickedSection = {clickSection} headerRef = {headerRef}/> 
      
    </div>
  );
}

export default App;
// width="100px" height="100px"