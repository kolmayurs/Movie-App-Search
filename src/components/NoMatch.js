import React from 'react';
import Header from './Header';
import '../css/styles.css';

class NoMatch extends React.Component{
  render(){
    return(
      <div className="main-container">
        <Header />
        <div className="error-container">
        <div className="error">404 Error</div>
        </div>
    </div>
      )
  }
}
export default NoMatch