var submitButton = document.getElementById("submit-button");
var input = document.getElementById("input-text");

//If user clicks enter instead of the button
input.onkeypress = (e) => {
  if (e.keyCode === 13) {
    if (input.value == "") {
      return;
    }
    userInput();
  }
};

submitButton.addEventListener("click", function () {
  if (input.value == "") {
    return;
  }
  userInput();
});

// Take user input and make a new element and insert onclicks and classes
var userInput = () => {
  var para = document.createElement("p");
  var node = document.createTextNode(input.value);
  para.appendChild(node);
  para.classList.add("objective");

  para.addEventListener("click", function () {
    changeColor(this);
  });

  var button = document.createElement("button");
  var x = document.createTextNode("X");
  button.appendChild(x);
  button.classList.add("delete");

  button.addEventListener("click", function () {
    removeElement(this.parentElement);
  });

  para.appendChild(button);

  var element = document.getElementsByClassName("container")[0];
  element.appendChild(para);

  input.value = "";
};

// Remove element whenever the X is clicked
var removeElement = (remove) => {
  remove.parentNode.removeChild(remove);
};

// Change color of element to show green as in done
var changeColor = (changing) => {
  if (changing.classList.contains("green-objective")) {
    changing.classList.remove("green-objective");
    return;
  }
  changing.classList.add("green-objective");
};
