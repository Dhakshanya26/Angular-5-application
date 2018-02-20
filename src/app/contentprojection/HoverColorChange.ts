import {Directive,ElementRef,Renderer,HostListener,Input, HostBinding  ,   Output,
    EventEmitter
} from '@angular/core';

@Directive({
    selector: "[ccHoverToBlue]"
})

 

export class HoverToBlueDirective {
    @HostBinding('class.card-outline-primary') private ishovering: boolean;
    
    private _renderer;
    private _el;
    // config: Object ={addButtonSelector: '.addmenubutton'};
    @Input('ccHoverToBlue') config= {
        color: 'red'
      };
    
    constructor(private el: ElementRef,private renderer: Renderer) {
      //  el.nativeElement.style.BackgroundColor ='Orange';
        this._renderer =renderer;
        this._el =el;
     
    }

    @HostListener('mouseover') onmouseover(){
        // let part = this.el.nativeElement.querySelector(this.config.color);
        // this.renderer.setElementStyle(part, 'display', 'block');
        // this.ishovering = true;
         
        this._renderer.setElementStyle(this._el.nativeElement, 'backgroundColor', this.config.color);
    }
    @HostListener('mouseout') onmouseout(){
        // let part = this.el.nativeElement.querySelector('.card-text') 
        // this.renderer.setElementStyle(part, 'display', 'block'); 
        this._renderer.setElementStyle(this._el.nativeElement, 'backgroundColor', '');
    }
}