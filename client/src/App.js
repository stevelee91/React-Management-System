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
import CircularProgress from '@material-ui/core/CircularProgress';
const styles = theme =>({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit *3,
    overflowX: "auto"
  },
  table:{
    minWidth: 1080
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
});



// const customers = [
//   {
//     'id': 1,
//     'image': 'https://placeimg.com/64/64/1',
//     'name': '홍길동',
//     'birth': '910503',
//     'gender': '남자',
//     'job': '프리랜서'
//   },
//   {
//     'id': 2,
//     'image': 'https://placeimg.com/64/64/2',
//     'name': '이승형',
//     'birth': '910503',
//     'gender': '남자',
//     'job': '프로그래머'
//   },
//   {
//     'id': 3,
//     'image': 'https://placeimg.com/64/64/3',
//     'name': '동길홍',
//     'birth': '910503',
//     'gender': '여자',
//     'job': '학생'
//   }
// ]

class App extends React.Component {
  state = {
    customers: "",
    completed: 0
  }
  componentDidMount(){
    this.timer = setInterval(this.progress, 20);

    this.callApi()
    .then(res => this.setState({customers:res}))
    .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  progress = () =>{
    const {completed} = this.state;
    this.setState({completed: completed >= 100 ? 0 : completed + 1});
  }

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
              this.state.customers ? this.state.customers.map( d=>{
                return (
                  <Customer
                  key ={d.id}
                  name={d.name}
                  id={d.id}
                  image={d.image}
                  birth={d.birthday}
                  gender={d.gender}
                  job={d.job}
                  />
                );

              }) : 
              <TableRow>
                <TableCell colSpan="6" align="center">
                  <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/>

                </TableCell>
              </TableRow>
            }
        </TableBody>
      </Table>
     
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
