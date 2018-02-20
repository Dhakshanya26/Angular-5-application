  
  import {trigger,animate,state,stagger,style,transition} from '@angular/animations';
  //:enter  is alias of  void => *
   //:leave  is alias of  * => void
  // we can also use  * <=> void  is equal to  *=> void ,void => *
 export let fadeIn= trigger('fadeIn', [
    state('void',style({opacity: 0})),
    state('*',style({opacity: 1})),
    transition('void => *',[
     //  style({opacity: 0}), //  style({backgroundColor: 'yellow',opacity: 0}),
      animate(2000) // animate(2000,style({backgroundColor: 'white',opacity:1}),)
    ]),
    transition('*=> void',[
     style({backgroundColor: 'Red'}),
     animate(1000)
     //animate(2000,style({opacity: 0}))
    ])
   ])
   export let slideLeft= trigger('slideLeft', [
    state('void',style({opacity: 0})),
    state('*',style({opacity: 1})),
    transition('void => *',[
      style({transform: 'translateX(-20px)'}),
      animate(2000) 
    ]),
    transition('*=> void',[
      
     animate(1000,style({transform: 'translateX(-100px)',backgroundColor: 'Red'}))
    ])
   ])
