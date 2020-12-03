function clicChoix(){
    $("#guerrier").click(function(){
        startGame("guerrier");
    });
    $("#mage").click(function(){
        startGame("mage");
    });
    $("#paladin").click(function(){
        startGame("paladin");
    });
    $("#assassin").click(function(){
        startGame("assassin");
    });
}

function startGame(classe){
    joueur = new personnage("joueur",classe,0,1);
    console.log(joueur.name);
    $("#choix_perso").addClass("hide");
    combat(joueur, new personnage("monstre","guerrier",0,0));
}