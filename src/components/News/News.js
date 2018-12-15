import React, {Component} from 'react';
import NewSingle from './NewSingle';
import Error from './Error';

class News extends Component {
  constructor(props){
    super(props);
    this.state = {
      news: [],
      error: false
    };

    this.fetchNews = this.fetchNews.bind(this);    
  }

  fetchNews(){
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
    .catch((error) => {
      console.log(error);
      this.setState({
          error: true
      })
    });
  }

  componentDidMount(){
    this.fetchNews();
  }

  renderItems(){
    
    if(!this.state.error) {
      console.log("rendering news");
      return this.state.news.map((item)=> (
        <NewSingle key={item.url} item={item} />
      ));
    } else {
      return <Error />
    }
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
