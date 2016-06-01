
$(document).ready(function(){
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var nameInput = $("input#name").val();
    var foodInput = $("#food").val();
    var musicInput = $("input:radio[name=music]:checked").val();
    var colorInput = $("input#color").val();
    var bornInput = $("input#born").val();
    var liveInput = $("input#live").val();

    $("#name-result").text(nameInput);
    $("#food-result").text(foodInput);
    $("#music-result").text(musicInput);
    $("#color-result").text(colorInput);
    $("#born-result").text(bornInput);
    $("#live-result").text(liveInput);

    $("#results").show();
  });
});
