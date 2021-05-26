import './App.css';
import React, {useState} from 'react';
import Content from './Content.js';

const App = () => {
  const [isClicked, setIsClicked] = useState(false);

  //handling clicks to toggle isClicked true and false
  const onClick = () => {
    setIsClicked(!isClicked);
  }

  return (

    <div data-testid='testing-text-display'>
      <button onClick={onClick}>Click me!</button>
      {isClicked ? <Content/> : null}
    </div>
  )

}

export default App;
