var userData= JSON.parse(localStorage.getItem('user'));
console.log(userData);
var index= JSON.parse(localStorage.getItem('index'));
document.querySelector('.massage h1').innerHTML=`Welcome ${userData[index].firstName}`
document.querySelector('.nav button').addEventListener('click',function(){
    window.open(this.value);
})