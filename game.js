var buttonColours= ["red", "blue", "green", "yellow"]
var gamePattern = [];

var userClickedPattern = [];

$(".btn").click(function() {

    //2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
    var userChosenColour = $(this).attr("id");
  
    //4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
    userClickedPattern.push(userChosenColour);
  
    //console.log(userClickedPattern);
  
  });


function nextSequence(){
    var randomNumber = Math.floor(Math.random()*3)

    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}



// Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.


