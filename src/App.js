import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from './components/Header/Header';
import MovieList from './components/movieList/MovieList';
import Home from './Pages/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='movie/:id' element={<MovieDetail />} ></Route>
          <Route path='movies/:type' element={<MovieList />}></Route>
          <Route path='/*' element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>

    </div >
  );
}

export default App;
