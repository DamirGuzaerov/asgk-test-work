import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {IUserPasses, UsersService} from "../../../services/users/users.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements AfterViewInit{
  columnsToDisplay = ['first_name', 'last_name', 'phone','email','date_last','birthday','template','loyalty_level'];
  dataSource = new MatTableDataSource<IUserPasses>([])

  @ViewChild(MatSort) sort: MatSort|undefined
  constructor(private usersService: UsersService) {
    usersService.getUserPasses().subscribe(value => {
      this.dataSource.data = [...value.passes]
    })
  }

  applyFilter(searchEvent: EventTarget|null) {
    this.dataSource.filter = (<HTMLTextAreaElement>searchEvent).value.trim().toLowerCase();
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort!
  }
}
