import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const styles = theme =>({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit *3,
    overflowX: "auto"
  },
  table:{
    minWidth: 1080
  }
})

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '홍길동',
    'birth': '910503',
    'gender': '남자',
    'job': '프리랜서'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '이승형',
    'birth': '910503',
    'gender': '남자',
    'job': '프로그래머'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '동길홍',
    'birth': '910503',
    'gender': '여자',
    'job': '학생'
  }
]

class App extends React.Component {
  render(){
    const{classes} = this.props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
        <TableCell>번호</TableCell>
        <TableCell>이미지</TableCell>
        <TableCell>이름</TableCell>
        <TableCell>생년월일</TableCell>
        <TableCell>성별</TableCell>
        <TableCell>직업</TableCell>
        </TableHead>
        <TableBody>
            {
              customers.map( d=>{
                return (
                  <Customer
                  key ={d.id}
                  name={d.name}
                  id={d.id}
                  image={d.image}
                  birth={d.birth}
                  gender={d.gender}
                  job={d.job}
                  />
                );

              })
            }
        </TableBody>
      </Table>
     
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
