function display_choix(perso)
{

    var personnage_b = new personnage("Classe " + perso ,perso,0,1);

    document.write("nom : " + personnage_b.name + "<br>");
    document.write("hp : " + personnage_b.hpm + "<br>");
    document.write("mp : " + personnage_b.mpm + "<br>");
    document.write("attaque : " + personnage_b.att + "<br>");
    document.write("defense : " + personnage_b.def + "<br>");
    document.write("puissance : " + personnage_b.pui + "<br>");
    document.write("magic resist : " + personnage_b.mr + "<br>");
    document.write("esquive : " + personnage_b.esq + "<br>");
    document.write("vitesse : " + personnage_b.vit + "<br>");
}

function personnage_choisit(classe){
    document.getElementById("perso_stats_vie").innerHTML ="vie : " + classe.hp + '/' + classe.hpm;
    document.getElementById("perso_stats_points_magie").innerHTML = "mana : " + classe.mpm;
    document.getElementById("perso_stats_attaque").innerHTML = "attaque : " + classe.att;
    document.getElementById("perso_stats_def").innerHTML = "defense : " + classe.def;
    document.getElementById("perso_stats_magie").innerHTML = "magie : " + classe.pui;
    document.getElementById("perso_stats_def_magie").innerHTML = "defense magique : " + classe.mr;
    document.getElementById("perso_stats_esquive").innerHTML = "esquive : " + classe.esq;
    document.getElementById("perso_stats_vitesse").innerHTML = "vitesse : " + classe.vit;
    document.getElementById("thune").innerHTML = "argent : " + classe.argent;
}

function monstre_afficher(classe){
    document.getElementById("stats_monstre").innerHTML = (classe.hp - classe.hp%1) + "/" + classe.hpm ;
}