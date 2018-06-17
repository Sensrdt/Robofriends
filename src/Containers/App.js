import React , {Component} from 'react';
import CardList from '../Components/CardList';
import Searchbox from '../Components/Searchbox';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }


	 onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }


	render(){

		const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    if (this.state.robots.length === 0) {
    	return <h1 className='tc'>Loading!!!</h1>
    }else{


    return(
		<div className='tc'>

		<h1>RoboFriends</h1>
		<Searchbox searchChange ={this.onSearchChange}/>
		
	     <CardList robots={filteredRobots} />
	     <footer>
	              <p> ©sridip dutta</p>
	     </footer>
	          
        
        </div>
		);
	}
 }
}
export default App;