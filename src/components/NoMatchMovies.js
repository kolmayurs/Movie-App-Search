import React from 'react';
import Header from './Header';
import '../css/styles.css';


class NoMatch extends React.Component{
  render(){
    return(
      <div className="main-container">
        <Header />
        <div className="no-movies-container">
        <div className="no-movies">Oops! No more movies :(</div>
        </div>
    </div>
      )
  }
}
export default NoMatch