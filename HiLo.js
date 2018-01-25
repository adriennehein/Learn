//HiLo game

var yourName = prompt("What is your name?")
var random = Math.floor(Math.random()*101);
console.log(random)
var answer = prompt("Guess a number between 1 and 100: ");
var answerConversion = parseInt(answer, 10);
console.log(answerConversion)




function hiLo() {
  for(var i = 0; i < 8;) {
    if (answer > random) {
      answer = prompt("Your number is too high. Guess again: ");
      i++
      console.log(i)
    } else if (answer < random) {
      answer = prompt("Your number is too low. Guess again: ");
      i++
      console.log(i)
    } else if (answer == random) {
      alert("Congrats, " + yourName + ". Bingo!");
      return
    }
    else if (isNaN(answerConversion)) {
      answer = prompt("That's not a number. Try again!")
      i++
    }
  }
  if(i > 7){
    alert("you lose!")
  }
}

hiLo();

//Decisions

function greaterNum(a, b) {
  if(a > b) {
    return a;
  } else {
    return b;
  }
}

greaterNum(7, 2);
greaterNum(0, 4);

//World Translator

var es = "Hola, Mundo"
var de = "Guten Tag, Welt"
var en = "Hello, World"

function helloWorld(lang) {
  if(lang === "es") {
    return es;
  } else if(lang === "de") {
    return de;
  } else {
    return en;
  }
}


//Grade Assigner

function assignGrade(score) {
  if(score >= 90) {
    return "A"
  } else if(score >= 80) {
    return "B"
  } else if(score >= 70) {
    return "C"
  } else if(score >= 60) {
    return "D"
  } else {
    return "F"
  }
}

// Pluralizer


function pluralize(noun, number) {
  if (number === 1) {
    return number + " " + noun;
  } else if (number > 1) {
      if (noun === "goose") {
        return number + " " + "geese"
        }
      if (noun === "child") {
        return number + " " + "children"
      }
      else {
        return number + " " +  noun + "s"
      }
  }


}


//Iterator

function iteration(n) {
  for(var i = 0; i <= n; i++) {
    if (i % 2 == 0) {
      console.log(i + " is Even")
    }
    else {
      console.log(i + " is Odd")
    }
  }

}

iteration(15)

//Fizzbuzz

function iteration(n) {
  for(var i = 0; i <= n; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
      console.log("FizzBuzz")
    }
    else if (i % 5 == 0) {
      console.log("Buzz")
    }
    else if(i % 3 == 0) {
      console.log("Fizz")
    }
    else {
      console.log(i)
    }
  }

}

iteration(40)

//Reverse

function reverse(str) {
  var res = str.split(" ")
  console.log(res)
  
}

reverse("Hi my name is Alexa")
