import React, {Component} from 'react';
import NewSingle from './NewSingle';

class News extends Component {
  constructor(props){
    super(props);
    this.state = {
      news: [],
    };
  }

  componentDidMount(){
    // const url = 'https://newsapi.org/v2/top-headlines?language=en&category=technology&sortBy=publishedAt&apiKey=207ab92db4944ed2a5c870bba5a8e313';
    const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=207ab92db4944ed2a5c870bba5a8e313`;
  
    fetch(url)
      .then ((response) => {
        return response.json();
      })
      .then ((data) => {
        this.setState({
          news: data.articles,
        })
      })
      .catch((error) => console.log(error));
  }

  renderItems(){
    return this.state.news.map((item)=> (
      <NewSingle key={item.url} item={item} />
    ));
  }
      
  render(){
    return (
      <div className="row flex">
        {this.renderItems()}
      </div>
    );
  }
}

export default News;
