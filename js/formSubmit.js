window.onload = function () {

  var button = document.getElementById('formSubmitButton');

  button.onclick = function(){
    var name = document.getElementById('nameInput').value;
    alert("Thanks for contacting me " + name + ". I'll get back to you as soon as I can.")
    window.location = "http://rcruzmcd.com/BU/CS601/termProject/index.html";
  };

}
