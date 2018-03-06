import React, { Component } from 'react';

import TodoInput from './components/todoInput';
import Movies from '../Stores/todo';
import MoviesList from './components/movieList';
import '../App.css';

class Movie extends Component {
  constructor() {
    super();
    this.state = {inputText: '', movies: [], modalIsOpen: false, editMovie:''}
    this.changeInput = this.changeInput.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.editMovie = this.editMovie.bind(this);
    this.editInput = this.editInput.bind(this);
    this.isWatched = this.isWatched.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  render() {
    return (
      <div className="App">
        <TodoInput
          inputText={this.state.inputText}
          changeInput={this.changeInput}
          onKeyDown={this.onKeyDown}
        />
        <MoviesList
        movies={this.state.movies}
        deleteMovie={this.deleteMovie}
        editMovie={this.editMovie}
        editInput={this.editInput}
        isWatched={this.isWatched}
        modalIsOpen={this.state.modalIsOpen}
        openModal={this.openModal}
        closeModal={this.closeModal}
        />
      </div>
    );
  }

  //movie methods

  onKeyDown(key) {
    if(key.keyCode === 13) {
      this.addMovie();
    } return;
  }

  async openModal(id) {
    Movies.editItem(id, "edit", true);
    await this.setState({movies: Movies.movies});
  }

  async closeModal(id) {
    Movies.editItem(id, "edit", false);
    await this.setState({movies: Movies.movies});
  }

  async changeInput(event) {
    await this.setState({inputText: event.target.value});
  }

  async editInput(event) {
    await this.setState({editMovie: event.target.value});
  }

  async addMovie() {
    if(!this.state.inputText)
      return;
      
    Movies.addItem(this.state.inputText);
    await this.setState({movies: Movies.movies, inputText:''});
  }

  async deleteMovie(id) {
    Movies.removeItem(id);
    await this.setState({movies: Movies.movies});
  }

  async editMovie(id) {
    if(!this.state.editMovie)
      return;

    Movies.editItem(id, "name", this.state.editMovie);
    await this.setState({movies: Movies.movies});
    this.closeModal(id);
  }

  async isWatched(movie) {
    let isWatched = movie.watched ? false : true;
    Movies.editItem(movie.id, "watched", isWatched);
    await this.setState({movies: Movies.movies, editMovie: ''});
  }

}

export default Movie;
