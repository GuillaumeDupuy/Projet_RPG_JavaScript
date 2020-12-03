function personnage(name, classe, joueur, perso_type)
{
    this.name = name;
    this.classe = classe;
    if (perso_type) {
        switch (classe) {
        case "guerrier":

            this.hpm = 100;
            this.hp = this.hpmax;

            this.mpm = 100;
            this.mp = this.mpmax;

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
    
                this.hpm = 100;
                this.hp = this.hpmax;
    
                this.mpm = 100;
                this.mp = this.mpmax;
    
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
        this.argent = 30;
    }
}