var userEmailInput=document.getElementById('userEmail');
var userPassInput=document.getElementById('userPass');
localStorage.removeItem('justEntered');


var userData= JSON.parse(localStorage.getItem('user'));
console.log(userData);

document.querySelector('.signIn button').addEventListener('click',function(){
    signIn(this)
    console.log(this);
    
})
function signIn(link){
    for (var i=0 ; i< userData.length ;i++){
        if (userEmailInput.value === userData[i].email && userPassInput.value === userData[i].pass){
            document.querySelector('.signIn p').classList.add('d-none');
            localStorage.setItem('index',JSON.stringify(i));
            console.log(localStorage.getItem('index'));
            window.open(link.value)
            break;
        }
        else{
            document.querySelector('.signIn p').classList.remove('d-none');
        }
    }
}
