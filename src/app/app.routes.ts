import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { authGaurd } from './auth-gaurds/auth-gaurd.guard';
import { LoginComponent } from './components/routes/login/login.component';
import { SignUpComponent } from './components/routes/sign-up/sign-up.component';
import { MoviesComponent } from './home/components/movies/movies.component';
import { SerialsComponent } from './components/routes/serials/serials.component';
import { EncapsulationComponent } from './components/routes/encapsulation/encapsulation.component';
import { ViewChildComponent } from './components/routes/view-child/view-child.component';


MoviesComponent

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent,
        loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)

    },

    {
        path: "dashboard",
        component:DashboardComponent,
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate:[authGaurd]
    },
    {
        path:'login',
        component:LoginComponent,
        
    },
    {
        path:'signup',
        component:SignUpComponent
    },
    {
        path:'movies',
        component:MoviesComponent
    }
    ,
    {
        path: 'serials',
        component: SerialsComponent
    },
    {
        path: 'view-encapsulation',
        component: EncapsulationComponent
    },
{
        path: 'view-child',
        component: ViewChildComponent
    }

    
   
];
