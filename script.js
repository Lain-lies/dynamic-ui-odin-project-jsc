
const dropDownButton = document.querySelector(".dropdown button");
const dropDownContent = document.querySelector(".dropdown ul");

let expanded = false;

dropDownButton.addEventListener("click", () => {
   
    if(!expanded){
        
        dropDownContent.style.visibility = "visible";
        expanded = true;

    }else{

        dropDownContent.style.visibility = "hidden";
        expanded = false;
    }
});


const parent = document.querySelector("#screen");
const images = [...document.querySelectorAll(".image-container")];
const left = document.querySelector(".carousel button:first-child");
const right = document.querySelector(".carousel button:last-child");
const max = images.length - 1;
const navigation = [...document.querySelectorAll("#shown > *")];
console.log(navigation);

//default
let currentlyShown = 0;
navigation[currentlyShown].style.color = "white";

function move(){

    intervalID = setInterval(moveToRightCallBack, 1000);

}

let idle = null;
 
for(let i = 1; i < images.length; i++){
    
    parent.removeChild(images[i]);

}

left.addEventListener("click", () => {
    
    clearInterval(intervalID); 
    intervalID = null;

    if(!idle){

        clearInterval(idle);
    }   

    idle = setInterval(() => {
    
        move();
        clearInterval(idle);

    }, 5000);

    parent.removeChild(images[currentlyShown]);
    navigation[currentlyShown].style.color = "black";

    if(currentlyShown === 0){
        
        currentlyShown = max;

    }else{

        currentlyShown--;
    }
    navigation[currentlyShown].style.color = "white";
    parent.appendChild(images[currentlyShown]);
});

right.addEventListener("click", () => {

    clearInterval(intervalID); 
    intervalID = null;

    if(idle){

        clearInterval(idle);
    }

    idle = setInterval(() => {
    
        move();
        clearInterval(idle);

    }, 5000);

    parent.removeChild(images[currentlyShown]);
    navigation[currentlyShown].style.color = "black";

    if(currentlyShown === max){
        
        currentlyShown = 0;

    }else{

        currentlyShown++;
    }

    navigation[currentlyShown].style.color = "white";
    parent.appendChild(images[currentlyShown]);

});

function moveToRightCallBack(){

    parent.removeChild(images[currentlyShown]);
    navigation[currentlyShown].style.color = "black";

    if(currentlyShown === max){
        
        currentlyShown = 0;

    }else{

        currentlyShown++;
    }

    navigation[currentlyShown].style.color = "white";
    parent.appendChild(images[currentlyShown]);

}

move();