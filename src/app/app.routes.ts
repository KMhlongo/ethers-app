import { Routes } from '@angular/router';
import { AddressBalanceComponent } from './components/address-balance/address-balance.component';
import { TokenInfoComponent } from './components/token-info/token-info.component';
import { AddressTokenBalanceComponent } from './components/address-token-balance/address-token-balance.component';

export const routes: Routes = [
    {path: 'address-balance', component: AddressBalanceComponent},
    {path: 'token-info', component: TokenInfoComponent},
    {path: 'token-balance', component: AddressTokenBalanceComponent},
    {path: '', redirectTo: '/address-balance', pathMatch: 'full'}, 
];
