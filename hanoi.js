(function() {
  if (typeof Hanoi === "undefined") {
    window.Hanoi = {};
  }

  var Game = Hanoi.Game = function Game () {
    this.towers = [[3, 2, 1], [], []];
  };

  Game.prototype.isWon = function () {
    // move all the discs to the last tower
    return (this.towers[2].length == 3) || (this.towers[1].length == 3);
  };

  Game.prototype.isValidMove = function (startTowerIdx, endTowerIdx) {
    var startTower = this.towers[startTowerIdx];
    var endTower = this.towers[endTowerIdx];

    if (startTower.length === 0) {
      return false;
    } else if (endTower.length == 0) {
      return true;
    } else {
      var topStartDisc = startTower[startTower.length - 1];
      var topEndDisc = endTower[endTower.length - 1];
      return topStartDisc < topEndDisc;
    }
  };

  Game.prototype.move = function (startTowerIdx, endTowerIdx) {
    if (!this.isValidMove(startTowerIdx, endTowerIdx)) {
      return false;
    }

    var disc = this.towers[startTowerIdx].pop();
    this.towers[endTowerIdx].push(disc);
    return true;
  };
})()