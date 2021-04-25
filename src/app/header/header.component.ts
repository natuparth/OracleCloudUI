import { Component, OnInit, Output , Input} from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faBar = faBars;
  constructor() { }
   @Input () navBar = false;
   @Output('toggleSideNav') toggleNav = new EventEmitter();
  ngOnInit(): void {
  }
  toggleSideNav(){
      this.toggleNav.emit();
      this.navBar = this.navBar ? false: true;
  }
}
