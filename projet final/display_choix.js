function display_choix(perso)
{

    var personnage_b = new personnage("Classe " + perso ,perso,0,1);

    document.write(personnage_b.name + "<br>");
    document.write(personnage_b.hpm + "<br>");
    document.write(personnage_b.mpm + "<br>");
    document.write(personnage_b.att + "<br>");
    document.write(personnage_b.def + "<br>");
    document.write(personnage_b.pui + "<br>");
    document.write(personnage_b.mr + "<br>");
    document.write(personnage_b.esq + "<br>");
    document.write(personnage_b.vit + "<br>");


}