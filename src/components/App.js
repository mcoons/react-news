import React, { Component } from 'react';
import './App.css';
import News from './News/News';
import Sources from './News/Sources';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedSource: 'viewed24hrs',
      filter:'viewed',
      period: 1
    };
    this.updateSources = this.updateSources.bind(this);
  }

  componentDidMount(){
    let userSelectedSource = localStorage.getItem('selectedSource');
    if (userSelectedSource){
      this.setState({selectedSource: JSON.parse(userSelectedSource)});
    }

    let userFilter = localStorage.getItem('filter');
    if (userFilter){
      this.setState({filter: JSON.parse(userFilter)});
    }

    let userperiod = localStorage.getItem('period');
    if (userperiod){
      this.setState({period: JSON.parse(userperiod)});
    }

    console.log('App this.state');
    console.log(this.state);

  }

  updateSources(object){
    let oldState = this.state.selectedSource;
    // object.value ? newState.push(object.sourceID) : newState = newState.filter( e => e !== object.sourceID );
    if (oldState !== object.id )
    {
      this.setState({selectedSource: object.id });
    }
    // object.value ? newState.push(object.sourceID) : newState = newState.filter( e => e !== object.sourceID );
    // this.setState({selectedSource: newState});
    // localStorage.setItem('selectedSource', JSON.stringify(newState));
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper indigo lighten-4">
                <a href="/" className="brand-logo center">New York Times</a>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col xs12 s12">
            <News key={this.state.news} news={this.state.news}/>
          </div>
          {/* <div className="col xs12 s3"> */}
          {/* <Sources selectedSources={this.state.selectedSources} updateSourcesCallback={this.updateSources}/> */}
          {/* <Sources selectedSource={this.state.selectedSource} updateSourcesCallback={this.updateSources}/>  */}
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default App;

