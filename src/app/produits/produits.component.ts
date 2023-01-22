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

  produits !: Produit[]; //un tableau de Produit
  
  constructor(private produitService: ProduitService ) {
  
  }


  ngOnInit(): void {
    this.chargerProduits();
    }

    chargerProduits(){
      this.produitService.listeProduit().subscribe(prods => {
      console.log(prods);
      this.produits = prods;
      });
      }
        

 supprimerProduit(p: Produit)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.produitService.supprimerProduit(p.idProduit).subscribe(() => {
console.log("produit supprimé");
this.chargerProduits();
});
} 

  consulterProduit(id:number): Produit{
    this.produit = this.produits.find(p => p.idProduit == id)!;
    return this.produit;
    }

}
