import { animate, AUTO_STYLE, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { faSearch,faBox,faNetworkWired,faMicrochip, faDatabase ,faAngleDown, faAngleRight} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ height: 0, opacity: 0 }),
            animate('0.5s ease-out', 
                    style({ height: 300, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: '100%' , opacity: 1 }),
            animate('0.5s ease-in', 
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    ),
    
  ]
})
export class MainComponent implements OnInit {
actionsExpanded = true;
tutorialsExpanded = true;
faDatabase = faDatabase;
faAngleDown = faAngleDown;
faAngleRight = faAngleRight;
  cardData = [{
    name: 'compute',
    heading:'create a VM instance',
    time: '2-6 mins',
    icon: faMicrochip,
    info: 'Compute is Always Free eligible. For more information about Always Free resources, including capabilities and limitations, see Oracle Cloud Infrastructure Free Tier'
  },
 
  {
    name: 'Networking',
    heading:'Set up a load balancer',
    time: '5 mins',
    icon: faDatabase,
    info: 'The Oracle Cloud Infrastructure Load Balancing service provides automated traffic distribution from one entry point to multiple servers reachable from your virtual cloud network (VCN).'
    
  },
  {
    name: 'Networking',
    heading:'Set up a network with a wizard',
    time: '2-3 mins',
    icon: faNetworkWired,
    info: 'A virtual, private network that you set up in Oracle data centers. It closely resembles a traditional network, with firewall rules and specific types of communication gateways that you can choose to use. '

  },{
    name: 'resource manager',
    heading:'Create a Stack',
    time: '2-6 mins',
    icon: faDatabase,
    info: 'Oracle Cloud Infrastructure is a set of complementary cloud services that enable you to build and run a wide range of applications and services in a highly available hosted environment.'
  },{
    name: 'object storage',
    heading:'Store data',
    time: '2-6 mins',
    icon: faBox,
    info: 'The Oracle Cloud Infrastructure Object Storage service is an internet-scale, high-performance storage platform that offers reliable and cost-efficient data durability.'
  },
  {
    name: 'Search',
    heading:'View all my resources',
    time: '',
    icon: faSearch,
    info: 'you can search all your OCI related info here'
  },
  {
    name: 'autonomous data warehouse',
    heading:'Create an ADW database',
    time: '3-5 mins',
    icon: faDatabase,
    info: 'Oracle Cloud Infrastructure is a set of complementary cloud services that enable you to build and run a wide range of applications and services in a highly available hosted environment.'
  },{
    name: 'autonomous transaction processing',
    heading:'Create an ATP database',
    time: '3-5 mins',
    icon: faDatabase,
    info: 'Oracle Cloud Infrastructure is a set of complementary cloud services that enable you to build and run a wide range of applications and services in a highly available hosted environment.'
  },{
    name: 'oracle cloud development kit',
    heading:'Set up an instance with developer tools',
    time: '10-15 mins',
    icon: faDatabase,
    info: 'Oracle Cloud Infrastructure is a set of complementary cloud services that enable you to build and run a wide range of applications and services in a highly available hosted environment.'
  },
  ]

  constructor() { }
 
  ngOnInit(): void {
  }

  toggleActionDiv(){
    this.actionsExpanded = !this.actionsExpanded;
  }
  toggleTutorialDiv(){
    this.tutorialsExpanded = !this.tutorialsExpanded;
  }

}
