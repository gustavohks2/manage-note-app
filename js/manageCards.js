var cardsList = [];

var cardTemplate = "";
var cardsBox = document.querySelector("#cards-box");
var addCardPopup = document.querySelector("#add-card-popup");

(function Cards(cardsList){
  this.init = function() {
    this.refreshCards();
    this.openAddCardPopup();
    this.addCard();
  }

  this.refreshCards = function() {
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

  this.openAddCardPopup = function() {
    function openPopup() {
      addCardPopup.style.visibility = "visible";
    }

    document.querySelector("#add-card").addEventListener("click", openPopup);
  }

  this.addCard = function() {

    function getNoteData() {
      var title = document.querySelector("#title").value;
      var description = document.querySelector("#description").value;

      document.querySelector("#add-card-form").reset();
      cardsList.push({title: title, content: description});

      addCardPopup.style.visibility = "hidden";
      refreshCards();
    }

    document.querySelector("#add-card-form").addEventListener("submit", function(evt) {
      evt.preventDefault();
      getNoteData();
    });
  }

  this.init();
})(cardsList);
