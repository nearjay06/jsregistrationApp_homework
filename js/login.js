const username = document.querySelector("#name");
const password = document.querySelector("#pass");
const addbtn = document.querySelector(".addBtn");

function createStore(){  
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
  

  if (userNameInput === ''){
    alert ('please type a username')
    return false; 
  } else if (passWordInput !== passWordInput ||
             passWordInput === '')
    {
    alert ('please provide a valid passsword')
    return false;
  }
   
  const User = {
    username: userNameInput,
    password: passWordInput,
       
  };
  store.unshift(User);
  localStorage.setItem("store", JSON.stringify(store));
}

addbtn.onclick = addUser;
// form.onsubmit = displayName


