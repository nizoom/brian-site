import './App.css';
import Header from './components/header/header';
import BurgerIcon from "./images/burger.png"
function App() {
  return (
    <div className="App">
      <Header/>
        
         <img src = {BurgerIcon} alt = "burger-icon"/>

      
    </div>
  );
}

export default App;
// width="100px" height="100px"