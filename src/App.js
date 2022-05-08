import React, { Component } from "react";
import CatComponent from './CatComponent'
import GraceHopperQuoteComponent from './GraceHopperQuoteComponent'
import MouseComponent from './MouseComponent'

class App extends Component {
  render() {
    const x = "Hello World"
    const arr = [
      'Hello World',
      'Hi World',
      'Greeting Wrold'
    ]
    // your code in the return statement below!
    return (
      <div className="App">
        <CatComponent />
        <GraceHopperQuoteComponent randomName={x}/>
        <GraceHopperQuoteComponent randomName={"Not HELLO WORLD"}/>
        <MouseComponent />
       
      </div>
    );
  }
}
export default App;
