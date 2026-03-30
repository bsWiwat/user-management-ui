import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-documents',
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
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.css',
})
export class DocumentsComponent {
  sort_by = [
    { value: 'asc', viewValue: 'ASC' },
    { value: 'desc', viewValue: 'DESC' },
    { value: 'newest', viewValue: 'Newest' },
    { value: 'oldest', viewValue: 'Oldest' },
  ];

  documents = [
    {
      name: 'Document 1',
      description: 'This is the description of Document 1.',
      createdDate: '24 Mar, 2024',
    },
    {
      name: 'Document 2',
      description: 'This is the description of Document 2.',
      createdDate: '25 Mar, 2024',
    },
    {
      name: 'Document 3',
      description: 'This is the description of Document 3.',
      createdDate: '26 Mar, 2024',
    },
    {
      name: 'Document 4',
      description: 'This is the description of Document 4.',
      createdDate: '25 Mar, 2024',
    },
    {
      name: 'Document 5',
      description: 'This is the description of Document 5.',
      createdDate: '26 Mar, 2024',
    },
  ];
}
