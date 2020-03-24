import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomePageModule)
  },
  {
    path: "graph",
    loadChildren: () =>
      import("./graph/graph.module").then(m => m.GraphPageModule)
  },
  // ---------------- START: Added by me  ----------------
  {
    path: "graph/:id",
    loadChildren: () =>
      import("./graph/graph.module").then(m => m.GraphPageModule)
  },
 
  // ---------------- END: Added by me  ----------------
  {
    path: "details",
    loadChildren: () =>
      import("./details/details.module").then(m => m.DetailsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
