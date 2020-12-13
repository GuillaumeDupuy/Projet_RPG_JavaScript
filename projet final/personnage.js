function personnage(name, classe, joueur, perso_type)
{
    this.name = name;
    this.classe = classe;
    if (perso_type) {
        switch (classe) {
        case "guerrier":

            this.hpm = 100;
            this.hp = this.hpm;

            this.mpm = 100;
            this.mp = this.mpm;

            this.att = 100;
            this.def = 80;

            this.pui = 10;
            this.mr = 80;

            this.esq = 100;
            this.vit = 100;

            break;
        case "mage":

            this.hpm = 100;
            this.hp = this.hpm;

            this.mpm = 100;
            this.mp = this.mpm;

            this.att = 100;
            this.def = 100;

            this.pui = 100;
            this.mr = 100;

            this.esq = 100;
            this.vit = 100;

            break;
        case "paladin":

            this.hpm = 100;
            this.hp = this.hpm;

            this.mpm = 100;
            this.mp = this.mpm;

            this.att = 100;
            this.def = 100;

            this.pui = 100;
            this.mr = 100;

            this.esq = 100;
            this.vit = 100;

            break;
        case "assassin":

            this.hpm = 100;
            this.hp = this.hpm;

            this.mpm = 100;
            this.mp = this.mpm;

            this.att = 100;
            this.def = 100;

            this.pui = 100;
            this.mr = 100;

            this.esq = 100;
            this.vit = 100;

            break;
        default:
            break;
        }
        this.argent = 0;
    }
    else
    {
        switch (classe) {
            case "guerrier":
    
                this.hpm = joueur.hpm*0.9;
                this.hp = this.hpm;
    
                this.mpm = joueur.mpm*0.1;
                this.mp = this.mpm;
    
                this.att = joueur.att*0.60;
                this.def = joueur.def*0.30;
    
                this.pui = joueur.pui*0.1;
                this.mr = joueur.mr*0.4;
    
                this.esq = joueur.esq*0.50;
                this.vit = joueur.vit*1;
    
                break;
            default:
                break;
            }
        this.argent = 30;
    }
}