(self.webpackChunksagratec=self.webpackChunksagratec||[]).push([[3527],{3527:(o,e,t)=>{"use strict";t.r(e),t.d(e,{ion_popover:()=>f});var i=t(3150),r=t(7585),n=t(7330),s=t(7053),p=t(1269),a=t(4001),l=t(4086);const c=(o,e)=>{let t="top",i="left";const r=o.querySelector(".popover-content"),n=r.getBoundingClientRect(),s=n.width,p=n.height,a=o.ownerDocument.defaultView.innerWidth,c=o.ownerDocument.defaultView.innerHeight,h=e&&e.target&&e.target.getBoundingClientRect(),v=null!=h&&"top"in h?h.top:c/2-p/2,m=null!=h&&"left"in h?h.left:a/2,f=h&&h.width||0,b=h&&h.height||0,u=o.querySelector(".popover-arrow"),x=u.getBoundingClientRect(),g=x.width,w=x.height;null==h&&(u.style.display="none");const y={top:v+b,left:m+f/2-g/2},k={top:v+b+(w-1),left:m+f/2-s/2};let D=!1,E=!1;k.left<d+25?(D=!0,k.left=d):s+d+k.left+25>a&&(E=!0,k.left=a-s-d,i="right"),v+b+p>c&&v-p>0?(y.top=v-(w+1),k.top=v-p-(w-1),o.className=o.className+" popover-bottom",t="bottom"):v+b+p>c&&(r.style.bottom=d+"%"),u.style.top=y.top+"px",u.style.left=y.left+"px",r.style.top=k.top+"px",r.style.left=k.left+"px",D&&(r.style.left=`calc(${k.left}px + var(--ion-safe-area-left, 0px))`),E&&(r.style.left=`calc(${k.left}px - var(--ion-safe-area-right, 0px))`),r.style.transformOrigin=t+" "+i;const P=(0,l.c)(),S=(0,l.c)(),q=(0,l.c)();return S.addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),q.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),P.addElement(o).easing("ease").duration(100).addAnimation([S,q])},d=5,h=o=>{const e=(0,l.c)(),t=(0,l.c)(),i=(0,l.c)();return t.addElement(o.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),e.addElement(o).easing("ease").duration(500).addAnimation([t,i])},v=(o,e)=>{const t=o.ownerDocument,i="rtl"===t.dir;let r="top",n=i?"right":"left";const s=o.querySelector(".popover-content"),p=s.getBoundingClientRect(),a=p.width,c=p.height,d=t.defaultView.innerWidth,h=t.defaultView.innerHeight,v=e&&e.target&&e.target.getBoundingClientRect(),m=null!=v&&"bottom"in v?v.bottom:h/2-c/2,f=v&&v.height||0,b={top:m,left:null!=v&&"left"in v?i?v.left-a+v.width:v.left:d/2-a/2};b.left<12?(b.left=12,n="left"):a+12+b.left>d&&(b.left=d-a-12,n="right"),m+f+c>h&&m-c>0?(b.top=m-c-f,o.className=o.className+" popover-bottom",r="bottom"):m+f+c>h&&(s.style.bottom="12px");const u=(0,l.c)(),x=(0,l.c)(),g=(0,l.c)(),w=(0,l.c)(),y=(0,l.c)();return x.addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),g.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),w.addElement(s).beforeStyles({top:`${b.top}px`,left:`${b.left}px`,"transform-origin":`${r} ${n}`}).fromTo("transform","scale(0.001)","scale(1)"),y.addElement(o.querySelector(".popover-viewport")).fromTo("opacity",.01,1),u.addElement(o).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([x,g,w,y])},m=o=>{const e=(0,l.c)(),t=(0,l.c)(),i=(0,l.c)();return t.addElement(o.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),e.addElement(o).easing("ease").duration(500).addAnimation([t,i])},f=class{constructor(o){(0,i.r)(this,o),this.didPresent=(0,i.e)(this,"ionPopoverDidPresent",7),this.willPresent=(0,i.e)(this,"ionPopoverWillPresent",7),this.willDismiss=(0,i.e)(this,"ionPopoverWillDismiss",7),this.didDismiss=(0,i.e)(this,"ionPopoverDidDismiss",7),this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=o=>{o.stopPropagation(),o.preventDefault(),this.dismiss()},this.onBackdropTap=()=>{this.dismiss(void 0,s.B)},this.onLifecycle=o=>{const e=this.usersElement,t=b[o.type];if(e&&t){const i=new CustomEvent(t,{bubbles:!1,cancelable:!1,detail:o.detail});e.dispatchEvent(i)}}}connectedCallback(){(0,s.e)(this.el)}async present(){if(this.presented)return;const o=this.el.querySelector(".popover-content");if(!o)throw new Error("container is undefined");const e=Object.assign(Object.assign({},this.componentProps),{popover:this.el});return this.usersElement=await(0,n.a)(this.delegate,o,this.component,["popover-viewport",this.el["s-sc"]],e),await(0,a.e)(this.usersElement),(0,s.d)(this,"popoverEnter",c,v,this.event)}async dismiss(o,e){const t=await(0,s.f)(this,o,e,"popoverLeave",h,m,this.event);return t&&await(0,n.d)(this.delegate,this.usersElement),t}onDidDismiss(){return(0,s.g)(this.el,"ionPopoverDidDismiss")}onWillDismiss(){return(0,s.g)(this.el,"ionPopoverWillDismiss")}render(){const o=(0,r.b)(this),{onLifecycle:e,htmlAttributes:t}=this;return(0,i.h)(i.H,Object.assign({"aria-modal":"true","no-router":!0,tabindex:"-1"},t,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign(Object.assign({},(0,p.g)(this.cssClass)),{[o]:!0,"popover-translucent":this.translucent}),onIonPopoverDidPresent:e,onIonPopoverWillPresent:e,onIonPopoverWillDismiss:e,onIonPopoverDidDismiss:e,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap}),(0,i.h)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),(0,i.h)("div",{tabindex:"0"}),(0,i.h)("div",{class:"popover-wrapper ion-overlay-wrapper"},(0,i.h)("div",{class:"popover-arrow"}),(0,i.h)("div",{class:"popover-content"})),(0,i.h)("div",{tabindex:"0"}))}get el(){return(0,i.i)(this)}},b={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};f.style={ios:'.sc-ion-popover-ios-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios::after,[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after,[dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{top:-6px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios,.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',md:".sc-ion-popover-md-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md,[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md,[dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:100ms;transition-delay:100ms}"}}}]);