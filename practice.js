//step 6
const deleteListItem = (ulItem) => {
  ulItem.remove();
};

//step 7
const updateListItem = (ulItem, btnDelete, btnUpdate) => {
  newItem = prompt("what the name of new task?");
  console.log(newItem);
  ulItem.innerHTML = newItem;
  ulItem.append(btnDelete);
  ulItem.append(btnUpdate);
};

//step 1
const body = document.querySelector("body");
const heading = document.createElement("h1");
heading.innerHTML = "Todo List";
body.append(heading);

//step 2
const ulList = document.createElement("ul");
body.append(ulList);

//step 3
const toDos = ["wake up", "eat breakfast", "code"];

//step 4
const renderList = () => {
  toDos.forEach((item) => {
    const btnDelete = document.createElement("button");
    btnDelete.innerHTML = "delete";

    const btnUpdate = document.createElement("button");
    btnUpdate.innerHTML = "update";

    const ulItem = document.createElement("li");
    ulItem.innerHTML = item;
    ulItem.append(btnDelete);
    ulItem.append(btnUpdate);
    ulList.append(ulItem);

    btnDelete.addEventListener("click", () => deleteListItem(ulItem));
    btnUpdate.addEventListener("click", () =>
      updateListItem(ulItem, btnDelete, btnUpdate)
    );
  });
};

renderList();

//step 5
const input = document.createElement("input");
const button = document.createElement("button");
button.innerHTML = "add toDo";

body.append(input);
body.append(button);

const addToList = () => {
  if (input.value == "") {
    alert("pleas inter input");
  } else {
    const ulItem = document.createElement("li");
    ulItem.innerHTML = input.value;

    const btnDelete = document.createElement("button");
    btnDelete.innerHTML = "delete";

    const btnUpdate = document.createElement("button");
    btnUpdate.innerHTML = "update";

    ulItem.append(btnDelete);
    ulItem.append(btnUpdate);
    ulList.append(ulItem);

    btnDelete.addEventListener("click", () => deleteListItem(ulItem));
    btnUpdate.addEventListener("click", () =>
      updateListItem(ulItem, btnDelete, btnUpdate)
    );
  }
};

button.addEventListener("click", () => addToList());
