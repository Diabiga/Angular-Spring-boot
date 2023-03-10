import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../Service/produit.service';
import { Categorie } from '../model/categorie.model';


@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent {
  categories! : Categorie[];
  newIdCat! : number;
  newCategorie! : Categorie;
    newProduit = new Produit();

    constructor(
      private router : Router,
      private produitService: ProduitService) { }
      ngOnInit() {
        //this.categories = this.produitService.listeCategories();
        }
        

        addProduit(){
          this.produitService.ajouterProduit(this.newProduit)
          .subscribe(prod => {
          console.log(prod);
          this.router.navigate(['produits']);
          });
          }


}
