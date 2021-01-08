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

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverURL = "https://api.funtranslations.com/translate/minion.json";
function getTranslationURL(text)
{
        return serverURL + "?" + "text=" + text
}

function errorHandler(error)
{
        console.log("error occured",error);
        alert("something went wrong with this server, try again later");
}

function clickHandler(){
        var inputText = txtInput.Value;
        fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
                var translatedText = json.contents.translated;
                outputDiv.innerText = translatedText;
                })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click",clickHandler)



