function boutique(joueur){
    $("#shop_point_de_vie").click(function(){
        if(joueur.argent >=20){
            joueur.hpm *= 1.1;
            joueur.hpm -= joueur.hpm%1;
            joueur.argent -= 20;
            personnage_choisit(joueur);
        }
    });
    $("#shop_points_magie").click(function(){
        if(joueur.argent >=20){
            joueur.mpm *= 1.1;
            joueur.mpm -= joueur.mpm%1;
            joueur.argent -= 20;
            personnage_choisit(joueur);
        }
    });
    $("#shop_attaque").click(function(){
        if(joueur.argent >=20){
            joueur.att *= 1.1;
            joueur.att -= joueur.att%1;
            joueur.argent -= 20;
            personnage_choisit(joueur);
        }
    });
    $("#shop_def").click(function(){
        if(joueur.argent >=20){
            joueur.def *= 1.1;
            joueur.def -= joueur.def%1;
            joueur.argent -= 20;
            personnage_choisit(joueur);
        }
    });
    $("#shop_magie").click(function(){
        if(joueur.argent >=20){
            joueur.pui *= 1.1;
            joueur.pui -= joueur.pui%1;
            joueur.argent -= 20;
            personnage_choisit(joueur);
        }
    });
    $("#shop_def_magie").click(function(){
        if(joueur.argent >=20){
            joueur.mr *= 1.1;
            joueur.mr -= joueur.mr%1;
            joueur.argent -= 20;
            personnage_choisit(joueur);
        }
    });
    $("#shop_esquive").click(function(){
        if(joueur.argent >=20){
            joueur.esq *= 1.1;
            joueur.esq -= joueur.esq%1;
            joueur.argent -= 20;
            personnage_choisit(joueur);
        }
    });
    $("#shop_vitesse").click(function(){
        if(joueur.argent >=20){
            joueur.vit *= 1.1;
            joueur.vit -= joueur.vit%1;
            joueur.argent -= 20;
            personnage_choisit(joueur);
        }
    });
}