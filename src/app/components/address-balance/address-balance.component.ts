import { Component, inject } from '@angular/core';
import { EthersService } from '../../services/ethers.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-address-balance',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './address-balance.component.html',
  styleUrl: './address-balance.component.css'
})
export class AddressBalanceComponent {

  ethersService: EthersService = inject(EthersService);
  address: string = '';

  balance = '0.0';

  updateBalance() : void {
    console.log(`updating balance`)
    this.ethersService.getBalance(this.address)
      .subscribe({
        next:(value: string) => { 
          this.balance = value;
        },
        error: (err) => {
          console.error(err)
        }
      });
  }

}
