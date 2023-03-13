import { AnasayfaComponent } from './anasayfa.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: AnasayfaComponent }])]
})
export class AnasayfaRoutingModule { }
