var message = document.querySelector("#message");
var button = document.querySelector("#button");
var inputs = document.querySelectorAll("#input");

function calcHypotenuse() {
  var hypotenuse = 0;
  for (var i = 0; i < inputs.length; ++i) {
    if (inputs[i].value < 0) {
      message.innerText = "Values cannot be negative";
      return;
    }
    hypotenuse = hypotenuse + Number(inputs[i].value * inputs[i].value);
  }
  hypotenuse = Math.sqrt(hypotenuse);
  message.innerText = "Length of Hypotenuse is " + hypotenuse;
}

button.addEventListener("click", calcHypotenuse);
