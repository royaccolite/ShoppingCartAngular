import { Component } from '@angular/core';


interface Product {
  model: string;
  launchYear: number;
  price: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title='Project1';
  selectedProduct: string | null = null;
  searchTerm: string = ''; 
  
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

  filteredProducts: Product[] = [];

  handleSearch(searchTerm: string): void {
    this.selectedProduct = null;

    this.filteredProducts = this.filterProducts(searchTerm);
  }


  private filterProducts(searchTerm: string): Product[] {
 
    const allProducts = Object.values(this.products).reduce((acc, curr) => acc.concat(curr), []);
  
    if (!searchTerm.trim()) {
      return []; 
    }
  
    return allProducts.filter((product) =>
      product.model.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  handleProductChange(): void {
    
    this.searchTerm = '';
    this.handleSearch(this.searchTerm);
  }
  
  
}
