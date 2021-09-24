var message = document.querySelector("#message");
var button = document.querySelector("#button");
var input1 = document.querySelector("#input1");
var input2 = document.querySelector("#input2");

function calcArea() {
  var area = 0;
  if (input1.value === "" || input2.value === "") {
    message.innerText = "";
    return;
  }
  if (input1.value < 0 || input2.value < 0) {
    message.innerText = "Sides length cannot be negative";
    return;
  }
  area = Number((input1.value * input2.value) / 2);
  message.innerText = "Area is " + area;
}

button.addEventListener("click", calcArea);
