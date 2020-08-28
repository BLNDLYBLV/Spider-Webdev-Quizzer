var startbtn=document.getElementById('startbtn');
var nameinput=document.getElementById('nameinput');
var starterror=document.getElementById('starterror');
var start=document.getElementById('start');
var quiz=document.getElementById('quiz');
var result=document.getElementById('result');
var question=document.getElementById('question');
var opttext1=document.getElementById('opttext1');
var opttext2=document.getElementById('opttext2');
var opttext3=document.getElementById('opttext3');
var opttext4=document.getElementById('opttext4');
var time=document.getElementById('time');
var today= new Date();
var correct=0,wrong=0;
var timer;
var hsname1=document.getElementById('hsname1')
var hsname2=document.getElementById('hsname2')
var hsname3=document.getElementById('hsname3')
var hsscore1=document.getElementById('hsscore1')
var hsscore2=document.getElementById('hsscore2')
var hsscore3=document.getElementById('hsscore3')
var hsdate1=document.getElementById('hsdate1')
var hsdate2=document.getElementById('hsdate2')
var hsdate3=document.getElementById('hsdate3')
var hstime1=document.getElementById('hstime1')
var hstime2=document.getElementById('hstime2')
var hstime3=document.getElementById('hstime3')

nameinput.value='';

// Global variables are declared here

var currentUser;
var currentans;
var currentq=0;
var currentopt;
var questions=[];
var model;
var m='5',s='00',time;
var ls=localStorage;

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function init(){
    var opt1=document.getElementById('opt1');
    var opt2=document.getElementById('opt2');
    var opt3=document.getElementById('opt3');
    var opt4=document.getElementById('opt4');
    opt1.checked=false;
    opt2.checked=false;
    opt3.checked=false;
    opt4.checked=false;
    currentq++;
    question.innerHTML=currentq+'. '+questions[currentq-1].qstring;
    currentans=questions[currentq-1].qans;
    opttext1.innerHTML=questions[currentq-1].opt1;
    opttext2.innerHTML=questions[currentq-1].opt2;
    opttext3.innerHTML=questions[currentq-1].opt3;
    opttext4.innerHTML=questions[currentq-1].opt4;
    if((questions[currentq-1].opt1.split(" ").length-1)>10){
        opttext1.style.top='10px';
        opttext1.style.paddingBottom='10px';
        // console.log(questions[currentq-1].opt1.split(" ").length-1,currentq);
    } else{
        opttext1.style.top='0px';
    }
    if((questions[currentq-1].opt2.split(" ").length-1)>10){
        opttext2.style.top='10px';
        opttext2.style.paddingBottom='10px';
        // console.log(questions[currentq-1].opt2.split(" ").length-1,currentq);
    } else{
        opttext2.style.top='0px';
    }
    if((questions[currentq-1].opt3.split(" ").length-1)>10){
        opttext3.style.top='10px';
        opttext3.style.paddingBottom='10px';
        // console.log(questions[currentq-1].opt3.split(" ").length-1,currentq);
    } else{
        opttext3.style.top='0px';
    }
    if((questions[currentq-1].opt4.split(" ").length-1)>10){
        opttext4.style.top='10px';
        opttext4.style.paddingBottom='10px';
        // console.log(questions[currentq-1].opt4.split(" ").length-1,currentq);
    } else{
        opttext4.style.top='0px';
    }
        opttext1.parentElement.classList.remove('correctoption');
        opttext1.parentElement.classList.remove('wrongoption');
        opttext1.parentElement.classList.remove('realoption');
        opttext2.parentElement.classList.remove('correctoption');
        opttext2.parentElement.classList.remove('wrongoption');
        opttext2.parentElement.classList.remove('realoption');
        opttext3.parentElement.classList.remove('correctoption');
        opttext3.parentElement.classList.remove('wrongoption');
        opttext3.parentElement.classList.remove('realoption');
        opttext4.parentElement.classList.remove('correctoption');
        opttext4.parentElement.classList.remove('wrongoption');
        opttext4.parentElement.classList.remove('realoption');
        if(questions[currentq-1].chosenans!=undefined){
            console.log('goes');
            var chosenopt=document.getElementById('opt'+questions[currentq-1].chosenans);
            var origopt=document.getElementById('opt'+currentans);
            chosenopt.checked=true;
            if(questions[currentq-1].chosenans==currentans){
                chosenopt.parentElement.classList.add('correctoption');
            }
            else{
                chosenopt.parentElement.classList.add('wrongoption');
                origopt.parentElement.classList.add('realoption');
            }
        }
}

