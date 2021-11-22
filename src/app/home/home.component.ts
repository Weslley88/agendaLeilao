import { Sale } from './sale.model';
import { Component, OnInit } from '@angular/core';
import { SaleService } from './sale.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private saleService : SaleService ) { }

  ngOnInit(): void {
    this.saleService.getSalesOnline().subscribe(
      (response) => {                           //next() callback
        console.log('response received')
        console.log(response) 

        const sales: Sale[] = Array.of(response);
        console.log(sales);
     },
      (error) => {                              //error() callback
        console.error('Request failed with error')
        
      })
  }

}
