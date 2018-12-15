import React, { Component } from 'react';
import './App.css';
import News from './News/News';
import Sidenews from './News/Sidenews';
import Sources from './News/Sources';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      news1: {
        type: 'top-headlines',
        query: 'sources=bbc-news, wired, usa-today, the-washington-post'
      },
      news2: {
        type: 'everything',
        query: 'domains=techcrunch.com&language=en'
      },
      news3: {
        type: 'everything',
        query: 'domains=comicbookmovie.com,techcrunch.com&language=en'
      },
      selectedSources: []
    };

    this.updateSources = this.updateSources.bind(this);
  }

  updateSources(object){
    // console.log(object);

    let newState = this.state.selectedSources.slice();

    object.value ? console.log("add to state") : console.log("remove from state");
    object.value ? newState.push(object.sourceID) : newState = newState.filter( e => e != object.sourceID );

    // console.log(newState);
    this.setState({selectedSources: newState,
                   news1: { type: 'top-headlines',
                            query: 'sources='+newState.toString()
                          }
    })

  }

  render() {
    return (
      <div className="container-fluid">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper indigo lighten-4">
                <a href="/" className="bran-logo center">My Feed</a>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col xs12 s8">
            <News news={this.state.news1}/>
            <News news={this.state.news2}/>
          </div>
          <div className="col xs12 s4">
            {/* <Sources updateSourcesCallback={this.updateSources}/> */}
            <Sidenews news={this.state.news3}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
