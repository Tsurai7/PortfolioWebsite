import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path: 'home', component:HomeComponent},
    {path: 'contact', component:ContactComponent},
    {path: 'resume', component:ResumeComponent},
    {path: 'portfolio', component:PortfolioComponent},
    {path: '**', component:HomeComponent, pathMatch: 'full'}
];
