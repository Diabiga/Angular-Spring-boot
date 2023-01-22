import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/model/categorie.model';
import { Produit } from 'src/app/model/produit.model';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit{

  categories! : Categorie[];
  newIdCat! : number;
  newCategorie! : Categorie;
  currentProduit = new Produit();
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,

  private produitService: ProduitService) { }
  ngOnInit() {
    this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id']).
     subscribe( prod =>{ this.currentProduit = prod; } ) ;
    }


    updateProduit() {
      this.produitService.updateProduit(this.currentProduit).subscribe(prod => {
      this.router.navigate(['produits']); }
      );
      }

      
}
