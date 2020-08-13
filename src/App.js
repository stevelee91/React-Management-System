import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

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
  return (
    <div>
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
      </div>
    );
  }
}

export default App;
