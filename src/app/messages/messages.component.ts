import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  dataSource;

  columnsToDisplay: string[] = ['name', 'body', 'date'];
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private messageService: MessageService) { }
  
  ngOnInit() {
    this.messageService.fetchMessages().subscribe((data)=>{
      this.dataSource.data = new MatTableDataSource(data['messages']);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
   } 

}