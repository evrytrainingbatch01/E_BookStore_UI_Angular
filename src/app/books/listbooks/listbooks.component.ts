import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';


@Component({
  selector: 'app-listbooks',
  templateUrl: './listbooks.component.html',
  styleUrls: ['./listbooks.component.css']
})
export class ListbooksComponent implements OnInit {

  books:Book[]=[
    {
      bookId:9921,
      bookTitle:'Java',
      bookAuthor:'James',
      bookPublisher:'Oracle Company',
      bookInfo:'this is latest version of java',
      bookPrice:1000,
      photopath:'/assets/images/java.jpg'
    },
    {
      bookId:3004,
      bookTitle:'Python',
      bookAuthor:'Python',
      bookPublisher:'python Company',
      bookInfo:'this is latest version of python',
      bookPrice:890,
      photopath:'/assets/images/python.jpg'
    },
    {
      bookId:6978,
      bookTitle:'Hibernate',
      bookAuthor:'josh calling',
      bookPublisher:'IBM',
      bookInfo:'this saleforce latest vesrsion',
      bookPrice:600,
      photopath:'/assets/images/hibernate.gif'
    },
    {
      bookId:2256,
      bookTitle:'DevoPs',
      bookAuthor:'Dev',
      bookPublisher:'Third party vendors',
      bookInfo:'this is completly  tools based ',
      bookPrice:1110,
      photopath:'/assets/images/devops.jpg'
    },
    {
      bookId:8876,
      bookTitle:'PHP',
      bookAuthor:'RadJhons',
      bookPublisher:'Microsoft',
      bookInfo:'this is latest version of PHP',
      bookPrice:1000,
      photopath:'/assets/images/php.jpg'
    },
    {
      bookId:8893,
      bookTitle:'Selenium',
      bookAuthor:'joy call',
      bookPublisher:'JpMorgan',
      bookInfo:'selenium providing  lot solutions ',
      bookPrice:750,
      photopath:'/assets/images/selenium.jpg'
    },
    {
      bookId:2034,
      bookTitle:'Maven',
      bookAuthor:'mareln',
      bookPublisher:'Maven company',
      bookInfo:'this is latest version of Maven ',
      bookPrice:1050,
      photopath:'/assets/images/maven.jpg'
    },
    {
      bookId:8876,
      bookTitle:'Mysql',
      bookAuthor:'ram akil',
      bookPublisher:'Mysql company',
      bookInfo:'this is latest version of Mysql',
      bookPrice:800,
      photopath:'/assets/images/mysql.jpg'
    },
    {
      bookId:4056,
      bookTitle:'Restful',
      bookAuthor:'rest jhons',
      bookPublisher:'IBM Company',
      bookInfo:'this is latest version of Restful',
      bookPrice:900,
      photopath:'/assets/images/restful.jpg'
    },
    {
      bookId:4532,
      bookTitle:'.Net',
      bookAuthor:'devdas',
      bookPublisher:'Oracle Company',
      bookInfo:'this is latest version of DotNet',
      bookPrice:1000,
      photopath:'/assets/images/dotnet.jpg'
    }
    
  ]
  constructor() { }

  ngOnInit() {
  }

}
