const textElem = document.querySelector(".random");
const otpElem = document.querySelector(".otp");

function makeid(length) {
    let result           = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
		charactersLength));
   }
   return result;
}

function makeotp(length) {
    let result           = '';
    const characters       = '0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

function getCodes(){
	otpElem.textContent = "Your OTP is: " + makeotp(6)
	textElem.textContent = "Your Code is: " + makeid(15)
}
