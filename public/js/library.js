var cardName = document.querySelector("#link");
var description = document.querySelector("#description");
var submitBtn = document.querySelector('#theSubmitButton')

 const Modal = async (event) => {
    event.preventDefault();
  
    if (!cardName || !description) {
      alert.textContent = "Please make sure you enter your information in all fields!"
    } else {
      const response = await fetch('/api/cards', {
        method: 'POST',
        body: JSON.stringify({ cardName, description, }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.render('/');
      } else {
        window.alert('Failed to add card');
      }
    }
  }
  
  const cardInit = () => {
    let cardCreate = document.createElement('div');
    let namePrint = cardName.textContent;
    let descPrint = description.textContent;

    cardCreate.append(namePrint);
    cardCreate.append(descPrint);

  }
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
  

submitBtn.addEventListener("click", Modal, cardInit);

