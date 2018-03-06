import React, {Component} from 'react';

import MovieHeader from './movieHeader';
import TableHeader from './tableHeader';
import MovieItem from './movieItem';

//renders the list of movies
class MovieList extends Component {
  render() {
    return (
      <div style={{margin: "20px"}}>
        <MovieHeader />
        {this.renderMovies(this.props.movies)}
      </div>
    )
  }

  renderMovies(movies) {
    if(movies.length<1) {
      return <span>No Movies To Show</span>
    }
    let key = 1;
    return (
      <div>
        <TableHeader />
        {movies.map(movie =>
          <MovieItem
          key={key++}
          movie={movie}
          {...this.props}
          />
        )
        }
      </div>
  );
  }
}


export default MovieList;
