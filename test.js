function OnLoad(){
    
    var runFunctionaddtext = document.getElementById("button_append");
    var imageCountFunction = document.getElementById("button_imageCount");
    var deleteImageInscreen = document.getElementById("button_deleteImage");

    deleteImageInscreen.onclick = deleteImg;
    runFunctionaddtext.onclick = addText;
    imageCountFunction.onclick = alertImgCount;
}


function addText(){
    let str = ["Happy","Sad","Hot","Calm","Panic","Fear","Rich","Incident",]
    let random_str = str[Math.floor(Math.random() * str.length)];
    //console.log(random_str);

    let a = document.createElement('p');
    let b = document.createElement('a');
    let imageAppend = document.createElement('div');
    
    imageAppend.setAttribute('class', 'image_container');
    imageAppend.setAttribute('id', 'image_container');
    //imageAppend.innerHTML = '<img src="https://modworkshop.net/mydownloads/previews/82034_1604924929_5c24a5f1539cb5b4ed2574ad56626ed8.png" alt="gun photo" width="256" height="256">'+'<p class = "text_InContainer">'+random_str+'</p>';
    imageAppend.innerHTML = '<img src="'+randomPhotoValue()+'"'+'alt="gun photo" width="256" height="256">'+'<p class = "text_InContainer">'+random_str+'</p>';   
    document.body.appendChild(imageAppend);
  
}

//var rapidcall = setInterval(randomPhotoValue,500);
function randomPhotoValue(){
    var randomPhotoUrl = "https://picsum.photos/200/300?random=";
    var inValue = ["2","3","4","5","6","7","8","9","10"];
    var radnominValue = inValue[Math.floor(Math.random() * inValue.length)];
    var combineUrl = randomPhotoUrl + radnominValue;
    console.log(combineUrl);
    return combineUrl;

   
}

//Count image
function alertImgCount(){ 
    let imageCount = document.querySelectorAll('img');
    alert(imageCount.length);

}

//Delete div image
function deleteImg(){ 
    //console.log("itwork");
    var elementTarget = document.getElementById('image_container');
    if(elementTarget == null){
        console.log("no photo");
    }
    else
    elementTarget.remove();

}

//Resolution  show
var repeatCall = setInterval(debugTextInterval,1000);
function debugTextInterval(){
    var w = window.innerWidth;
    var h = window.innerHeight;   
    var resolutionValue = document.getElementById('currentResolution');
    resolutionValue.innerHTML = "Current Resolution is " + w +" x "+ h;
}

//Time show
var repeatCallTime = setInterval(timerWorld,1000);
function timerWorld(){
    var d = new Date();
    var t = d.toLocaleTimeString();

    var worldTimeValue = document.getElementById('worldTime');
    worldTimeValue.innerHTML = t;

}

window.onload=function(){
    OnLoad();
    }
