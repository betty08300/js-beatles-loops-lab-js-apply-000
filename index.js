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

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  var result = [];
  while (facts.length > 0){
    result.push(facts.shift() + '!!!')
  }
}
