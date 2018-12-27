function Game(options)
{
    var self = this;

    this.snake = {};
    this.fruit = {};
    this.animation = {};
    this.ui = {};
    this.matrix = options.matrix;
    this.speed = 200;
    this.incrementSpeedValue = 5;
    this.timerId = '';
    this.scoreCount = 0;

    this.score = $('.score .count');
    this.modal = $('#new-score-modal');
    this.summary = $('.summary');
    this.scoresLink = $('#all-records');

    this.run = function()
    {
        self.snake = new Snake(self, 3,5);
        self.fruit = new Fruits(self);
        self.animation = new Animation(self);
        self.ui = new Ui(self);
        self.ui.modalScore();
        
        self.start();
    };

    this.prepare = function()
    {
        self.start();
    };

    this.start = function()
    {
        self.snake.create();
        self.fruit.create();

        $(document).on('keydown', self.snake.changeDirection);
        self.autoMove(self.speed);
    };

    this.end = function()
    {
        //alert('Game Over');
        //self.animation.end();
        self.modal.find('.count-ajax').text(self.scoreCount);
        self.modal.dialog('open');
        //self.animation.modalShow();
    };

    this.autoMove = function(speed)
    {
        self.timerId = setInterval(self.snake.move, speed);
    };
    
    this.increaseSpeed = function()
    {
    	clearInterval(self.timerId);
    	self.speed = self.speed - self.incrementSpeedValue;
    	self.autoMove(self.speed);
    }

    this.restart = function()
    {
        //self.animation.modalHide();
        setTimeout(function() {
            location.reload();
        },300);
    };
}