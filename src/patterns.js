export const Regex= {
    password: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/,
    mobile: /^([6789][0-9]{9})$/,
    landline: /^([0-9]{10})$/,
    gstn: /^\d{2}[a-zA-Z]{5}\d{4}[a-zA-Z]{1}\d[Zz]{1}[a-zA-Z\d]{1}$/,
    pan: /([A-Za-z]+){5}([0-9]+){4}[A-Za-z]{1}$/,
    otp: /^[0-9]{6}$/,
    email: /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, // eslint-disable-line
    cin: /^([L|U]{1})([0-9]{5})([A-Za-z]{2})([0-9]{4})([A-Za-z]{3})([0-9]{6})$/,
    pincode: /^[1-9][0-9]{5}$/,
    landmark: /^.{0,20}$/,
    address: /^[ A-Za-z0-9-@*,-_()';.]*$/,
    aadhaar: "[0-9]{12}",
    name: /^[a-zA-Z\s.]{2,100}$/,
    alpha: /^[a-zA-Z\s.]*$/,
    alphaOnly: /^[a-zA-Z\s]*$/,
    alphaSpecial: /^[ A-Za-z&]*$/,
    numeric: /^[0-9]*$/,
    alphaNumeric: /^[a-zA-Z0-9]*$/,
    dob: /^\d{4}[\-\/\s]?((((0[13578])|(1[02]))[\-\/\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\-\/\s]?(([0-2][0-9])|(30)))|(02[\-\/\s]?[0-2][0-9]))$/
}
