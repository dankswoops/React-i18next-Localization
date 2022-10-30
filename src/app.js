import Dialect from './components/dialect';
import Darkmode from './components/darkmode';
import Prototype from './components/prototype';
import React from 'react'
//import './app.css'
function App(){

  const [toggled, setToggled] = React.useState(false);
  const handleClick = () => {
      setToggled((s) => !s);
  };

  return(
    <>
      <Dialect/>
      <Darkmode toggled={toggled} onClick={handleClick}/>
      <Prototype/>

    </>
  );
}
export default App;