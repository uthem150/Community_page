import React from 'react';
import ReactDOM from 'react-dom';
import BoardPage from './BoardPage';

function handleButtonClick() {
  ReactDOM.render(<BoardPage />, document.getElementById('root'));
}

const button = document.getElementById('boardButton');
button.addEventListener('click', handleButtonClick);

ReactDOM.render(
  <div>
    <button id="boardButton">Go to Board Page</button>
  </div>,
  document.getElementById('root')
);
