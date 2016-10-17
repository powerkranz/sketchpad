$(document).ready(function () {
    createGrid();
    $('#square').mouseenter(function() {
      $(this).css("background-color", "red");
    })
})


 function createGrid(){
 var gridSize = prompt("Please enter a grid size.")
 for(i = 0; i < gridSize; i++){
   $('#grid').append('#square');
 }
}
