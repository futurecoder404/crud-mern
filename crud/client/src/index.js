import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CreatePost from "./CreatePost";
import Posts from "./Posts";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 



 
  
  
  <Auth0Provider
    domain="dev-yxrghayk72ncege8.us.auth0.com"
    clientId="k9TWsHRFzjk9ICtCECjhN5ReICQMOSM1"
    redirectUri={window.location.origin}>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/create" element={<CreatePost />}></Route>
        <Route path="/create/posts" element={<Posts />}></Route>
      </Routes>
    </BrowserRouter>
    </Auth0Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
