import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddTutorial } from './../actions/tutorial.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  constructor(private store: Store) {}

  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('stable');    //Mockable Api Delay
    }, 2000);
  });

  addTutorial(name, url) {
    this.store.dispatch(new AddTutorial({ name: name, url: url }));
  }

  ngOnInit() {}
}