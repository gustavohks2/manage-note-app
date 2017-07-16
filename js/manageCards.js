var cardsList = [
  {title: "Party at Thomas' house", content: "Buy a gift for Thomas, and clean my car before I go"}
];
var cardTemplate = "";
var cardsBox = document.querySelector("#cards-box");

(function Cards(cardsList){
  this.init = function() {
    this.refreshCards();
  }

  this.refreshCards = function() {
    cardsList.forEach(function(card) {
      cardTemplate += '<div class="card" data-target="">';
      cardTemplate +=   '<h3>' + card.title + '</h3>';
      cardTemplate +=   '<i class="fa fa-close fa-lg close-button"></i>';
      cardTemplate +=   '<p>' + card.content + '</p>';
      cardTemplate += '</div>';
    });

    cardsBox.innerHTML = cardTemplate;
  }

  this.init();
})(cardsList);