model={
    qstring: '  In a study, which cells are found in COVID-19 patients "bode well" for long term immunity?' ,
    qans:'3',
    opt1:"P-Cell",
    opt2:"D-cell",
    opt3:"T-Cell",
    opt4:"A-Cell",
    completed:false
};
questions.push(model);
model={
    qstring: '  How many countries, areas or territories are suffering from novel coronavirus outbreak in the World?' ,
    qans:'4',
    opt1:"More than 50",
    opt2:"More than 100",
    opt3:"More than 150",
    opt4:"More than 200",
    completed:false
};
questions.push(model);
model={
    qstring: '  Name a clinical trial in which blood is transfused from recovered COVID-19 patients to a coronavirus patient who is in critical condition?' ,
    qans:'1',
    opt1:"Plasma therapy",
    opt2:"Solidarity",
    opt3:"Paracetamol",
    opt4:"Hydroxychloroquine",
    completed:false
};
questions.push(model);
model={
    qstring: '  How does Coronavirus transmit' ,
    qans:'4',
    opt1:" When a person sneezes or cough, droplets spread in the air or fall on the ground and nearby surfaces.",
    opt2:" If another person is nearby and inhales the droplets or touches these surfaces and further touches his face, eyes or mouth, he or she can get an infection.",
    opt3:" If the distance is less than 1 meter from the infected person.",
    opt4:" All the above are correct",
    completed:false
};
questions.push(model);
model={
    qstring: '  What happens to a person suffering from COVID-19?' ,
    qans:'4',
    opt1:" Around 80% of the people will require no treatment as such and will recover on their own.",
    opt2:" Around <20% or a small proportion may need hospitalisation.",
    opt3:" A very small proportion basically suffering from chronic illness may need admission in an Intensive Care Unit (ICU).",
    opt4:" All the above are correct",
    completed:false
};
questions.push(model);
model={
    qstring: '  Which of the below option is correct?' ,
    qans:'4',
    opt1:" COVID-19 does not affect children",
    opt2:" People who have diabetes and heart problems are more prone to get the disease",
    opt3:" COVID-19 is not lethal",
    opt4:" Both healthy and unhealthy people are equally likely to get the disease",
    completed:false
};
questions.push(model);
model={
    qstring: ' From where coronavirus got its name?' ,
    qans:'1',
    opt1:" Due to their crown-like projections.",
    opt2:" Due to their leaf-like projections.",
    opt3:" Due to their surface structure of bricks.",
    opt4:" None of the above",
    completed:false
};
questions.push(model);
model={
    qstring: ' What are the precautions that need to be taken to protect from the coronavirus?' ,
    qans:'2',
    opt1:" Add more garlic into your diet.",
    opt2:" Cover your nose and mouth when sneezing.",
    opt3:" Visit your doctor for antibiotics treatment",
    opt4:" Wash your hands after every hour",
    completed:false
};
questions.push(model);
model={
    qstring: '  Thailand announced that it has proceeded to test its novel coronavirus vaccine on which animal/bird?' ,
    qans:'3',
    opt1:" Lizards",
    opt2:" Hens",
    opt3:" Monkeys",
    opt4:" Kites",
    completed:false
};
questions.push(model);
model={
    qstring: '  Mild Symptoms of Novel coronavirus are:' ,
    qans:'4',
    opt1:" Shortness of breath",
    opt2:" Cough",
    opt3:" Fever",
    opt4:" All of the above",
    completed:false
};
questions.push(model);
shuffle(questions);

function startclick(){
    if(nameinput.value!=''){
        console.log(nameinput.value);
        start.style.display='none';
        currentUser=nameinput.value;
        quiz.style.display='block';
        timer= window.setInterval(stopwatch,1000);
    }
    else{
        starterror.style.display='block';
        starterror.innerHTML='*Please fill your name in the form';
    }
}

function optclick(optno){
    if(questions[currentq-1].chosenans==undefined){
        if(currentopt==undefined){
            currentopt=optno;
            var opt=document.getElementById('opt'+currentopt);
            console.log(opt);
            // opt.parentElement.classList.add('correctoption');
            // opt.parentElement.classList.remove('option');
        }
        else if(currentopt==optno){
            var opt=document.getElementById('opt'+currentopt);
            if(opt.checked==false){
                // opt.parezntElement.classList.add('option');
                // opt.parentElement.classList.remove('correctoption');
            }
            else{
                // opt.parentElement.classList.remove('option');
                // opt.parentElement.classList.add('correctoption');
            }
        }
        else{
            var opt=document.getElementById('opt'+currentopt);
            opt.checked=false;
            // opt.parentElement.classList.add('option');
            // opt.parentElement.classList.remove('correctoption');
            currentopt=optno;
            var opt=document.getElementById('opt'+currentopt);
            // opt.parentElement.classList.remove('option');
            // opt.parentElement.classList.add('correctoption');
        }
    }
    else{
        var opt=document.getElementById('opt'+optno);
        if(opt.checked==false){
            opt.checked=true;
        }
        else{
            opt.checked=false;
        }
    } 
}

