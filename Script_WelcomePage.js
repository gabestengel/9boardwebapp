

(function($) {
  $.fn.tictac = function() {
      var squares = board.find("td");
      
     
           squares.click(function() {
        var square = $(this);
        var squareIndex = squares.index(square);
        var played = false;
        var possibleCombos;

        // fill in the square with an X if it's open
        if(square.text() === "") {
          square.text(X);
          possibleCombos = getPossibleCombosForSelection(squareIndex);
        } else {
          return;
        }

        // see if X has won, if so, something is wrong
        var xWins = false;
        $.each(possibleWins, function(index, winningCombo) {
          var squaresWithX = [];

          $.each(winningCombo, function(index, value) {
            var currentSquare = squares.eq(value);
            if(currentSquare.text() == X) {
              squaresWithX.push(currentSquare);
            }
          });

          if(squaresWithX.length == 3) {
            $(squaresWithX).each(function() {
              $(this).addClass("winner");
            });
            xWins = true;
            return false;
          }
        });
})(jQuery);
//first "page"
//function start(){
    //$("#1_player").text("1 player");
    //$("#2_player").text("2 player");
    //$("#1_player").show();
    //$("#2_player").show();
//}
//

function tableUpdate(sq, currId){
    if(sq==null){
        currentSq=$(currId).parent().parent().attr('id');
        alert("alert");
    }
    else{
        if(currentSq!=currId){
            $(currId).text("X");
        }
    }
}
