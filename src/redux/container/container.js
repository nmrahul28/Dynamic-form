import { connect } from "react-redux";
import { get_formdata, sendotp, verifyotp, pinCodeMaster, bajajMaster, db_store, db_get } from '../actions/action.js';
import Form from '../../from.js';
const mapStateToProps = (state) => {
    var get_from_details = state.form_data.data;
    var table_data = state.form_data.table_data;
    var pincodeMaster = state.form_data.pincodeMaster || [];
    console.log(get_from_details)
    var otpverified = '';
    var compList = state.form_data.companyMaster || [];
    try {
        var get_from_details = state.form_data.data;
        var table_data = state.form_data.table_data;
        pincodeMaster = state.form_data.pincodeMaster || [];
        compList = state.form_data.companyMaster || [];
        console.log(state)
        try {
            get_from_details = state.form_data.data;
            otpverified = state["form_data"]["verifyotp"]["success"];
            pincodeMaster = state.form_data.pincodeMaster || [];
            compList = state.form_data.companyMaster || [];
            var table_data = state.form_data.table_data;
            console.log(state)
            return {
                get_from_details, otpverified, pincodeMaster, compList, table_data
            }
        } catch (err) {
            console.log(err.message)
        }
        return {
            get_from_details, otpverified, pincodeMaster, compList, table_data
        }
    } catch (err) {
        console.log(err.message)
    }
    return {
        get_from_details, otpverified, pincodeMaster, compList, table_data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        get_formdata: () => dispatch(get_formdata()),
        sendotp: (visitorId, mobileNumber, smsType) => dispatch(sendotp(visitorId, mobileNumber, smsType)),
        verifyotp: (visitorId, mobileNumber, otp) => dispatch(verifyotp(visitorId, mobileNumber, otp)),
        pinCodeMaster: (value) => dispatch(pinCodeMaster(value)),
        bajajMaster: (value) => dispatch(bajajMaster(value)),
        db_store: (firstName,
            lastName,
            dob,
            preferredLoanAmount,
            mobileNumber,
            emailId,
            panNumber,
            companyName,
            profession,
            gender,
            annualIncome,
            loanPurpose,
            totalWorkingExperience,
            pincode,
            leadID) => dispatch(db_store(firstName,
                lastName,
                dob,
                preferredLoanAmount,
                mobileNumber,
                emailId,
                panNumber,
                companyName,
                profession,
                gender,
                annualIncome,
                loanPurpose,
                totalWorkingExperience,
                pincode,
                leadID)),
        db_get: (leadID) => dispatch(db_get(leadID))
    }
}
export const Createfrom = connect(mapStateToProps, mapDispatchToProps)(Form);
