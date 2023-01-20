import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../Service/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent {
 
    newProduit = new Produit();

    constructor(
      private router : Router,
      private produitService: ProduitService) { }


    addProduit(){
    // console.log(this.newProduit);
    this.produitService.ajouterProduit(this.newProduit);

    this.router.navigate(['produits']);
    }


}
