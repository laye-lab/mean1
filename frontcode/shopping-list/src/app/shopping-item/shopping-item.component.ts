import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import {DataService} from '../data.service';


@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss']
})
export class ShoppingItemComponent implements OnInit {

  shoppingItemlist : Item[]=[];
  constructor(private dataservice :DataService) { }

  getItem(){
    this.dataservice.getShoppingItem()
      .subscribe( (items: any[]) =>{
        this.shoppingItemlist = items
        console.log('data from dataservice '+this.shoppingItemlist[0].itemName)

      })

    }
  
  ngOnInit() {
  }


}
