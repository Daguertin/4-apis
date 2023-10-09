/*
//   - create index, style, app files and connect them
  - build a login component (email and password) input fields
  - create a submit button that when clicked will check if your information matches that of in a makeshift database
  - makeshift database should just be an array of a few objects with properties of email and password
  - if user doesn't exist, update an h1 with user does not exist; do the same for incorrect password; or when logged in
  - have another button that will switch between login and register
  - when clicked, it adds another input fields asking for first and last name
  - SPICEY MODE: make sure that the button itself flips from Register to Login based on what's being rendered on screen
*/

// login = document.getElementById("login")
// password = document.getElementById("password")
// Buttn = document.getElementById("logbutton")
// const db = (
//     {name: "Daniel G", password: "CanIPetThatDog?"},
//     {name: "Steve K",  password: "Iamverygoodatcodes"},
//     {name: "Julia M",  password: "CanYouUploadThat1.2?"}
// )


// // login.eventlistener()
// Buttn.eventlistener(click, response => {console.log(response)}).preventdefault("response")
// console.log(response)
// // ! remember how to use preventdefault()


console.log("it works");

const db = [
  {
    email: "test@test.com",
    password: "test",
  },
  { email: "rob@test.com", password: "rob" },
];
/* 
- read the input from both the email and password fields
- check if the email and password are in the database
- action to handle if the submit button is clicked
*/

const email = document.getElementById("email");
const password = document.querySelector("#password");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("form submitted");
  console.log(email.value);
  console.log(password.value);

  const userFound = db.find((user) => {
    if (user.email === email.value && user.password === password.value) {
      return true;
    }
  });

  console.log(userFound);
});
