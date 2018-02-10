import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import HeaderComp from "./containers/HeaderComp.js"

class App extends Component {
  state= {
    test: "",
    bgImage: ""
  }

  componentDidMount() {
    this.getTest();
    this.getBgImage();
  }

  getTest = () => {
    axios.get('/api/test')
      .then(result =>{
        this.setState({test: result.data})
      })
  }

  getBgImage = () => {
      this.setState({bgImage:"party4.jpeg"})
      let counter = 1;
      //const bgImages = ["party1.jpeg","party2.jpeg","party3.jpeg","party4.jpeg"];
      setInterval(() => {
        let img = `party${counter}.jpeg`;
        this.setState({bgImage:img});
        if(counter<=4){
          counter ++;
        }
        if(counter > 4) {
          counter = 1;
        }
      }, 10000);
  }

  render() {
    return (
      <div className="App">
        <HeaderComp bgImage={this.state.bgImage}/>

      </div>
    );
  }
}

export default App;
