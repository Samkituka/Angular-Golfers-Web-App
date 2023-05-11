import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { GolfersAddEditComponent } from './golfers-add-edit/golfers-add-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Golfers_Crud_App';

   constructor (private _dialog: MatDialog){}

   openAddEditGolfersForm (){
    this._dialog.open(GolfersAddEditComponent);
   }
  

}
