import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenDetails } from '../interface/token-details';

@Injectable({
  providedIn: 'root'
})
export class EthersService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getBalance(ethereumAddress: string) : Observable<string>{
    console.log(`getting the balance of ${ethereumAddress}`);
    return this.http.get(`${this.baseUrl}/balance/${ethereumAddress}`, {responseType: 'text'});
  }

  getTokenInfo(tokenAddress: string) : Observable<TokenDetails> {
    console.log(`getting the balance of ${tokenAddress}`);
    return this.http.get<TokenDetails>(`${this.baseUrl}/token-info/${tokenAddress}`, {responseType: 'json'});
  }

  getTokenBalance(
    ethereumAddress: string,
    tokenAddress: string
  ) : Observable<string> {
    console.log(`getting the balance of ${tokenAddress} for address ${ethereumAddress}`);
    return this.http.get(`${this.baseUrl}/token-balance/${ethereumAddress}/${tokenAddress}`, {responseType: 'text'});
  }

}
