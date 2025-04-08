import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Initial from './views/Initial';
import Login from './views/Login';
import Profile from './views/Profile';
import ResponsiveAppBar from './components/ResponsiveAppBar';

function App() {
  return (
    <BrowserRouter>
    <ResponsiveAppBar />
    <Routes>
      <Route path = "/" element = {<Login/>} />
      <Route path = "/home" element = {<Initial/>} />
      <Route path = "/user/profile" element = {<Profile/>} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;