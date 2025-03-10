
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