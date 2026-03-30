import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddUserComponent } from '../../features/dashboard/add-user/add-user.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../features/dashboard/services/user.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatPaginatorModule,
    MatDialogModule,
    HttpClientModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor(
    private dialog: MatDialog,
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.loadUsers();
  }

  sort_by = [
    { value: 'asc', viewValue: 'ASC' },
    { value: 'desc', viewValue: 'DESC' },
    { value: 'newest', viewValue: 'Newest' },
    { value: 'oldest', viewValue: 'Oldest' },
  ];

  users: any[] = [];
  total = 0;

  orderBy = '';
  orderDirection = '';
  pageNumber = 1;
  pageSize = 10;
  search = '';

  loadUsers() {
    this.userService
      .getUsers(
        this.orderBy,
        this.orderDirection,
        this.pageNumber,
        this.pageSize,
        this.search,
      )
      .subscribe({
        next: (res) => {
          this.users = res.data.data;
          this.total = res.data.total;
        },
        error: (err) => console.error(err),
      });
  }

  onPageChange(event: any) {
    this.pageNumber = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadUsers();
  }

  searchTimeout: any;

  onSearch() {
    clearTimeout(this.searchTimeout);

    this.searchTimeout = setTimeout(() => {
      this.pageNumber = 1;
      this.loadUsers();
    }, 500);
  }

  openAddUser() {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '80vw',
      maxWidth: '95vw',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('New User:', result);

        this.users.push({
          name: result.firstName + ' ' + result.lastName,
          email: result.email,
          role: result.role,
          createdDate: new Date().toLocaleDateString('en-US', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          }),
          permission: result.role === 'admin' ? 'Admin' : 'User',
        });
      }
    });
  }
}
