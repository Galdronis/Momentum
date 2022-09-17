const createFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
    // Gather the data from the form elements on the page
    const email = document.querySelector('#enter-email').value.trim();
    const password = document.querySelector('#enter-password').value.trim();
  
    const package = {
      email, password
    }
    if (email && password) {
      console.log(package)
      // Send the e-mail and password to the server
      const response = await fetch('/api/users/create', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create account');
      }
    }
  };
  
    document.addEventListener('submit', createFormHandler);