(function() {
  if (typeof Hanoi === "undefined") {
    window.Hanoi = {};
  }

  var UI = Hanoi.UI = function(fromStack, toStack, game) {
    this.fromStack = fromStack;
    this.toStack = toStack;
    this.game = game
  }

  UI.prototype.sendMove = function() {
    return this.game.move(this.fromStack.attr("data-id"),
                          this.toStack.attr("data-id"));
  };

})();