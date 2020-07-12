class Form{
    constructor(){

    }

    display(){
        var title=createElement('h1');
        title.html("CAR RACING GAME");
        title.position(130,20);

        var input=createInput("Name");
        var button=createButton('Play!');
        var greeting=createElement('h2');

        input.position(130,100);
        button.position(230,200);

        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name=input.value();
            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);

            greeting.html("Hello "+name);
            greeting.position(130,160)
            
        })
    }
}