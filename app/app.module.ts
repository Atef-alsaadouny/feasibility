import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralInformationComponent } from './general-information/general-information.component';
import { ProposedManpowerComponent } from './proposed-manpower/proposed-manpower.component';
import { ProposedProjectEquipmentComponent } from './proposed-project-equipment/proposed-project-equipment.component';
import { ProposedCarrierComponent } from './proposed-carrier/proposed-carrier.component';
import { ProposedStockComponent } from './proposed-stock/proposed-stock.component';
import { ProposedGeneralFacilityComponent } from './proposed-general-facility/proposed-general-facility.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProposedManpowerComponent,
    ProposedProjectEquipmentComponent,
    ProposedCarrierComponent,
    ProposedStockComponent,
    ProposedGeneralFacilityComponent,
    HeaderComponent,
    FooterComponent,
    GeneralInformationComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
