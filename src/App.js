import React, { Component } from 'react'
import "./App.css";
import CardList from "./components/CardList";
import { robots } from "./utils/robots";
import Search from "./components/Search";

 class App extends Component {

  constructor(){
    super();

    this.state = {
      robots: robots,
      search: ''
    }

    this.onSearchChange = this.onSearchChange.bind(this) // mandatory for class based component
  }

    onSearchChange(event){
      this.setState({search:event.target.value})
    }

  render() {

    const searchRobots = this.state.robots.filter(
      robots => {
        return robots.name.toLocaleLowerCase().includes(
        this.state.search.toLocaleLowerCase()
        )
      }
    )
    return (
      <div className="tc">
        <h1>Robot App</h1>
        <Search searchChange={this.onSearchChange} />
        <CardList robots={searchRobots} />
      </div>
    );
  }
}

export default App;
