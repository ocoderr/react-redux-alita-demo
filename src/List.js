/*
 * File: List.js
 * Desc: asynchronous usage
 * File Created: 2019-03-19 13:33:27
 * Author: chenghao
 * ------
 * Copyright 2019 - present, chenghao
 */
import React from 'react';
import { connectAlita } from 'redux-alita';

class List extends React.Component {
    render() {
        console.log("this.props:",this.props);
        const { data = {} } = this.props.fetchNewsFun || {};
        return (
            <div>
                <button onClick={() => this.props.setAlitaState({ funcName: 'fetchNewsFun' })}>Fetch News</button>
                <ul>
                    { data.isFetching && <li>loading...</li> }
                    { data.articles && data.articles.map(news => <li key={news.url}>{news.title}</li>) }
                </ul>
            </div>
        )
    }
}

export default connectAlita(['fetchNewsFun'])(List);