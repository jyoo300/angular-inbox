import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MessageService } from '../message.service';

import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  dataSource;

  columnsToDisplay: string[] = ['name', 'body', 'date'];
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private messageService: MessageService) { }
  
  ngOnInit() {
    this.messageService.fetchMessages().subscribe((data)=>{
      this.dataSource = new MatTableDataSource(data['messages']);
    });  
  }

  // I was unable to sync the paginator or the sort to the data source properly, likely due to the async nature of the data fetched from the API
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
   } 
}