import{r as t,h as o,H as r,g as i}from"./p-b7bdb8d5.js";const e=class{constructor(o){t(this,o),this.shouldShowTooltip=!1,this.attachedElements=[],this._isTooltipEnabled=!1,this.mouseoverHandler=t=>{this.shouldShowTooltip=!0,setTimeout((()=>{if(t.target.matches(":hover")){this.isTooltipEnabled=!0;const o=t.target.getAttribute("data-s-tooltip-text");this.updateTooltipText(o),this.updateTooltipPosition(t)}}),this.showDelay)},this.mouseoutHandler=()=>{this.shouldShowTooltip=!1,setTimeout((()=>{this.shouldShowTooltip||(this.isTooltipEnabled=!1)}),this.hideDelay)},this.mousemoveHandler=t=>{if(this.shouldShowTooltip){const o=t.target.getAttribute("data-s-tooltip-text");this.updateTooltipText(o),this.updateTooltipPosition(t)}},this.margin=10,this.orientation="bottom",this.followMouse=!1,this.noDefaultStyle=!1,this.noArrow=!1,this.showDelay=100,this.hideDelay=100,this.color="white",this.backgroundColor="black",this.maxWidth="500px",this.maxHeight="300px",this.borderWidth="0px",this.borderColor="white",this.opacity=.8,this.zIndex=99999,this.shadow="0px 5px 10px 0px grey",this.borderRadius="10px",this.arrowSize="10px"}get isTooltipEnabled(){return this._isTooltipEnabled}set isTooltipEnabled(t){t!==this._isTooltipEnabled&&(this._isTooltipEnabled=t,this.updateCSSVariable("--tooltip-display",t?"block":"none"),t||(this.hostElement.shadowRoot.querySelector("#tooltip-container").innerHTML="<slot/>"))}updateColor(t){this.updateCSSVariable("--tooltip-color",t)}updateBackgroundColor(t){this.updateCSSVariable("--tooltip-background-color",t)}updateMaxWidth(t){this.updateCSSVariable("--tooltip-max-width",t)}updateMaxHeight(t){this.updateCSSVariable("--tooltip-max-height",t)}updateBorderWidth(t){this.updateCSSVariable("--tooltip-border-width",t)}updateBorderColor(t){this.updateCSSVariable("--tooltip-border-color",t)}updateOpacity(t){this.updateCSSVariable("--tooltip-opacity",t.toString())}updateZIndex(t){this.updateCSSVariable("--tooltip-z-index",t.toString())}updateShadow(t){this.updateCSSVariable("--tooltip-shadow",t)}updateBorderRadius(t){this.updateCSSVariable("--tooltip-border-radius",t)}updateArrowSize(t){this.updateCSSVariable("--tooltip-arrow-size",t)}connectedCallback(){this.initializeCSSVariables()}componentWillRender(){this.setEventsForAttachedElements()}async forceUpdateAttachedElements(){this.setEventsForAttachedElements()}render(){return o(r,null,o("div",{id:"tooltip-container",class:[this.orientation,this.noDefaultStyle?"":"styled",this.noArrow?"":"arrow"].join(" ")},o("slot",null)))}updateTooltipText(t){t&&(this.hostElement.shadowRoot.querySelector("#tooltip-container").innerHTML=t)}updateTooltipPosition(t){let o=0,r=0;const i=t.target;if(this.followMouse)o=t.x,r=t.y;else{const{top:t,right:e,bottom:a,left:l,width:s,height:d}=i.getBoundingClientRect();switch(this.orientation){case"top":o=e-s/2,r=t;break;case"right":o=e,r=a-d/2;break;case"bottom":o=e-s/2,r=a;break;case"left":o=l,r=a-d/2}}this.setTooltipPosition(o,r)}setTooltipPosition(t,o){const r=this.hostElement.shadowRoot.querySelector("#tooltip-container"),i=r.clientWidth,e=r.clientHeight;let a=t,l=o;switch(this.orientation){case"top":a=t-i/2,l=o-e-this.margin;break;case"right":a=t+this.margin,l=o-e/2;break;case"bottom":a=t-i/2,l=o+this.margin;break;case"left":a=t-i-this.margin,l=o-e/2}this.updateCSSVariable("--tooltip-left",a+"px"),this.updateCSSVariable("--tooltip-top",l+"px")}setEventsForAttachedElements(){this.attachedElements.forEach((t=>{null==t||t.removeEventListener("mouseover",this.mouseoverHandler),null==t||t.removeEventListener("mouseout",this.mouseoutHandler),null==t||t.removeEventListener("mousemove",this.mousemoveHandler)})),this.updateAttachedElements(),this.attachedElements.forEach((t=>{t.addEventListener("mouseover",this.mouseoverHandler),t.addEventListener("mouseout",this.mouseoutHandler),t.addEventListener("mousemove",this.mousemoveHandler)}))}updateAttachedElements(){this.attachedElements=this.attachTo?"string"==typeof this.attachTo?document.querySelectorAll(this.attachTo):this.attachTo:[this.hostElement.parentElement]}initializeCSSVariables(){this.updateColor(this.color),this.updateBackgroundColor(this.backgroundColor),this.updateMaxWidth(this.maxWidth),this.updateMaxHeight(this.maxHeight),this.updateBorderWidth(this.borderWidth),this.updateBorderColor(this.borderColor),this.updateOpacity(this.opacity),this.updateZIndex(this.zIndex),this.updateShadow(this.shadow),this.updateBorderRadius(this.borderRadius),this.updateArrowSize(this.arrowSize)}updateCSSVariable(t,o){this.hostElement.style.setProperty(t,o)}get hostElement(){return i(this)}static get watchers(){return{color:["updateColor"],backgroundColor:["updateBackgroundColor"],maxWidth:["updateMaxWidth"],maxHeight:["updateMaxHeight"],borderWidth:["updateBorderWidth"],borderColor:["updateBorderColor"],opacity:["updateOpacity"],zIndex:["updateZIndex"],shadow:["updateShadow"],borderRadius:["updateBorderRadius"],arrowSize:["updateArrowSize"]}}};e.style=':host{all:initial;display:inline;--tooltip-display:none;--tooltip-left:0;--tooltip-top:0;--tooltip-arrow-right:unset;--tooltip-arrow-bottom:unset;--tooltip-arrow-left:unset;--tooltip-border-width:unset;--tooltip-border-color:unset;--tooltip-color:unset;--tooltip-background-color:unset;--tooltip-max-width:unset;--tooltip-max-height:unset;--tooltip-opacity:unset;--tooltip-z-index:unset;--tooltip-shadow:unset;--tooltip-border-radius:unset;--tooltip-arrow-size:unset}#tooltip-container{z-index:var(--tooltip-z-index);pointer-events:none;display:var(--tooltip-display);position:fixed;left:var(--tooltip-left);top:var(--tooltip-top);opacity:var(--tooltip-opacity)}#tooltip-container.styled{background-color:var(--tooltip-background-color);border-radius:var(--tooltip-border-radius);padding:10px;color:var(--tooltip-color);max-width:var(--tooltip-max-width);max-height:var(--tooltip-max-height);border-style:solid;border-width:var(--tooltip-border-width);border-color:var(--tooltip-border-color);-webkit-box-shadow:var(--tooltip-shadow);box-shadow:var(--tooltip-shadow)}#tooltip-container.styled.arrow:before,#tooltip-container.styled.arrow:after{content:"";width:0;height:0;position:absolute;border-style:solid}#tooltip-container.styled.arrow.top:before{border-left-width:var(--tooltip-arrow-size);border-left-color:transparent;border-right-width:var(--tooltip-arrow-size);border-right-color:transparent;border-bottom-width:var(--tooltip-arrow-size);border-bottom-color:transparent;top:100%;left:50%;margin-left:calc(0px - var(--tooltip-arrow-size));border-top-width:calc(var(--tooltip-arrow-size) - var(--tooltip-border-width));border-top-color:var(--tooltip-border-color)}#tooltip-container.styled.arrow.top:after{border-left-width:calc(var(--tooltip-arrow-size) - var(--tooltip-border-width));border-left-color:transparent;border-right-width:calc(var(--tooltip-arrow-size) - var(--tooltip-border-width));border-right-color:transparent;border-bottom-width:calc(var(--tooltip-arrow-size) - var(--tooltip-border-width));border-bottom-color:transparent;top:100%;left:50%;margin-left:calc(0px - var(--tooltip-arrow-size) + var(--tooltip-border-width));border-top-color:var(--tooltip-background-color);border-top-width:calc(var(--tooltip-arrow-size) - var(--tooltip-border-width) * 2)}#tooltip-container.styled.arrow.bottom:before{border-left-width:var(--tooltip-arrow-size);border-left-color:transparent;border-right-width:var(--tooltip-arrow-size);border-right-color:transparent;border-top-width:var(--tooltip-arrow-size);border-top-color:transparent;bottom:100%;left:50%;margin-left:calc(0px - var(--tooltip-arrow-size));border-bottom-width:calc(var(--tooltip-arrow-size) - var(--tooltip-border-width));border-bottom-color:var(--tooltip-border-color)}#tooltip-container.styled.arrow.bottom:after{border-left-width:calc(var(--tooltip-arrow-size) - var(--tooltip-border-width));border-left-color:transparent;border-right-width:calc(var(--tooltip-arrow-size) - var(--tooltip-border-width));border-right-color:transparent;border-top-width:calc(var(--tooltip-arrow-size) - var(--tooltip-border-width));border-top-color:transparent;bottom:100%;left:50%;margin-left:calc(0px - var(--tooltip-arrow-size) + var(--tooltip-border-width));border-bottom-color:var(--tooltip-background-color);border-bottom-width:calc(var(--tooltip-arrow-size) - var(--tooltip-border-width) * 2)}#tooltip-container.styled.arrow.left:before{border-top-width:var(--tooltip-arrow-size);border-top-color:transparent;border-bottom-width:var(--tooltip-arrow-size);border-bottom-color:transparent;border-right-width:var(--tooltip-arrow-size);border-right-color:transparent;left:100%;top:50%;margin-top:calc(0px - var(--tooltip-arrow-size));border-left-width:calc(var(--tooltip-arrow-size) - var(--tooltip-border-width));border-left-color:var(--tooltip-border-color)}#tooltip-container.styled.arrow.left:after{border-top-width:calc(var(--tooltip-arrow-size) - var(--tooltip-border-width));border-top-color:transparent;border-bottom-width:calc(var(--tooltip-arrow-size) - var(--tooltip-border-width));border-bottom-color:transparent;border-right-width:calc(var(--tooltip-arrow-size) - var(--tooltip-border-width));border-right-color:transparent;left:100%;top:50%;margin-top:calc(0px - var(--tooltip-arrow-size) + var(--tooltip-border-width));border-left-color:var(--tooltip-background-color);border-left-width:calc(var(--tooltip-arrow-size) - var(--tooltip-border-width) * 2)}#tooltip-container.styled.arrow.right:before{border-top-width:var(--tooltip-arrow-size);border-top-color:transparent;border-bottom-width:var(--tooltip-arrow-size);border-bottom-color:transparent;border-left-width:var(--tooltip-arrow-size);border-left-color:transparent;right:100%;top:50%;margin-top:calc(0px - var(--tooltip-arrow-size));border-right-width:calc(var(--tooltip-arrow-size) - var(--tooltip-border-width));border-right-color:var(--tooltip-border-color)}#tooltip-container.styled.arrow.right:after{border-top-width:calc(var(--tooltip-arrow-size) - var(--tooltip-border-width));border-top-color:transparent;border-bottom-width:calc(var(--tooltip-arrow-size) - var(--tooltip-border-width));border-bottom-color:transparent;border-left-width:calc(var(--tooltip-arrow-size) - var(--tooltip-border-width));border-left-color:transparent;right:100%;top:50%;margin-top:calc(0px - var(--tooltip-arrow-size) + var(--tooltip-border-width));border-right-color:var(--tooltip-background-color);border-right-width:calc(var(--tooltip-arrow-size) - var(--tooltip-border-width) * 2)}';export{e as s_tooltip}