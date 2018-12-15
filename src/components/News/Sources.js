import React, {Component} from 'react';
import SourceSingle from './SourceSingle';
import Error from './Error';

class Sources extends Component {
  constructor(props){
    super(props);
    this.state = {
      sources: [],
      error: false
    };
  }

  componentDidMount(){
    // const url = 'https://newsapi.org/v2/top-headlines?language=en&category=technology&sortBy=publishedAt&apiKey=207ab92db4944ed2a5c870bba5a8e313';
    // const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=207ab92db4944ed2a5c870bba5a8e313`;
  const url = `https://newsapi.org/v2/sources?language=en&country=us&apiKey=207ab92db4944ed2a5c870bba5a8e313`;

    fetch(url)
    .then ((response) => {
        return response.json();
    })
    .then ((data) => {
        this.setState({
        sources: data.sources,
      })
    })
    .catch((error) => {
      console.log(error);
      this.setState({
          error: true
      })
    });
  }

  renderItems(){
    if(!this.state.error) {
      return this.state.sources.map((item)=> (
        <SourceSingle key={item.url} item={item}  updateSourcesCallback={this.props.updateSourcesCallback}/>
      ));
    } else {
      return <Error />
    }
  }

  render(){
    return (
        <div>
            {this.renderItems()}
        </div>
    );
  }
}

export default Sources;
