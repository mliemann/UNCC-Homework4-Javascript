var highscores = document.querySelector(".scores")
var timer = document.querySelector(".time")
var alerts = document.querySelector(".questions")
var all=document.querySelector(".starter")

var test = document.querySelector(".startbutton")
var test1 = document.querySelector("#startbutton1")
var QI = document.querySelector("#questionInput")
var remove1= document.querySelector("#questionRemove")
var LQ=document.querySelector("#listQuestions")
var namearray = []
var scorearray =[]
var score = 0
var secondsLeft = 30;
console.log(namearray)
//renderhighscores
highscores.onclick = function scores(){
  all.innerHTML=null;
      all1 = document.createElement('div');
      all2 = document.createElement('h1');
      all2.setAttribute("id", "name");
      all2.classList.add("finalscores1")
      all3 = document.createElement('h1');
      all3.setAttribute("id", "score");
      all3.classList.add("finalscores1")
      all.appendChild(all1);
      all1.appendChild(all2)
      all1.appendChild(all3);
      var all4a = localStorage.getItem("all4a");
      var savescore1 = localStorage.getItem("savescore1");

      if (!all4a || !savescore1) {
        return;
      }

      all2.textContent = all4a;
      all3.textContent = savescore1;

}

test1.onclick= function start(){
  test1.remove()
  startTimer()
   Q1();
   all1 = document.createElement('div');
   all2 = document.createElement('h1');
   all2.classList.add("#questionInput")
   all.appendChild(all1);
}

function deductTimeBy(seconds) {
  secondsLeft -= seconds;
  displayTime();
  return
}

function displayTime() {
    timer.textContent = secondsLeft + " seconds left";
   }
   
function startTimer() {
     totalTimeInterval = setInterval(function() {
       secondsLeft--;
       displayTime();
       if (secondsLeft === 0) {
        clearInterval(totalTimeInterval);
        secondsLeft.textContent = 0;
        endGame();
      }
     }, 1000);
   }


  function endGame(){
    all.innerHTML = null;
    all1 = document.createElement('div');
    all2 = document.createElement('h1');
    all2.innerHTML = "You Lost. Your Score is: 0" 
    all2.classList.add("#questionInput")
    all.appendChild(all1);
    all1.appendChild(all2)
  }

  //question4
function Q1() {
  QI.textContent= "1. What is a string?"
  remove1.remove()
  var questions1 = ["A. A quoted sequence of characters.",
    "B. A collection of items stored at contiguous memory locations.",
    "C. Items mapped directly to ranges.",
    "D. None of the above. "]
  var number = ['0','1','2','3']
  for (i = 0; i < questions1.length; i++) {
     listItem = document.createElement('button');
     listItem.innerHTML = questions1[i];
     listItem.classList.add("listQuestions1")
     listItem.setAttribute("id", "button" + number[i])
     LQ.appendChild(listItem);
     console.log(listItem)
    }
  var answer1 =document.querySelector('#button0')
  var answer2 =document.querySelector('#button1')
  var answer3 =document.querySelector('#button2')
  var answer4 =document.querySelector('#button3')
  answer1.onclick =function rightanswer(){
    score++;
    console.log(score)
    answer1.remove()
    answer2.remove()
    answer3.remove()
    answer4.remove()
    Q2()
  }
  answer2.onclick =function wronganswer(){
    answer1.remove()
    answer2.remove()
    answer3.remove()
    answer4.remove()
    deductTimeBy(10)
    Q2()
  }
  answer3.onclick =function wronganswer(){
    answer1.remove()
    answer2.remove()
    answer3.remove()
    answer4.remove()
    deductTimeBy(10)
    Q2()
  }
  answer4.onclick =function wronganswer(){
    answer1.remove()
    answer2.remove()
    answer3.remove()
    answer4.remove()
    deductTimeBy(10)
    Q2()
  }

  //question3
  function Q2(){
  QI.textContent= "2. What is HTML?"
  var questions2 = [ "A. A  language for specifying how documents are presented to users.",
  "B. A computer programming language commonly used to create interactive effects within web browsers.",
  "C. A standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages",
  "D. None of the above."]
  number = ['0','1','2','3']
  for (i = 0; i < questions2.length; i++) {
    listItem = document.createElement('button');
    listItem.innerHTML = questions2[i];
    listItem.classList.add("listQuestions1")
    listItem.setAttribute("id", "button" + number[i])
    LQ.appendChild(listItem);
    console.log(listItem)
    }
    var answer1 =document.querySelector('#button0')
    var answer2 =document.querySelector('#button1')
    var answer3 =document.querySelector('#button2')
    var answer4 =document.querySelector('#button3')
    answer1.onclick =function rightanswer(){
      score++;
      console.log(score)
      answer1.remove()
      answer2.remove()
      answer3.remove()
      answer4.remove()
      Q3()
    }
    answer2.onclick =function wronganswer(){
      answer1.remove()
      answer2.remove()
      answer3.remove()
      answer4.remove()
      deductTimeBy(10)
      Q3()
    }
    answer3.onclick =function wronganswer(){
      answer1.remove()
      answer2.remove()
      answer3.remove()
      answer4.remove()
      deductTimeBy(10)
      Q3()
    }
    answer4.onclick =function wronganswer(){
      answer1.remove()
      answer2.remove()
      answer3.remove()
      answer4.remove()
      deductTimeBy(10)
      Q3()
    }
    
  }

  //question2
  function Q3(){
    QI.textContent= "3. What is Javascript? "
    var questions2 = ["A. A  language for specifying how documents are presented to users.",
    "B. A computer programming language commonly used to create interactive effects within web browsers.",
    "C. A standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages",
    "D. None of the above."]     
    number = ['0','1','2','3']
    for (i = 0; i < questions2.length; i++) {
      listItem = document.createElement('button');
      listItem.innerHTML = questions2[i];
      listItem.classList.add("listQuestions1")
      listItem.setAttribute("id", "button" + number[i])
      LQ.appendChild(listItem);
      console.log(listItem)
      }
      var answer1 =document.querySelector('#button0')
      var answer2 =document.querySelector('#button1')
      var answer3 =document.querySelector('#button2')
      var answer4 =document.querySelector('#button3')
      answer1.onclick =function wronganswer(){
        answer1.remove()
        answer2.remove()
        answer3.remove()
        answer4.remove()
        deductTimeBy(10)
        Q4()
      }
      answer2.onclick =function rightanswer(){
        score++;
        console.log(score)
        answer1.remove()
        answer2.remove()
        answer3.remove()
        answer4.remove()
        Q4()
      }
      answer3.onclick =function wronganswer(){
        answer1.remove()
        answer2.remove()
        answer3.remove()
        answer4.remove()
        deductTimeBy(10)
        Q4()
      }
      answer4.onclick =function wronganswer(){
        answer1.remove()
        answer2.remove()
        answer3.remove()
        answer4.remove()
        deductTimeBy(10)
        Q4()
      }
      
    }

    //question 1
    function Q4(){
      QI.textContent= "4. What is CSS? "
      var questions2 = [ "A. A  language for specifying how documents are presented to users.",
      "B. A computer programming language commonly used to create interactive effects within web browsers.",
      "C. A standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages",
      "D. None of the above."]
         
      number = ['0','1','2','3']
      for (i = 0; i < questions2.length; i++) {
        listItem = document.createElement('button');
        listItem.innerHTML = questions2[i];
        listItem.classList.add("listQuestions1")
        listItem.setAttribute("id", "button" + number[i])
        LQ.appendChild(listItem);
        console.log(listItem)
        }
        var answer1 =document.querySelector('#button0')
        var answer2 =document.querySelector('#button1')
        var answer3 =document.querySelector('#button2')
        var answer4 =document.querySelector('#button3')
        answer1.onclick =function wronganswer(){
          answer1.remove()
          answer2.remove()
          answer3.remove()
          answer4.remove()
          getScore()
        }
        answer2.onclick =function wronganswer(){
          answer1.remove()
          answer2.remove()
          answer3.remove()
          answer4.remove()
          getScore()
        }
        answer3.onclick =function rightanswer(){
          score++;
          console.log(score)
          answer1.remove()
          answer2.remove()
          answer3.remove()
          answer4.remove()
          getScore()
         
        }
        answer4.onclick =function wronganswer(){
          answer1.remove()
          answer2.remove()
          answer3.remove()
          answer4.remove()
          getScore()
        
      }

    
  
  }
    console.log(namearray)
    console.log(scorearray)
}


