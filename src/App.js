import React, { Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component{
  render(){
    return(
      <div classname="App">
        <h1>hi IM A REACT APP</h1>
        <p>this is really working</p>
        <Person />
      </div>
    );

  }
}
export default App;
