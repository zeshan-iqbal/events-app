import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
    templateUrl: './app/user/login.component.html'
})
export class LoginComponent{
    constructor(private authService: AuthService, private router: Router) {        
        
    }
    login(formValues) {
        let isAuthenticated = this.authService.loginUser(formValues.userName, formValues.password);
        if(isAuthenticated)
            this.router.navigate(['/events']);
    }

    cancel(){
        this.router.navigate(['/events']);
    }
}