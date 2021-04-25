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
               
              },
              {
                name: 'Object Storage',
               
              },
              {
                name: 'File Storage',
                
              },
              {
                name: 'networking',
                
              }

         ]
       },
       {
         name: 'Oracle Databases',
         icon: faDatabase,
         children: [
          {
            name: 'Overview',
            
          },
          {
            name: 'Autonomous Data Warehouse',
            
          },
          {
            name: 'Autonomous JSON Database', 
          },
          {
            name: "Autonomous Transaction Processing"
          },
          {
            name: "Bare Metal, VM and Exadata"
          },
          {
            name: "Exadata Cloud@Customer"
          },
          {
            name: "External Database"
          }
         ]
       },
       {
        name: 'Databases',
        icon: faDatabase,
        children: [
         {
           name: 'MySQL',
           expanded: false,
           children: ['Create a Database', 'Host a MySQL database']
         },
         {
           name: 'NoSQL Database'

         }
        ]
       }

  ]
  constructor() { }

  ngOnInit(): void {
  }
  toggleCollapse(indexMain: number, indexSub: number){
    if(this.listItems[indexMain].children)
    this.listItems[indexMain].children[indexSub].expanded = this.listItems[indexMain].children[indexSub].expanded === false ?  true: false;

  }
}
