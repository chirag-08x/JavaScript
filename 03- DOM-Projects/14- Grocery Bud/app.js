// ************ Selecting Elements ******************
const form = document.querySelector(".form");
const formInput = document.querySelector(".form-item");
const submitBtn = document.querySelector(".submit-btn");
const itemsContainer = document.querySelector(".items-container");
const alerts = document.querySelector(".alert");
const clearItems = document.querySelector(".clear");

let editFlag = false;
let editElement;
let editID = "";

// ************ Event Listeners *********************

submitBtn.addEventListener("click", displayItems);
clearItems.addEventListener("click", clearAllItems);
window.addEventListener("DOMContentLoaded", loadFromLocalStorage);

// **************** Functions **********************

// Display items
function displayItems(e) {
  e.preventDefault();
  const id = new Date().getTime().toString();
  const value = formInput.value;
  if (value && !editFlag) {
    // Setting up the list
    const newElement = document.createElement("div");
    let uniqueId = document.createAttribute("data-id");
    uniqueId.value = id;
    newElement.setAttributeNode(uniqueId);
    newElement.classList.add("item");
    newElement.innerHTML = `<p class="item-name">${value}</p>
                            <div class="edit-icon icon">
                              <i class="fas fa-edit"></i>
                            </div>
                            <div class="delete-icon icon">
                              <i class="fas fa-trash"></i>
                            </div>`;
    itemsContainer.appendChild(newElement);
    // add to local storage
    setLocalStorage(id, value);
    // display alert
    displayAlert("item added to the list", "alert-green");
    // Set to default
    setToDefault();
    // Activate Clear items btn
    activateClearItems();
    // Delete specific item from the list
    const editItem = newElement.querySelector(".edit-icon");
    const deleteItem = newElement.querySelector(".delete-icon");

    deleteItem.addEventListener("click", deleteItemFromList);
    editItem.addEventListener("click", editItemsFromList);
  } else if (value && editFlag) {
    editElement.textContent = value;
    displayAlert("value changed", "alert-green");
    editLocalStorage(editID, value);
    setToDefault();
  } else {
    displayAlert("please enter value", "alert-red");
  }
}

// display alert
function displayAlert(text, alertType) {
  alerts.textContent = text;
  alerts.classList.add(alertType);

  setTimeout(function () {
    alerts.textContent = "";
    alerts.classList.remove(alertType);
  }, 1000);
}

// set back to default
function setToDefault() {
  formInput.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}

// activate clear items
function activateClearItems() {
  if (!clearItems.classList.contains("show-clear")) {
    clearItems.classList.add("show-clear");
  }
}

// clear all items from list
function clearAllItems() {
  const elements = document.querySelectorAll(".item");
  if (elements.length > 0) {
    elements.forEach(function (item) {
      itemsContainer.removeChild(item);
    });
    setToDefault();
    clearItems.classList.remove("show-clear");
    displayAlert("empty list", "alert-red");
  }
  localStorage.clear();
}

// Delete specific item from the list;
function deleteItemFromList(e) {
  const currDeleteElement = e.currentTarget.parentElement;
  const dataID = currDeleteElement.dataset.id;
  itemsContainer.removeChild(currDeleteElement);
  displayAlert("Item Removed", "alert-red");
  removeFromLocalStorage(dataID);
  setToDefault();
  const allItems = document.querySelectorAll(".item");
  if (allItems.length <= 0) {
    clearItems.classList.remove("show-clear");
  }
}

// Edit Specific item from the list
function editItemsFromList(e) {
  const element = e.currentTarget.parentElement;
  // set edit item
  editElement = e.currentTarget.previousElementSibling;
  // set form value
  formInput.value = editElement.textContent;
  editFlag = true;
  editID = element.dataset.id;
  submitBtn.textContent = "edit";
}

// ********************************* Setting Up Local Storage *************************************************
function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

function setLocalStorage(id, value) {
  const newStorageItem = { id: id, value: value };
  const localStorageItems = getLocalStorage();
  localStorageItems.push(newStorageItem);
  localStorage.setItem("list", JSON.stringify(localStorageItems));
}

function editLocalStorage(id, value) {
  const localStorageItems = getLocalStorage();
  localStorageItems.forEach(function (item) {
    if (item.id === id) {
      item.value = value;
    }
  });
  localStorage.setItem("list", JSON.stringify(localStorageItems));
}

function removeFromLocalStorage(id) {
  let localStorageItems = getLocalStorage();
  localStorageItems = localStorageItems.filter(function (item) {
    if (item.id != id) {
      return item;
    }
  });
  localStorage.setItem("list", JSON.stringify(localStorageItems));
}

function loadFromLocalStorage() {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach(function (item) {
      createListItems(item.id, item.value);
    });
    activateClearItems();
  }
}

function createListItems(id, value) {
  const element = document.createElement("div");
  element.classList.add("item");
  let uniqueId = document.createAttribute("data-id");
  uniqueId.value = id;
  element.setAttributeNode(uniqueId);
  element.innerHTML = `<p class="item-name">${value}</p>
                        <div class="edit-icon icon">
                          <i class="fas fa-edit"></i>
                        </div>
                        <div class="delete-icon icon">
                          <i class="fas fa-trash"></i>
                        </div>`;
  itemsContainer.appendChild(element);
  const editItem = element.querySelector(".edit-icon");
  const deleteItem = element.querySelector(".delete-icon");

  deleteItem.addEventListener("click", deleteItemFromList);
  editItem.addEventListener("click", editItemsFromList);
}
