import { Component } from '@angular/core';
import {
  LucideAngularModule,
  Menu,
  Bell,
  User,
  Home,
  Settings,
  BarChart2,
  Users,
  Search,
} from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [LucideAngularModule, CommonModule],
})
export class AppComponent {
  readonly icons = {
    menu: Menu,
    bell: Bell,
    user: User,
    home: Home,
    settings: Settings,
    chart: BarChart2,
    users: Users,
    search: Search,
  };

  isSidebarOpen = true;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
