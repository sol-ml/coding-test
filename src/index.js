import React from 'react';
import ReactDOM from 'react-dom/client'
import { InfoProvider } from "./context/AnswerContext";
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(
   document.getElementById("root")
 );
 root.render(
   <React.StrictMode>
     < InfoProvider>
     <BrowserRouter>
       <App />
     </BrowserRouter>
     </ InfoProvider>
   </React.StrictMode>
 );
 
