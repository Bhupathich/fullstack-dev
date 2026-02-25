console.log(document);
// displays the whole code in HTML 
// queryselector - we can use any selector but has to mention *, #, . depends on selectors we use. 
// getElementbyId - we use only for ID(#) selector and no need  to mention (#) while using it.
// queryselector - only takes first element even if you use so many time 
// to take all elements - use queryselectorall 
var raj= document.querySelector('h3');
console.log(raj);

var bhu = raj.innerHTML= 'Hello, this is chadalavada'
console.log(bhu);
var kitti = raj.style.color = "red"

raj.addEventListener('click',function(){
    console.log("eni sarlu click chesthay wwebpage medha ani sarlu o/p vathundhi console lo ")
})

 raj.addEventListener('dblclick', function(){
    raj.innerHTML='How are you doing today my friend'
    raj.style.backgroundColor='green'
    raj.style.color='brown'
    raj.style.fontSize='38px'
 })
// queryselectorall tesukunapudu ani elements tesukoni array lo vunchuthundhi, so first line with 0 Index , second line index 1 and third line index 2
var amma = document.querySelectorAll('h3');
amma[1].innerHTML='RadhaKrishna'
amma[2].innerHTML='Bhupathi'

var box = document.querySelector('#box')
var rav = document.querySelector('h5')
var but = document.querySelectorAll('button')
box.addEventListener('click', function(){
    box.style.backgroundColor='black'
    box.style.color='red'
})
rav.addEventListener('click', function(){
    rav.style.fontSize='35px'
    rav.style.color='blue'
})
but[0].addEventListener('click', function(){
    box.style.backgroundColor='blue'
    rav.style.color='green'
    rav.style.fontSize='40px' 
})

var i = 0;
function chad(){
    if(i == 0){
        box.style.backgroundColor='black';
        rav.style.color='green';
        rav.style.fontSize='20px';
        i = 1;
    }
    else{
        box.style.backgroundColor='blue';
        rav.style.color='red';
        rav.style.fontSize='40px';
        i = 0;
    }
}
but[1].addEventListener('click', chad)
// facebook request JS 
var face = document.querySelector('#fb')
var h2 = document.querySelector('h2')
var h4 = document.querySelector('h4')
//var req = document.querySelectorAll('button')  //but[2]
var j = 0;
function requ(){
    if(j == 0){
    h4.innerHTML='friends now';
    but[2].innerHTML='cancel request';
    j = 1;
    }
    else{
        h4.innerHTML='send friend request';
        but[2].innerHTML='send request';
        j = 0;
    }
}
but[2].addEventListener('click', requ)
// 1000 lopala vuka random number ni select chesthundhi 
//var num = Math.random() *1000;
//var num1 = Math.floor(num);
// console.log(num1)
//255
// color change avatniki in the box 
var h1 = document.querySelector('h1')
function getRandomColor() {
     const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            colorb.style.backgroundColor= `rgb(${r}, ${g}, ${b})`;
            h1.innerHTML='rgb('+ r + ','+  g +','+ b + ')';
            h1.style.fontSize = '30px'
        }
var colorb = document.querySelector('#colorButton')
but[3].addEventListener('click', getRandomColor)

// only in console
// vuka array lo vunna different names nunchi vuka random display avuthundhi 
var arr = ['bhupathi', 'yolanda', 'maria', 'bella', 'marco', 'aldo', 'raju'];
var num = Math.floor(Math.random()* arr.length);
console.log(arr[num]);

// 
var ars = [
    {
        name: 'bhupahti',
        age:'28',
        surname: 'ch',
    },
     {
        name: 'raju',
        age:'26',
        surname: 'df'
    },
     {
        name: 'ramesh',
        age:'27',
        surname: 's'
    },
     {
        name: 'rajasekhar',
        age:'29',
        surname: 'm'
    } 

];
var nmb = Math.floor(Math.random()* ars.length);
console.log(ars[nmb].name);

// front end back end communicat echesukontani API's vadtaham and API common language decide chesthundhi i.e., JASON 
// JSON - JAVA SCRIPT OBJECT NOTATION
// who will win the iPL 2026 cup?  take an array of differnet teams names.

var ipl = document.querySelector('#ipl');
var h6 = document.querySelector('h6');
var h7 = document.querySelector('h7');
var ary= [
    {
        name: 'MI',
        captain: 'Rohit sharma',
        state: 'mumbai'
    },
    {
        name: 'CSK',
        captain: 'Dhoni',
        state: 'chennai'
    },
    {
        name: 'SRH',
        captain: 'David',
        state: 'andhra'
    },
    {
        name: 'KKR',
        captain: 'Iyer',
        state: 'kolkata'
    },
    {
        name:'RR',
        captain: 'Sanju',
        state: 'rajasthan'
    },
    {
        name:'RCB',
        captain: 'Kohli',
        state: 'bangalore'
    },
    {
        name:'DD',
        captain: 'pant',
        state: 'Delhi'
    },
    {
        name:'GT',
        captain: 'Hardik',
        state: 'gujarat'
    }
];
but[4].addEventListener('click', function(){
    var ner = Math.floor(Math.random()* ary.length);
    h7.innerHTML='this team will win IPL 2026';
    h6.innerHTML= ary[ner].name + ary[ner].state;
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    ipl.style.backgroundColor= `rgb(${r}, ${g}, ${b})`;
})

// JS is a synchronous(executes line by line) executer due to having interpretor, but we can asychronous 
// to make JS Asynchronous
console.log('hello1');
setTimeout(function(){
    console.log('hello2');
},3000);
console.log('hello3');
setTimeout(function(){
    console.log('hello4');
},1000);
// Setinterval

 
