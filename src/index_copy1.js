import React from 'react';
import ReactDOM from 'react-dom';
import BoardPage from './BoardPage';

function handleButtonClick() {
  ReactDOM.render(<BoardPage />, document.getElementById('root'));
}

ReactDOM.render(
  <div>
    <button id="boardButton" onClick={handleButtonClick}>
      Go to Board Page
    </button>
  </div>,
  document.getElementById('root')
);
