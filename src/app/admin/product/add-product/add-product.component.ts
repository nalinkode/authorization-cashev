import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  public productForm : FormGroup; 
  constructor(
    private productService : ProductService,
    private dialogRef : MatDialogRef<AddProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private fb: FormBuilder,
    private toaster: ToastrManager 
  ) { }

  ngOnInit() {
     this.createProductForm();
     
  }


  createProductForm(){
   //forms controll
   this.productForm = this.fb.group({
     productName: [this.data.name, Validators.required],
     category: [this.data.category, Validators.required],
     price: [this.data.price, Validators.required],
     description: [this.data.description, Validators.required]
   });
  }   
  
  onNoClick(){
    this.dialogRef.close();
  }

  onSubmit(){
    this.productService.addProduct(this.productForm.value);
    this.toaster.successToastr('Product added successfully .');  
    this.dialogRef.close();
  }
   
  


}