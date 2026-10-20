document.getElementById("biodata-form").addEventListener("submit", function(event){
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let dob = document.getElementById("dob").value;
    let phone = document.getElementById("phone").value.trim();
    let gender = document.getElementById("gender").value.trim();
    let address = document.getElementById("address").value.trim();
    let state = document.getElementById("state").value.trim();
    let matno = document.getElementById("matno").value.trim();
    let department = document.getElementById("department").value.trim();
    let level = document.getElementById("level").value.trim();
    

    let message = document.getElementById("message");

    if (name === ""){
        message.textContent = "Please enter your full name.";
    } else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        message.textContent = "Please enter a valid email address"
    } else if(!/^\d{11}$/.test(phone)){
        message.textContent = "Phone number must contain 11 digits."
    } else if (gender === ""){
        message.textContent = "Please select your gender."
    } else if (dob === ""){
        message.textContent = "Please select your date of birth."
    } else if (address === ""){
        message.textContent = "Please enter your address."
    } else if (state === ""){
        message.textContent = "Please select your state."
    } else if (matno === ""){
        message.textContent = "Please select your matric number."
    }  else if (department === ""){
        message.textContent = "Please select your department"
    } else if (level === ""){
        message.textContent = "Please select your level"
    } else{
        message.textContent = "Form submitted successfully"
    }
})