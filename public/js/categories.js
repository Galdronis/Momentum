function Modal(event) {
    event.preventDefault();
  
    var firstName = document.querySelector("#link").value;
    var lastName = document.querySelector("#description").value;
    var email = document.querySelector("#category").value;
    if (!firstName || !lastName || !email) {
      
      var alert = document.createElement("p");
      alert.textContent = "Please make sure you enter your information in all fields!"
      alertText.append(alert)
    } else {
        // Submit to server
    }
  
  }
  theSubmitButton.addEventListener("click", Modal);