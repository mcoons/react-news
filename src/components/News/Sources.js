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
      });
      console.log("Sources this.state");
      console.log(this.state);
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
        // <SourceSingle key={item.url} item={item} selectedSource={this.props.selectedSource}  updateSourcesCallback={this.props.updateSourcesCallback}/>
        <SourceSingle key={item.id} item={item} selectedSource={this.props.selectedSource} />
      ));
    } else {
      return <Error />
    }
  }

  render(){
    return (
        <div className="row flex sources">
          <p>Select Source</p>
          {this.renderItems()}
        </div>
    );
  }
}


export default Sources;
