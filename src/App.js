import React from "react"
import './App.css';
import Header from './components/header/header';
import NavMenu from './components/navigation/navmenu';
import Content from "./components/content/content";

function App() {

  const [activateMenu, setActivateMenu] = React.useState(false); 

  const [refState, setRefState] = React.useState([])

  //const refSaver = React.useRef([]);

  function getMenuStatus ( status ){
    // save status to state
    setActivateMenu(status)
  }
  
  function retrieveRefs(articlesRef, podcastRef, photographyRef){
    // console.log(articlesRef, podcastRef, photographyRef)
    //setRefState([articlesRef, podcastRef, photographyRef])
    console.log("fired")
    //refSaver.current = [articlesRef, podcastRef, photographyRef]
  }

  // React.useState(() => {
  //   console.log(refState)
  // }, [refState])
  
  // console.log(refSaver)
  

  return (

    <div className="App">
      <Header callback = {getMenuStatus} style = {{outline:" 1px red solid !important", visibility: "visible !important" }}/>
      <h2 className = {!activateMenu ? "site-intro" : "gone"}> 
                Hi, my name's Brian and I Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            </h2>
      <NavMenu menuStatus = {activateMenu} refs = {refState}/>
      <Content retrieveRefs = {retrieveRefs}/> 
      
    </div>
  );
}

export default App;
// width="100px" height="100px"