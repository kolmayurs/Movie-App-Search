import React from 'react';
import Header from './Header';
import Filter from './Filter';
import MovieCard from './MovieCard';
import '../css/styles.css';

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = { name: '', year: '' };

    this.changeName = this.changeName.bind(this);
    this.changeYear = this.changeYear.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  changeYear(newYear) {
    this.setState({
      year: newYear
    });
  }

  render(){
    return(
      <div className="main-container">
        <Header />
        <Filter onChange={this.changeName}  onClick={this.changeYear}  />
        <MovieCard  name={this.state.name} year ={this.state.year} />
    </div>
      )
  }
}

export default App