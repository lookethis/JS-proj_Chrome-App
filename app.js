const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginButtonClick() {
  // console.dir(loginInput.value);
  const username = loginInput.value;

  if (username === "") {
    alert("Please write your name");
  } else if (username.length >= 15) {
    alert("Please keep your name under 15characters.");
  }
}

loginButton.addEventListener("click", onLoginButtonClick);
