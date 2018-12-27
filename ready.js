//ТОЧКА ВХОДА

$(document).ready(function() {
    var matrix = new Matrix(32,24);
    matrix.create();

    var options = {
        'matrix': matrix
    };

    var game = new Game(options);
    game.run();
});