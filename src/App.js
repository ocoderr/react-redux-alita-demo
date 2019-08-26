import React from 'react';
import './App.css';
import {connectAlita} from 'redux-alita';
import List from "./List";

class App extends React.Component {
    render() {
        console.log(this.props.alitaState);
        const {count = {}} = this.props.alitaState;
        const {data: countNum = 0} = count;

        return (
            <div className="App">
                <h1>Hello Alita</h1>
                <h2>Start editing to see some magic happen!</h2>
                <h3>count: {countNum}</h3>
                <button onClick={() => this.props.setAlitaState({ stateName: 'count', data: countNum + 1 })}>count + 1</button>
                <button onClick={() => this.props.setAlitaState({ stateName: 'count', data: countNum - 1 })}>count - 1</button>
                <List/>
            </div>
        );
    }
}

export default connectAlita()(App);
