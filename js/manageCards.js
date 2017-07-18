var cardsList = [];

var cardTemplate = "";
var cardsBox = document.querySelector("#cards-box");
var addCardPopup = document.querySelector("#add-card-popup");

(function Cards(cardsList){
  // Initialize all notes/cards management functions/properties
  this.init = function() {
    this.refreshCards();
    this.toggleAddCardsPopup();
    this.addCard();
  }

  // Update the actual state of all cards in the cards container
  this.refreshCards = function() {

    cardTemplate = "";

    cardsList.forEach(function(card, i) {
      cardTemplate += '<div class="card">';
      cardTemplate +=   '<h3>' + card.title + '</h3>';
      cardTemplate +=   '<i class="fa fa-close fa-lg close-button" data-target="' + i +'"></i>';
      cardTemplate +=   '<p>' + card.content + '</p>';
      cardTemplate += '</div>';
    });

    cardsBox.innerHTML = "";
    cardsBox.insertAdjacentHTML("afterbegin", cardTemplate);
    if(cardsList.length <= 0) {
      cardsBox.parentNode.classList.toggle("isEmpty");
    }else {
      cardsBox.parentNode.classList.remove("isEmpty");
    }
    deleteCard();
  }

  // Open or close popup to add a new note/card
  this.toggleAddCardsPopup = function() {
    function openPopup() { addCardPopup.style.visibility = "visible"; }
    function closePopup() { addCardPopup.style.visibility = "hidden"; }

    document.querySelector("#add-card").addEventListener("click", openPopup);
    document.querySelector("#add-new-card-btn").addEventListener("click", openPopup);
    document.querySelector("#close-popup-btn").addEventListener("click", closePopup);
  }

  // Add a new card to the document
  this.addCard = function() {

    function getNoteData() {
      var title = document.querySelector("#title").value;
      var description = document.querySelector("#description").value;
      var cardElements = [title, description];

      if(validate(cardElements)) {
        document.querySelector("#add-card-form").reset();
        cardsList.push({title: title, content: description});
        addCardPopup.style.visibility = "hidden";
        refreshCards();
      }else {
        console.log("Error");
      }
    }

    this.validate = function(elements) {
      for(let i = 0; i < elements.length; i++) {
        if(!elements[i] == "") {
          return true;
        }
        return false;
      }
    }

    document.querySelector("#add-card-form").addEventListener("submit", function(evt) {
      evt.preventDefault();
      getNoteData();
    });
  }

  this.deleteCard = function() {
    var cardCloseBtn = document.querySelectorAll(".close-button");
    function deleteClickedCard(clickedCard) {
      var cardId = parseInt(clickedCard.getAttribute("data-target"));
      cardsList.splice(cardId, 1);
      refreshCards();
    }

    cardCloseBtn.forEach(function(cardItem) {
      cardItem.addEventListener("click", function() { deleteClickedCard(this); });
    });
  }

  // Starts the init function
  this.init();
})(cardsList);
