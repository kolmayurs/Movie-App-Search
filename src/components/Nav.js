import React from 'react';
import '../css/styles.css';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {fetchData} from '../actions/dataActions'

function mapStateToProps(state){
  return {
    data: state.data
  }
}

class Nav extends React.Component{
  constructor(props) {
    super(props);
    this.state = {currentEvent : ''}
    this.onValueChange = this.onValueChange.bind(this);
  }

componentDidMount(){
    this.props.fetchData();
  }

onValueChange(e){
   this.setState({currentEvent: e.target.value});
}
  render(){
    console.log('Value : ' + this.state.currentEvent);
    const value = this.state.currentEvent;
    const movie_data = this.props.data;
    let matched = false
    const movies_title = movie_data.map((dynamicData,key) => {
      if (dynamicData.title.toLowerCase().includes(value.toLowerCase())){
        matched = true
            return(
                  <div key={'title_' + key} >{dynamicData.title}</div>
                )}
    
        });

        
if (!matched) {
    return(
          <nav>
        <div className ="popular"><Link to="/">POPULAR</Link></div>
        <div className ="favorites"><Link to="/favorite">FAVORITES</Link></div>
        <div className="search">
          <input type="text"  placeholder="Search Movies..."  onChange={this.onValueChange}/>
          <div  className="search_results">No Movies Found that match the search criteria</div>
        </div>
      </nav>
           
        )
  }
  else{
    return(
      <nav>
        <div className ="popular"><Link to="/">POPULAR</Link></div>
        <div className ="favorites"><Link to="/favorite">FAVORITES</Link></div>
        <div className="search">
          <input type="text"  placeholder="Search Movies..."  onChange={this.onValueChange}/>
          <div  className="search_results">{movies_title}</div>
        </div>
      </nav>
      )}
  }
}

export default connect(mapStateToProps, {fetchData})(Nav);