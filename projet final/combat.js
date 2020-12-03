function combat(joueur, monstre)
{
    let finished = 0
    if (joueur.vit < monstre.vit)
    {
        let turn = 0;
    }
    else
    {
        let turn = 1;
    }
    
    while (not (finished)) {
        if (turn)
        {
            choix = wait_click();
            switch (choix) {
                case 1:
                    Action(joueur,monstre,"attaque");
                    break;
                case 2:
                    Action(joueur,monstre,"lancer sort");
                    break;
                case 3:
                    Action(joueur,monstre,"fuir");
                    break;
                default:
                    Action(joueur,monstre,"defendre");
                    break;
            }
        }
        else
        {
            Action(monstre,joueur,"attaque");
        }
        

        if (monstre.hp <=0)
        {
            finished = 1;
        }
        else if (joueur.hp <=0)
        {
            finished = 2;
        }
    }

    if (finished == 1)
    {
        console.log("you win")
    }
    else
    {
        console.log("you loose")
    }
}