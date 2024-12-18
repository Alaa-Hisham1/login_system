var firstNameInput=document.getElementById('firstName')
var emailInput=document.getElementById('email');
var passInput=document.getElementById('pass');
var message =document.querySelector('.signUp p');
var userData=[];
if( localStorage.getItem('user')!==null){
    userData=JSON.parse(localStorage.getItem('user'));
}
// console.log(JSON.parse(localStorage.user));
function signUp(){
    var userInfo={
        firstName:firstNameInput.value,
        email:emailInput.value,
        pass:passInput.value
    };
    userData.push(userInfo);
    console.log(userData);
    localStorage.setItem('user',JSON.stringify(userData));
    clearForm();
}
function clearForm(){
    firstNameInput.value=null;
    emailInput.value=null;
    passInput.value=null;
}

document.querySelector('.signUp button').addEventListener('click',function(){
    validation()})
function validation(){
    var regex={
        firstName:/^[\w\s]{3,20}$/,
        email:/^\w{5,20}@(gmail|yahoo)\.com$/,
        pass:/^[\w\W\S]{8,20}$/
    }
    if(firstNameInput.value == '' || emailInput.value == '' || passInput.value == '' ){
        rejected('All inputs are required');   
    }
    else{
        for (var i=0 ; i< userData.length ; i++ ){
            if (email.value== userData[i].email){
                rejected('email already exist');
                return 0;
            }
        }
        if(regex['firstName'].test(firstNameInput.value)==false){
            rejected(`user name must be in the rang of 3 to 20 charcters and musn't include special charcters`)
        }
        else if(regex.email.test(emailInput.value)==false){
            rejected(`please enter your correct gmail or yahoo account`)
        }
        else if (regex.pass.test(passInput.value)==false){
            rejected(`passward must be at least 8 characters and must include special characters to make a strong passwar`);
        }
        else{
            accepted('success');
            signUp(); 
        }   
    }
}
function accepted(msg){
    message.innerHTML=msg;
    message.classList.remove('d-none');
    message.classList.replace('text-danger', 'text-success');
}
function rejected(msg){
    message.innerHTML=msg;
        message.classList.remove('d-none');
        message.classList.replace('text-success', 'text-danger'); 
}
