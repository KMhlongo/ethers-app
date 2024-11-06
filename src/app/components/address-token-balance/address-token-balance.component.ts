import { Component, inject } from '@angular/core';
import { EthersService } from '../../services/ethers.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-address-token-balance',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './address-token-balance.component.html',
  styleUrl: './address-token-balance.component.css'
})
export class AddressTokenBalanceComponent {
  private ethersService: EthersService = inject(EthersService);

  balance = '0.0';
  ethereumAddress = '';
  tokenAddress = '';

  getTokenAddressBalance() : void {
    this.ethersService.getTokenBalance(this.ethereumAddress, this.tokenAddress)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.balance = data;
        },
        error: (err) => {
          console.log(err);
        }
      })
  }

}
