import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ResumeComponent } from '../resume/resume.component';
import { ContactComponent } from '../contact/contact.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [HomeComponent, PortfolioComponent, ResumeComponent, ContactComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
