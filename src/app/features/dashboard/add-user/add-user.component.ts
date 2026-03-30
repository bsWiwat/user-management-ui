import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../services/user.service';
import { first, last } from 'rxjs';
import { Role, User } from '../models/User';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css',
})
export class AddUserComponent {
  userId: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';
  roles: Role[] = [];
  roleId: string = '';
  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(
    private dialogRef: MatDialogRef<AddUserComponent>,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: User | null,
  ) {}

  ngOnInit() {
    this.userService.getRoles().subscribe({
      next: (res) => {
        this.roles = res.data;
      },
      error: (err) => console.error(err),
    });

    if (this.data) {
      ((this.userId = this.data.userId),
        (this.firstName = this.data.firstName));
      this.lastName = this.data.lastName;
      this.email = this.data.email;
      this.phone = this.data.phone;
      this.username = this.data.username;
      this.roleId = this.data.role?.roleId;
    }
  }

  close() {
    this.dialogRef.close();
  }

  submit() {
    const password = this.password?.trim();
    const confirm = this.confirmPassword?.trim();

    if (password !== confirm) {
      alert('Password not match');
      return;
    }

    const payload = {
      userId: this.data?.userId,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      roleId: this.roleId,
      username: this.username,
      permissions: this.data?.permissions || [
        {
          permissionId: 'a918acdc-4aeb-4058-94ee-cef86e57ad0d',
          isReadable: true,
          isWritable: false,
          isDeletable: false,
        },
      ],

      ...(this.data ? {} : { password: this.password.trim() }),
    };

    this.dialogRef.close(payload);
  }
}
