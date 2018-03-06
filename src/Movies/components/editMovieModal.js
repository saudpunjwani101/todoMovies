import React from 'react';
import Modal from 'react-responsive-modal';

const styles = {
  layout: {
    margin:"10px"
  }
}

const EditMovieModal = (props) => {
  return (
    <Modal open={props.movie.edit} little showCloseIcon={false}>
      <div style={styles.layout}>Edit Movie</div>
      <div style={styles.layout}>
        <input
        placeholder={props.movie.name}
        onChange={props.editInput} />
       <button onClick={props.editMovie.bind(this, props.movie.id)}>
         Update
       </button>
       <button onClick={props.closeModal.bind(this, props.movie.id)}>
         Close
       </button>
      </div>
    </Modal>
  )
}

export default EditMovieModal;
