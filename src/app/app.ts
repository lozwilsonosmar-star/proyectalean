import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './layout/footer/footer';
import { Sidebar } from './layout/sidebar/sidebar';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Footer, Sidebar, Header],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // ← corregido aquí
})
export class App {
  protected title = 'frontend';
  isSidebarCollapsed = false;

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
