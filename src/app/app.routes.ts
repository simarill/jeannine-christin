import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AngeboteComponent } from './angebote/angebote.component';
import { CranioComponent } from './cranio/cranio.component';
import { AyurvedaComponent } from './ayurveda/ayurveda.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'angebote', component: AngeboteComponent},
    {path: 'cranio', component: CranioComponent},
    {path: 'ayurveda', component: AyurvedaComponent},
    {path: '**', component: NotFoundComponent}
];
