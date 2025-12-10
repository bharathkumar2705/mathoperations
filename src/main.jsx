import React from 'react'; // Core React library
import ReactDOM from 'react-dom/client'; //  React DOM for rendering
import { BrowserRouter } from 'react-router-dom'; //  BrowserRouter for client-side routing
import App from './App.jsx';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render( //  Rendering root component
  <React.StrictMode> {/*  StrictMode for highlighting potential problems */}
    <BrowserRouter> {/*  Enables Routing */}
      <App /> {/*  Root Component */}
    </BrowserRouter>
  </React.StrictMode>,
);