function moveright(){
    if(currentq!=10){
        init();
    }
}
function moveleft(){
    if(currentq!=1){
        currentq-=2;
        init();
    }
}

function confirmcurrent(){
    var chosenans;
    for(var i=1;i<=4;i++){
        var opt=document.getElementById('opt'+i);
        if(opt.checked==true){
            chosenans=i;
            break;
        }
    }
    var chosenopt=document.getElementById('opt'+chosenans);
    var origopt=document.getElementById('opt'+currentans);
    var td=document.getElementById('td'+currentq);
    console.log(chosenopt.parentElement,origopt.parentElement);
    if(chosenans==currentans){
        correctmodalon();
        chosenopt.parentElement.classList.add('correctoption');
        td.classList.add('greenattempted');
        setTimeout(correctmodalclose,2500);
        // correct++;
    }
    else{
        wrongmodalon();
        chosenopt.parentElement.classList.add('wrongoption');
        origopt.parentElement.classList.add('realoption');
        td.classList.add('redattempted');
        // wrong++;
        setTimeout(wrongmodalclose,2500);
    }
    questions[currentq-1].chosenans=chosenans;
}
function bringq(q){
    currentq=q-1;
    init();
}
function stopwatch(){
    console.log('jang');

    if(Number(s)==0){
        s='60';
        m=String(Number(m)-1);
    }
    if(Number(s)<=10){
        s='0'+(Number(s)-1);
    }else{
        s=String(Number(s)-1);
    }
    time.innerHTML=m+':'+s;
    if(Number(m)==0 && Number(s)==0){
        submit();
    }

    // window.setInterval(stopwatch(),1000);
}

