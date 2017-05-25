
$(document).ready(function(){
    
$("#name").keyup(
  function(event){
  event.preventDefault();
validate_User()
});

$("#mail").keyup(
  function(event){
event.preventDefault();
validate_mail()
});

$("#studentnumber").keyup(
  function(event){
event.preventDefault();
validate_student()
});

function validate_User(){
var id = document.getElementById('name')
if(userid_validation(id,4,30)){
  document.getElementById('valid_User').innerHTML = ("");
    return true;
}else{
  document.getElementById('valid_User').innerHTML = ("Please Enter valid Name");
    return false;
}
};


function validate_student(){
var student = document.getElementById('studentnumber');
if(studentNumber(student)){
document.getElementById('valid_number').innerHTML = ("");
}else {
document.getElementById('valid_number').innerHTML = ("Please Enter Student Number");
}
};

function validate_mail(){
var email = document.getElementById('mail');
if(ValidateEmail(email)){
document.getElementById('valid_email').innerHTML =("");
    return true;
  }else {
  document.getElementById('valid_email').innerHTML =("Please Enter Valid Email");
      return false;
  }
};

function ValidateEmail(email){
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(mail.value.match(mailformat)){
return true;
}
return false;
};

$(function detectKeydown(){
    $('#formVal input').keydown(function(e){
      if(e.keyCode==13){
      if($(':input:eq(' + ($(':input').index(this) + 1) + ')').attr('type')=='submit'){
         return true;
            }
          $(':input:eq(' + ($(':input').index(this) + 1) + ')').focus();
         return false;
       }
  });
});
function userid_validation(id,mx,my){
var uid_len = id.value.length;
if (uid_len === 0 || uid_len >= my || uid_len < mx){
return false;
}
return true;
};


function studentNumber(student){
var numbers = /^[0-9]+$/;
var numbers_len = studentnumber.value.length;
if(studentnumber.value.match(numbers) && numbers_len == 6){
return true;
}
return false;
};





$("#submitted").click(function(event) {
  event.preventDefault();
    // console.log('true');
  if(validate_User() === true){
      console.log('trueM');
    if(validate_mail() === true){
           console.log('true');
    document.getElementById('submitrue').innerHTML =("Sucessfully submitted.");
  }
}else{
    document.getElementById('submitrue').innerHTML =("");
  }
});
});