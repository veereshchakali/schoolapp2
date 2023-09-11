import { CanActivateFn, Router } from '@angular/router';

export const authenticationguardGuard: CanActivateFn = (route, state) => {
  return true;
  if(localStorage.getItem('token')){
  }

  else{
    alert("you need to login to access this page!");
    var router:Router = new Router();
    router.navigateByUrl('/login');
    return false;
  }
};
