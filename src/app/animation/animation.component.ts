import { Component, OnInit ,Input} from '@angular/core';
import {trigger,state,style,animate,transition,keyframes,query,stagger} from '@angular/animations';
@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations:[
    trigger('popOverState',[
      state('show',style({
        opacity:1
      })),
      state('hide',style({
        opacity:0
      })),
      transition('show => hide',animate('600ms ease-out')),
      transition('hide => show',animate('1000ms ease-in'))
    ]),
    trigger('photosAnimation', [
      transition('* => *', [
        query('img',style({ transform: 'translateX(-100%)'})),
        query('img',
          stagger('1000ms', [
            animate('900ms', style({ transform: 'translateX(0)'}))
        ]))
      ])
    ]),
    trigger('photoState',[
      state('move',style({
    transform:  'translateX(200%) translateY(50px)',
      })),
      state('spin',
      style({     transform:  'rotate(0deg)',offset: 0   }) 
    ),
      state('enlarge',style({
        transform:  'translateX(50%) scale(1.5)',
      })),
      transition('* => spin,spin => spin',animate('2000ms',keyframes(
        [style({transform: 'rotate(0deg)',offset: 0}),
        style({transform: 'rotate(360deg)',offset: 1})
      ]))),
      transition('move => spin',animate('2000ms',keyframes(
        [style({transform: 'translateX(0) rotateY(0)',offset: 0}),
        style({transform: 'translateX(50%) rotateY(90deg)',offset: 0.33}),
        style({transform: 'translateX(-75%) rotateY(180deg)',offset: 0.66}),
        style({transform: 'translateX(0) rotateY(180deg)',offset: 1})
      ]))),
      transition('* => *',animate('1000ms ease-in'))
    ])
  ]
})
export class AnimationComponent implements OnInit {
show: boolean = false;
  constructor() { }
  get stateName(){
    return this.show ? 'show': 'hide';
  }
  ngOnInit() {
  }
  photos:any[]=  ['https://i.pinimg.com/originals/e2/6c/8a/e26c8a6bb2fbce33c5b6471810435c4a.png',
  'https://gocreativewireless.net/wp-content/uploads/2017/07/review-us-on-google-circle-200.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Red_Smiley.svg/2000px-Red_Smiley.svg.png'];
  position: string;
  changePosition(ps){
 this.position=ps;
  }

  logAnimation(event){
    
  }
  toggle(){
    this.show = !this.show ;
  }

}
