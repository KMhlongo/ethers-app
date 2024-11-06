import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterModule } from '@angular/router';
import { EthersService } from './services/ethers.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
