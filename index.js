const textArea = document.querySelector(".textarea");

const button = document.querySelector(".buttoninput");

const todoList = document.querySelector(".todolist");

button.addEventListener("click", addToDoListItem);

function addToDoListItem() {

    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("itemall");
    const item = document.createElement("p");
    item.innerHTML = textArea.value;
    item.classList.add("item");

    toDoDiv.appendChild(item);

    if (textArea.value == '') return;

    const deleteButton = document.createElement("button");

    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can-arrow-up"></i>';

    deleteButton.classList.add("trash-button");

    toDoDiv.appendChild(deleteButton);

    console.log(toDoDiv);

    todoList.appendChild(toDoDiv);
    textArea.value = '';
}

todoList.addEventListener("click", deleteItem);

function deleteItem(e) {
    const item = e.target;
    console.log(item);

    if (item.classList[0] === "trash-button") {
        const parent = item.parentNode;
        parent.remove();
    }
}