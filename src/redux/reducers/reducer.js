const Reducer = (state = { data: [] }, action) => {
    switch (action.type) {
        case 'GET_DATA_FULFILLED': {
            return state = {
                ...state,
                data: action.payload
            };
        }
        case 'POST_DATA': {
            return state = {
                ...state,
                otpdata: action.payload
            };
        }
        case 'VERIFY_OTP': {
            return state = {
                ...state,
                verifyotp: action.payload
            };
        }
        case 'PINCODE': {
            return state = {
                ...state,
                pincodeMaster: action.payload
            }
        }
        case 'COMPANY_NAME': {
            return state = {
                ...state,
                companyMaster: action.payload
            }
        }
        case 'DATABASE': {
            return state = {
                ...state,
                details: action.payload
            }
        }
        case 'GET_DATA': {
            return state = {
                ...state,
                table_data: action.payload
            }
        }
        case 'GET OFFERS': {
            return state = {
                ...state,
                offerlist_data: action.payload
            }
        }
        default:
            return state;

    }
}
export default Reducer;