function clicChoix(){
    $("#guerrier").click(function(){
        startGame("guerrier");
        document.getElementById("div_personnage").style.backgroundImage = "url(images/guerrier.png)"
    });
    $("#mage").click(function(){
        startGame("mage");
        document.getElementById("div_personnage").style.backgroundImage = "url(images/mage.png)"
    });
    $("#paladin").click(function(){
        startGame("paladin");
        document.getElementById("div_personnage").style.backgroundImage = "url(images/paladin.png)"
    });
    $("#assassin").click(function(){
        startGame("assassin");
        document.getElementById("div_personnage").style.backgroundImage = "url(images/assassin.png)"
    });
}

function startGame(classe){
    joueur = new personnage("joueur",classe,0,1);
    console.log(joueur.classe);
    $("#choix_perso").addClass("hide");
    personnage_choisit(joueur);
    combat(joueur, new personnage("monstre","guerrier",0,0));
}