function submit(){
    quiz.style.display='none';
    result.style.display='block';
    var score=document.getElementById('myscore');
    var scorename=document.getElementById('scorename');
    var date;
    var hstime;
    questions.forEach(q=>{
        if(q.chosenans!=undefined){
            if(q.chosenans==q.qans){
                correct++;
            }
            else{
                wrong++;
            }
        }
    });
    clearInterval(timer);
    var scoretime=Number(time.innerHTML[0])*60+Number(time.innerHTML[2])*10+Number(time.innerHTML[3])
    var  highscorebox=document.getElementById('highscorebox')
    scoretime*=3;
    scoretime+=(correct*200-wrong*30);
    score.innerHTML=scoretime;
    scorename.innerHTML=currentUser+"'s score:";
    console.log(scorename.style.width);
    highscorebox.style.width=scorename.style.width;
    if(ls.getItem('hsscore1')=='null' || Number(ls.getItem('hsscore1'))<Number(scoretime)){
        date=today.getDate()+'/'+today.getMonth();
        hstime=today.getHours()+':'+today.getMinutes();
        ls.setItem('hsname3',ls.getItem('hsname2'));
        ls.setItem('hsscore3',ls.getItem('hsscore2'));
        ls.setItem('hstime3',ls.getItem('hstime2'));
        ls.setItem('hsdate3',ls.getItem('hsdate2'));
        ls.setItem('hsname2',ls.getItem('hsname1'));
        ls.setItem('hsscore2',ls.getItem('hsscore1'));
        ls.setItem('hstime2',ls.getItem('hstime1'));
        ls.setItem('hsdate2',ls.getItem('hsdate1'));
        ls.setItem('hsname1',currentUser);
        ls.setItem('hsscore1',scoretime);
        ls.setItem('hstime1',hstime);
        ls.setItem('hsdate1',date);
        console.log("hs1 updated");
    }
    else{
        if(ls.getItem('hsscore2')=='null' || Number(ls.getItem('hsscore2'))<Number(scoretime)){
            date=today.getDate()+'/'+today.getMonth();
            hstime=today.getHours()+':'+today.getMinutes();
            ls.setItem('hsname3',ls.getItem('hsname2'));
            ls.setItem('hsscore3',ls.getItem('hsscore2'));
            ls.setItem('hstime3',ls.getItem('hstime2'));
            ls.setItem('hsdate3',ls.getItem('hsdate2'));
            ls.setItem('hsname2',currentUser);
            ls.setItem('hsscore2',scoretime);
            ls.setItem('hstime2',hstime);
            ls.setItem('hsdate2',date);
            console.log("hs2 updated");
        } 
        else{
            if(ls.getItem('hsscore3')=='null' || Number(ls.getItem('hsscore3'))<Number(scoretime)){
                date=today.getDate()+'/'+today.getMonth();
                hstime=today.getHours()+':'+today.getMinutes();
                ls.setItem('hsname3',currentUser);
                ls.setItem('hsscore3',scoretime);
                ls.setItem('hstime3',hstime);
                ls.setItem('hsdate3',date);
                console.log("hs3 updated");
            }
        }
    }
    if(ls.getItem('hsname1')!='null'){
        hsname1.innerHTML=ls.getItem('hsname1');
    }
    else{
        hsname1.innerHTML=ls.getItem('hsname1');
        hsname1.style.color='white'
    }
    if(ls.getItem('hsname2')!='null'){
        hsname2.innerHTML=ls.getItem('hsname2');
    }
    else{
        hsname2.innerHTML=ls.getItem('hsname2');
        hsname2.style.color='white'
    }
    if(ls.getItem('hsname3')!='null'){
        hsname3.innerHTML=ls.getItem('hsname3');
    }
    else{
        hsname3.innerHTML=ls.getItem('hsname3');
        hsname3.style.color='white'
    }
    if(ls.getItem('hsscore1')!='null'){
        hsscore1.innerHTML=ls.getItem('hsscore1');
    }
    else{
        hsscore1.innerHTML=ls.getItem('hsscore1');
        hsscore1.style.color='white'
    }
    if(ls.getItem('hsscore2')!='null'){
        hsscore2.innerHTML=ls.getItem('hsscore2');
    }
    else{
        hsscore2.innerHTML=ls.getItem('hsscore2');
        hsscore2.style.color='white'
    }
    if(ls.getItem('hsscore3')!='null'){
        hsscore3.innerHTML=ls.getItem('hsscore3');
    }
    else{
        hsscore3.innerHTML=ls.getItem('hsscore3');
        hsscore3.style.color='white'
    }
    if(ls.getItem('hstime1')!='null'){
        hstime1.innerHTML=ls.getItem('hstime1');
    }
    else{
        hstime1.innerHTML=ls.getItem('hstime1');
        hstime1.style.color='white'
    }
    if(ls.getItem('hstime2')!='null'){
        hstime2.innerHTML=ls.getItem('hstime2');
    }
    else{
        hstime2.innerHTML=ls.getItem('hstime2');
        hstime2.style.color='white'
    }
    if(ls.getItem('hstime3')!='null'){
        hstime3.innerHTML=ls.getItem('hstime3');
    }
    else{
        hstime3.innerHTML=ls.getItem('hstime3');
        hstime3.style.color='white'
    }
    if(ls.getItem('hsdate1')!='null'){
        hsdate1.innerHTML=ls.getItem('hsdate1');
    }
    else{
        hsdate1.innerHTML=ls.getItem('hsdate1');
        hsdate1.style.color='white'
    }
    if(ls.getItem('hsdate2')!='null'){
        hsdate2.innerHTML=ls.getItem('hsdate2');
    }
    else{
        hsdate2.innerHTML=ls.getItem('hsdate2');
        hsdate2.style.color='white'
    }
    if(ls.getItem('hsdate3')!='null'){
        hsdate3.innerHTML=ls.getItem('hsdate3');
    }
    else{
        hsdate3.innerHTML=ls.getItem('hsdate3');
        hsdate3.style.color='white'
    }
    // mytime.innerHTML='Correct:'+correct+'  Wrong:'+wrong+' time:'+time.innerHTML;
}  

function submitmodalon(){
    // console.log('ojandf');
    var modal=document.getElementById('submitmodal');
    modal.style.display='block';
    console.log(modal);
}
function submitmodalclose(){
    var modal=document.getElementById('submitmodal');
    modal.style.display='none';
}
function correctmodalon(){
    // console.log('ojandf');
    var modal=document.getElementById('correctmodal');
    modal.style.display='block';
    console.log(modal);
}
function correctmodalclose(){
    var modal=document.getElementById('correctmodal');
    modal.style.display='none';
}
function wrongmodalon(){
    // console.log('ojandf');
    var modal=document.getElementById('wrongmodal');
    modal.style.display='block';
    console.log(modal);
}
function wrongmodalclose(){
    var modal=document.getElementById('wrongmodal');
    modal.style.display='none';
}

window.addEventListener('click',(e)=>{
    if(e.target.id=='submitmodal'){
        submitmodalclose();    
    }
    if(e.target.id=='correctmodal'){
        correctmodalclose();    
    }
    if(e.target.id=='wrongmodal'){
        wrongmodalclose();    
    }
})

// console.log(questions);
init();
