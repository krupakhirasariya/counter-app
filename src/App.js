import './App.css';
import React, { Component } from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
  state = { 
    counters:[
        {id:1, value:4},
        {id:2, value:0},
        {id:3, value:0},
        {id:4, value:0},
    ]
 }

 handleDecrement = counter =>{
   const counters = [...this.state.counters];
   const index = counters.indexOf(counter);
   counters[index]={...counter}
   counters[index].value--;
   this.setState({counters});
 }

handleIncrement =counter=>{
    const counters = [...this.state.counters];
    const index= counters.indexOf(counter);
    counters[index]={...counter};
    counters[index].value++;
    this.setState({counters});
}

 handleReset = ()=>{
  const counters =  this.state.counters.map(c=>{
         c.value = 0
         return c;
        }
     );
     this.setState({counters});
 }

 
handleDelete =(counterId)=>{
    const counters= this.state.counters.filter(f=>f.id !== counterId);
    this.setState({counters}); 
}

  render() {
    return (
    <React.Fragment>
      <Navbar totalCounters={this.state.counters.filter(c=>c.value > 0).length}></Navbar>
      <main className="container">
        <Counters counters={this.state.counters} onReset={this.handleReset} onDelete={this.handleDelete} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}></Counters>
      </main>
      </React.Fragment>
    );
  }
}

export default App;
