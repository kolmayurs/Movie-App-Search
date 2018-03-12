import React from 'react';
import MovieCardBox from './MovieCardBox';
import '../css/styles.css';
import { connect } from 'react-redux';
import {fetchData} from '../actions/dataActions'
import PropTypes from 'prop-types';
import NoMatchMovies from './NoMatchMovies'
import FavMovieCardBox from './FavMovieCardBox';

function mapStateToProps(state){
  return {

    data: state.data
  }
}


class MovieCard extends React.Component{

  componentDidMount(){
    this.props.fetchData();
}

  date_format(new_date){
    var m_names = ["Jan", "Feb", "Mar", 
    "Apr", "May", "Jun", "Jul", "Aug", "Sep", 
    "Oct", "Nov", "Dec"];

    var d = new Date(new_date);
    var curr_date = d.getDate();
    var curr_month = d.getMonth();
    var curr_year = d.getFullYear();
    return (curr_date + " " + m_names[curr_month] 
    + " " + curr_year);
    }

render(){
  const name = this.props.name;
  const year = this.props.year;
  const movie_data = this.props.data;
  console.log("Name: " + name);
  console.log("year: " + year);

function GetSortOrderLow(prop) {  
    return function(a, b) {  
        if (a[prop] > b[prop]) {  
            return 1;  
        } else if (a[prop] < b[prop]) {  
            return -1;  
        }  
        return 0;  
    }  
}  

function GetSortOrderHigh(prop) {  
    return function(a, b) {  
        if (a[prop] < b[prop]) {  
            return 1;  
        } else if (a[prop] > b[prop]) {  
            return -1;  
        }  
        return 0;  
    }  
}  

  if (name === 'Rating: Low'){
    movie_data.sort(GetSortOrderLow("vote_average"));
  }

   if (name === 'Rating: High'){
    movie_data.sort(GetSortOrderHigh("vote_average"));
  }

 if (name === 'Popularity: Low'){
    movie_data.sort(GetSortOrderLow("popularity"));
  }

   if (name === 'Popularity: High'){
    movie_data.sort(GetSortOrderHigh("popularity"));
  }
if(name === 'ALL' || year === 'ALL'){
      window.location.reload();
    }
    let fetchMovie = false;
  const movies = movie_data.map((dynamicData,key) => {
    if (JSON.parse(localStorage.getItem(dynamicData.title)) === dynamicData.title ){
    if (year === '' ){
        fetchMovie = true;
            return (
            <FavMovieCardBox 
              key={'movie_' + key} 
              date={this.date_format(dynamicData.release_date)} 
              image={dynamicData.poster_path} 
              title={dynamicData.title} 
              votes={Math.round(dynamicData.vote_average)} 
              language={dynamicData.original_language}  />
          )

        }
    else if ((dynamicData.release_date).includes(year)){
      fetchMovie = true;
          return (
            <FavMovieCardBox 
              key={'movie_' + key} 
              date={this.date_format(dynamicData.release_date)} 
              image={dynamicData.poster_path} 
              title={dynamicData.title} 
              votes={Math.round(dynamicData.vote_average)} 
              language={dynamicData.original_language}  />
          )
        }
      }
      else{
        if (year === '' ){
        fetchMovie = true;
            return (
            <MovieCardBox 
              key={'movie_' + key} 
              date={this.date_format(dynamicData.release_date)} 
              image={dynamicData.poster_path} 
              title={dynamicData.title} 
              votes={Math.round(dynamicData.vote_average)} 
              language={dynamicData.original_language}  />
          )

        }
    else if ((dynamicData.release_date).includes(year)){
      fetchMovie = true;
          return (
            <MovieCardBox 
              key={'movie_' + key} 
              date={this.date_format(dynamicData.release_date)} 
              image={dynamicData.poster_path} 
              title={dynamicData.title} 
              votes={Math.round(dynamicData.vote_average)} 
              language={dynamicData.original_language}  />
          )
        }

      }
    });
if (!fetchMovie) {
    return(
      <div className="movie-card-container"><NoMatchMovies /></div>
    )
  }
  else{
      return (
          <div className="movie-card-container">{movies}</div>
      )}

  }
}

export default connect(mapStateToProps, {fetchData})(MovieCard);

MovieCard.propTypes = {
  name: PropTypes.string
};
