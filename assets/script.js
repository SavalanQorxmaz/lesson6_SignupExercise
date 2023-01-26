
const signup = document.getElementById("signup");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");

const button = document.getElementById("button")

console.log(confirmPassword);
class Person{
    constructor(firstName, lastName, email, password){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}



button.addEventListener("click", () => {

    let fN = document.getElementById("firstName").value;
    let lN = document.getElementById("lastName").value;
    let em = document.getElementById("email").value;
    let pass = password.value;
    let confPass = confirmPassword.value;

    if(pass == confPass){
       
        const person = new Person(fN,lN,em,pass)
        console.log(person)
      }
      else {
       
        alert("parollar eyni deyil")
   

    
   }
})








