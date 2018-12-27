function Ui(game)
{
    var self = this;

    this.game = game;

    this.modalScoreContainer = $('#new-score-modal');

    this.modalScore = function()
    {
        self.modalScoreContainer.dialog({
            title: 'Рейтинг',
            buttons: [
                {
                    text: "Play Again",
                    click: self.game.restart,
                    class: 'cancel-btn'
                }
            ],
            close: self.game.restart,
            resizable: false,
            modal: true,
            autoOpen: false,
            width: 220,
            closeOnEscape: false,
            dialogClass: "no-close",
            show: {
                effect: "fade",
                duration: 500
            }
        });
    }
}