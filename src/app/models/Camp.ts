import { Adresse } from "./Adresse";
import { Encadrant } from "./Utilisateur";

export class Camp {
  public NumDossier : string;
  public DateDeclaration: string;
  public Denomination: string;
  public Type : string;
  public FraisParticipation : string;
  public Adresse: Adresse;
  public Debut : string;
  public Fin: string;
  public Encadrants: Encadrant[];
  public EnfantBasAge : boolean;
  public EnfantBesoinSpe: boolean;


}