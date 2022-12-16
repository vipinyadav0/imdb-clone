import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from './components/Header/Header';
import Home from './Pages/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='movie/:id' element={<h1>Movie details</h1>}></Route>
          <Route path='movies/:type' element={<h1>Movie type</h1>}></Route>
          <Route path='/*' element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>

    </div >
  );
}

export default App;
