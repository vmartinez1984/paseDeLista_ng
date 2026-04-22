import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: 'app-menu',
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    RouterLink,
    RouterModule,
  ],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {}
