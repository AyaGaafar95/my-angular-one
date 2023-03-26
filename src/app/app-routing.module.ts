import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABOUTComponent } from './about/about.component';
import { CONTACTMEComponent } from './contact-me/contact-me.component';
// import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
// import { NavComponent } from './nav/nav.component';
import { PORTFOLIOComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'home' },
  { path: 'about', component: ABOUTComponent, title: 'about' },
  { path: 'contact', component: CONTACTMEComponent, title: 'contact' },
  // { path: 'footer', component: FooterComponent, title: 'footer' },
  // { path: 'nav', component: NavComponent, title: 'nav' },
  { path: 'portfolio', component: PORTFOLIOComponent, title: 'portfolio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
