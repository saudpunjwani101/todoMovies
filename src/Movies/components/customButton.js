import React from 'react';
import {IconButton, MuiThemeProvider} from 'material-ui'

const CustomButtom = (props) =>
  <MuiThemeProvider>
    <IconButton
      onClick={props.method.bind(this, props.movie.id)}>
      {props.IconComponent}
    </IconButton>
  </MuiThemeProvider>

export default CustomButtom;
