//step 3
const toDos = [];

if (JSON.parse(localStorage.getItem("list item")) == null) {
  toDos[0] = "wake up";
} else if (toDos[0] == null) {
  toDos.splice(0, 1, "wake up");
} else {
  toDos = JSON.parse(localStorage.getItem("list item"));
}

//step 6
const deleteListItem = (ulItem, liText) => {
  ulItem.remove();

  toDos.forEach((item, index) => {
    if (item === liText.innerHTML) {
      toDos.splice(index, 1);
      localStorage.setItem("list item", JSON.stringify(toDos));
    }
  });
};

//step 7
const updateListItem = (liText) => {
  oldItem = liText.innerHTML;
  newItem = prompt("what the name of new task?");

  if (newItem === "") {
    alert("you enter empty value");
  } else {
    liText.innerHTML = newItem;

    toDos.forEach((item, index) => {
      if (item === oldItem) {
        toDos[index] = newItem;
        localStorage.setItem("list item", JSON.stringify(toDos));
      }
    });
  }
};

//step 1
const body = document.querySelector("body");
const heading = document.createElement("h1");
heading.innerHTML = "Todo List";
body.append(heading);

//step 2
const ulList = document.createElement("ul");
body.append(ulList);

//step 4
const renderList = () => {
  toDos.forEach((item) => {
    const btnDelete = document.createElement("button");
    btnDelete.innerHTML = "delete";
    btnDelete.style.marginLeft = "2rem";
    btnDelete.className = "btn btn-danger btn-sm";

    const btnUpdate = document.createElement("button");
    btnUpdate.innerHTML = "update";
    btnUpdate.style.marginLeft = "2rem";
    btnUpdate.classList = "btn btn-success btn-sm";

    const liText = document.createElement("p");
    liText.innerHTML = item;
    liText.style.display = "inline";
    liText.className = "col-md-2";

    const ulItem = document.createElement("li");

    ulItem.append(liText);
    ulItem.append(btnDelete);
    ulItem.append(btnUpdate);
    ulList.append(ulItem);

    btnDelete.addEventListener("click", () => deleteListItem(ulItem, liText));
    btnUpdate.addEventListener("click", () => updateListItem(liText));
  });
};

renderList();

//step 5
const input = document.createElement("input");
input.style.margin = " 0.5rem 1rem ";
input.className = "col-md-2";
input.placeholder = "enter new to do hear ";

const button = document.createElement("button");
button.innerHTML = "add toDo";
button.style.marginLeft = "2rem";
button.className = "btn btn-primary";

body.append(input);
body.append(button);

const addToList = () => {
  if (input.value == "") {
    alert("pleas inter input");
  } else {
    const btnDelete = document.createElement("button");
    btnDelete.innerHTML = "delete";
    btnDelete.style.marginLeft = "2rem";
    btnDelete.className = "btn btn-danger btn-sm";

    const btnUpdate = document.createElement("button");
    btnUpdate.innerHTML = "update";
    btnUpdate.style.marginLeft = "2rem";
    btnUpdate.classList = "btn btn-success btn-sm";

    const liText = document.createElement("p");
    liText.innerHTML = input.value;
    liText.style.display = "inline";
    liText.className = "col-md-2";

    const ulItem = document.createElement("li");
    ulItem.append(liText);
    ulItem.append(btnDelete);
    ulItem.append(btnUpdate);
    ulList.append(ulItem);

    toDos.push(input.value);
    localStorage.setItem("list item", JSON.stringify(toDos));

    btnDelete.addEventListener("click", () => deleteListItem(ulItem));
    btnUpdate.addEventListener("click", () => updateListItem(liText));
  }
};

button.addEventListener("click", () => addToList());
