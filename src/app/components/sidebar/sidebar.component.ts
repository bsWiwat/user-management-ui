import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  menus = [
    { name: 'Dashboard', path: '/', icon: 'keyboard_command_key' },
    { name: 'Users', path: '/users', icon: 'bar_chart' },
    { name: 'Documents', path: '/documents', icon: 'description' },
    { name: 'Photos', path: '/photos', icon: 'photo' },
    { name: 'Hierarchy', path: '/hierarchy', icon: 'toll' },
    { name: 'Message', path: '/massage', icon: 'message' },
    { name: 'Help', path: '/help', icon: 'help' },
    { name: 'Settings', path: '/settings', icon: 'settings' },
  ];
}
