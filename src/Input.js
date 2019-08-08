import React, { Component } from 'react'
import './form.css'
export class Input extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="sub_div">
                <input 
                type={this.props.input_type} 
                name={this.props.fieldname} 
                value={this.props.val} 
                is_required={this.props.required} 
                maxLength={this.props.max_len} 
                minLength={this.props.min_len} 
                onChange={this.props.inputChange}
                disabled={this.props.disabled}>
                </input>
                <div>
                <p style={{color:'red'}}>{this.props.error}</p>
            </div>
            </div>
        )
    }
}

export default Input
