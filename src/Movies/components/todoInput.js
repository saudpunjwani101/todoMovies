import React from 'react';
import {TextField, MuiThemeProvider} from 'material-ui';
import './movies.css'

const styles = {
  input: {
    fontSize: "30px",
    width:"50%",
    padding:"20px"
  },
  hintInput: {
    fontSize: "30px",
    padding:"20px",
  }
}
const TodoInput = (props)=>
  <MuiThemeProvider>
    <TextField
    hintText={"Enter Movie"}
    onChange={props.changeInput}
    style={styles.input}
    value={props.inputText}
    hintStyle={styles.hintInput}
    onKeyDown={props.onKeyDown}
    />
  </MuiThemeProvider>

export default TodoInput;
