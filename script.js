function homepage() {
    location.replace("file:///C:/Users/comp5205817/Documents/Assignment%202%20web/homepage.html")
}
function meettheteam() {
    location.replace("file:///C:/Users/comp5205817/Documents/Assignment%202%20web/meettheteam.html")
}
function getinvolved() {
    location.replace("file:///C:/Users/comp5205817/Documents/Assignment%202%20web/getinvolved.html?")
}
function sub() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let telephone = document.getElementById("telephone").value.trim();
    let message = document.getElementById("message");

    if (name === "" || email === "" || telephone === "") {
        message.textContent = "You must enter all fields";
        message.style.color = "red";
    } else {
        message.textContent = "Form submitted";
        message.style.color = "green";
    }
}