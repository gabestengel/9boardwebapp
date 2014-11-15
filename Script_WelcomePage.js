$(document).ready(function(){
        $("#board1 td").click(function() {     
 
            var column_num = parseInt( $(this).index() ) + 1;
            var row_num = parseInt( $(this).parent().index() )+1;    
 
            $("#one").html( "Row_num =" + row_num + "  ,  Rolumn_num ="+ column_num );   
        });
    });