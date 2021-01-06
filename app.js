var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// console.log(outputDiv);
// console.log(btnTranslate);
// console.log(txtInput);

// btnTranslate.addEventListener("click", function clickEventHandler() {
//         console.log("Clicked!");
//         console.log("Input",txtInput.value);
// } )

btnTranslate.addEventListener("click",clickHandler)

function clickHandler(){
        outputDiv.innerText = "gugydfugiguj"+txtInput.value;
}


