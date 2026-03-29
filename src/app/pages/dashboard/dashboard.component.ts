import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';

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
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
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
}
