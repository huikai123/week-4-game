$( document ).ready(function() {
	//choose character
	$(".thumbnail").on("click", function() {
        $(this).remove();
        $("#yourCharacter").append(this);
        //the rest become enemies
     	$("#chooseCharacter").children().each(function () {
        $(this).remove();
        $("#enemies").append(this);
        $(".thumbnail").addClass("options");
        });
    //the chosen one becomes defender
    $(".options").on("click", function() {
     	$(this).remove();
     	$("#defender").append(this);
   });







	//When click "Attack" button:
   // $('.attack').on('click',function() {
    	//var HP += 6;
    	
    	//if (HP<=0){
    		//print("You been defeated! Game over!");
    	//}
    	//else {
    		//$(".displayText").html("You attacked "+    + "for "+    + "damage.");
    	//}
    //});


    //Reset button for a new game
    $(".reset").on("click", function() {
 		location.reload();
    });
});
});
