import { Component, OnInit } from "@angular/core";
import { NgModule } from "@angular/core";
import { AuthService } from "../auth.service";

@Component({
  template: `
<div class="row justify-content-center">
      <div class="col-6">

      <form #f="ngForm" (ngSubmit)="submit(f)">
          <div class="form-group">
            <label for="nome">Nome Completo</label>
            <input ngModel name="nome" class="form-control" type="text" id="nome" />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input ngModel name="email" class="form-control" type="email" id="email" />
          </div>
          <div class="form-group">
            <label for="pass">Password</label>
            <input ngModel name="password" class="form-control" type="password" id="pass" />
          </div>
          <button  class="btn btn-primary mt-3" [disabled]="false" type="submit" >Accedi
          </button>
        </form>
      </div>
    </div>
  `,
  styles: [],
})
export class registrationPage implements OnInit {
  constructor (private authSrv: AuthService){}
  errorMessage: undefined;
  ngOnInit(): void {

  }
  async submit(form:any){


    console.log(form)
    console.log('ciao');


    try {
       await this.authSrv.register(form.value).toPromise()
      form.reset()
      this.errorMessage=undefined
 /*      this.router.navigate(['/home']) */

      // this.authSrv.user$.subscribe(val=>{
      //   console.log('user state da BehaviorSubject',val)
      // })
      // this.authSrv.user2$.subscribe(val=>{
      //   console.log('user state Subject',val)
      // })
    } catch (error:any) {
      this.errorMessage = error
      console.error(error)
    }
  }
}
