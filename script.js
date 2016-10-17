$(document).ready(function () {
    var gridSize =  304 //prompt("Please enter a grid size.")
    for(i = 0; i < gridSize; i++) {
      $('#grid').append('<div class="square"></div>');
  };

  $('.square').hover(function() {
    $(this).css("background-color", "red");
  })

})
