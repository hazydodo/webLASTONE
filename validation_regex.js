let regex_uname = /^[A-Z][a-zA-Z0-9_@#$%^&+=]{4,11}[0-9|_@#$%^&+=]$/;
let regex_name = /^[a-zA-Z]+$/
let regex_pwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{12,}$/;
let regex_zip = /^\d{4}[a-zA-Z]{2}$/;
let regex_email = /^[a-zA-Z0-9]+@[a-zA-Z.]+$/

let uname_valid = false;
let name_valid = false;
let country_valid = false;
let email_valid = false;
let password_valid = false;
let confirm_pass_valid = false;
let zip_valid = false;
let sex_valid = false;

let uname;
let fname;
let country;
let email;
let pwd;
let zip;
let sex;
let lang;

let uname_input = document.getElementById("uname");
let name_input = document.getElementById("fullname");
let country_input = document.getElementById("country");
let email_input = document.getElementById("email");
let password_input = document.getElementById("psw");
let password_input2 = document.getElementById("pswconfirm");
let zip_input = document.getElementById("zip");
let male_input = document.getElementById("male");
let female_input = document.getElementById("female")
let other_input = document.getElementById("other");
let language_input = document.getElementById("language");

// optional fields..
document.getElementById("adr_optional").style.display = "block";
document.getElementById("bio_optional").style.display = "block";


let message = "";

document.addEventListener("click", function(){
  validate_sex(male_input, female_input, other_input);
  validate_uname(uname_input);
  validate_name(name_input);
  validate_pwd(password_input);
  validate_same_pwds(password_input, password_input2);
  validate_country(country_input);
  validate_ZIP(zip_input);
  validate_email(email_input);
  validate_language(language_input);


})

document.addEventListener("keyup", function(){
  validate_uname(uname_input);
  validate_name(name_input);
  validate_pwd(password_input);
  validate_same_pwds(password_input, password_input2);
  validate_country(country_input);
  validate_ZIP(zip_input);
  validate_email(email_input);
  validate_language(language_input);
});

var ele = document.getElementById("main_form");

if(ele.addEventListener){
  ele.addEventListener("submit", form_submitted, false);  //Modern browsers
}


function validate_language(input) {
  if(input.value != "" ) {
    input.style = "border:3px solid #90ee90;"

    document.getElementById("language_verified").style.display = "block"
    document.getElementById("language_error").style.display = "none"

    lang = input.value;

    language_valid = true;
  }
  else {
    input.style = "border:3px solid #ff0000;"

    document.getElementById("language_verified").style.display = "none"
    document.getElementById("language_error").style.display = "block"


    langauge_valid = false;
  }
}


function all_validated() {
  if(uname_valid && name_valid && country_valid && email_valid && password_valid && confirm_pass_valid && zip_valid && sex_valid) {
    return true;
  }
  return false;
}

function validate_sex(male_input, female_input, other_input) {
  if(male_input.checked || female_input.checked || other_input.checked) {

    document.getElementById("sex_verified").style.display = "block"
    document.getElementById("sex_error").style.display = "none"

    sex_valid = true;

    if(male_input.checked) {
      sex = "male";
    }
    else if (female_input.checked) {
      sex = "female";
    }
    else {
      sex = "other";
    }

  }
  else {

    document.getElementById("sex_verified").style.display = "none"
    document.getElementById("sex_error").style.display = "block"

    sex_valid = false;
  }
}

function validate_email(input) {
  let string = input.value;
  let email_isValid = regex_email.test(string);

  if(email_isValid) {
    input.style = "border:3px solid #90ee90;"

    document.getElementById("email_verified").style.display = "block"
    document.getElementById("email_error").style.display = "none"

    email = input.value;

    email_valid = true;
  }
  else {
    input.style = "border:3px solid #ff0000;"

    document.getElementById("email_verified").style.display = "none"
    document.getElementById("email_error").style.display = "block"

    email_valid = false;
  }

}



function validate_ZIP(input) {
  let string = input.value;
  let zip_isValid = regex_zip.test(string);

  if(zip_isValid) {
    input.style = "border:3px solid #90ee90;"

    document.getElementById("zip_verified").style.display = "block"
    document.getElementById("zip_error").style.display = "none"

    zip = input.value;

    zip_valid = true;
  }
  else {
    input.style = "border:3px solid #ff0000;"

    document.getElementById("zip_verified").style.display = "none"
    document.getElementById("zip_error").style.display = "block"

    zip_valid = false;
  }
}

function validate_country(input) {
  if(input.value != "" ) {
    input.style = "border:3px solid #90ee90;"

    document.getElementById("country_verified").style.display = "block"
    document.getElementById("country_error").style.display = "none"

    country = input.value;

    country_valid = true;
  }
  else {
    input.style = "border:3px solid #ff0000;"

    document.getElementById("country_verified").style.display = "none"
    document.getElementById("country_error").style.display = "block"

    country_valid = false;
  }
}


function validate_pwd(input) {
  let string = input.value;
  let pwd_isValid = regex_pwd.test(string);

  if(pwd_isValid) {
    input.style = "border:3px solid #90ee90;"

    document.getElementById("password_verified").style.display = "block"
    document.getElementById("password_error").style.display = "none"

    pwd = input.value;

    password_valid = true;
  }
  else {
    input.style = "border:3px solid #ff0000;"

    document.getElementById("password_verified").style.display = "none"
    document.getElementById("password_error").style.display = "block"

    password_valid = false;
  }

}





function validate_same_pwds(password_input, password_input2) {
  if(password_input.value == password_input2.value && password_input.value != "") {
    confirm_pass_valid = true;

    password_input2.style = "border:3px solid #90ee90;"
    document.getElementById("c_password_verified").style.display = "block"
    document.getElementById("c_password_error").style.display = "none"

  }
  else {
    confirm_pass_valid = false

    password_input2.style = "border:3px solid #ff0000;"
    document.getElementById("c_password_verified").style.display = "none"
    document.getElementById("c_password_error").style.display = "block"

  }
}


function validate_name(input) {
  let string = input.value;
  let name_isValid = regex_name.test(string);


  if (name_isValid) {
    input.style = "border:3px solid #90ee90;"

    document.getElementById("name_verified").style.display = "block"
    document.getElementById("name_error").style.display = "none"

    fname = input.value;

    name_valid = true;

  } else {
    input.style = "border:3px solid #ff0000;"
    
    document.getElementById("name_verified").style.display = "none"
    document.getElementById("name_error").style.display = "block"

    name_valid = false;
   
  }
}



function validate_uname(input) {
  let string = input.value;
  let uname_isValid = regex_uname.test(string);

  if (uname_isValid) {
    input.style = "border:3px solid #90ee90;"

    document.getElementById("uname_verified").style.display = "block"
    document.getElementById("uname_error").style.display = "none"

    uname = input.value;

    uname_valid = true;
  } else {
    input.style = "border:3px solid #ff0000;"
    
    document.getElementById("uname_verified").style.display = "none"
    document.getElementById("uname_error").style.display = "block"

    uname_valid = false;
   
  }
}


/*
let uname_valid = false;
let name_valid = false;
let country_valid = false;
let email_valid = false;
let password_valid = false;
let confirm_pass_valid = false;
let zip_valid = false;
let sex_valid = false;
*/


function form_submitted() {
  if(all_validated()) {
    let addr = document.getElementById("address").value;
    let bio = document.getElementById("bio").value;
    message = "username: " + uname + "\n name: " + fname + "\ncountry: " + country + "\nemail: " + email + "\npassword: " + pwd + "\nzip: " + zip + "\nsex: " + sex + "\n"
    + "address: " + addr + "\nbio: " + bio;
    alert(message);
  }
}