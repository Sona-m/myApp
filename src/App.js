import { BrowserRouter as Router  , Route ,Routes} from 'react-router-dom';
import Nav from "./components/Toolbar/Nav";
import Train from "./components/Train";
import Admin from "./components/Admin";
import { ReactDOM } from "react";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Router>
        <switch>
          <Routes>
          <Route exact path='/' element={<Nav/>}></Route>
          <Route exact path='/#Train' element={<Train/>}></Route>
          <Route exact path='/#Admin' element={<Admin/>}></Route>
          </Routes>


        </switch>
      </Router>
      <Nav/>
      
    </div>
  );
}

export default App;
