function login(){
    let storedemail = "ahmad@sprintive.com";
    let storedpassword = "123456";

    let userinput_email = document.getElementById('email').value;
    let userinput_password = document.getElementById('password').value;

    if(storedemail != userinput_email || storedpassword != userinput_password){
        window.alert("Infos entered are incorrect");
        return false;
    }

    window.alert("Logged in successfully");
    return true;
}

function register(){
    let errorCount = 0;
    let errorMessages = "";

    let userinput_userid = document.getElementById('userid').value;
    const userid_regex = /^\w{5,12}$/;
    if(!userid_regex.test(userinput_userid)){
        errorMessages += "USERID length must be between this range [5,12]\n";
        errorCount++;
    }

    let userinput_password = document.getElementById('password').value;
    if(userinput_password.length > 12 || userinput_password.length < 7){
        errorMessages += "PASSWORD length must be between this range [7,12]\n";
        errorCount++;
    }

    let userinput_name = document.getElementById('name').value;
    const name_regex = /^[a-zA-Z]+$/;
    if(!name_regex.test(userinput_name)){
        errorMessages += "Name must be alphabates only\n";
        errorCount++;
    }

    let userinput_country = document.getElementById('country').value;
    if(!userinput_country){
        errorMessages += "You must chose a country\n";
        errorCount++;
    }

    let userinput_zipcode = document.getElementById('zipcode').value;
    const zipcode_regex = /^\d+$/;
    if(!zipcode_regex.test(userinput_zipcode)){
        errorMessages += "ZIPCODE should contain numeric characters\n"
        errorCount++;
    }

    let userinput_email = document.getElementById('email').value;
    const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!email_regex.test(userinput_email)){
        errorMessages += "EMAIL format is wrong\n";
        errorCount++;
    }

    let userinput_gender = document.querySelector('input[name="gender"]:checked');
    if (!userinput_gender) {
        errorMessages += "You must choose a gender\n";
        errorCount++;
    }

    let userinput_language = document.querySelectorAll('input[name="language"]:checked');
    if (!(userinput_language.length == 1)) {
        errorMessages += "You must choose 1 language\n";
        errorCount++;
    }
    
    errorMessages += "Error count: " + errorCount;
    if(errorCount > 0){
        window.alert(errorMessages);
        return false;
    }

    window.alert("Account created successfully");
    return true;
}