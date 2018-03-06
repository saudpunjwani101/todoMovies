import React from 'react';
import {MuiThemeProvider, Checkbox} from 'material-ui'
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import EditIcon from 'material-ui/svg-icons/image/edit';

import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import EditMovieModal from './editMovieModal';
import Button from './customButton';
import './movies.css';

//renders a single movie item
const MovieItem = (props) =>
  <div>
    <EditMovieModal {...props} />
      <MuiThemeProvider>
        <Table selectable={false}>
          <TableBody displayRowCheckbox={false}>
            <TableRow>
              <TableRowColumn>{props.movie.name}</TableRowColumn>
              <TableRowColumn>
                <MuiThemeProvider>
                  <Checkbox
                  checked={props.movie.watched}
                  onCheck={props.isWatched.bind(this, props.movie)}
                  />
                </MuiThemeProvider>
              </TableRowColumn>
              <TableRowColumn>
                <Button
                method={props.deleteMovie}
                movie={props.movie}
                IconComponent={<DeleteIcon />}
                />
              </TableRowColumn>
              <TableRowColumn>
                <Button
                method={props.openModal}
                movie={props.movie}
                IconComponent={<EditIcon />}
                />
              </TableRowColumn>
            </TableRow>
        </TableBody>
      </Table>
    </MuiThemeProvider>
  </div>

export default MovieItem;
