import React, {Component} from 'react';

class SourceSingle extends Component {
    constructor(props){
        super(props);
        this.state = {
            [this.props.item.name]: props.selectedSources.includes(this.props.item.id) 
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });

        let sourceID = name.toLowerCase().split(" ").join("-");
        this.props.updateSourcesCallback({sourceID, value});
    }

    render(){
        return (
        <div className="source"> 
            <label htmlFor={this.props.item.name}>
            <input 
                key = {this.props.item.name}
                id = {this.props.item.name}
                className="checkbox"
                name={this.props.item.name}
                type="checkbox"
                checked={this.state[this.props.item.name]}
                onChange={this.handleInputChange} />                
                {this.props.item.name}</label>
        </div>

        )
    }
}

export default SourceSingle;
