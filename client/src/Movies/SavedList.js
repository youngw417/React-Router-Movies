import React from 'react';
import {Link, NavLink} from 'react-router-dom';


const divStyle  = {
  display: 'flex',
  flexDirection: 'column'
}
const SavedList = props => {

  
const routeToHome = () => props.history.push('/')

  return(
  <div className="saved-list" >
    <h3>Saved Movies:</h3>
    <div style = {divStyle}>
      {props.list.map(movie => (
        <NavLink to= {`/movies/${movie.id}`}>
         <span className="saved-movie">{movie.title}</span>
        </NavLink>
     
    ))}
    </div>
    
    <Link to ="/">
      <div className="home-button" onClick = { ()=> routeToHome}>Home</div>
      </Link>
  </div>)
};

export default SavedList;
