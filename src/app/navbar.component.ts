import { Component, OnInit } from '@angular/core';

import { AuthData, AuthService } from './auth.service';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="#">Hidden brand</a>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 col-10">
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                [routerLink]="['/']"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: true }"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                [routerLink]="['/active-posts']"
                routerLinkActive="active"
                >Posts attivi</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                [routerLink]="['/inactive-posts']"
                routerLinkActive="active"
                >Posts non attivi</a
              >
            </li>
            <li class="nav-item" *ngIf="isLogged">
              <a
                class="nav-link"
                [routerLink]="['/users']"
                routerLinkActive="active"
                >Users</a
              >
            </li>
            <li class="nav-item" *ngIf="!isLogged">
              <a
                class="nav-link"
                [routerLink]="['/login']"
                routerLinkActive="active"
                >Login</a
              >
            </li>
            <li class="nav-item" *ngIf="!isLogged">
              <a
                class="nav-link"
                [routerLink]="['/registration']"
                routerLinkActive="active"
                >Registrazione</a
              >
            </li>
            <li class="nav-item" *ngIf="isLogged">
              <button type="button" class="btn btn-primary" (click)="logout()">LOGOUT</button>
            </li>

          </ul><div *ngIf="isLogged" id="nomignolo" class="d-flex">
            benvenuto:
          {{nome}}
            </div>
        </div>
      </div>
    </nav>
  `,
  styles: [
  ],
})
export class NavbarComponent implements OnInit {
  constructor(private authSrv: AuthService) { }
  nome!: string;
  isLogged!: boolean;
  key!: any;


  ngOnInit(): void {
    this.authSrv.isLogged$.subscribe((isLogged) => {
      this.isLogged = isLogged;
    })
    console.log(this.isLogged);
    this.key = localStorage.getItem('user');
    let chiave: AuthData = JSON.parse(this.key);
    console.log(chiave);
    if (this.key) {
      this.isLogged = true;
      this.nome = chiave.user.nome;
      console.log(this.nome);

    }

  }
  logout() {
    this.authSrv.logout();
  }
}
