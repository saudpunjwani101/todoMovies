import React from 'react';

const styles = {
    title: {
      fontSize:"30px",
      backgroundColor:"black",
      color: "white",
      padding:"10px"
    }
}

const Header = (props) =>
  <div style={styles.title}>
    <span>
        Movies
    </span>
  </div>

export default Header;
