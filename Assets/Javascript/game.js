var card = $("#second-container");

// Questions
var questions = [
  {
    question: "What state was Khalid born in?",
    answers: ["Georgia", "Texas", "California", "Idaho"],
    correctAnswer: "Georgia"
  },
  {
    question: "In 2017 Khalid won a VMA for what?",
    answers: ["Best Music Video", "Best New Artist", "Push Artist of the Year", "Video with a Message"],
    correctAnswer: "Best new artist"
  },
  {
    question: "What is the song Khalid sang on his TV debut?",
    answers: ["Young, Dumb and Broke", "My Bad", "Suncity", "Location"],
    correctAnswer: "Location"
  },
  {
    question: "What notable rapper has Khalid collaborated with?",
    answers: ["Eminem", "Lil Wayne", "Kendrick Lamar", "Ice Cube (he's notable to me mmk)"],
    correctAnswer: "Kendrick Lamar"
  },
  {
    question: "What instrument does Khalid play?",
    answers: ["Piano", "Guitar", "Didgeridoo", "He can't play an instrument"],
    correctAnswer: "He can't play an instrument"
  },
  {
    question: "Which famous Kardashian/Jenner is a fan of Khalid?",
    answers: ["Kim", "Kris", "North", "Kylie"],
    correctAnswer: "Kylie"
  },
  {
    question: "Which song of Khalid's was featured on Grey's Anatomy?",
    answers: ["Angels", "This Way", "Better", "lovely"],
    correctAnswer: "Angels"
  },
  {
    question: "Will you buy me tickets to Khalid?",
    answers: ["Yes", "Yes", "Yes", "Yes"],
    correctAnswer: "Yes"
  }
];

// setInterval hold
var timer;

var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#second-container").prepend(
      "<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>"
    );

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      card.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        card.append("<input type='radio' name='question-" + i +
          "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    card.append("<button id='done'>Done</button>");
  },

  done: function() {
    var inputs = card.children("input:checked");
    for (var i = 0; i < inputs.length; i++) {
      if ($(inputs[i]).val() === questions[i].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    }
    this.result();
  },

  result: function() {
    clearInterval(timer);

    $("#second-container h2").remove();

    card.html("<h2>All Done!</h2>");
    card.append("<h3>Correct Answers: " + this.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
  }
};

// event listeners

$(document).on("click", "#start", function() {
  game.start();
});

$(document).on("click", "#done", function() {
  game.done();
});
