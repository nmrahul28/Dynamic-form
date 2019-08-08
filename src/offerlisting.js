import React, { Component } from 'react'
import './offerlisting.css';
export class OfferList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            offerlist: {},
            rows: []
        }
    }

    componentDidMount() {
        this.props.offerlisting();
    }
    componentWillReceiveProps(nextProps) {
        try {
            const { offer_data } = nextProps
            this.setState({
                rows: offer_data.rows
            })
        }
        catch (err) {
            console.log(err.message);
        }
        this.setState({
            offerlist: nextProps.offer_data
        }, console.log('hiii', nextProps))
    }
    apply=(ele,e)=>{
        this.props.history.push('/applynow');
    }
    render() {
        console.log(this.state.rows);
        return (
            <div>
                {this.state.rows.map((ele, index) => {
                    return (
                        <div className="row" key={index}>
                            <div className="column" key={index}>
                                <div className="card" key={index}>
                                    <img className='image' src={ele.picture} width='200px' height='175px'></img>
                                    <h3>{ele.title}</h3>
                                    <button className="button" type="button" onClick={(e) => this.apply(ele, e)}>Apply Now</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default OfferList
