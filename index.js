var optionButton = document.getElementById('option');
var options = document.getElementById('options');
var optionButton2 = document.getElementById('option2');
optionButton2.style.display = "none"
options.style.display = "none"

optionButton.addEventListener('click' , function(){
    options.style.display = "";
    options.style.animation = "options linear 0.3s";
    options.style.left = "0px"
    optionButton.style.display = "none"
    optionButton2.style.display = "";
})

optionButton2.addEventListener('click' , function(){
    options.style.animation = "options2 linear 0.3s"
    options.style.left = "-350px"
    optionButton2.style.display = "none"
    optionButton.style.display = ""
})

var dark = document.getElementById('dark');
var light = document.getElementById('light');
var account = document.getElementById('account');
var ammount = document.getElementById('ammount');
var upi = document.getElementById('upi')

dark.addEventListener('click', function(){
    document.body.style.backgroundColor = "rgb(64, 72, 92)"
    dark.style.display = "none"
    light.style.display = ""
    account.style.color = "white"
    searchError.style.color = "white"
    upi.style.color = "white";
    ammount.style.color = "white";
})

light.addEventListener('click' , function(){
    document.body.style.background = "white"
    dark.style.display = ""
    light.style.display = "none"
    account.style.color = "black"
    searchError.style.color = "black"
    upi.style.color = "black";
    ammount.style.color = "black";
})


light.style.display = "none";

var search = document.getElementById('search');
var searchError = document.getElementById('search-error');
searchError.style.display = "none";

search.addEventListener('click' , function(){
    searchError.style.display = "";
})


var buy = document.getElementById('buy');

buy.addEventListener('click' , function(){
    window.open("payment.html");
})


var continueButton = document.getElementById('continue');

continueButton.addEventListener('click' , function(){
    window.open("details.html");
})

var home = document.getElementById('home');

home.addEventListener('click' , function(){
    window.open('index.html');
})



