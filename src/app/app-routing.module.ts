import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { ProduitsComponent } from './produits/produits.component';
import { UpdateProduitComponent } from './Service/update-produit/update-produit.component';



const routes: Routes = [
  {path: '',component: ProduitsComponent},
  {path: 'produits',component: ProduitsComponent},
  {path: 'ajout',component: AddProduitComponent},
  {path: "updateProduit/:id", component: UpdateProduitComponent},
  {path: 'list',component: ProduitsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
