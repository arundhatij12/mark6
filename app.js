var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    return serverURL+"?"+"text="+text
}

function errorHandler(error){
    console.log("error occured",error);
    alert("error occured, try again")
}


function clickHandler() {
  //replaced txtInput.nodeValue with txtInput.value
  var inputText= txtInput.value;

  //console.log(getTranslationURL(inputText))
  fetch(getTranslationURL(inputText))
  .then((Response)=>{return Response.json()})
  .then(json=>{
      console.log(json.contents.translated)
      const translatedText=json.contents.translated;
      outputDiv.innerText=translatedText;
  })
   .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)

