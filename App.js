import React, { Component } from 'react';
import Display from './Display';
class App extends Component {
    state={
        name:'Telugu'
    }
    render() {
        return (
            <div>
               <Display name={this.state.name}/> 
            </div>
        );
    }
}

export default App;