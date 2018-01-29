import { Component } from "@angular/core";
import { AuthService } from "../user/index";

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/nav.component.html',
    styles: [`
    .nav.navbar-nav {font-size: 15px;}
    #searchForm {margin-right: 100px;}
    @media(max-width: 1200px) {#searchForm {display: none}}
    li > a.active { color: #F97924; }
    `]
})
export class NavComponent {
    constructor(private auth: AuthService) {

    }
}