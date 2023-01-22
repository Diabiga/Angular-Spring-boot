import { Injectable } from '@angular/core';


import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  categories! : Categorie[];

  produits!: Produit[];
  
  produit! : Produit;

  apiURLAllProduit: string = 'http://localhost:8080/produits/api/listall';
  apiURLAjouterProduit: string = 'http://localhost:8080/produits/api/enregistrer';
  apiURLSuppProduit: string='http://localhost:8080/produits/api/supprimer';
  apiURLUpadate: string='http://localhost:8080/produits/api/update';
  apiURLAllProduit1: string = 'http://localhost:8080/produits/api/listsid';


  constructor(private http : HttpClient) {

  }
  
 listeProduit(): Observable<Produit[]>{
return this.http.get<Produit[]>(this.apiURLAllProduit);
}

updateProduit(prod :Produit) : Observable<Produit>
{
return this.http.put<Produit>(this.apiURLUpadate, prod, httpOptions);
}


consulterProduit(id: number): Observable<Produit> {
  const url = `${this.apiURLAllProduit1}/${id}`;
  return this.http.get<Produit>(url);
  }


  
ajouterProduit( prod: Produit):Observable<Produit>{
  return this.http.post<Produit>(this.apiURLAjouterProduit, prod, httpOptions);
  }

supprimerProduit(id : number) {
const url = `${this.apiURLSuppProduit}/${id}`;
return this.http.delete(url, httpOptions);
}

      //ou Bien
      /* this.produits.forEach((cur, index) => {
      if(prod.idProduit === cur.idProduit) {
      this.produits.splice(index, 1);
      }
      }); */
      }

/*trierProduits(){
        this.produits = this.produits.sort((n1,n2) => {
          const id1 = n1.idProduit ? n1.idProduit : 0;
          const id2 = n2.idProduit ? n2.idProduit : 0;
          if (id1 < id2) {
            return 1;
          }
          if (id1 > id2) {
            return -1;
          }
          return 0;
        });
   }*/
      



/*
listeCategories():Categorie[] {
  return this.categories;
  }*/

  /*
  consulterCategorie(id:number): Categorie{
    return this.categories.find(cat => cat.idCat == id)!;
    }*/



  


