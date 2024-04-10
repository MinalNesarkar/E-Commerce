import { Component } from '@angular/core';
import { Product } from '../../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  Productcart:Product[]=[

    new Product("Shoes",150000,"./assets/img2.jpg","Puma Mens Softride RunphloRunning Shoe"),
    new Product("AirPods",25000,"./assets/budspro.jpg","Mehta AirPods Pro (for Apple AirPods Pro 2nd Generation)"),
    new Product("Shirt",15000,"./assets/i1.png","Apple 2022 MacBook Air Laptop with M2 chip"),
    new Product("Makeup",5000,"./assets/box5_image.jpg","Puma Mens Softride RunphloRunning Shoe"),
    new Product("Shoes",54900,"./assets/1.jpg","Apple Watch Series 8 [GPS 41 mm] Smart Watch"),
    new Product("Shirt",8000,"./assets/i1.png","Nikon EOS 1500D 24.1 Digital SLR Camera (Black) "),
    new Product("Mobile",54900,"./assets/box4_image.jpg","Apple iPhone 15 (128 GB) - Black"),
    new Product("Shirt",54900,"./assets/i1.png","Apple Watch Series 8 [GPS 41 mm] Smart Watch"),

]



}

