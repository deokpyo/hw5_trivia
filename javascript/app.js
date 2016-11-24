// Global Variables
var obj;
var right = 0;
var wrong = 0;
var none = 0;
var question = 1;

// Trivia Object
var trivia = {
  Q1: {
    q: "Question 1: Which city pays alcoholics in beer for working?",
    a1: "London",
    a2: "Berlin",
    a3: "Amsterdam",
    a4: "Austin",
    ca: "Amsterdam",
    ex: "Amsterdam pays alcoholics in beer. For cleaning the city streets, local alcoholics get 10 Euros, half a packet of rolling tobacco and 5 beers as payment by a government-funded organization.",
    img: "q1",
    used: false,
  },
  Q2: {
    q: "Question 2: What is the name of world´s strongest beer?",
    a1: "Samuel Adams Utopias",
    a2: "Brewmeister's Snake Venom",
    a3: "Bourbon Abominable Winter Ale",
    a4: " Rye Double DBA",
    ca: "Brewmeister's Snake Venom",
    ex: "The world´s strongest beer is Brewmeister's Snake Venom. While regular beer usually have about 5% ABV, this Scottish killer has a stomach-burning 67,5% ABV.",
    img: "q2",
    used: false,
  },
  Q3: {
    q: "Question 3: Which of the following diseases does beer help to prevent?",
    a1: "Kidney Stones",
    a2: "Allergies",
    a3: "Diabetes",
    a4: "Cancer",
    ca: "Kidney Stones",
    ex: "Beer prevents kidney stones. A study published in American Journal of Epidemiology estimated that a bottle of beer consumed every day reduces the risk by 40%.",
    img: "q3",
    used: false,
  },
  Q4: {
    q: "Question 4: Which of the following is true about beer?",
    a1: "Beer commercials in the US are allowed to show people drinking the beer as long as the non-alcoholic drinks are used.",
    a2: "Beer commercials in the US must not exceed 60 seconds in time.",
    a3: "Beer commercials in the US are allowed to show people drinking the beer as long as people in the commercial are over 21.",
    a4: "Beer commercials in the US cannot show people actually drinking the beer.",
    ca: "Beer commercials in the US cannot show people actually drinking the beer.",
    ex: "Beer commercials in the US aren't really allowed to show people actually drinking the beer. It's a US law that people cannot actually be shown consuming an alcoholic beverage on television.",
    img: "q4",
    used: false,
  },
  Q5: {
    q: "Question 5: What is an official scientific name for the study of beer and beer-making?",
    a1: "Oenology",
    a2: "Zythology",
    a3: "Beerology",
    a4: "Mixology",
    ca: "Zythology",
    ex: "The study of beer and beer-making even has an official scientific name – Zythology. It derives from the Greek words 'zythos' (beer) and 'logos' (study).",
    img: "q5",
    used: false,
  },
  Q6: {
    q: "Question 6: Which country is the most beer-drinking country?",
    a1: "United States",
    a2: "Belgium",
    a3: "Germany",
    a4: "Czech Republic",
    ca: "Czech Republic",
    ex: "The most beer-drinking country in the world is the Czech Republic. With an incredible per capita beer consumption of almost 40 gallons a year, the Czechs are way out in front in the beer drinking world league table.",
    img: "q6",
    used: false,
  },
  Q7: {
    q: "Question 7: What is the most expensive beer in the world? ",
    a1: "Crown Ambassador Reserve",
    a2: "Vielle Bon Secours",
    a3: "Brewdog's The End of History",
    a4: "Carlberg's Jacobsen Vintage",
    ca: "Vielle Bon Secours",
    ex: "The world´s most expensive beer is Belgian's Vielle Bon Secours. One bottle costs around 1,000 American dollars.",
    img: "q7",
    used: false,
  },
  Q8: {
    q: "Question 8: What is 'Valhalla' that Old Vikings believed in?",
    a1: "A town in Northern Europe where people provided unlimited supply of beer.",
    a2: "An island full of beer-making supplies",
    a3: "A giant goat whose udders provided unlimited supply of beer.",
    a4: "A pub with everyday $1 craft beers happy hours",
    ca: "A giant goat whose udders provided unlimited supply of beer.",
    ex: "Old Vikings believed that in their heaven called Valhalla, there is a giant goat whose udders provided unlimited supply of beer.",
    img: "q8",
    used: false,
  },
  Q9: {
    q: "Question 9: What does the term 'Cenosillicaphobia' mean?",
    a1: "The fear of prohibition",
    a2: "The fear of an empty beer glass",
    a3: "The fear of losing the taste of beer",
    a4: "The fear of getting drunk with beer",
    ca: "The fear of an empty beer glass",
    ex: "Cenosillicaphobia is the fear of an empty beer glass. Terrifying phobia indeed.",
    img: "q9",
    used: false,
  },
  Q10: {
    q: "Question 10: What is the name for the first professional brewers that were all women?",
    a1: "Brewsters",
    a2: "Brewsisters",
    a3: "Brewomen",
    a4: "Brewski",
    ca: "Brewsters",
    ex: "The first professional brewers were all women called Brewsters. The women had to be very beautiful to be able to become Brewsters.",
    img: "q10",
    used: false,
  },
  Q11: {
    q: "Question 11: What is the name of the world's largest beer festival? ",
    a1: "Beerbongfest",
    a2: "Freightfest",
    a3: "Oktoberfest",
    a4: "Novemberfest",
    ca: "Oktoberfest",
    ex: "The world's largest beer festival is Oktoberfest. Held annually in Munich, Germany, it is a 16-day funfair running from late September to the first weekend in October with more than 6 million people from around the world attending the event every year.",
    img: "q11",
    used: false,
  },
  Q12: {
    q: "Question 12: What percent of the world population is drunk at any given time?",
    a1: "3.1%",
    a2: "0.7%",
    a3: "4.4%",
    a4: "1.8%",
    ca: "0.7%",
    ex: "At any given time, 0.7% of the world population is drunk. It means 50 million people are drunk right now. Beer is obviously the main contributor to the drunkenness.",
    img: "q12",
    used: false,
  },
  Q13: {
    q: "Question 13: What does beer strengthen in our body?",
    a1: "Muscles",
    a2: "Immune System",
    a3: "Hormones",
    a4: "Bones",
    ca: "Bones",
    ex: "Beer strengthens bones. It is rich in silicon that increases calcium deposits and minerals for bone tissue.",
    img: "q13",
    used: false,
  },
}

