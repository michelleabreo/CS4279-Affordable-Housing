import React, { Component } from 'react';

class Success extends Component{
    render(){
        return(
            <div>
                <h1 className="ui centered">Details Successfully Saved</h1>
                <h1 className="ui centered">{this.props.information.firstName}</h1>

            </div>
        )
    }
}

export default Success;