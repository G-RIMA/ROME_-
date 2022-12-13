import { Fragment } from 'react';
import Navs from './Component/Nav/Nav';
import './App.css';
import Home from './Component/Home/Home';

function App() {
  return (
    <Fragment>
      <Navs />
      <Home />
    </Fragment>
    
  );
}

export default App;
