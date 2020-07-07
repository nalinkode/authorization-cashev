import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { ProductService } from '../product.service';
import { DialogService } from '../../../shared/dialog.service';
import { Product } from '../product';
import { Image } from '../image';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { MatTableDataSource } from '@angular/material/table';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-add-product-image',
  templateUrl: './add-product-image.component.html',
  styleUrls: ['./add-product-image.component.css']
})
export class AddProductImageComponent implements OnInit {
  public productImageForm : FormGroup; 
  images = [];
  isLoading = true;
  @BlockUI() blockUI: NgBlockUI;
  ELEMENT_DATA : Image[];
  displayedColumns: string[] = ['serialNumber','imageId','location', 'action'];
  dataSource = new MatTableDataSource<Image>(this.ELEMENT_DATA);

  constructor(private route : ActivatedRoute,
  private router : Router,
  private productService : ProductService,
  private dialogService : DialogService,
  private fb: FormBuilder,
  private toaster: ToastrManager  ) { }

  ngOnInit() {
     this.getByProductId();
     this.createProductImageForm();
  }

  createProductImageForm(){
    this.productImageForm = this.fb.group({
      file: new FormControl('', [Validators.required]),
      fileSource: new FormControl('', [Validators.required])
   });
  }

   onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
                reader.onload = (event:any) => {
                   this.images.push(event.target.result); 
                   this.productImageForm.patchValue({
                      fileSource: this.images
                   });
                }
                reader.readAsDataURL(event.target.files[i]);
        }
    }
  }

  getByProductId(){
     this.route.paramMap.subscribe(params =>{
      const productId = +params.get('id');
      if(productId) {
         this.productService.getProductById(productId).subscribe(resp =>{
              debugger
              console.log(resp)
              this.dataSource.data = resp.imgUrl as Image[];
              this.isLoading = false;
         }, err => {
               this.isLoading = false;
         });
      }
    });
  }


  deleteProductImage(productImage){
    console.log(productImage)
    this.dialogService.openConfirmedDialog('Are you sure to delete this product image ?')
     .afterClosed().subscribe(res => {
        if(res){
          this.productService.deleteProduct(productImage);
          this.toaster.successToastr('Product image deleted successfully.');
        }
     });

  }

  onSubmit(){
    this.route.paramMap.subscribe(params =>{
      const productId = +params.get('id');
      if(productId) {
          debugger
          this.productService.addProductImage(this.productImageForm.value,productId);
          this.toaster.successToastr('Product added successfully .');  
       }
  });
  }
   
  goToProduct(){
    this.router.navigate(['admin/product']);
  }

  private deleteImage(url: any) {
    debugger
    this.images = this.images.filter((a) => a !== url);
  }

   blockedUI(value) {
     if (value) {
       this.blockUI.start(''); // Start blocking
     } else {
      this.blockUI.stop(); // Stop blocking
     }
  }
}
