var submitBtn = document.querySelector('#theSubmitButton')
 
 const Modal = async (event) => {
   event.preventDefault();
   var name = document.querySelector("#link").value;
   var description = document.querySelector("#description").value;
   console.log({name, description
   })
   
   if (!name || !description) {
     alert.textContent = "Please make sure you enter your information in all fields!"
    } else {
      const response = await fetch('/api/cards', {
        method: 'POST',
        body: JSON.stringify({ name, description, }),
        headers: { 'Content-Type': 'application/json' },
      });
      
      if (response.ok) {
        document.location.replace('/library');
      } else {
        window.alert('Failed to add card');
      }
    }
  }



  
  // const cardInit = () => {


  //   let cardCreate = document.createElement('div');
  //   let namePrint = cardName;
  //   let descPrint = description.value;

  //   cardCreate.append(namePrint);
  //   cardCreate.append(descPrint);
  // }

  // const getCards = () =>
  // fetch('/api/cards', {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });




  // const handleCardSave = () => {
  //   const newCard = {
  //     name: cardName.value,
  //     description: description.value,
  //   };
  //   saveCard(newCard).then(() => {
  //     getAndRenderCards();
  //     renderActiveCard();
  //   });
  // };
  
  getCards()

submitBtn.addEventListener("click", Modal);

