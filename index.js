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
}
