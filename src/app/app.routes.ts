import {
    provideRouter,
    RouterConfig,

} from '@angular/router';
import {
    UserComponent
} from './shared/user/user.component';
import {
    ListComponent
} from './shared/list/list.component';
import {
    AuthGuard
} from './auth-guard';


export const appRoutes: RouterConfig = [
{
    path: '',
    component: UserComponent
}, {
    path: 'list',
    component: ListComponent,
    canActivate: [AuthGuard]
}, {
    path: '**',
    redirectTo: ''
}];
export const appRouterProviders = [provideRouter(appRoutes)]