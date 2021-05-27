import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './components/Editor';

ReactDOM.render(
  <React.StrictMode>
    <Editor language="rust" />
  </React.StrictMode>,
  document.getElementById('container')
);
