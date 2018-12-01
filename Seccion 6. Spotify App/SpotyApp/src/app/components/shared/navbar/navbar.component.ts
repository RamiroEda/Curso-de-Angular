import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from '../../../services/spotify.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private service: SpotifyService) { }

  ngOnInit() {
  }

  buscar(nombre: string) {
    if (nombre.length > 0) {
      this.service.onSearchChange(nombre);
      this.router.navigate(['/search']);
    } else {
      this.router.navigate(['/home']);
    }
  }

}
