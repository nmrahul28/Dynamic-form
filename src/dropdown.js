import React, { Component } from 'react'
import './form.css'
export class dropdown extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="sub_div">
                {this.props.label === 'gender' ? <select value={this.props.val} name={this.props.fieldname} onChange={this.props.inputChange} is_required={this.props.required}>
                <option value=''>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select> : (this.props.label === 'loanPurpose' ? <select value={this.props.val} name={this.props.fieldname} onChange={this.props.inputChange} is_required={this.props.required}>
                    <option value="">Select loan purpose</option>
                    <option value="education">Education</option>
                    <option value="travel">Travel</option>
                    <option value="c">c</option>
                </select> :
                    <select value={this.props.val} name={this.props.fieldname} onChange={this.props.inputChange} is_required={this.props.required}>
                        <option value="Bussiness Owner">Bussiness Owner</option>
                        <option value="Professionals">Professionals</option>
                        <option value="Salaried">Salaried</option>
                    </select>)}
                <div>
                    <p style={{color:'red'}}>{this.props.error}</p>
                </div>
            </div>
        )
    }
}

export default dropdown
