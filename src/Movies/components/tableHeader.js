import React from 'react';
import {
  Table,
  TableRow,
  TableHeader,
  TableHeaderColumn,
  MuiThemeProvider
} from 'material-ui';

const TableHead = (props) =>
  <MuiThemeProvider>
    <Table selectable={false}>
      <TableHeader
        displaySelectAll={false}
        adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Watched</TableHeaderColumn>
          <TableHeaderColumn>Delete</TableHeaderColumn>
          <TableHeaderColumn>Edit</TableHeaderColumn>
        </TableRow>
      </TableHeader>
    </Table>
  </MuiThemeProvider>

export default TableHead;
