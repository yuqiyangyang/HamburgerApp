import React, { Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component{

  state ={
    persons: [
      { name: 'max', age:28 },
      { name: 'manu', age:29 },
      { name: 'yu', age:26 }
      
    ]

  }

  switchNameHandler = (newName) =>{
    this.setState({
      persons: [
        { name: newName, age:28 },
        { name: 'manu', age:29 },
        { name: 'yu', age:27 }
      ]
    })
  }


  nameChangeHandler=(e) =>{
    this.setState({
      persons: [
        { name: 'max', age:28 },
        { name: e.target.value, age:29 },
        { name: 'yu', age:27 }
      ]
    })
  }

  render(){
    return(
      <div classname="App">
        <h1>hi IM A REACT APP</h1>
        <p>this is really working</p>
        <button onClick={()=>this.switchNameHandler("hlllll")}>Switch name</button>
        <Person name={this.state.persons[0].name} age ={this.state.persons[0].age} />
        
        <Person 
        name ={this.state.persons[1].name} 
        age ={this.state.persons[1].age}
        click={this.switchNameHandler}
        changed={this.nameChangeHandler}> i like icecream </Person>
        
        <Person name ={this.state.persons[2].name} age ={this.state.persons[2].age}/>
      </div>
    );//we can pass method in add.js also as props 

  }
}
export default App;
