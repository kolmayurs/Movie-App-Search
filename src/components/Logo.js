import React from 'react';
import '../css/styles.css';
import logo from '../img/logo.png';
import { Link } from "react-router-dom";

class Logo extends React.Component{
  render(){
    return(
      <div className="logo">
        <Link to="/"><img src={logo} alt="BMDB" title="BMDB" /></Link>
      </div>
      )
  }
}

export default Logo