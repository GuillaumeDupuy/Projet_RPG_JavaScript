function personnage(name, classe, joueur, perso_type)
{
    this.name = name;
    this.classe = classe;
    switch (classe) {
        case "guerrier":
            this.hpmax = 100;
            this.hp = this.hpmax;
            
            break;
    
        default:
            break;
    }
    
}