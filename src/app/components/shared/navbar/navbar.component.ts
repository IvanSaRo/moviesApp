import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  searchNav(text: any){
    if (text.length === 0) return

     this.router.navigate(["/search", text])
  }

  ngOnInit(): void {

  }

}
