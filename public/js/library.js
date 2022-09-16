function Modal(event) {
    event.preventDefault();
  
    var link = document.querySelector("#link").value;
    var description = document.querySelector("#description").value;
    var category = document.querySelector("#category").value;
    if (!link || !description || !category) {
      
      var alert = document.createElement("p");
      alert.textContent = "Please make sure you enter your information in all fields!"
      alertText.append(alert)
    } else {
        // Submit to server
    }
  
  }
  theSubmitButton.addEventListener("click", Modal);
