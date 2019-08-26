const username = document.querySelector("#name");
const password = document.querySelector("#pass");
const addbtn = document.querySelector(".addBtn");

function createStore() {
  let store = JSON.parse(localStorage.getItem("store"));
  if (store === null) {
    localStorage.setItem("store", JSON.stringify([]));
    return store;
  } else {
    return store;
  }
}

createStore();

function addUser() {
  let store = createStore();
  let userNameInput = username.value.trim();
  let passWordInput = password.value.trim();

  if (userNameInput === "") {
    alert("please type a username");
    return false;
  } else if (passWordInput !== passWordInput || passWordInput === "") {
    alert("please provide a valid passsword");
    return false;
  }

  const User = {
    username: userNameInput,
    password: passWordInput
  };
  store.unshift(User);
  localStorage.setItem("store", JSON.stringify(store));
}

function checkInfo() {
  let store = JSON.parse(localStorage.getItem("store"));
  for (let a = 0; a < store.length; a++) {
    if (username.value != store[a].username) {
      alert("username is either invalid or does not exist");
      return false;
    } else if (password.value != store[a].password) {
      alert("password does not exist");
      return false;
    } else {
      localStorage.setItem("username", store[a].username);
      window.location.href = "index.html";

      return true;
    }
  }
}

addbtn.onclick = checkInfo;
// addbtn.onclick = addUser;


