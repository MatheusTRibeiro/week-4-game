var targetNumber = Math.floor(Math.random() * 71) + 50;

$("#number-to-guess").text("Number to Guess: " + targetNumber);

var crystals = $("#crystals");
var counter = 0;
var numberOptions = [20, 8, 2, 15];
var wins = 0;
var losses = 0;

for (var i = 0; i < numberOptions.length; i++) {

  
    var imageCrystal = $("<img>");

   
    imageCrystal.addClass("crystal-image");

   
    imageCrystal.attr("src", "assets/images/spinning-dioamond-1226-1003.gif");

 
    imageCrystal.attr("data-crystalvalue", Math.floor(Math.random() * (20) + 1));


    crystals.append(imageCrystal);
  }


$("#crystals").on("click", ".crystal-image", function() {
    
var crystalValue = ($(this).attr("data-crystalvalue"));
crystalValue = parseInt(crystalValue);

  counter += crystalValue;

  alert("New Score: " + counter);

if (counter === targetNumber) {
    wins++;
   
    counter = 0;
    

} else if (counter >= targetNumber) {
    losses++;
    
    counter = 0;   
}

 // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
 var html =
 "<p>Wins: " + wins + "</p>" +
 "<p>Losses: " + losses + "</p>";
 

// Set the inner HTML contents of the #game div to our html string
document.querySelector("#game").innerHTML = html;
});

