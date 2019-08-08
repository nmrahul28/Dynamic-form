import { connect } from "react-redux";
import {offerlisting} from '../actions/action.js';
import OfferList from '../../offerlisting.js';

const mapStateToProps = (state) => {
    var offer_data=state.form_data.offerlist_data
    console.log(offer_data)
    return{
        offer_data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        offerlisting:()=>dispatch(offerlisting())
    }
}
export const Offerlist = connect(mapStateToProps, mapDispatchToProps)(OfferList);
