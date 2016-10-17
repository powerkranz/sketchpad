$(document).ready(function () {
    $('#square').mouseenter(function() {
      $(this).css("background-color", "red");
    })
})



function createGrid(){
  var gridSize = prompt("Please enter a grid size.")
  $square = $('#square')
  for(i = 0; i < gridSize; i++) {
    $('#grid').append('<td id="square"></td>');
};
}
