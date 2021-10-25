import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/Home/home.component';
import { PokedexComponent } from './pages/pokedex/pokedex.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "pokedex",
    component: PokedexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
