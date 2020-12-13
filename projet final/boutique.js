function boutique(joueur){
    $("#shop_point_de_vie").click(function(){
        joueur.hpm *= 1.1;
        joueur.hpm -= joueur.hpm%1;
        personnage_choisit(joueur);
    });
    $("#shop_points_magie").click(function(){
        joueur.mpm *= 1.1;
        joueur.mpm -= joueur.mpm%1;
        personnage_choisit(joueur);
    });
    $("#shop_attaque").click(function(){
        joueur.att *= 1.1;
        joueur.att -= joueur.att%1;
        personnage_choisit(joueur);
    });
    $("#shop_def").click(function(){
        joueur.def *= 1.1;
        joueur.def -= joueur.def%1;
        personnage_choisit(joueur);
    });
    $("#shop_magie").click(function(){
        joueur.pui *= 1.1;
        joueur.pui -= joueur.pui%1;
        personnage_choisit(joueur);
    });
    $("#shop_def_magie").click(function(){
        joueur.mr *= 1.1;
        joueur.mr -= joueur.mr%1;
        personnage_choisit(joueur);
    });
    $("#shop_esquive").click(function(){
        joueur.esq *= 1.1;
        joueur.esq -= joueur.esq%1;
        personnage_choisit(joueur);
    });
    $("#shop_vitesse").click(function(){
        joueur.vit *= 1.1;
        joueur.vit -= joueur.vit%1;
        personnage_choisit(joueur);
    });
}