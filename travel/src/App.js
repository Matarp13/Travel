import React from 'react';
import logo from './logo.png';
import './App.css';
import PrimarySearchAppBar from './Components/SearchBar.js';
import SearchResultsPage from './Components/SearchResultsPage.js';

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            search : false
        }
    }

    changeSearchState =(value) => {
        this.setState({search: value});
    }

    render() {
        return (
            <div className="App">
            <header className="App-header">
                <img src={logo} alt="logo" />
                {this.state.search ? <SearchResultsPage/> : <PrimarySearchAppBar changeSearch={this.changeSearchState}/>}
            </header>
            </div>
        )
    }
}

export default App;
