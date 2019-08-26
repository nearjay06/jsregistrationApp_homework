const username = document.querySelector("#userName");
const password = document.querySelector("#passWord");
const confirm = document.querySelector("#confirmPass");
const addbtn = document.querySelector("#addBtn");
const form = document.querySelector("#form");

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

function addPerson() {
  let store = createStore();
  let userNameInput = userName.value.trim();
  let passWordInput = passWord.value.trim();
  let confirmPassInput = confirmPass.value.trim();

  if (userNameInput === ''){
    alert ('please type a username')
    return false; 
  } else if (passWordInput !== confirmPassInput ||
             passWordInput == ''
  
   ){
    alert ('please provide a valid password')
    return false;
  }

   
  const Person = {
    username: userNameInput,
    password: passWordInput,
    confirm: confirmPassInput
    
  };
  store.unshift(Person);
  localStorage.setItem("store", JSON.stringify(store));
}


addbtn.onclick = addPerson;
// form.onsubmit = displayName
