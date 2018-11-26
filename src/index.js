// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom'

function getTime(){
  return(new Date()).toLocaleTimeString()
};
// Create a react component
const App= function(){
  const buttonText={text:'click'};
  const labelText='Enter name :';

  return (
  <div>
    <label className="label" htmlFor="name">
    {labelText}
    </label>
    <input id="name" type="text"/>
    <button style={{backgroundColor : 'blue', color : 'white'}}>
    {buttonText.text}
    </button>
    <div>Current Time</div>
    <h3>{getTime()}</h3>
</div>
);
};

// Take a react component and show it in the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
