import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link , Navigate} from "react-router-dom";
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Additemscreen from './screens/Additemscreen';
import Updateitemscreen from './screens/Updateitemscreen';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  const user = localStorage.getItem("token");
  return (
    <>
      <Navbar />
      <Router>

        <Routes>
          {user && <Route exact path="/" element={<Homescreen />}> </Route>}
          <Route path="/additem" element={<Additemscreen />} ></Route>
          <Route path="/updateitem" element={<Updateitemscreen />} ></Route>
          <Route path="/signup" exact element={<Signup/>} />
          <Route path="/login" exact element={<Login/>} />
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/additem" element={<Navigate replace to="/login" />} />
          <Route path="/updateitem" element={<Navigate replace to="/login" />} />

        </Routes>
      </Router >
    </>
  );
}

export default App;
