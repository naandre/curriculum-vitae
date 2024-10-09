import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { StudiesComponent } from './components/studies/studies.component';
import { CertificatesComponent } from './components/certificates/certificates.component';

export const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'studies', component: StudiesComponent },
    { path: 'certificates', component: CertificatesComponent }
];
