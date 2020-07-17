import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
import { OrderService } from '../../shared/order.service';
import { DialogService } from '../../shared/dialog.service';
import { Order } from '../../shared/model/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;

  ELEMENT_DATA : Order[];
  displayedColumns: string[] = ['orderId', 'orderDate', 'total', 'isOrderCompleted','customerId', 'name', 'email', 'phone','productId','productName','price','offerPrice','action'];
  dataSource = new MatTableDataSource<Order>(this.ELEMENT_DATA);
  
  isPopupOpen = false;
  isLoading = true;
 


  constructor(private orderService :  OrderService) { }
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  ngOnInit() {
    this.getAllOrder();
  }

  getAllOrder(){
    let response = this.orderService.getAllOrder();
    response.subscribe(list =>{
      this.dataSource.data = list as Order[];
      this.isLoading = false;
      }, err =>{
        this.isLoading = false; 
      });
  }


}