import axios from 'axios';

export const getDataSuccess = (data) => {
    return {
        type: "GET_DATA_FULFILLED",
        payload: data
    }
}

export const postDataSuccess=(data)=>{
    return{
        type:'POST_DATA',
        payload:data
    }
}

export const verify_data=(data)=>{
    return{
        type:'VERIFY_OTP',
        payload:data
    }
}

export const pincode_data=(data)=>{
    return{
        type:'PINCODE',
        payload:data
    }
}

export const company_data=(data)=>{
    return{
        type:'COMPANY_NAME',
        payload:data
    }
}
export const database=(data)=>{
    return{
        type:'DATABASE',
        payload:data
    }
}
export const get_database=(data)=>{
    return{
        type:'GET_DATA',
        payload:data
    }
}
export const get_offerlist=(data)=>{
    return{
        type:'GET OFFERS',
        payload:data
    }
}

export const get_formdata = () => {
    var url;
    url = 'https://pre-prod-cms.onebajaj.capital/services/api/dynamic-bank-master?pl_bank_id=168&section=eligibility';
    return dispatch => {
        axios.get(url).then((res) => {
            console.log(res.data.data.fields.eligibility);
            dispatch(getDataSuccess(res.data.data.fields.eligibility));
        }).catch((err) => {
            return err;
        })

    }

}

export const sendotp=(visitorId, mobileNumber, smsType)=>{
    var url='http://13.233.130.175:8089/api/bajaj_capital/visitor/sendOtp';
    return dispatch=>{
        axios.post(url,{visitorId, mobileNumber, smsType}).then((res)=>{
            console.log(res.data);
            dispatch(postDataSuccess(res.data))
        }).catch((err)=>{
            return err;
        })
    }

}

export const verifyotp=(visitorId, mobileNumber, otp)=>{
    var url="http://13.233.130.175:8089/api/bajaj_capital/visitor/otpVerification";
    return dispatch=>{
        axios.post(url,{visitorId, mobileNumber, otp}).then((res)=>{
            console.log(res.data);
            dispatch(verify_data(res.data))
        }).catch((err)=>{
            dispatch(verify_data(false))
            return err;
        })
    }

}

export const pinCodeMaster=(value)=>{
    return dispatch=>{
        axios.get('http://13.233.130.175:8089/api/bajaj_capital/visitor/pinCodeMaster', { params: { pinCode: value } }
        ).then((res)=>{
            console.log(res.data.data.pinCodeMaster)
            dispatch(pincode_data(res.data.data.pinCodeMaster))
        }).catch((err)=>{
            return err;
        })
    }
}

export const bajajMaster=(value)=>{
    return dispatch=>{
        axios.get('http://13.233.130.175:8089/api/bajaj_capital/visitor/companyMaster', { params: { name: value } }
        ).then((res)=>{
            console.log(res.data.data.companyDetails)
            dispatch(company_data(res.data.data.companyDetails))
        }).catch((err)=>{
            return err;
        })
    }
}
export const db_store=(
    firstName,
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
    leadID
    )=>{
    return dispatch=>{
        axios.post('http://localhost:8000/store',{
            firstName,
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
            leadID
        }).then((res)=>{
            console.log(res.data);
            dispatch(database(res.data))
        }).catch((err)=>{
            console.log(err);
            return err;
        })

    }
}
export const db_get=(leadID)=>{
    return dispatch=>{
        axios.get(`http://localhost:8000/get_details/${leadID}`).then((res)=>{
            console.log(res.data);
            dispatch(get_database(res.data));
        }).catch((err)=>{
            console.log(err);
            return err;
        })
    }
}
export const offerlisting=()=>{
    return dispatch=>{
        axios.get('https://pre-prod-cms.onebajaj.capital/services/api/offers-list/?_format=json').then((res)=>{
            console.log(res.data);
            dispatch(get_offerlist(res.data));
        }).catch((err)=>{
            console.log(err);
            return err;
        })
    }
}
