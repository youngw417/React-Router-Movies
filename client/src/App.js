import React, { useState } from 'react';
import {Route} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  

  return (
    <div>
      <SavedList list={savedList} />
      {console.log('saved list', savedList)}
      <div>
        <Route exact path ="/" component ={MovieList} />
        <Route path = "/movies/:id" render = { (props) => <Movie {...props} addToSavedList = {addToSavedList} />
           } />

      </div>
    </div>
  );
};

export default App;
