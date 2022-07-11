import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Additemscreen from './screens/Additemscreen';
import Updateitemscreen from './screens/Updateitemscreen';

function App() {
  return (
    <>
    <Navbar/>
    <Router>

        <Routes>
          <Route exact path="/" element={<Homescreen />}> </Route>
          <Route path="/additem" element={<Additemscreen/>} ></Route>
          <Route path="/updateitem" element={<Updateitemscreen/>} ></Route>
          
        </Routes>
      </Router >
    </>
  );
}

export default App;
