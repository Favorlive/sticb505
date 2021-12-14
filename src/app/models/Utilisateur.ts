export class Utilisateur {
    public NN : string;
    public Nom: string;
    public Prenom : string;
    public Role: string;
}

export class ResponsableUnite extends Utilisateur {
    public Role = 'ResponsableONE';
    public Mail: string;
    public Telephone : string;
    public Unite: string;

}

export class Encadrant extends Utilisateur {
    public Role ='Encadrants'
    public Brevet: boolean;
    public Experience : boolean;
    
}

export class AgentONE extends Utilisateur {
    public Role = 'AgentONE'
    public Attribution: boolean;
    
}