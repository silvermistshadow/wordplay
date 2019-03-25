$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var sentenceInput = $("#sentenceInput").val();
    var words = sentenceInput.split(" ");

    var wordsOver3 = words.filter(function(word){

      if (word.length >= 3) {
        return true;
      }
      else {
        return false;
      }
    });
    var wordsReversed = wordsOver3.reverse();
    var wordsOutput = wordsReversed.join(' ')

    $("#sentenceOut").text(wordsOutput);
    $("#sentenceOut").show();

  });


});
