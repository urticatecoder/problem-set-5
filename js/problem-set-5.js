/*
 * Mario. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style half-pyramid of that height.
 *
 *     ##
 *    ###
 *   ####
 *  #####
 * ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function mario() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 1 CODE HERE
  document.getElementById("mario-easy-output").style.fontFamily = "monospace";
  let p = document.getElementById("mario-easy-output");
  p.innerHTML = "";
  height = prompt("Please enter a height from 1 to 23");
  while (height < 1 || height > 23 || height % 1 != 0){
    height = prompt("Please enter a height from 1 to 23");
  }
  let amount = height;
  let print = "##";
  let space = "";
  while (amount > 0){
    for(let i = 0; i < amount - 1; i++){
      space = space + "\xa0";
    }
    p.innerHTML += space + print + "<br/>";
    print = print + "#";
    amount = amount - 1;
    space = "";
  }


  ////////////////////////// DO NOT MODIFY
  check('mario', height); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Mario, Again. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style pyramid of that height.
 *
 *     ##  ##
 *    ###  ###
 *   ####  ####
 *  #####  #####
 * ######  ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function marioAgain() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 2 CODE HERE
  document.getElementById("mario-hard-output").style.fontFamily = "monospace";
  let p = document.getElementById("mario-hard-output");
  p.innerHTML = "";
  height = prompt("Please enter a height from 1 to 23");
  while (height < 1 || height > 23 || height % 1 != 0){
    height = prompt("Please enter a height from 1 to 23");
  }
  let amount = height;
  let print = "##";
  let space = "";
  while (amount > 0){
    for(let i = 0; i < amount - 1; i++){
      space = space + "\xa0";
    }
    p.innerHTML += space + print + "\xa0\xa0" + print + "<br/>";
    print = print + "#";
    amount = amount - 1;
    space = "";
  }
  //////////////////////////////// DO NOT MODIFY
  check('mario-again', height); // DO NOT MODIFY
  //////////////////////////////// DO NOT MODIFY
}

/*
 * Credit. 10 points.
 *
 * Write a function that prompts the user for a credit card number (valid
 * and invalid examples will be provided), and displays either:
 *   - an invalid image (provided)
 *   - an American Express image (provided)
 *   - a Mastercard image (provided)
 *   - a Visa image (provided)
 *
 * We'll use Luhn's algorithm to determine the validity of a credit card
 * number. Review the steps of the algorithm below.
 *
 *   0. Multiply every other digit by 2, starting with the number’s
 *      second-to-last digit, and then add those products' digits together.
 *   1. Add the sum to the sum of the digits that weren’t multiplied by 2.
 *   2. If the total’s last digit is 0 (or, put more formally, if the total
 *      modulo 10 is congruent to 0), the number is valid!
 *
 * American Express uses 15-digit numbers, starting with 34 or 37.
 * Mastercard uses uses 16-digit numbers, starting with 51, 52, 53, 54,
 * or 55. Visa uses 13- or 16-digit numbers, starting with 4.
 *
 * 378282246310005 should verify as American Express.
 * 371449635398431 should verify as American Express.
 * 5555555555554444 should verify as Mastercard.
 * 5105105105105100 should verify as Mastercard.
 * 4111111111111111 should verify as Visa.
 * 4012888888881881 should verify as Visa.
 *
 * Credit card numbers must be integers. Users should be continuously
 * re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function credit() {

  //////////// DO NOT MODIFY
  let card; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 3 CODE HERE

  /*
   * NOTE: After reading in the card number and storing it in the 'card'
   *       variable, do not modify it. If you find it necessary to manipulate
   *       this value, you will need to create a second variable to serve
   *       as a copy of the 'card' variable.
   */

  ///////////////////////// DO NOT MODIFY
  check('credit', card); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Guess. 5 points.
 *
 * Write a function that generates a random number, and asks the user to
 * try to guess this number. When all is said and done, your function
 * should output the random number and the number of attempts it took the
 * user to correctly guess that number. Your function should also provided
 * helpful hints, indicating whether the most recent guess was greater than
 * or less than the target.
 *
 * Random numbers must be between 1 and 1000. User guesses must be integers
 * within the range [1, 1000], and users should be continuously re-prompted
 * until they comply with this restriction. In the event a user guesses
 * something that violates this restriction, an attempt should not be
 * recorded.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function guess() {

  // WRITE YOUR EXERCISE 4 CODE HERE
  let randNum = Math.floor((Math.random() * 1000) + 1);
  let p = document.getElementById("guess-output");
  let response = prompt("Please type in your guess. Your guess must be an integer from 1 to 1000.");
  let i = 0;
  if(response > 1000 || response < 1 || response % 1 != 0){
    response = prompt("Please type in your guess. Your guess must be an integer from 1 to 1000.")
  }else{
    i++
  }
  while (response != randNum) {
    if (response > 1000 || response < 1 || response % 1 != 0){
      response = prompt("Please type in your guess. Your guess must be an integer from 1 to 1000.");
    }else{
      if (response > randNum) {
        response = prompt("Sorry, that number's too high! Please type in your new guess. Your guess must be an integer from 1 to 1000");
        i++;
      }else if (response < randNum){
        response = prompt("Sorry, that number's too low! Please type in your new guess. Your guess must be an integer from 1 to 1000");
        i++;
      }else if (response == randNum){
        i++;
      }
    }
  }
  p.innerHTML = "That's correct! The random number was " + randNum + ", and you got it on your " + i + "th guess.";
  ////////////////// DO NOT MODIFY
  check('guess'); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hurricane. 5 points.
 *
 * Write a function that prompts the user to enter a windspeed, and prints
 * the hurricane category (if applicable) for that windspeed. We'll be
 * using the Saffir-Simpson scale, shown below in MPH.
 *   - Category 5: 157+
 *   - Category 4: 130-156
 *   - Category 3: 111-129
 *   - Catgeory 2: 96-110
 *   - Category 1: 74-95
 *   - Tropical Storm: 39-73
 *
 * Windspeeds must be non-negative integers in the range [0, INF), and
 * users should be continuously re-prompted until they comply with this
 * restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function hurricane() {

  ///////////////// DO NOT MODIFY
  let windspeed; // DO NOT MODIFY
  ///////////////// DO NOT MODIFY
  let p = document.getElementById("hurricane-output");
  while (windspeed < 0 || windspeed % 1 !=0){
    windspeed = prompt("Enter a hurricane windspeed to see what category it's in.")
  }
  if(windspeed >= 157){
    p.innerHTML = "That's a category 5!"
  }else if (windspeed >= 130 && windspeed <= 156){
    p.innerHTML = "That's a category 4."
  }else if (windspeed >= 111 && windspeed <= 129){
    p.innerHTML = "That's a category 3."
  }else if (windspeed >= 96 && windspeed <= 110){
    p.innerHTML = "That's a category 2."
  }else if (windspeed >= 74 && windspeed <= 95){
    p.innerHTML = "That's a category 1."
  }else if (windspeed >= 39 && windspeed <= 73){
    p.innerHTML = "That's a mere tropical storm."
  }else{
    p.innerHTML = "No hurricane here, that's just regular ol' wind."
  }
  ///////////////////////////////// DO NOT MODIFY
  check('hurricane', windspeed); // DO NOT MODIFY
  ///////////////////////////////// DO NOT MODIFY
}

/*
 * Gymnastics. 5 points.
 *
 * Write a function that prompts the user to enter six scores. From those
 * six scores, the lowest and highest should be discarded. An average score
 * should be computed from the remaining four. Your function should output
 * the discarded scores, as well as the average score.
 *
 * Scores must be real numbers in the range [0.0, 10.0], and users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function gymnastics() {

  /////////////////// DO NOT MODIFY
  let total = 0; //// DO NOT MODIFY
  let scores = []; // DO NOT MODIFY
  /////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'total' variable should be representative of the sum of all
   *       six of the judges' scores.
   */

  /*
   * NOTE: You need to add each score (valid or not) to the 'scores' variable.
   *       To do this, use the following syntax:
   *
   *       scores.push(firstScore);   // your variable names for your scores
   *       scores.push(secondScore);  // will likely be different than mine
   */
   let score1=prompt("Please enter your first score");
   while(score1 > 10 || score1<1 || score1 / 1 != score1){
     score1 = prompt("Please reenter your first score. Remember, it must be from 1 to 10.")
   }
   let score2 = prompt("Please enter your second score");
   while(score2 > 10 || score2 < 1 || score2 / 1 != score2){
     score2 = prompt("Please reenter your second score. Remember, it must be from 1 to 10.")
   }
   let score3 = prompt("Please enter your third score");
   while(score3 > 10 || score3 < 1 || score3 / 1 != score3){
     score3 = prompt("Please reenter your third score. Remember, it must be from 1 to 10.")
   }
   let score4 = prompt("Please enter your fourth score");
   while(score4 > 10 || score4 < 1 || score4 / 1 != score4){
     score4 = prompt("Please reenter your fourth score. Remember, it must be from 1 to 10.")
   }
   let score5 = prompt("Please enter your fifth score");
   while(score5 > 10 || score5 < 1 || score5 / 1 != score5){
     score5 = prompt("Please reenter your fifth score. Remember, it must be from 1 to 10.")
   }
   let score6 = prompt("Please enter your sixth score");
   while(score6 > 10 || score6 < 1 || score6 / 1 != score6){
     score6 = prompt("Please reenter your sixth score. Remember, it must be from 1 to 10.")
   }
   scores.push(score1);
   scores.push(score2);
   scores.push(score3);
   scores.push(score4);
   scores.push(score5);
   scores.push(score6);
   total = Number(scores[0]) + Number(scores[1]) + Number(scores[2]) + Number(scores[3]) + Number(scores[4]) + Number(scores[5]);
   let i = 0;
   let maxScore = 0;
   let minScore = 10;
   while(i < scores.length){
     if(Number(scores[i]) > maxScore){
       maxScore = scores[i];
     }
     if(Number(scores[i]) < minScore){
       minScore = scores[i];
     }
     i++;
   }
   let p = document.getElementById("gymnastics-output");
   let average = (total - maxScore - minScore) / 4;
   p.innerHTML = "discarded: " + maxScore + ", " + minScore + "<br/>" + "average: " + average.toFixed(1);
  /////////////////////////////// DO NOT MODIFY
  check('gymnastics', scores); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Report Card. 5 points.
 *
 * Write a function that prompts the user to enter test, quiz, and homework
 * grades for the marking period. Users can enter as many grades of each
 * category, entering -1 to signal they are finished. Your function should
 * output the user's final grade, where tests, quizzes, and homework are
 * weighted at 60%, 30%, and 10%, respectively.
 *
 * Grades must be real numbers in the range [0.0, 100.0], and users should
 * be continuously re-prompted until they comply with this restriction. The
 * only exception is -1, which signals the user is finished entering grades
 * for that category.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function reportCard() {

  ///////////////////////// DO NOT MODIFY
  let testTotal = 0; ////// DO NOT MODIFY
  let quizTotal = 0; ////// DO NOT MODIFY
  let homeworkTotal = 0; // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'testTotal', 'quizTotal', and 'homeworkTotal' variables
   *       should be representative of the sum of the test scores, quiz
   *       scores, and homework scores the user enters, respectively.
   */

  ///////////////////// DO NOT MODIFY
  let tests = 0; ////// DO NOT MODIFY
  let quizzes = 0; //// DO NOT MODIFY
  let homeworks = 0; // DO NOT MODIFY
  ///////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'tests', 'quizzes', and 'homeworks' variables should be
   *       representative of the number of tests, quizzes, and homework
   *       grades the user enters, respectively.
   */
   let testGrade;
   let quizGrade;
   let homeworkGrade;
   while(testGrade!=Number("-1")){
     testGrade=Number(prompt("Please enter your test grade. Type '-1' to signify that you have no more grades to input."));
     if(testGrade != Number("-1")){
       tests++;
       testTotal+=testGrade;
     }else{}
   }
   while(quizGrade!=Number("-1")){
     quizGrade=Number(prompt("Please enter your quiz grade. Type '-1' to signify that you have no more grades to input."));
     if(quizGrade!=Number("-1")){
       quizzes++;
       quizTotal+=quizGrade;
     }else{}
   }
   while(homeworkGrade!=Number("-1")){
     homeworkGrade=Number(prompt("Please enter your homework grade. Type '-1' to signify that you have no more grades to input."));
     if(homeworkGrade!=Number("-1")){
       homeworks++;
       homeworkTotal+=homeworkGrade;
     }else{}
   }
   let p = document.getElementById("report-card-output");
   p.innerHTML = "Tests: " + (testTotal/tests).toFixed(2) + "<br/>" + "Quizzes: " + (quizTotal/quizzes).toFixed(2) + "<br/>" + "Homework: " + (homeworkTotal/homeworks).toFixed(2);
  /////////////////////// DO NOT MODIFY
  check('report-card', // DO NOT MODIFY
    testTotal, ////////// DO NOT MODIFY
    tests, ////////////// DO NOT MODIFY
    quizTotal, ////////// DO NOT MODIFY
    quizzes, //////////// DO NOT MODIFY
    homeworkTotal, ////// DO NOT MODIFY
    homeworks /////////// DO NOT MODIFY
  ); //////////////////// DO NOT MODIFY
  /////////////////////// DO NOT MODIFY
}
