function theBeatlesPlay(musicians, instruments){
  var result = [];
  for (var i = 0; i < musicians.length; i++) {
    var musician = musicians[i];
    var instrument = instruments[i];
    var musicianAndInstr = musician + " plays " + instrument;
    result.push(musicianAndInstr);
  }
  return result;
}

function johnLennonFacts(facts){
  var result = [];
  while (facts.length > 0){
    result.push(facts.shift() + '!!!')
  }
  return result;
}

function iLoveTheBeatles(num){
  var result = [];
  do {
    result.push("I love the Beatless");
    num ++;
  }
  while(num <= 15)
  return result;
}


// Implement a do-while loop inside the function that adds "I love the Beatles!" to the empty array.
// The loop should then increment the number passed in as a parameter. The condition of the loop should check to see that the parameter number is less than 15. It should contain a number of strings that represents the difference between the input number and 15.
// Return the array with the strings "I love the Beatles!".
