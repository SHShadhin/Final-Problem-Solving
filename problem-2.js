function validOtp(otp) {
    
    if (typeof otp !== 'string') {
        return 'Invalid'
    }

    let otpLength = otp.length;
    if (otpLength === 8 && otp.startsWith('ph-')) {
        return true;
    }
    else {
        return false;
    }

}

const output = validOtp(12345678)
console.log(output);
