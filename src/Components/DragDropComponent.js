import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Draggable, Droppable } from 'react-drag-and-drop'
import '../assets/styles/custom.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  table: {
    minWidth: 650,
  }
}));

class DragDropComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes:useStyles
    };
  }

  render() {
    const { classes } = this.state
    const { dragTableData, dropTableData } = this.props
    return (
      <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h2>Drag & Drop Feature</h2>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <h4>Common drag Table</h4>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="left">Name</TableCell>
                    <TableCell align="left">UserName</TableCell>
                    <TableCell align="left">Email</TableCell>
                    <TableCell align="left">Address</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dragTableData.length ? dragTableData.map((row,index) => {
                    return (
                      <Draggable type="dragging" data={index} key={index}>
                        <TableRow className='draggable-table-row' title={'Drag This row'} key={index}>
                          <TableCell >{row.id}</TableCell>
                          <TableCell align="left">{row.name}</TableCell>
                          <TableCell align="left">{row.username}</TableCell>
                          <TableCell align="left">{row.email}</TableCell>
                          <TableCell align="left">
                            <div>{`${row.address.street}, ${row.address.suite},`}</div>
                            <div>{`${row.address.city}, ${row.address.zipcode}`}</div>
                          </TableCell>
                        </TableRow>
                      </Draggable>
                    )
                  }) : <TableRow >
                    <TableCell colSpan={5} align="center">No Record Left</TableCell>
                  </TableRow>}
                </TableBody>
              </Table>
            </TableContainer>
        </Grid>

        <Grid item xs={6}>
          <h4>Drop Table</h4>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="left">Name</TableCell>
                    <TableCell align="left">UserName</TableCell>
                    <TableCell align="left">Email</TableCell>
                    <TableCell align="left">Address</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>

                  {dropTableData.map((row,index) => (
                    <Droppable
                      types={['dragging']}
                      onDrop={(e)=>{
                        let pickingIndex = e.dragging
                        let dropingIndex = index
                        let pickedItem = dragTableData.splice(pickingIndex,1)[0]
                        pickedItem.newItem = true
                        dropTableData.splice(dropingIndex,0,pickedItem)
                        this.props.updateData(JSON.stringify({
                          dragTableData,
                          dropTableData
                        }))
                      }}
                    >
                      <TableRow className={`dropable-table-row ${row.newItem ? 'new-item':''}`} key={index}>
                        <TableCell >{row.id}</TableCell>
                        <TableCell align="left">{row.name}</TableCell>
                        <TableCell align="left">{row.username}</TableCell>
                        <TableCell align="left">{row.email}</TableCell>
                        <TableCell align="left">
                          <div>{`${row.address.street}, ${row.address.suite},`}</div>
                          <div>{`${row.address.city}, ${row.address.zipcode}`}</div>
                        </TableCell>
                      </TableRow>
                    </Droppable>
                  ))}

                </TableBody>
              </Table>
            </TableContainer>
        </Grid>

      </Grid>
    </div>
    );
  }
}

export default DragDropComponent;
