import { Component } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../Service/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent {
  produit! : Produit;

  produits : Produit[]; //un tableau de Produit
  
  constructor(private produitService: ProduitService ) {
  this.produits = produitService.listeProduits();
  }

  supprimerProduit(p: Produit)
  {

    let conf = confirm("Etes-vous sûr ?");
     if (conf)

    this.produitService.supprimerProduit(p)


  console.log(p);
  }

  consulterProduit(id:number): Produit{
    this.produit = this.produits.find(p => p.idProduit == id)!;
    return this.produit;
    }

}
