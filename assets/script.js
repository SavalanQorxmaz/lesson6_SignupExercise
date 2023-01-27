
const signup = document.getElementById("signup");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
confirmPassword.readOnly = true;
const button = document.getElementById("button");
const errorMessage = document.getElementById("error-message");
const checkTerms = document.getElementById("check-terms");




class Person{
    constructor(firstName, lastName, email, password){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}

const allValueTrust =[false, false, false, false, false, false]

let flag = true;

// setir uzunlugunun yoxlanmasi
function checkLength(element, len) {
    if(element.value.length < len){
       
        element.style.border = "2px solid red";
        return false;
    }else{
        element.style.border = "2px solid rgb(3, 86, 26)";
        return true;
    }
}

// setirin qaydalara uygunlugunun yoxlanmasi funksiyasi
function checkPasswordIsLegal(password){
    if(!checkLength(password,8)){
        errorMessage.innerHTML = "parol qisadir";
        return false;
    }else {
         errorMessage.innerHTML = " ";
         return true;

    }

}
// setirleri eyniliyinin yoxlanmasi funksiyasi
function checkPasswordIsSame(pas1, pas2){
  
        if(pas1.value == pas2.value){
            errorMessage.innerHTML = " ";
            pas2.style.border = "2px solid rgb(3, 86, 26)";
            return true;
           
        }else{
            errorMessage.innerHTML = "parollar uygun deyil";
            pas2.style.border = "2px solid red";
            return false;
        }
   

    }
    

// password inputun yoxlanmasi

password.onkeyup = () => {
    checkPasswordIsLegal(password); 
    if(checkPasswordIsLegal(password)){
         confirmPassword.readOnly = false;
        checkPasswordIsSame(password, confirmPassword);  
    }

    else{
        confirmPassword.value = "";
        confirmPassword.readOnly = true;

    }
    
   
}


confirmPassword.onkeyup = () => {
   
    checkPasswordIsSame(password, confirmPassword);
   }
 
    
   
 [firstName, lastName, email].map((val) =>{

    val.addEventListener("focusout",() =>{

        let valueInput = val.value.trim();
        let valueInputArray =valueInput.split(" ");
        let newValueInputArray = []
       if(valueInputArray.every((el)=>{
        return el.length>1
    })) {
        for(let i in valueInputArray){
            newValueInputArray[i] = valueInputArray[i].charAt(0).toUpperCase() + valueInputArray[i].slice(1).toLowerCase();
           
           }  
           val.value = newValueInputArray.join(" ");
           val.style.border = "2px solid rgb(3, 86, 26)";
           errorMessage.innerHTML = "";
    } else{
    val.style.border = "2px solid red";
    errorMessage.innerHTML = "1 herfli ad olmaz";


    }
        
       
        
       
        })
       
     })





button.addEventListener("click", () => {

    const personArray = [firstName,lastName, email, password, confirmPassword];
   
    if(personArray.every(
        (v) =>{
           return (v.style.getPropertyValue("border") == "2px solid rgb(3, 86, 26)")
        }
    )){
     
        const person = new Person(firstName.value, lastName.value, email.value, password.value, confirmPassword.value);
        console.log(person);
        personArray.map((v) => {
            v.value = "";
            v.style.border = "2px solid #502904"
        })

    }
else{
    errorMessage.innerHTML = "Melumatlarin tamligini yoxlayin"
}
  

 
  })









