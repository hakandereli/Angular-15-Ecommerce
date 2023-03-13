import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {NotfoundComponent} from './demo/components/notfound/notfound.component';
import {AppLayoutComponent} from "./layout/app.layout.component";
import {LoginComponent} from "./demo/components/auth/login/login.component";


const routes: Routes = [
    {
        path: '', component: AppLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'blocks',
                loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule)
            },
            {
                path: 'pages',
                loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule)
            },
            {
                path: 'anasayfa',
                loadChildren: () => import('../app/custom/anasayfa/anasayfa.module').then(m => m.AnasayfaModule)
            }
        ]
    },
    {path: 'login', component: LoginComponent},
    {path: '**', component : NotfoundComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
