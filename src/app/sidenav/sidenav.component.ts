import { Component, OnInit } from '@angular/core';
import { faAngleRight,faAngleDown , faDatabase, faMicrochip} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  faAngleDown = faAngleDown;
  faAngleRight = faAngleRight;
  listItems = [
       {
         name: 'Core Infrastructure',
         icon: faMicrochip,
         children: [
              {
                name: 'Compute',
                expanded: false,
                children: ['Instances', 'Dedicated Virtual Machine Hosts', 'Instance Configuration', 'Instance Pools', 'Cluster Networks']
              },
              {
                name: 'Block Storage',
                children: []
              },
              {
                name: 'Object Storage',
                children: []
              },
              {
                name: 'File Storage',
                children: []
              },
              {
                name: 'networking',
                children: []
              }

         ]
       },
       {
         name: 'Oracle Databases',
         icon: faDatabase,
         children: [
          {
            name: 'Compute',
            expanded: false,
            children: ['Instances', 'Dedicated Virtual Machine Hosts', 'Instance Configuration', 'Instance Pools', 'Cluster Networks']
          },
          {
            name: 'Block Storage',
            children: []
          }


         ]
       }





  ]
  constructor() { }

  ngOnInit(): void {
  }
  toggleCollapse(indexMain: number, indexSub: number){
    this.listItems[indexMain].children[indexSub].expanded = this.listItems[indexMain].children[indexSub].expanded === false ?  true: false;

  }
}
