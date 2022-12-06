import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Appindex from './ecommerce_store/Appindex';
import Login from "./login_signin/Login.js";
import Signin from "./login_signin/Signin";
// import {Fileupload} from "./Imageupload"
import Forgot from "./login_signin/Forgot.js"
import Add_cart from './ecommerce_store/Addcart';
import { Map } from './Map';
import Audio from './audio_player/Audio';
import { Fileupload } from './audio_player/Imageupload';
import { Tspractice } from './tspractis.component.tsx';

function App() {
  return (


    <Router>
      <Tspractice />
      <Routes>
        {/* <Route path="/home"  element={<App />}/> */}
        <Route path="/home/:user" element={<Appindex />} />
        <Route path="/register" element={<Signin />} />
        <Route path="/" element={<Login />}/>
        <Route path="/Forgot" element={<Forgot />} />
        <Route path="/Add_cart/:id" element={<Add_cart />} />
        <Route path="/google/map" element={<Map />} />
        <Route path="/music" element={<Audio />} />
      </Routes>
    </Router>

  )
}

export default App;