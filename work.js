var startbtn=document.getElementById('startbtn');
var nameinput=document.getElementById('nameinput');
var starterror=document.getElementById('starterror');
var start=document.getElementById('start');
var quiz=document.getElementById('quiz');

nameinput.value='';

var currentUser;

function startclick(){
    if(nameinput.value!=''){
        console.log(nameinput.value);
        start.style.display='none';
        currentUser=nameinput.value;
        quiz.style.display='block';
    }
    else{
        starterror.style.display='block';
        starterror.innerHTML='*Please fill your name in the form';
    }
}

