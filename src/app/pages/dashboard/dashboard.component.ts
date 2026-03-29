import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddUserComponent } from '../../features/dashboard/add-user/add-user.component';

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
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor(private dialog: MatDialog) {}

  sort_by = [
    { value: 'asc', viewValue: 'ASC' },
    { value: 'desc', viewValue: 'DESC' },
    { value: 'newest', viewValue: 'Newest' },
    { value: 'oldest', viewValue: 'Oldest' },
  ];

  users = [
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
      permission: 'Super Admin',
      createdDate: '24 Mar, 2024',
      role: 'Admin',
    },
    {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      permission: 'Admin',
      createdDate: '25 Mar, 2024',
      role: 'User',
    },
  ];

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
