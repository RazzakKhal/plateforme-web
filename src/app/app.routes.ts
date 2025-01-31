import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'admin', loadChildren : () => import('./pages/admin/admin.module').then(m => m.AdminModule)
    },
    {   
        path:'moniteur', loadChildren: () => import('./pages/monitor/monitor.module').then(m => m.MonitorModule)
    },
    {
        path:'sign-in', loadChildren: () => import('./pages/sign-in/sign-in.module').then(m => m.SignInModule)
    },
    {
        path:'me', loadChildren: () => import('./pages/me/me.module').then(m => m.MeModule)
    },
    {
        path:'sign-up', loadChildren: () => import('./pages/sign-up/sign-up.module').then(m => m.SignUpModule)
    },
    {
        path:'student', loadChildren: () => import('./pages/student/student.module').then(m => m.StudentModule)
    }
];
