//ТОЧКА ВХОДА

$(document).ready(function() {
    var matrix = new Matrix(24,32);
    matrix.create();

    var options = {
        'matrix': matrix
    };

    var game = new Game(options);
    game.run();
});