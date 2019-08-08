const User_details = require('../models').User_details;

exports.store = (req, res) => {
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
        pincode,
        leadID } = req.body;
    User_details.create({
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
    }).then((data) => {
        res.json(data);
    }).catch((err) => {
        console.log(err);
        res.json(err.message);
    })

}
exports.find_data=(req,res)=>{
    User_details.findOne({
        where:{leadID:req.params.leadID},
    }).then((data)=>{
        console.log(data)
        res.json(data)
    }).catch((err)=>{
        console.log(err);
        res.json(err.message)

    })
}
