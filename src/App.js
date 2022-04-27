import './App.css'
import Album from "./Components/Album";
import { Link, Routes, Route } from "react-router-dom";
import Posts from "./Components/Posts";
import Post from './Components/Post';
 const App =()=>{ 
  return <>
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link text-danger menu-text" aria-current="page" to="/album">Album</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-danger menu-text" to="/posts">Posts</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  <Routes>
    <Route path="/album" element={<Album/>}/>
    <Route path="/posts" element={<Posts/>}/>
    <Route path='/post/:id' element={<Post/>}/>
  </Routes>
  </>
 }
 export default App;
