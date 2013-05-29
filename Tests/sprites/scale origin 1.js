/// <reference path="../../Phaser/Game.ts" />
(function () {
    var game = new Phaser.Game(this, 'game', 800, 600, init, create);
    function init() {
        //  Using Phasers asset loader we load up a PNG from the assets folder
        game.loader.addImageFile('fuji', 'assets/pics/atari_fujilogo.png');
        game.loader.load();
    }
    var fuji;
    var tween;
    function create() {
        game.stage.backgroundColor = 'rgb(0,0,100)';
        //  Here we'll assign the new sprite to the local fuji variable
        fuji = game.add.sprite(100, 200, 'fuji');
        //  The sprite is 320 x 200 pixels in size
        //fuji.origin.setTo(160, 0);
        fuji.origin.setTo(160, 100);
        //fuji.origin.setTo(320, 0);
        //fuji.origin.setTo(320, 200);
        //fuji.origin.setTo(260, 100);
        fuji.scale.x = 2;
        fuji.scale.y = 0.5;
        //fuji.position.rotation = 45;
        game.add.tween(fuji.position).to({
            rotation: 360
        }, 3000).start();
        //  Create our tween
        //tween = game.add.tween(fuji.scale);
        //tween = game.add.tween(fuji.scale);
        //  Start it going
        //scaleLeft();
            }
    function rotate() {
        tween.to({
            x: 0
        }, 1000);
        tween.onComplete.add(scaleRight, this);
        tween.start();
    }
    function scaleLeft() {
        tween.clear();
        tween.to({
            x: 0
        }, 1000);
        tween.onComplete.add(scaleRight, this);
        tween.start();
    }
    function scaleRight() {
        tween.clear();
        tween.to({
            x: 1
        }, 1000);
        tween.onComplete.add(scaleLeft, this);
        tween.start();
        //  This line says "if the texture is flippedX then unflip it (set flippedX to false), otherwise set flippedX to true
        (fuji.texture.flippedX) ? fuji.texture.flippedX = false : fuji.texture.flippedX = true;
    }
})();
