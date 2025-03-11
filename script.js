
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

//default
let currentlyShown = 0;

for(let i = 1; i < images.length; i++){
    
    parent.removeChild(images[i]);

}

console.log(parent);
left.addEventListener("click", () => {
    
    parent.removeChild(images[currentlyShown]);

    if(currentlyShown === 0){
        
        currentlyShown = max;

    }else{

        currentlyShown--;
    }

    parent.appendChild(images[currentlyShown]);
});

right.addEventListener("click", () => {
    
    parent.removeChild(images[currentlyShown]);

    if(currentlyShown === max){
        
        currentlyShown = 0;

    }else{

        currentlyShown++;
    }

    parent.appendChild(images[currentlyShown]);
});