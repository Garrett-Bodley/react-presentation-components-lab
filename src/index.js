import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const toggleMood = (e) => {
  e.target.innerHTML = e.target.innerHTML === 'I am just happy.' ? 'I am just sad.' : 'I am just happy.'
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={toggleMood} />
  </div>,
  document.getElementById('root')
);
