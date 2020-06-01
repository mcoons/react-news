import React, { Component } from 'react';
import './App.css';
import News from './News/News';
import Sources from './News/Sources';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      news: {
        type: 'top-headlines',
        query: 'sources=abc-news,time'  
      },
      selectedSources: ['abc-news','time']
    };
    this.updateSources = this.updateSources.bind(this);
  }

  componentDidMount(){
    let preSelectesSources = localStorage.getItem('selectedSources');
    if (preSelectesSources){
      this.setState({selectedSources: JSON.parse(preSelectesSources),
                     news: { type: 'top-headlines',
                             query: 'sources='+JSON.parse(preSelectesSources).toString()
                           }
      });
    }
  }

  updateSources(object){
    let newState = this.state.selectedSources.slice();
    object.value ? newState.push(object.sourceID) : newState = newState.filter( e => e !== object.sourceID );
    this.setState({selectedSources: newState,
                   news: { type: 'top-headlines',
                           query: 'sources='+newState.toString()
                         }
    });
    localStorage.setItem('selectedSources', JSON.stringify(newState));
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper indigo lighten-4">
                <a href="/" className="brand-logo center">News Feeds</a>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col xs12 s9">
            <News key={this.state.news.query} news={this.state.news}/>
          </div>
          <div className="col xs12 s3">
            <Sources selectedSources={this.state.selectedSources} updateSourcesCallback={this.updateSources}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

