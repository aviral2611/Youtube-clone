// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import SearchPage from './searchPage';
import Sidebar from './sidebar';
import RecommendedVideo from './recommendvideo';
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          
        <Route path="/search/:searchTerm">
          <div className="app__page">
          <Sidebar />
          <SearchPage />
          </div>
          SEARCH PAGE</Route>
        <Route path="/">
          <div className="app__page">
          <Sidebar />
          <RecommendedVideo />
          </div>
          {/* <Header /> */}
          
     </Route>
        {/* <div className="app__page">
          <Sidebar />
          <RecommendedVideo />
          </div> */}
        </Switch>
      </Router>
     {/* <h1>I am gonna made youtube clone </h1> */}
     
    
    </div>
  );
}

export default App;
