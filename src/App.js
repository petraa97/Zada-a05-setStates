import React, { Component } from 'react';
import { UserChildren, UserClass, UserFunction } from './user';
import '../src/button/button.css';




export default class App extends React.Component {

  state = {
    users: [
      { name: 'Ivan', years: 30 },
      { name: 'Marko', years: 35 },
      { name: 'Ana', years: 25 },
    ],
    children: 'A hobi mi je plivanje.'
  };

  changeYear = () => {
    const { users } = this.state;
    const newYears = users.map(user => {
      return { ...user, years: user.years + 5 };
    });

    this.setState({ users: newYears });
  };


  render() {
    const { users } = this.state;

    return (
		
		 <div>
			<h1>React aplikacija</h1>
		
			<UserFunction name={users[0].name} years={users[0].years} />
			<UserFunction name={users[1].name} years={users[1].years} />
			<UserClass name={users[2].name} years={users[2].years} />
			
      <button className="button" onClick={this.changeYear}>Promjeni godine</button>
		</div>
        
    );
  }
}
