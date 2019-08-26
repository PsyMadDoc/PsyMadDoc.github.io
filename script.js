
var button = document.getElementById("enter");
var	input = document.getElementById("userinput");
var	ul = document.querySelector("ul");
var liAll = document.querySelectorAll("li");
var deleteButton = document.getElementsByClassName("close");

function inputLength () {
	return input.value.length;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

function toggleDone () {
	this.classList.toggle("done");
}

for (var i = 0; i < liAll.length; i++) {
	var spanButton = document.createElement("button");
	var spanLine = document.createElement("hr")
	spanButton.appendChild(document.createTextNode("\u{1F5D1}"));
	spanButton.className = "close";

	liAll[i].appendChild(spanButton);
	liAll[i].appendChild(spanLine);
	liAll[i].addEventListener("click", toggleDone);

}

function createListElement () {
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";

	var spanButton = document.createElement("button");
	var spanLine = document.createElement("hr")
	spanButton.appendChild(document.createTextNode("\u{1F5D1}"));
	spanButton.className = "close";

	li.appendChild(spanButton);
	li.appendChild(spanLine);
	li.addEventListener("click", toggleDone);
	// deleteButton.addEventListener("click", deleteListElement);

}

// function deleteListElement () {
// 	deleteButton.parentNode.removeChild(deleteButton);
// }