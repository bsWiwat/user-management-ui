import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { first, last } from 'rxjs';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css',
})
export class AddUserComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';
  role: string = '';
  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private dialogRef: MatDialogRef<AddUserComponent>) {}

  close() {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close({
      userId: Math.floor(Math.random() * 1000),
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      role: this.role,
      username: this.username,
      password: this.password,
      confirmPassword: this.confirmPassword,
    });
  }
}
