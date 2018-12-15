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

    var myRequest = new Request('./sourcesdata.json');

    fetch(myRequest)
    .then(response => response.json())
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
