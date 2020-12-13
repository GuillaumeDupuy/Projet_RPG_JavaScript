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
            monstre.hp -= joueur.att - monstre.def;
            console.log(monstre.hp);
            monstre_afficher(monstre);
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