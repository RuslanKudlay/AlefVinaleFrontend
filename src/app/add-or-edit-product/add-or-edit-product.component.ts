import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-or-edit-product',
  templateUrl: './add-or-edit-product.component.html',
  styleUrls: ['./add-or-edit-product.component.scss']
})
export class AddOrEditProductComponent implements OnInit {
  public model: Product[] = [];
  public productEdit: Product = new Product;
  private apiFromUrl: string = environment.apiUrl + 'product/';
  public isEdit: boolean = false;

  public product: Product = new Product;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getAllData();
  }

  private getAllData(): void {
    this.httpClient.get<Product[]>(this.apiFromUrl + 'get-products').subscribe(result => {
      this.model = result;
    });
  }

  public addProduct(): void {
    this.httpClient.post<any>(this.apiFromUrl + 'add-product', this.product).subscribe(_ => {
      this.getAllData();
      this.product.meaning = null;
      this.product.name = null;
    });
  }

  public showEditPanel(): void {
    this.isEdit = true;
  }

  public hideEditPanel(): void {
    this.isEdit = false;
    this.getAllData();
  }

  public saveEditProduct(product: Product): void {
    this.httpClient.post<any>(this.apiFromUrl + 'edit-product', product).subscribe(_ => {
      this.getAllData();
      product.meaning = null;
      product.name = null;
      this.isEdit = false;
    });
  }

}
export class Product{
  id: string;
  meaning?: number;
  name: string;
}
