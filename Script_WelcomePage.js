$(document).ready(function(){
        $("#board1 th").click(function() {     
 
            var column_num = parseInt( $(this).index() ) + 1;
            var row_num = parseInt( $(this).parent().index() )+1;    
 
            $("th #one").text("X");   
        });
    });