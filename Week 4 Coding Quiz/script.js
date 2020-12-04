var button = document.querySelector('#start')


button.addEventListener('click', function(event) {
    console.log("I have been clicked!! I am the best in the world and I will not stop until I learn everything");
    var secondsLeft = 60;

    function setTime() {
        var timerInterval = setInterval(function() {
          secondsLeft--;

          if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
          }
      
        }, 1000);
      }

      var questions = [

        {
          question: "Which tool can you use to look at code on Google Chrome?",
          answers: {
            a: "Inspector",
            b: "Plugins",
            c: "Youtube",
            d: "Google Search"
          },
          correctAnswer: "a"
        }
      ];
    })
