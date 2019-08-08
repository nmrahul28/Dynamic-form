import React, { Component } from 'react'
import Input from './Input.js';
import Dropdown from './dropdown.js'
import './form.css';
import { Regex } from './patterns';

export class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            getfrom: [],
            firstName: '',
            lastName: '',
            preferredLoanAmount: '',
            mobileNumber: '',
            otp: '',
            emailId: '',
            panNumber: '',
            companyName: '',
            profession: '',
            gender: '',
            annualIncome: '',
            loanPurpose: '',
            totalWorkingExperience: '',
            pincode: '',
            eligibility_tnc: '',
            dob: new Date(),
            formErrors: {
                firstName: '',
                lastName: '',
                preferredLoanAmount: '',
                mobileNumber: '',
                otp: '',
                emailId: '',
                panNumber: '',
                companyName: '',
                profession: '',
                gender: '',
                annualIncome: '',
                loanPurpose: '',
                totalWorkingExperience: '',
                pincode: '',
                dob: '',
                eligibility_tnc: '',
            },
            firstNameValid: false,
            lastNameValid: false,
            dobValid: false,
            preferredLoanAmountValid: false,
            mobileNumberValid: false,
            otpValid: false,
            emailIdValid: false,
            panNumberValid: false,
            companyNameValid: false,
            professionValid: false,
            genderValid: false,
            annualIncomeValid: false,
            loanPurposeValid: false,
            totalWorkingExperienceValid: false,
            pincodeValid: false,
            eligibility_tncValid: false,
            isFormValid: false
        }
    }
    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        if (name === 'pincode' && value.length >= 3) {
            this.props.pinCodeMaster(value);
            this.setState({
                [name]: value,
                pincodeshowList: true
            }, () => {
                this.validateFields(name, value);
            });
        } else if (name === 'companyName' && value.length >= 3) {
            this.props.bajajMaster(value);
            this.setState({
                [name]: value,
                companyNameshowList: true
            }, () => {
                this.validateFields(name, value);
            });
        }
        else {
            this.setState({
                [event.target.name]: event.target.value,
            }, () => { this.validateFields(name, value) });
        }
    }
    componentDidMount() {
        this.props.get_formdata();
        if (JSON.parse(sessionStorage.getItem('leadID'))) {
            let leadID = JSON.parse(sessionStorage.getItem('leadID'))
            this.props.db_get(leadID);
        }
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    setWrapperRef = node => {
        this.wrapperRef = node;
    };

    handleClickOutside = event => {
        console.log(this.wrapperRef && this.wrapperRef.contains(event.target))
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({
                companyNameshowList: false,
                pincodeshowList: false
            });
        }
    };

    validateFields = (fieldName, value) => {
        let fieldValidationErrors = this.state.formErrors;
        let firstNameValid = this.state.firstNameValid;
        let lastNameValid = this.state.lastNameValid;
        let dobValid = this.state.dobValid;
        let preferredLoanAmountValid = this.state.preferredLoanAmountValid;
        let mobileNumberValid = this.state.mobileNumberValid;
        let otpValid = this.state.otpValid;
        let emailIdValid = this.state.emailIdValid;
        let panNumberValid = this.state.panNumberValid;
        let companyNameValid = this.state.companyNameValid;
        let professionValid = this.state.professionValid;
        let genderValid = this.state.genderValid;
        let annualIncomeValid = this.state.annualIncomeValid;
        let loanPurposeValid = this.state.loanPurposeValid;
        let totalWorkingExperienceValid = this.state.totalWorkingExperienceValid;
        let pincodeValid = this.state.pincodeValid;
        let eligibility_tncValid = this.state.eligibility_tncValid;
        switch (fieldName) {
            case "firstName": {
                firstNameValid = value.match(Regex.name);
                fieldValidationErrors.firstName = firstNameValid ? '' : 'Only alphabets';
                break;
            }
            case "lastName": {
                lastNameValid = value.match(Regex.name);
                fieldValidationErrors.lastName = lastNameValid ? '' : 'Only alphabets';
                break;
            }
            case "dob": {
                console.log(value)
                dobValid = value.match(Regex.dob);
                fieldValidationErrors.dob = dobValid ? '' : 'In MM/DD/YYYY';
                break;
            }
            case "preferredLoanAmount": {
                preferredLoanAmountValid = value.match(Regex.numeric);
                fieldValidationErrors.preferredLoanAmount = preferredLoanAmountValid ? '' : 'Only numeric';
                break;
            }
            case "mobileNumber": {
                mobileNumberValid = value.match(Regex.mobile);
                fieldValidationErrors.mobileNumber = mobileNumberValid ? '' : 'Mobile no. is not valid';
                if (mobileNumberValid) {
                    const visitorId = Math.floor(1000 + Math.random() * 9000);
                    this.setState({
                        visitorId: visitorId
                    })
                    const mobileNumber = Number(value);
                    const smsType = "campl";
                    this.props.sendotp(visitorId, mobileNumber, smsType);
                    alert("Otp sent Kindly check")
                }
                break;
            }
            case "otp": {
                otpValid = value.match(Regex.otp);
                fieldValidationErrors.otp = otpValid ? '' : 'Enter correct otp';
                if (otpValid) {
                    const visitorId = this.state.visitorId;
                    const otp = value;
                    const mobileNumber = this.state.mobileNumber;
                    this.props.verifyotp(visitorId, mobileNumber, otp)
                }
                break;
            }
            case "emailId": {
                emailIdValid = value.match(Regex.email);
                fieldValidationErrors.emailId = emailIdValid ? '' : 'Enter correct mail id';
                break;
            }
            case "panNumber": {
                panNumberValid = value.match(Regex.pan);
                fieldValidationErrors.panNumber = panNumberValid ? '' : 'Enter correct pan no.';
                break;
            }
            case "companyName": {
                companyNameValid = value.match(Regex.name);
                fieldValidationErrors.companyName = companyNameValid ? '' : 'Enter correct name.';
                break;
            }
            case "profession": {
                professionValid = value.match(Regex.alpha);
                fieldValidationErrors.profession = professionValid ? '' : 'Enter correct profession';
                break;
            }
            case "gender": {
                genderValid = value.match(Regex.alpha);
                fieldValidationErrors.gender = genderValid ? '' : 'Select correct gender';
                break;
            }
            case "annualIncome": {
                annualIncomeValid = value.match(Regex.numeric);
                fieldValidationErrors.annualIncome = annualIncomeValid ? '' : 'Only numeric';
                break;
            }
            case "loanPurpose": {
                loanPurposeValid = value.match(Regex.alpha);
                fieldValidationErrors.loanPurpose = loanPurposeValid ? '' : 'Only alphabets';
                break;
            }
            case "totalWorkingExperience": {
                totalWorkingExperienceValid = value.match(Regex.dob);
                fieldValidationErrors.totalWorkingExperience = totalWorkingExperienceValid ? '' : 'Only numeric';
                break;
            }
            case "pincode": {
                pincodeValid = value.match(Regex.pincode);
                fieldValidationErrors.pincode = pincodeValid ? '' : 'Only valid pincode';
                break;
            }
            case "eligibility_tnc": {
                eligibility_tncValid = value.match(Regex.alpha);
                fieldValidationErrors.eligibility_tnc = eligibility_tncValid ? '' : 'Check it';
                break;
            }
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            firstNameValid: firstNameValid,
            lastNameValid: lastNameValid,
            dobValid: dobValid,
            preferredLoanAmountValid: preferredLoanAmountValid,
            mobileNumberValid: mobileNumberValid,
            otpValid: otpValid,
            emailIdValid: emailIdValid,
            panNumberValid: panNumberValid,
            companyNameValid: companyNameValid,
            professionValid: professionValid,
            genderValid: genderValid,
            annualIncomeValid: annualIncomeValid,
            loanPurposeValid: loanPurposeValid,
            totalWorkingExperienceValid: totalWorkingExperienceValid,
            pincodeValid: pincodeValid,
            eligibility_tncValid: eligibility_tncValid
        }, () => this.validateForm())
    }

    validateForm = () => {
        this.setState({
            isFormValid: this.state.firstNameValid
                && this.state.lastNameValid
                && this.state.dobValid
                && this.state.preferredLoanAmountValid
                && this.state.mobileNumberValid
                && this.state.otpValid
                && this.state.emailIdValid
                && this.state.panNumberValid
                && this.state.companyNameValid
                && this.state.professionValid
                && this.state.genderValid
                && this.state.annualIncomeValid
                && this.state.loanPurposeValid
                // && this.state.totalWorkingExperienceValid
                && this.state.pincodeValid
            // && this.state.eligibility_tncValid
        })
    }
    componentWillReceiveProps(nextProps) {
        try {
            const { table_data } = nextProps
            this.setState({
                firstName: table_data.firstName,
                lastName: table_data.lastName,
                preferredLoanAmount: table_data.preferredLoanAmount,
                mobileNumber: table_data.mobileNumber,
                dob: table_data.dob,
                emailId: table_data.emailId,
                panNumber: table_data.panNumber,
                companyName: table_data.companyName,
                profession: table_data.profession,
                gender: table_data.gender,
                annualIncome: table_data.annualIncome,
                loanPurpose: table_data.loanPurpose,
                totalWorkingExperience: table_data.totalWorkingExperience,
                pincode: table_data.pincode,
                eligibility_tnc: table_data.eligibility_tnc
            })
        }
        catch (err) {
            console.log(err);
        }
        const { table_data } = nextProps
        this.setState({
            getfrom: nextProps.get_from_details,
            otpverified: nextProps.otpverified,
            pinCityMaster: nextProps.pincodeMaster,
            bajajMaster: nextProps.compList,
            new_table_data: nextProps.table_data

        });
        console.log('hiii', nextProps);
    }
    renderPincodeResult = () => {
        const { pinCityMaster } = this.state;
        console.log(pinCityMaster)
        return (
            <div ref={this.setWrapperRef} className="suggestionArea">
                <ul className="suggestionBox" id="pincodeSuggestionBox">
                    {pinCityMaster.map((data, index) => {
                        return (
                            <li
                                key={index}
                                name={index}
                                value={data.id}
                                onClick={event => this.setValue(data)}
                            >
                                {data.pinCode}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
    setValue = (value) => {
        this.setState({
            pincode: value.pinCode,
            pincodeshowList: false
        }, () => {
            this.validateFields('pincode', value.pinCode)
        })
    }
    renderCmpList = () => {
        const { bajajMaster } = this.state;
        console.log(bajajMaster)
        return (
            <div ref={this.setWrapperRef} className="suggestionArea">
                <ul className="suggestionBox" id="cmpNameSuggestionBox">
                    {bajajMaster.map((data, index) => {
                        return (
                            <li
                                key={index}
                                name={index}
                                value={data.id}
                                onClick={event => this.setValueCmpName(data.bajajMaster)}
                            >
                                {data.bajajMaster}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
    setValueCmpName = (value) => {
        this.setState({
            companyName: value,
            companyNameshowList: false
        }, () => {
            this.validateFields('companyName', value)
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        if (this.state.isFormValid && this.state.otpverified) {
            const leadID = Math.floor(1000 + Math.random() * 9000);
            sessionStorage.setItem('leadID', leadID);
            this.setState({
                leadID: leadID
            })
            console.log(this.state);
            const { firstName,
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
                pincode } = this.state;
            this.props.db_store(firstName,
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
                leadID)
            alert('data saved');
            this.setState({
                firstName: '',
                lastName: '',
                dob: '',
                preferredLoanAmount: '',
                mobileNumber: '',
                emailId: '',
                panNumber: '',
                companyName: '',
                profession: '',
                gender: '',
                annualIncome: '',
                loanPurpose: '',
                totalWorkingExperience: '',
                pincode: '',
                otp: '',
            })
        }
        else {
            alert('Fill details properly!')
        }
    }

    render() {

        console.log(this.state.new_table_data)
        return (
            <div className="main_div">
                {
                    Array.from(this.state.getfrom).map((ele, index) => {
                        return (<div className="sub_div" key={index}>
                            <label>{ele.label}</label>
                            {ele.field_type === 'DropDown'
                                ?
                                <Dropdown
                                    error={this.state.formErrors[ele.field_name]}
                                    className="sub_div" val={this.state[ele.field_name]}
                                    inputChange={this.handleChange} label={ele.field_name}
                                    fieldname={ele.field_name}
                                    required={ele.is_required}>
                                </Dropdown>
                                :
                                (ele.field_name === 'dob'
                                    ?
                                    <Input
                                        error={this.state.formErrors[ele.field_name]}
                                        input_type={'date'} fieldname={ele.field_name}
                                        val={this.state[ele.field_name]}
                                        inputChange={this.handleChange}
                                        required={ele.is_required}>
                                    </Input>
                                    :
                                    (ele.field_name === 'otp'
                                        ?
                                        <Input
                                            disabled={!this.state.mobileNumberValid}
                                            error={this.state.formErrors[ele.field_name]}
                                            input_type={'text'}
                                            fieldname={ele.field_name}
                                            val={this.state[ele.field_name]}
                                            inputChange={this.handleChange}
                                            max_len={ele.max_char}
                                            min_len={ele.min_char}
                                            required={ele.is_required}>
                                        </Input>
                                        :
                                        (ele.field_name === 'mobileNumber'
                                            ?
                                            <Input
                                                disabled={this.state.otpverified}
                                                error={this.state.formErrors[ele.field_name]}
                                                input_type={'text'}
                                                fieldname={ele.field_name}
                                                val={this.state[ele.field_name]}
                                                inputChange={this.handleChange}
                                                max_len={ele.max_char}
                                                min_len={ele.min_char}
                                                required={ele.is_required}>
                                            </Input>
                                            :
                                            (ele.field_name === 'pincode'
                                                ?
                                                <React.Fragment>
                                                    <Input
                                                        error={this.state.formErrors[ele.field_name]}
                                                        input_type={'text'}
                                                        fieldname={ele.field_name}
                                                        val={this.state[ele.field_name]}
                                                        inputChange={this.handleChange}
                                                        max_len={ele.max_char}
                                                        min_len={ele.min_char}
                                                        required={ele.is_required}>
                                                    </Input>
                                                    {this.state.pincode.length >= 3 && this.state.pincodeshowList ?
                                                        this.renderPincodeResult() : null}
                                                </React.Fragment>
                                                :
                                                (ele.field_name === 'companyName'
                                                    ?
                                                    <React.Fragment>
                                                        <Input
                                                            error={this.state.formErrors[ele.field_name]}
                                                            input_type={'text'}
                                                            fieldname={ele.field_name}
                                                            val={this.state[ele.field_name]}
                                                            inputChange={this.handleChange}
                                                            max_len={ele.max_char}
                                                            min_len={ele.min_char}
                                                            required={ele.is_required}>
                                                        </Input>
                                                        {this.state.companyName.length >= 3 && this.state.companyNameshowList ?
                                                            this.renderCmpList() : null}
                                                    </React.Fragment>
                                                    :
                                                    <Input
                                                        error={this.state.formErrors[ele.field_name]}
                                                        input_type={'text'}
                                                        fieldname={ele.field_name}
                                                        val={this.state[ele.field_name]}
                                                        inputChange={this.handleChange}
                                                        max_len={ele.max_char}
                                                        min_len={ele.min_char}
                                                        required={ele.is_required}>
                                                    </Input>
                                                )
                                            )
                                        )
                                    )
                                )
                            }
                        </div>)
                    })
                }
                <br></br>
                <center>
                    <button
                        type="submit"
                        onClick={this.onSubmit}>
                        Submit
                </button>
                </center>
            </div>
        )
    }
}

export default Form