function init() {
  var storedNames = JSON.parse(localStorage.getItem("namearray"));
  var storedScores = JSON.parse(localStorage.getItem("scorearray"))

  if (storedScores !== null || storedNames !== null) {
    namearray = storedNames;
    scorearray= storedScores
}
}

  //compute final score
  function getScore(){
    var finalscore = score * 25
    console.log(finalscore)
    var finalseconds = secondsLeft;
    clearTimeout(totalTimeInterval);
    timer.textContent =  "Clock stopped at: " + finalseconds ;
    all.innerHTML = null;
    all1 = document.createElement('div');
    all2 = document.createElement('h1');
    all4= document.createElement('input')
    all3 =document.createElement('button');
    all2.innerHTML = "Your Score is: " +finalscore;
    all2.classList.add("#questionInput");
    all3.classList.add('startbutton2');
    all4.classList.add("input")
    all.appendChild(all1);
    all.appendChild(all4)
    all1.appendChild(all2);
    all.appendChild(all3);
    all3.innerHTML = "Save your score?";
 
  //savescore to local storage
  all3.onclick= function savescore(event){
    event.preventDefault();
    var namearray = []
    var scorearray =[]
    var all4a = document.querySelector(".input").value
    var savescore1= finalscore
    if (all4a === "" || savescore1 === "") {
      return;
    }
    
    scorearray.push(savescore1);
    namearray.push(all4a)
    localStorage.setItem("all4a", JSON.stringify (namearray))
    localStorage.setItem("savescore1", JSON.stringify(scorearray));
    console.log(namearray)
    console.log(scorearray)
    renderscore()
  
  //renderscore
  function renderscore() {all.innerHTML=null;
    all1 = document.createElement('div');
    all.appendChild(all1);
    
    for (var i = 0; i < namearray.length; i++) {
      var namearray1 = namearray[i];
      var scorearray1 = scorearray[i]
    
      console.log(namearray1)
      console.log(scorearray1)
    
      all2 = document.createElement('h1');
      all2.setAttribute("id", "name");
      all2.classList.add("finalscores1")
      all2.textContent = namearray1;
      all2.setAttribute("data-index", i);
    
      all3 = document.createElement('h1');
      all3.setAttribute("id", "score");
      all3.classList.add("finalscores1")
      all3.textContent = scorearray1;
      all3.setAttribute("data-index", i);
    
      all1.appendChild(all2);
      all1.appendChild(all3);
      }
    }
    }
}

