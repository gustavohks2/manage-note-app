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

    cardsList.forEach(function(card) {
      cardTemplate += '<div class="card" data-target="">';
      cardTemplate +=   '<h3>' + card.title + '</h3>';
      cardTemplate +=   '<i class="fa fa-close fa-lg close-button"></i>';
      cardTemplate +=   '<p>' + card.content + '</p>';
      cardTemplate += '</div>';
    });

    cardsBox.innerHTML = "";
    cardsBox.innerHTML = cardTemplate;
  }

  // Open or close popup to add a new note/card
  this.toggleAddCardsPopup = function() {
    function openPopup() { addCardPopup.style.visibility = "visible"; }
    function closePopup() { addCardPopup.style.visibility = "hidden"; }

    document.querySelector("#add-card").addEventListener("click", openPopup);
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



  // Starts the init function
  this.init();
})(cardsList);
