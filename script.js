// Add a new task by pressing 'Add New Task' button
var addTaskButton = document.getElementById("addtask");
addTaskButton.addEventListener("click", addListAfterClick);

// Add a new task by pressing 'Enter' on keyboard
var	userInput = document.getElementById("userinput");
userInput.addEventListener("keypress", addListAfterKeypress);

// Select list
var	ul = document.querySelector("ul");

// Select all list items
var liAll = document.querySelectorAll("li");

// <p/>'There are currently no items in this list.'
var noItemsInList = document.getElementById("noitems");

// Display/Hide 'There are currently no items in this list.'
function displayNoItemsInList() {
	// var hide = document.getElementById("noitems");
	if(ul.childNodes.length <= 3) {
	noItemsInList.style.display = "block";;
	} else {
	noItemsInList.style.display = "none";;
	}
}

// Restrict adding empty strings in the list
function userInputLength () {
	return userInput.value.length;
}

function addListAfterClick() {
	if (userInputLength() > 0) {
		createListElement();
		displayNoItemsInList();
	}
}

function addListAfterKeypress(event) {
	if (userInputLength() > 0 && event.which === 13) {
		createListElement();
		displayNoItemsInList();
	}
}

// Create a new list entry
function createListElement () {
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(userInput.value));
		ul.appendChild(li);
		userInput.value = "";
	decorateListElement(li);
}

// Mark items as done
function toggleDone () {
	this.classList.toggle("done");
}

// Decorate list items
function decorateListElement(listElement) {
	var spanDeleteButton = document.createElement("button");
	var spanLine = document.createElement("hr")
	spanDeleteButton.appendChild(document.createTextNode("\u{1F5D1}"));
	spanDeleteButton.className = "close";

	listElement.appendChild(spanDeleteButton);
	listElement.appendChild(spanLine);
	listElement.addEventListener("click", toggleDone);
	spanDeleteButton.addEventListener("click", deleteListElement);
	// spanDeleteButton.addEventListener("click", foo);
	spanDeleteButton.addEventListener("click", displayNoItemsInList);
}

liAll.forEach(decorateListElement);

// Delete list items
function deleteListElement(e) {
    ul.removeChild(e.target.parentElement);
}
