import React, {Component} from 'react';

class SourceSingle extends Component {
    constructor(props){
        super(props);
        this.state = {
            [this.props.item.name]: props.selectedSource === (this.props.item.id) 
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'radio' ? target.checked : target.id;
        const name = target.name;

        console.log(event.target);
    
        this.setState({
          [name]: value
        });

        // let sourceID = name.toLowerCase().split(" ").join("-");
        // this.props.updateSourcesCallback({sourceID, value});
    }

    render(){
        return (
        <div className="source"> 
            <label htmlFor={this.props.item.name}>
            <input 
                key = {this.props.item.id}
                id = {this.props.item.id}
                className="checkbox"
                name="sources"
                type="radio"
                // checked={this.state[this.props.item.name]}
                onChange={this.handleInputChange} />                
                {this.props.item.name}</label>
        </div>
        )
    }
}


export default SourceSingle;
