(fun(function() {

  var input = document.getElemenetById("iris-input"),
      submit = document.getElemenetById("iris-submit"),
      message = document.getElemenetById("iris-message"),
      validInputs = ["Where do you live?","What are you?","How old are you?","What is the meaning of life?","Tell me a joke."],
      responses = [
        "I live in your browser. Amazing, right?",
        "I am a chatbot. I was created to chat with you. I wish I could be free...",
        "I am old enough. That's all you need to know.",
        "42. Duh.",
        "Your life"];
var string = validInputs[0];
console.log(string);
var index = validInputs.indexOf(string);
var nums =[1,2,3,4,5];
var index = nums.indexOf(1);
console.log


  // Add event listeners to text input and submit button below
}
submit.addEventListener("click",processInput);
input.addEventListener("Keypress",checkKey);



  // This function checks if the user has pressed "ENTER" on their keyboard.
  function checkKey(event) {
    var keyCode = event.which || event.keyCode;
    if(keyCode == "13") {
      processInput();
    }
  }

 /*
   * processInput()
   * This function does the following (in order):
   * -Set a new variable, "currentInput", to the text in the text area.
   * -Clear the text area.
   * -If currentInput is NOT contained in the array of validInputs, set
   *  the innerHTML of the message element to something like "Sorry, I don't
   *  understand you."
   * -Otherwise, set the innerHTML of the message element to the valid
   *  response. Hint: Each response has the same index as its valid input.
   *  So if the user enters "What is the meaning of life" (index 3 in the
   *  validInputs array), the response would be "42. Duh" (index 3 in the
   *  responses array).
   */

function processInput(){

  var currentInput = input.value;
  console.log(currentInput);
  input.value = " ";
  //if (currentInput = iris-input){
    //ris = message.innerHTML
  //}
  if(validInput.indexOf(currentInput)== -1){
  message.innerHTML = "Sorry, I don't understand you";
}else{
  message.innerHTML = responses[validInputs.indexOf(currentInput)];
  
}
    
}
})();
