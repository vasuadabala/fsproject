/*34.Write a password generator in any programming.
 Be creative with how you generate passwords - strong passwords have a mix of lowercase letters, uppercase letters, numbers, and symbols.
 The passwords should be random, generating a new password every time the user asks for a new password. Include your run-time code in a main method.*/
//this method we give string as input and give output
// in this method we us random 
function randomPassword() {
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numbers = 1234567890;
    var symbols = '!@#$%^&';
    var allChars = lowercase + uppercase + numbers + symbols;
    var passwordlength = 8;
    var password = " ";
    if (passwordlength <= 0) {
        console.log('Password length must be greater than 0.');
        return;
    }
    for (var i = 0; i < passwordlength; i++) {
        var randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }
    console.log("the password is ", password);
}
randomPassword();
