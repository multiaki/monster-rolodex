import React, {Component} from 'react';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {Search} from "./components/search/search.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: 'Aki',
      lastName: "Sharipov",
      monsters: [],
      searchText:"",
      placeholder: "Please search for a monster"
    }
  }
  
  monsterFilter = (searchText) => {
    this.setState({searchText: searchText.target.value})
  }
  
  componentDidMount() {
    this.fetchUsers()
  }

  
  fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }


  getMonsters() {
    return this.state.monsters.filter(monster => monster.name.toLowerCase().includes(this.state.searchText.toLowerCase()) )
  }
  
  render() {
    let monsters = this.getMonsters();
    return (
      <div className='App'>
        <h1>Monster Rolodex</h1>
        <Search placeholder={this.state.placeholder} onKeyUp={this.monsterFilter}/>
        <CardList monsters={monsters}/>
      </div>
    )
  }

}

export default App;