// Timer Object
var timer = {
  num: 20,
  counter: 0,
  run: function(){
    $("#timer").html("<h3> Time Remaining: " + timer.num + " seconds</h3>");
    timer.counter = setInterval(timer.decrement, 1000);
  },
  decrement: function(){ 
    timer.num--;
    $("#timer").html("<h3> Time Remaining: " + timer.num + " seconds</h3>");
    if(timer.num === 0){
      timer.stop();
      timer.reset();
      game.answer(obj);
    }
  },
  delay: function(time){
    $("#timer").show();
    setTimeout(timer.nextGame, time);
  },
  stop: function(){
    clearInterval(timer.counter);
  },
  reset: function(){
    timer.num = 20;
  },
  nextGame: function(){
    if(question <= 13){
      game.load();
    }
    else{
      game.loadResult();
    }
  },
}

// Game Object
var game = {
  load: function(){
    //start the timer
    timer.run();

    $("#restart").hide();
    $("#result").hide();
    $("#panel").show();
    $("#timer").show();
    // call function to select the question
    var obj = game.selectQuestion();

    // increment question for next
    question++;

    // load question
    $("#question").html("<h2>" + obj.q + "</h2>");
    // clear answers
    $("#answer").empty();
    // clear results
    $("#result").empty();
    // load answers   
    for(i in obj){
      if(i[0] === "a"){
        var divTag = $("<div>");
        divTag.addClass("btn btn-warning btn-lg");
        divTag.attr("data-answer", i);
        divTag.on({"click": function() {
          // stop/reset the timer
          timer.stop();
          timer.reset();
          var selected = $(this).data("answer");
          if(obj[selected] === obj.ca){
            console.log("Correct");   
            game.right(obj);   
          }
          else{
            console.log("Incorrect");
            game.wrong(obj);
          }
          }
        });
        divTag.text(obj[i]);
        $("#answer").append(divTag);
        $("#answer").append("<br/>");
      }
    }
  },
  selectQuestion: function(){
    for(i in trivia){
    console.log(trivia[i].used);  
      if(!trivia[i].used){
        obj = trivia[i];
        trivia[i].used = true;
        return obj;
      }
    }
  },
  right: function(obj){
    right++;
    $("#result").html("<h3 style='color: blue;'>You have selected the correct answer: " + obj.ca + "</h3><h4>Notes: " + obj.ex + "</h4>" + "<p><img src='images/" + obj.img + ".jpg'/></p><p>You will be redirected to next question in 10 seconds.</p>");
    $("#result").show();
    $("#panel").hide();
    timer.delay(10000);
  },
  wrong: function(obj){
    wrong++;
    $("#result").html("<h3 style='color: red;'>You have selected a wrong answer. Correct answer was: " + obj.ca + "</h3><h4>Notes: " + obj.ex + "</h4>" + "<p><img src='images/" + obj.img + ".jpg'/></p><p>You will be redirected to next question in 10 seconds.</p>");
    $("#result").show();
    $("#panel").hide();
    timer.delay(10000);
  },
  answer: function(obj){
    none++;
    $("#result").html("<h3 style='color: green;''>Time is up. Correct Answer was: " + obj.ca + "</h3><h4>Notes: " + obj.ex + "</h4>" + "<p><img src='images/" + obj.img + ".jpg'/></p><p>You will be redirected to next question in 10 seconds.</p>");
    $("#result").show();
    $("#panel").hide();
    timer.delay(10000);
  },
  loadResult: function(){
    var tempDiv = $("<div>");
    tempDiv.append("<h2>Results:</h2>");
    tempDiv.append("<h3># Correct: " + right + "</h3>");
    tempDiv.append("<h3># Incorrect: " + wrong + "</h3>");
    tempDiv.append("<h3># No answer: " + none + "</h3>");
    $("#restart").show();
    $("#result").html(tempDiv);
    $("#result").show();
    $("#panel").hide();
    $("#timer").hide();
  },
  // game reset function
  reset: function(){
    right = 0;
    wrong = 0;
    none = 0;
    question = 1;
    timer.reset();
    for(i in trivia){
      trivia[i].used = false;
    }
  },
}

$(document).ready(function(){
  $("#restart").hide();

  $("#start").on("click", function(){
    $("#start").hide();
    $("#beer").hide();
    game.load();
  });

  $("#restart").on("click", function(){
    game.reset();
    game.load();
  });
});


