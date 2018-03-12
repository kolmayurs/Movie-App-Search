import React from 'react';
import '../css/styles.css';
/*import {isFav} from '../actions/dataActions'*/



class MovieCardBox extends React.Component{
constructor(props) {
    super(props);
    this.state = {toggle: true};
    this.eventHandler = this.eventHandler.bind(this);
  }
  eventHandler(e) {
    let target_value = (e.target || e.srcElement).id;
    console.log('E Target Value :' + target_value);
    if(this.state.toggle){
      localStorage.setItem(target_value, JSON.stringify(target_value));
    }
    else{
      localStorage.removeItem(target_value, JSON.stringify(target_value));
    }
    
    this.setState((prevState) => ({
        toggle: !prevState.toggle
      })
    );
  }
  render(){
    const background= {
    backgroundImage: "url('https://image.tmdb.org/t/p/w300"+this.props.image+"')"
  }
    return(
      <div className="movie-card-box">
      <div className="movie-card" style={background}>
        <div className="movie-overlay">
          <div className="movie-card-wrapper">
            <div className="top-section">
              <div className="date-section">{this.props.date}</div>
              <div className="rating-section">
                <div className="heart"><i onClick={this.eventHandler} id={this.props.title} className={this.state.toggle ? 'far fa-heart-o' : 'far fa-heart'}></i></div>
                <div className="comment"><i className="far fa-comment-o"></i></div>
                <div className="star"><i className="fas fa-star"></i>&nbsp;&nbsp;<span className="votes">{this.props.votes}</span></div>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="bottom-section">
              <div className="language-section">EN</div>
              <div className="title-section">{this.props.title}</div>
              <div className='social-icons'>
                <div className='icons facebook'><i className='fa fa-facebook'></i></div>
                <div className='icons twitter'><i className='fa fa-twitter'></i></div>
                <div className='icons whatsapp'><i className='fa fa-whatsapp'></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      )
  }

}

export default MovieCardBox
