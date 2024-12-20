import { Routes } from '@angular/router';
import { TestComponentComponent } from './componets/test-component/test-component.component';

export const routes: Routes = [
    {
        path:"", component:TestComponentComponent
    },
    {
        path:"**", component:TestComponentComponent
    }
];
