// import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';
// import { Router } from '@angular/router';
// import { User } from 'src/app/user';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthserviceService {

//   isLoggedIn = false;
//   users:User[];
//   loginSubject = new Subject<boolean>();
//   obj={};
 
//    constructor(private router: Router) { }
  
//   logIn(profileForm) {
//     if (profileForm) {
//       const sign= this.users.find (x=>x.email === profileForm.email && x.password === profileForm.password);
//       if (sign) {
//         this.isLoggedIn = true;
//         this.loginSubject.next(this.isLoggedIn);
//         this.obj=sign;
//         return true;
//       } else {
//         this.isLoggedIn = false;
//         this.loginSubject.next(this.isLoggedIn)
//         return false;
//       }
//     }  
//   }

//   logout(){
//     this.isLoggedIn = false;
//     this.loginSubject.next(this.isLoggedIn);
//     this.router.navigate(['/signin']);
//   }

//   registerData(user){
//     this.users.push(user);
//   }

//   getProfile(){
//     console.log(this.obj);
//     return  this.obj
//   }

//   EditProfile(edit){
//     for (var i in this.users) {
//       if (this.users[i] === edit) {
//         this.users[i]=edit;
//      }
//     }
//     this.obj=edit;
//     console.log(this.obj)
//    this.getProfile();
//   }
//   }

