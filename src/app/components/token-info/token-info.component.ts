import { Component, inject } from '@angular/core';
import { EthersService } from '../../services/ethers.service';
import { TokenDetails } from '../../interface/token-details';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-token-info',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './token-info.component.html',
  styleUrl: './token-info.component.css'
})
export class TokenInfoComponent {

  private ethersService = inject(EthersService);

  tokenAddress = '';
  tokenInfo : TokenDetails = {
    name: ' - ',
    symbol: ' - ',
    totalSupply: ' - '
  };

  getInfo() {
    this.ethersService.getTokenInfo(this.tokenAddress)
      .subscribe({
        next: (data) => {          
          this.tokenInfo = data;
        }
      })
  }

}
