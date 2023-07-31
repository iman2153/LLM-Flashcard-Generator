import Login from './Login';
// import Register from './register';
import NavigationBar from './Nav.js';
import Home from './Homepage.js';
import APIFetcher from './APIFetcher.js';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <>
    <NavigationBar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path= "/Home" element={<APIFetcher/>}/>
      <Route path="/login" element={<Login/>}/>
      {/*<Route path="/register" element={<Register/>}/>*/}
    </Routes>
    </>
  );
}

export default App;
