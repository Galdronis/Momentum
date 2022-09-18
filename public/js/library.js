 const Modal = async (event) => {
    event.preventDefault();
  
    var name = document.querySelector("#link").value;
    var description = document.querySelector("#description").value;
    if (!name || !description) {
      
      var alert = document.createElement("p");
      alert.textContent = "Please make sure you enter your information in all fields!"
      alertText.append(alert)
    } else {
      const response = await fetch('/api/cards/', {
        method: 'POST',
        body: JSON.stringify({ name, description, }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to add card');
      }
    }
  }

  theSubmitButton.addEventListener("click", Modal);

