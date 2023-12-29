import { Component } from '@angular/core';

interface Product {
  model: string;
  launchYear: number;
  price: number;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  selectedProduct: string | null = null;

  
  products: { [key: string]: Product[] } = {
    mobile: [
      { model: 'Samsung', launchYear: 2022, price: 500 },
      { model: 'Apple', launchYear: 2021, price: 400 },
    ],
    television: [
      { model: 'LG', launchYear: 2022, price: 800 },
      { model: 'Sony', launchYear: 2020, price: 600 },
    ],
    laptop: [
      { model: 'Acer', launchYear: 2021, price: 1200 },
      { model: 'Dell', launchYear: 2020, price: 1000 },
    ],
  };

  displayedColumns: string[] = ['model', 'launchYear', 'price'];
}
