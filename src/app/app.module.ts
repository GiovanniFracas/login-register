import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { HomePage } from './pages/home.page';
import { ActivePostsPage } from './pages/active-posts.page';
import { InactivePostsPage } from './pages/inactive-posts.page';
import { PostCardComponent } from './components/post-card.component';
import { MaiuscoloPipe } from './pipes/maiuscolo.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { PostDetailsPage } from './pages/post-details.page';
import { UsersPage } from './pages/users.page';
import { UsersDetailsPage } from './pages/users-details.page';
import { registrationPage } from './pages/registration.page';
import { loginPage } from './pages/login.page';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './pages/token.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';


const routes: Route[] = [
  {
    path: "",
    component: HomePage
  },
  {
    path: "active-posts",
    component: ActivePostsPage
  },
  {
    path: "inactive-posts",
    component: InactivePostsPage
  },
  {
    path: "active-posts/:id",
    component: PostDetailsPage
  },
  {
    path: "inactive-posts/:id",
    component: PostDetailsPage
  },
  {
    path: "users",
    component: UsersPage,
    children: [
      {
        path: ":id",
        component: UsersDetailsPage
      }
    ]
  },
  {
    path: "registration",
    component: registrationPage
  },
  {
    path: "login",
    component: loginPage
  },

  {
    path: "**",
    redirectTo: ""
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePage,
    ActivePostsPage,
    InactivePostsPage,
    PostCardComponent,
    MaiuscoloPipe,
    HighlightDirective,
    PostDetailsPage,
    UsersPage,
    UsersDetailsPage,
    loginPage,
    registrationPage

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,

    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
