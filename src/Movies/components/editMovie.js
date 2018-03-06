import React from 'react';

const EditMovie = (props) => {
  console.log("inside edit")
  return (
    <div>
      <div>Edit Movie</div>
         <input placeholder={props.movie.name}
        onChange={props.editInput} />
        <button onClick={props.editMovie.bind(this, props.movie.id)}>
          Update
        </button>
        <button onClick={props.closeModal}>
          Close
        </button>
    </div>
  )
}

export default EditMovie;
