import { Routes } from '@angular/router';

import { TaleOfTwoButtonsPageComponent } from './components/tale-of-two-buttons-page/tale-of-two-buttons-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MagicWandComponent } from './components/magic-wand/magic-wand.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent
    },
    {
        path: 'tale-of-two-buttons',
        component: TaleOfTwoButtonsPageComponent
    },
    {
        path: 'magic-wand',
        component: MagicWandComponent
    }
];
