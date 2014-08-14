function clickHandler () {
  $(".container").on("click", ".stack", function(){
    $stack = $(this);

    if (typeof Hanoi.UI.firstClick === "undefined") {
      Hanoi.UI.firstClick = $stack;
    } else if (Hanoi.UI.firstClick ===  $stack) {
      Hanoi.UI.firstClick = undefined;
    } else {
      var UI = new Hanoi.UI(Hanoi.UI.firstClick, $stack, game);
      UI.sendMove();
      Hanoi.UI.firstClick = undefined;
    }

    updateDisplay();

    if (game.isWon()) {
      $("#win_indicator").html("You win!")
    }
  })
}

Hanoi.UI.firstClick = undefined;

function updateDisplay() {
  $(".stack").removeClass("selected");

  $liList = $(".stack").children()
  var classes = {1: "lil_disc", 2: "med_disc", 3: "big_disc"};
  for(var tower = 0; tower < 3; tower++) {
    for(var level = 0; level < 3; level++) {
      $li = $("li#pos"+ tower + "-" + level);
      $li.removeClass();
      if (game.towers[tower][level]) {
        $li.addClass(classes[game.towers[tower][level]]);
      }
    }
  }

  if (Hanoi.UI.firstClick) {
    Hanoi.UI.firstClick.addClass("selected");
  }
}