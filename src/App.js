import React, { Component } from 'react';
import SocialBox from './components/SocialBox';
import './App.css';

class App extends Component {
  state = {
    SocialBox: [
      {
        id: 1,
        image: '',
        text: 'lolololol',
        comments: []
      }
    ]
  }
  render(){
    return (
      <div className="App">
        <SocialBox socialbox={this.state.SocialBox}/>
      </div>
  )};
}

export default App;
