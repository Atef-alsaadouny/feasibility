import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralInformationComponent } from './general-information/general-information.component';
import { ProposedCarrierComponent } from './proposed-carrier/proposed-carrier.component';
import { ProposedGeneralFacilityComponent } from './proposed-general-facility/proposed-general-facility.component';
import { ProposedManpowerComponent } from './proposed-manpower/proposed-manpower.component';
import { ProposedProjectEquipmentComponent } from './proposed-project-equipment/proposed-project-equipment.component';
import { ProposedStockComponent } from './proposed-stock/proposed-stock.component';

const routes: Routes = [
   {path:'proposed-carrier',component:ProposedCarrierComponent},
   {path:'proposed-general-facility',component:ProposedGeneralFacilityComponent},
   {path:'proposed-project-equipment',component:ProposedProjectEquipmentComponent},
   {path:'proposed-manpower',component:ProposedManpowerComponent},
   {path:'proposed-stock',component:ProposedStockComponent},
   {path:'general-information',component:GeneralInformationComponent},
   {path:'',component:GeneralInformationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
