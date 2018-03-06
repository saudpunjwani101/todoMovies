//logic for movies

class Movie {
  constructor() {
    this.id = 1;
    this.movies = [];
  }

  addItem(item) {
    this.movies.push({id:this.id++, name:item, watched:false, edit: false});
  }

  getItems() {
    return this.movies;
  }

  removeItem(id) {
    let index = this.movies.findIndex(movie=>movie.id===id);
    this.movies.splice(index,1);
  }

  editItem(id, type, value) {
    this.movies.filter(movie=>{
      return movie.id===id ? movie[type]=value : null
    });
  }

}

const movie = new Movie();
export default movie;
