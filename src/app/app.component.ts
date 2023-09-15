import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'second_app';
  msg: string="rewaz is here";
  num: number = -1;
  myarray=[ {name:"Swimming",is_complete:false},
            {name:"Breakfast",is_complete:false},
            {name:"College",is_complete:false},
            {name:"Shopping",is_complete:false},
            {name:"Dinner",is_complete:false}
  ];
}

