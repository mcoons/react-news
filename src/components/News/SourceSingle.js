import React, {Component} from 'react';

class SourceSingle extends Component {
    constructor(props){
        super(props);
        this.state = {
            [this.props.item.name]: false
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
        console.log(sourceID);

        this.props.updateSourcesCallback({sourceID, value});
    }



    render(){
        return (
        <div>
            <div className="divider"></div>
            <label>
                <input 
                    name={this.props.item.name}
                    type="checkbox"
                    checked={this.state[this.props.item.name]}
                    onChange={this.handleInputChange} />
                <span>
                    <div className="section">
                        <a href={this.props.item.url} target="_blank">
                            <h5>{this.props.item.name}</h5>
                        </a>
                        <p>{this.props.item.description}</p>
                    </div>
                </span>
            </label>
        </div>
        )
    }
}

export default SourceSingle;