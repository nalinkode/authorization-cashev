import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { DialogService } from '../../../shared/dialog.service';
import { Product } from '../product';
import { AddProductComponent } from '../add-product/add-product.component';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;

  ELEMENT_DATA : Product[];
  displayedColumns: string[] = ['productId', 'productName', 'productPrice','productOfferPrice','productDescription','productColor','productSize','isStock','productQuantity', 'categoryName', 'subCategoryName','imgUrl', 'action'];
  dataSource = new MatTableDataSource<Product>(this.ELEMENT_DATA);
  
  isPopupOpen = false;
  isLoading = true;

  constructor(private productService : ProductService,
             private dialogService : DialogService,
             private router: Router,
             private route : ActivatedRoute,
             private toastr : ToastrManager,     
             private dialog? : MatDialog) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllProduct();
  }

  public getAllProduct(){
    let response = this.productService.getAllProduct()
    response.subscribe(list =>{
      this.dataSource.data = list as Product[];
      this.isLoading = false;
      }, err =>{
        this.isLoading = false; 
      });
  }

   public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase(); 
  }
  
  public addProduct(){
    this.isPopupOpen = true;
    const dialogRef = this.dialog.open(AddProductComponent,{
    width: "450px", 
    position: { top : "70px"},
    data: { message:"Add product" }
    });
    dialogRef.afterClosed().subscribe(result =>{
    this.isPopupOpen = false;
  });
  }

   public editProduct(eproduct : Product[]){
    console.log(eproduct)
    this.isPopupOpen = true;
    const dialogRef = this.dialog.open(AddProductComponent,{
    width: "450px", 
    position: { top : "70px"},
    data: { eproduct,
            message:"Edit product"
          }
    });
    dialogRef.afterClosed().subscribe(result =>{
    this.isPopupOpen = false;
  });
  }

  public deleteProduct(eproduct){
     this.dialogService.openConfirmedDialog('Are you sure to delete this record ?')
     .afterClosed().subscribe(res => {
        if(res){
          this.productService.deleteProduct(eproduct);
          this.toastr.successToastr('Product deleted successfully.');;

        }
     });
  }

  addProductImage(id : number){
     this.router.navigate(['/admin/product/upload',id])

  }

   blockedUI(value) {
     debugger
     if (value) {
       this.blockUI.start(''); // Start blocking
     } else {
      this.blockUI.stop(); // Stop blocking
     }
  }
}
