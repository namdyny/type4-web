import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Head from './Home/Head';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <>
    {/* // <React.StrictMode> */}
      <Head />
      <body class="d-flex flex-column h-100 bg-dark text-white">
        <App />
      </body>
    </>
    

  // </React.StrictMode>
);