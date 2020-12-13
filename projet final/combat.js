function combat(joueur, monstre)
{
    var finished = 0
    if (joueur.vit < monstre.vit)
    {
        var turn = 0;
    }
    else
    {
        var turn = 1;
    }
        $("#attaque").click(function(){
            if(joueur.att - monstre.def > 0){
                monstre.hp -= joueur.att - monstre.def;
                console.log(monstre.hp);
                monstre_afficher(monstre);
            }
            if (monstre.att - joueur.def > 0){
                joueur.hp -= monstre.att - joueur.def;
                console.log(joueur.hp);
                personnage_choisit(joueur);
            }
        });
        $("#sort").click(function(){
            if (joueur.pui - monstre.mr > 0){
                monstre.hp -= joueur.pui - monstre.mr;
                console.log(monstre.hp);
                monstre_afficher(monstre);
            }
            if (monstre.att - joueur.def > 0){
                joueur.hp -= monstre.att - joueur.def;
                console.log(joueur.hp);
                personnage_choisit(joueur);
            }
        });
        $("#deffendre").click(function(){
            if (monstre.att - (joueur.def + 30) > 0){
                joueur.hp -= monstre.att - (joueur.def + 30);
                console.log(joueur.hp);
                personnage_choisit(joueur);
            }
        });
        $("#fuir").click(function(){
            $("#div_action").toggleClass("hide");
            $("#div_monstre").toggleClass("hide");
            $("#stats_monstre").toggleClass("hide");
            $("#shop_div_shop").toggleClass("hide");
            $("#combat_suivant").toggleClass("hide");
        });

    
    // Action(joueur,monstre,"attaque");
    // while (!(finished)) {

    //     if (turn){
    //         if ($("#attaque").click)
    //         {
    //             monstre.hp -= joueur.att - monstre.def;
    //             turn +=1;
    //             finished = 1
    //             console.log("bite");
    //         }
    //     }

    //     if (monstre.hp <=0)
    //     {
    //         finished = 1;
    //     }
    //     else if (joueur.hp <=0)
    //     {
    //         finished = 2;
    //     }
    //     personnage_choisit(joueur);
    //     monstre_afficher(monstre);
    // }
    personnage_choisit(joueur);
    monstre_afficher(monstre);
    console.log(monstre);

    $("#div_action").click(function(){
        if(joueur.hp <= 0){
            $("#body").addClass("hide");
        }
        if(monstre.hp <= 0){
            $("#div_action").toggleClass("hide");
            $("#div_monstre").toggleClass("hide");
            $("#stats_monstre").toggleClass("hide");
            $("#shop_div_shop").toggleClass("hide");
            $("#combat_suivant").toggleClass("hide");
            joueur.argent += monstre.argent;
            personnage_choisit(joueur);
        }
    });

    $("#combat_suivant").click(function(){
        $("#combat_suivant").toggleClass("hide");
        $("#shop_div_shop").toggleClass("hide");
        $("#stats_monstre").toggleClass("hide");
        $("#div_action").toggleClass("hide");
        $("#div_monstre").toggleClass("hide");
        monstre = new personnage("monstre","guerrier",0,0);
        monstre_afficher(monstre);
    });

    if (finished == 1)
    {
        console.log("you win")
    }
    else
    {
        console.log("you loose")
    }
    boutique(joueur);

}