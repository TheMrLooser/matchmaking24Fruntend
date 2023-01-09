import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <> 
    <Auth0Provider
    domain="dev-2wrhnz83wxyo8z5x.us.auth0.com"
    clientId="AojwkiyZA7L6oUMtb6V9QA5c8ot39ZNO"
    redirectUri={`https://matchmaking24.com/profile`} //   {`http://localhost:3000/`}
     
  >
    <App />
  </Auth0Provider>
  </>
);
 
