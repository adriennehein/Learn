var num = Math.floor(Math.random()*101)
var guessesLeft = 6

function checker(){

  console.log(num)
  var guess = document.getElementById("userIn").value
  document.getElementById("header").innerHTML = guess
  if (guessesLeft <= 0) {
    document.getElementById("result").innerHTML = "You lose."
  } else if (guess  > num) {
     document.getElementById("result").innerHTML = "Your guess was too high. Try again."
  } else if (guess < num){
    document.getElementById("result").innerHTML = "Your guess was too low. Try again."
  } else if (guess == num){
    document.getElementById("result").innerHTML = "You win!"
  } else {
    document.getElementById("result").innerHTML = "Invalid entry."
  }
  document.getElementById("guesses").innerHTML = "Guesses Left:" + guessesLeft
  guessesLeft = guessesLeft -1
}



function oddEven() {
  var myInput = document.getElementById("userIn").value
  if (myInput % 2 === 0) {
    document.getElementById("result").innerHTML = "Your number is even."
  } else if (typeof(myInput) === "string")
    alert("Invalid Entry")
  } else {
    document.getElementById("result").innerHTML = "Your number is odd."
  }

}

function selector() {
  document.getElementsByClass("content").innerHTML = "<p>I control ALLLL the things</p>"
}


var array = document.getElementsByClassName("content")
  while (i < array.length) {
  el = "<p> I control all the thing </p>"
})
}
