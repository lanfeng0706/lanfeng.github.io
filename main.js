
let myImage = document.querySelector('img');

myImage.onclick = function(){

    let mySrc = myImage.getAttribute('src');

    if(mySrc === 'firefox.png'){
        myImage.setAttribute('src','firefox2.png')
   }else{
        myImage.setAttribute('src','firefox.png')
   }
}


function setHeading(name){
    let myHeadding = document.querySelector('h1');
    myHeadding.textContent =  'Mozilla 酷毙了，' + name + '！';
}

function setUserName(){
    let myName = prompt('请输入您的名字');
    localStorage.setItem('name',myName);
    setHeading(myName)
}

let storeName = localStorage.getItem('name');

if(storeName){
    setHeading(storeName)
}else{
    setUserName()
}

let myButton = document.querySelector('button');
myButton.onclick = setUserName;