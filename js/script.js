/****************************************
      apparition/disparition
****************************************/

$(document).ready(function(){
      $(".show").hide(0).delay(4500).show(50);
      $("#blackPage").fadeToggle(5100);
     
     	$("#card").flip({
    		axis: 'x',
    		trigger: 'hover'
    	});

   
      $('#square').hover(function(){
      $('#round').toggle();
      });
      $('#round').hover(function(){
       $('#square').toggle();
      });

      // SQUARE
  
      function square() {
        $('#square section').animate({
            width:'10px',
            height:'10px'
          },150,square).animate({
            width:'5px',
            height:'5px'
          },150,square);
        }
      square();
    
      // ROUND
   
      function round() {
        $('#round section').animate({
            width:'5px',
            height:'5px'
          },150,round).animate({
            width:'10px',
            height:'10px'
          },150,round);
        }
      round();
 
});





