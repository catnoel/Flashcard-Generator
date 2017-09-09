// This file should define a Node module that exports a constructor
// for creating basic flashcards, e.g.: module.exports = BasicCard;
// The constructor should accept two arguments: front and back. The
// constructed object should have a front property that contains the
// text on the front of the card. The constructed object should have a
// back property that contains the text on the back of the card.


BasicCard = function(front, back) {
	this.front = front;
	this.back = back;
	}

	var firstQuestion = new BasicCard("What is Cat's favorite Color?", "Red");
	var secondQuestion = new BasicCard("Where did Cat grow up?", "New York City")

	console.log(firstQuestion.front)
	setTimeout(function () {
  		console.log(firstQuestion.back)
	}, 3000);

	setTimeout(function () {
  		console.log(secondQuestion.front)
	}, 4000);

	setTimeout(function () {
  		console.log(secondQuestion.back)
	}, 8000);
