import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                    Life is a journey
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_self"
                        rel="noopener noreferrer"
                    >
                    My React Little Book
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
