import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const Movie = (props) => {
  const [movie, setMovie] = useState();
  
 
  useEffect(() => {
    const id = props.match.params.id;
    console.log('props', props);
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          console.log('response',response);
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[props.match.params.id]);
  
  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = (movie) => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie)
    
  }




  if (!movie) {
    return <div>Loading movie information...</div>;
  }


  

  return (
    <div className="save-wrapper">
       <MovieCard movie = {movie} />
      <div className="save-button" onClick= { () => saveMovie(movie)}>Save</div>
    </div>
  );
}

export default Movie;
