import { Component, OnInit , ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { GolfersAddEditComponent } from './golfers-add-edit/golfers-add-edit.component';
import { GolferService } from './services/golfer.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ɵafterNextNavigation } from '@angular/router';
import { CoreService } from './core/core.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent  implements OnInit{
  title = 'Golfers-Crud-App';
  displayedColumns: string[] = [
  'id',
  'firstName',
  'lastName',
  'email', 
  'Dob', 
  'gender', 
  'education',
  'championship', 
  'wins', 
  'losses',
  'action'
];
   dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

   constructor (
     private _dialog: MatDialog,
     private _gfService:GolferService,
     private _coreService: CoreService
     ){}

     ngOnInit(): void {
      this.getGolferList();
    }
  

   openAddEditGolfersForm (){
    const dialogRef= this._dialog.open(GolfersAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val) {
          this.getGolferList();
        }
      }
    })
   }

   getGolferList()
   {
    this._gfService.getGolferList().subscribe({
      next:(res) =>{
       this.dataSource = new MatTableDataSource(res);
       this.dataSource.sort = this.sort;
       this.dataSource.paginator = this.paginator;  
      },
      error : console.log,
      
    });
   }

   deleteGolfer(id: number) {
    this._gfService.deleteGolfer(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Employee deleted!', 'done');
        this.getGolferList(); 
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
   const dialogRef= this._dialog.open(GolfersAddEditComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val) {
          this.getGolferList();
        }
      }
    })
  }

   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
