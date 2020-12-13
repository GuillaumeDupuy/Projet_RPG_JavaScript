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
    console.log(joueur.classe);
    $("#choix_perso").addClass("hide");
    personnage_choisit(joueur);
    combat(joueur, new personnage("monstre","guerrier",0,0));
}