import{V as g,c as a,b as D,_ as $,g as p,m as h,f as P,a as O,k as w,d as u,e as V,T as A,h as f,i as m,j as X,l as k,C as T,n as U,o as Y,p as d,q as W,r as z,R as j,s as C,t as F,u as y,v as b,w as S,x as q,y as Z,z as v,A as G}from"./index.b1737e9f.js";var l=g.extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:()=>({isExtended:!1}),computed:{computedHeight(){const t=this.computedContentHeight;if(!this.isExtended)return t;const e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes(){return{...g.options.computed.classes.call(this),"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent}},isCollapsed(){return this.collapse},isProminent(){return this.prominent},styles(){return{...this.measurableStyles,height:a(this.computedHeight)}}},created(){[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]].forEach(([e,i])=>{this.$attrs.hasOwnProperty(e)&&D(e,i,this)})},methods:{genBackground(){const t={height:a(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement($,{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:a(this.computedContentHeight)}},p(this))},genExtension(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:a(this.extensionHeight)}},p(this,"extension"))}},render(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;const e=[this.genContent()],i=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,i,e)}});function J(t,e,i){const{self:s=!1}=e.modifiers||{},o=e.value,r=typeof o=="object"&&o.options||{passive:!0},n=typeof o=="function"||"handleEvent"in o?o:o.handler,c=s?t:e.arg?document.querySelector(e.arg):window;!c||(c.addEventListener("scroll",n,r),t._onScroll=Object(t._onScroll),t._onScroll[i.context._uid]={handler:n,options:r,target:s?void 0:c})}function K(t,e,i){var s;if(!(!((s=t._onScroll)===null||s===void 0)&&s[i.context._uid]))return;const{handler:o,options:r,target:n=t}=t._onScroll[i.context._uid];n.removeEventListener("scroll",o,r),delete t._onScroll[i.context._uid]}const E={inserted:J,unbind:K};var Q=E;function B(t,e=[]){return h(P(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return t}},watch:{app(i,s){s?this.removeApplication(!0):this.callUpdate()},applicationProperty(i,s){this.$vuetify.application.unregister(this._uid,s)}},activated(){this.callUpdate()},created(){for(let i=0,s=e.length;i<s;i++)this.$watch(e[i],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){!this.app||this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(i=!1){!i&&!this.app||this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}function tt(){return!0}function M(t,e,i){if(!t||H(t,i)===!1)return!1;const s=O(e);if(typeof ShadowRoot!="undefined"&&s instanceof ShadowRoot&&s.host===t.target)return!1;const o=(typeof i.value=="object"&&i.value.include||(()=>[]))();return o.push(e),!o.some(r=>r.contains(t.target))}function H(t,e){return(typeof e.value=="object"&&e.value.closeConditional||tt)(t)}function et(t,e,i){const s=typeof i.value=="function"?i.value:i.value.handler;e._clickOutside.lastMousedownWasOutside&&M(t,e,i)&&setTimeout(()=>{H(t,i)&&s&&s(t)},0)}function _(t,e){const i=O(t);e(document),typeof ShadowRoot!="undefined"&&i instanceof ShadowRoot&&e(i)}const it={inserted(t,e,i){const s=r=>et(r,t,e),o=r=>{t._clickOutside.lastMousedownWasOutside=M(r,t,e)};_(t,r=>{r.addEventListener("click",s,!0),r.addEventListener("mousedown",o,!0)}),t._clickOutside||(t._clickOutside={lastMousedownWasOutside:!0}),t._clickOutside[i.context._uid]={onClick:s,onMousedown:o}},unbind(t,e,i){!t._clickOutside||(_(t,s=>{var o;if(!s||!(!((o=t._clickOutside)===null||o===void 0)&&o[i.context._uid]))return;const{onClick:r,onMousedown:n}=t._clickOutside[i.context._uid];s.removeEventListener("click",r,!0),s.removeEventListener("mousedown",n,!0)}),delete t._clickOutside[i.context._uid])}};var st=it;const ot=t=>{const{touchstartX:e,touchendX:i,touchstartY:s,touchendY:o}=t,r=.5,n=16;t.offsetX=i-e,t.offsetY=o-s,Math.abs(t.offsetY)<r*Math.abs(t.offsetX)&&(t.left&&i<e-n&&t.left(t),t.right&&i>e+n&&t.right(t)),Math.abs(t.offsetX)<r*Math.abs(t.offsetY)&&(t.up&&o<s-n&&t.up(t),t.down&&o>s+n&&t.down(t))};function rt(t,e){const i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function nt(t,e){const i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),ot(e)}function at(t,e){const i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function lt(t){const e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:i=>rt(i,e),touchend:i=>nt(i,e),touchmove:i=>at(i,e)}}function ct(t,e,i){const s=e.value,o=s.parent?t.parentElement:t,r=s.options||{passive:!0};if(!o)return;const n=lt(e.value);o._touchHandlers=Object(o._touchHandlers),o._touchHandlers[i.context._uid]=n,w(n).forEach(c=>{o.addEventListener(c,n[c],r)})}function ht(t,e,i){const s=e.value.parent?t.parentElement:t;if(!s||!s._touchHandlers)return;const o=s._touchHandlers[i.context._uid];w(o).forEach(r=>{s.removeEventListener(r,o[r])}),delete s._touchHandlers[i.context._uid]}const ut={inserted:ct,unbind:ht};var dt=ut,N=u.extend({name:"scrollable",directives:{Scroll:E},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:()=>({currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}),computed:{canScroll(){return typeof window!="undefined"},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp(){this.savedScroll=this.savedScroll||this.currentScroll},isActive(){this.savedScroll=0}},mounted(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||V(`Unable to locate element with identifier ${this.scrollTarget}`,this))},methods:{onScroll(){!this.canScroll||(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick(()=>{Math.abs(this.currentScroll-this.savedScroll)>this.computedScrollThreshold&&this.thresholdMet()}))},thresholdMet(){}}}),L=u.extend({name:"ssr-bootable",data:()=>({isBooted:!1}),mounted(){window.requestAnimationFrame(()=>{this.$el.setAttribute("data-booted","true"),this.isBooted=!0})}});const pt=h(l,N,L,A,B("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));var vt=pt.extend({name:"v-app-bar",directives:{Scroll:Q},provide(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data(){return{isActive:this.value}},computed:{applicationProperty(){return this.bottom?"bottom":"top"},canScroll(){return N.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes(){return{...l.options.computed.classes.call(this),"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll}},scrollRatio(){const t=this.computedScrollThreshold;return Math.max((t-this.currentScroll)/t,0)},computedContentHeight(){if(!this.shrinkOnScroll)return l.options.computed.computedContentHeight.call(this);const t=this.dense?48:56,e=this.computedOriginalHeight;return t+(e-t)*this.scrollRatio},computedFontSize(){if(!this.isProminent)return;const t=1.25;return t+(1.5-t)*this.scrollRatio},computedLeft(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop(){return this.app?this.$vuetify.application.bar:0},computedOpacity(){if(!!this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight(){let t=l.options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform(){if(!this.canScroll||this.elevateOnScroll&&this.currentScroll===0&&this.isActive||this.isActive)return 0;const t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?this.currentScroll===0||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&this.computedTransform!==0},isCollapsed(){return this.collapseOnScroll?this.currentScroll>0:l.options.computed.isCollapsed.call(this)},isProminent(){return l.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles(){return{...l.options.computed.styles.call(this),fontSize:a(this.computedFontSize,"rem"),marginTop:a(this.computedMarginTop),transform:`translateY(${a(this.computedTransform)})`,left:a(this.computedLeft),right:a(this.computedRight)}}},watch:{canScroll:"onScroll",computedTransform(){!this.canScroll||!this.clippedLeft&&!this.clippedRight||this.callUpdate()},invertedScroll(t){this.isActive=!t||this.currentScroll!==0},hideOnScroll(t){this.isActive=!t||this.currentScroll<this.computedScrollThreshold}},created(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground(){const t=l.options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet(){if(this.invertedScroll){this.isActive=this.currentScroll>this.computedScrollThreshold;return}this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),!(this.currentThreshold<this.computedScrollThreshold)&&(this.savedScroll=this.currentScroll)}},render(t){const e=l.options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}}),ft=u.extend({name:"v-app-bar-nav-icon",functional:!0,render(t,{slots:e,listeners:i,props:s,data:o}){const r=Object.assign(o,{staticClass:`v-app-bar__nav-icon ${o.staticClass||""}`.trim(),props:{...s,icon:!0},on:i}),n=e().default;return t(f,r,n||[t(m,"$menu")])}});function R(t){const e=[];for(let i=0;i<t.length;i++){const s=t[i];s.isActive&&s.isDependent?e.push(s):e.push(...R(s.$children))}return e}var mt=h().extend({name:"dependent",data(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive(t){if(t)return;const e=this.getOpenDependents();for(let i=0;i<e.length;i++)e[i].isActive=!1}},methods:{getOpenDependents(){return this.closeDependents?R(this.$children):[]},getOpenDependentElements(){const t=[],e=this.getOpenDependents();for(let i=0;i<e.length;i++)t.push(...e[i].getClickableDependentElements());return t},getClickableDependentElements(){const t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),this.overlay&&t.push(this.overlay.$el),t.push(...this.getOpenDependentElements()),t}}}),I=u.extend({name:"mobile",props:{mobileBreakpoint:{type:[Number,String],default(){return this.$vuetify?this.$vuetify.breakpoint.mobileBreakpoint:void 0},validator:t=>!isNaN(Number(t))||["xs","sm","md","lg","xl"].includes(String(t))}},computed:{isMobile(){const{mobile:t,width:e,name:i,mobileBreakpoint:s}=this.$vuetify.breakpoint;if(s===this.mobileBreakpoint)return t;const o=parseInt(this.mobileBreakpoint,10);return!isNaN(o)?e<o:i===this.mobileBreakpoint}},created(){this.$attrs.hasOwnProperty("mobile-break-point")&&X("mobile-break-point","mobile-breakpoint",this)}});var gt=h(T,k,A).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(t){const e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}}),yt=u.extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data(){return{animationFrame:0,overlay:null}},watch:{hideOverlay(t){!this.isActive||(t?this.removeOverlay():this.genOverlay())}},beforeDestroy(){this.removeOverlay()},methods:{createOverlay(){const t=new gt({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();const e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay(){if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame(()=>{!this.overlay||(this.activeZIndex!==void 0?this.overlay.zIndex=String(this.activeZIndex-1):this.$el&&(this.overlay.zIndex=U(this.$el)),this.overlay.value=!0)}),!0},removeOverlay(t=!0){this.overlay&&(Y(this.overlay.$el,"transitionend",()=>{!this.overlay||!this.overlay.$el||!this.overlay.$el.parentNode||this.overlay.value||this.isActive||(this.overlay.$el.parentNode.removeChild(this.overlay.$el),this.overlay.$destroy(),this.overlay=null)}),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),t&&this.showScroll()},scrollListener(t){if("key"in t){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;const e=[d.up,d.pageup],i=[d.down,d.pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else if(i.includes(t.keyCode))t.deltaY=1;else return}(t.target===this.overlay||t.type!=="keydown"&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;const e=window.getComputedStyle(t);return(["auto","scroll"].includes(e.overflowY)||t.tagName==="SELECT")&&t.scrollHeight>t.clientHeight||["auto","scroll"].includes(e.overflowX)&&t.scrollWidth>t.clientWidth},shouldScroll(t,e){if(t.hasAttribute("data-app"))return!1;const i=e.shiftKey||e.deltaX?"x":"y",s=i==="y"?e.deltaY:e.deltaX||e.deltaY;let o,r;i==="y"?(o=t.scrollTop===0,r=t.scrollTop+t.clientHeight===t.scrollHeight):(o=t.scrollLeft===0,r=t.scrollLeft+t.clientWidth===t.scrollWidth);const n=s<0,c=s>0;return!o&&n||!r&&c?!0:(o||r)&&t.parentNode?this.shouldScroll(t.parentNode,e):!1},isInside(t,e){return t===e?!0:t===null||t===document.body?!1:this.isInside(t.parentNode,e)},checkPath(t){const e=W(t);if(t.type==="keydown"&&e[0]===document.body){const i=this.$refs.dialog,s=window.getSelection().anchorNode;return i&&this.hasScrollbar(i)&&this.isInside(s,i)?!this.shouldScroll(i,t):!0}for(let i=0;i<e.length;i++){const s=e[i];if(s===document||s===document.documentElement||s===this.$refs.content)return!0;if(this.hasScrollbar(s))return!this.shouldScroll(s,t)}return!0},hideScroll(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(z(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}});const bt=h(B("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),T,mt,I,yt,L,k);var St=bt.extend({name:"v-navigation-drawer",directives:{ClickOutside:st,Resize:j,Touch:dt},provide(){return{isInNav:this.tag==="nav"}},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:()=>({isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}),computed:{applicationProperty(){return this.right?"right":"left"},classes(){return{"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":Number(this.miniVariantWidth)!==56,"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary,...this.themeClasses}},computedMaxHeight(){if(!this.hasApp)return null;const t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop(){if(!this.hasApp)return 0;let t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp(){return this.app&&!this.isMobile&&!this.temporary},isBottom(){return this.bottom&&this.isMobile},isMiniVariant(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile(){return!this.stateless&&!this.permanent&&I.options.computed.isMobile.call(this)},reactsToClick(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay(){return!this.hideOverlay&&this.isActive&&(this.isMobile||this.temporary)},styles(){const t=this.isBottom?"translateY":"translateX";return{height:a(this.height),top:this.isBottom?"auto":a(this.computedTop),maxHeight:this.computedMaxHeight!=null?`calc(100% - ${a(this.computedMaxHeight)})`:void 0,transform:`${t}(${a(this.computedTransform,"%")})`,width:a(this.computedWidth)}}},watch:{$route:"onRouteChange",isActive(t){this.$emit("input",t)},isMobile(t,e){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),!(e==null||!this.reactsToResize||!this.reactsToMobile)&&(this.isActive=!t)},permanent(t){t&&(this.isActive=!0)},showOverlay(t){t?this.genOverlay():this.removeOverlay()},value(t){if(!this.permanent){if(t==null){this.init();return}t!==this.isActive&&(this.isActive=t)}},expandOnHover:"updateMiniVariant",isMouseover(t){this.updateMiniVariant(!t)}},beforeMount(){this.init()},methods:{calculateTouchArea(){const t=this.$el.parentNode;if(!t)return;const e=t.getBoundingClientRect();this.touchArea={left:e.left+50,right:e.right-50}},closeConditional(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend(){return this.genPosition("append")},genBackground(){const t={height:"100%",width:"100%",src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement($,{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[e])},genDirectives(){const t=[{name:"click-outside",value:{handler:()=>{this.isActive=!1},closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return!this.touchless&&!this.stateless&&t.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),t},genListeners(){const t={mouseenter:()=>this.isMouseover=!0,mouseleave:()=>this.isMouseover=!1,transitionend:e=>{if(e.target!==e.currentTarget)return;this.$emit("transitionend",e);const i=document.createEvent("UIEvents");i.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(i)}};return this.miniVariant&&(t.click=()=>this.$emit("update:mini-variant",!1)),t},genPosition(t){const e=p(this,t);return e&&this.$createElement("div",{staticClass:`v-navigation-drawer__${t}`},e)},genPrepend(){return this.genPosition("prepend")},genContent(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init(){this.permanent?this.isActive=!0:this.stateless||this.value!=null?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft(t){this.isActive&&this.right||(this.calculateTouchArea(),!(Math.abs(t.touchendX-t.touchstartX)<100)&&(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight(t){this.isActive&&!this.right||(this.calculateTouchArea(),!(Math.abs(t.touchendX-t.touchstartX)<100)&&(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;const t=Number(this.miniVariant?this.miniVariantWidth:this.width);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant(t){this.expandOnHover&&this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render(t){const e=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||p(this,"img"))&&e.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),e)}});const _t=C("v-toolbar__title");C("v-toolbar__items");var xt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.$vuetify.breakpoint.smAndUp?t._e():i(St,{attrs:{clipped:t.$vuetify.breakpoint.lgAndUp,app:"",color:"primary",dark:""},model:{value:t.drawer,callback:function(s){t.drawer=s},expression:"drawer"}},[i(F,{attrs:{color:"primary",nav:""}},[t._l(t.btnItems,function(s,o){return i(y,{key:o,attrs:{href:s.href,target:s.target,to:s.to,link:""}},[i(b,[i(S,[t._v(t._s(s.text))])],1)],1)}),t._l(t.barItems,function(s,o){return i(y,{key:o,attrs:{href:s.href,target:s.target,to:s.to,link:""}},[i(b,[i(S,[t._v(t._s(s.title))])],1)],1)})],2)],1),i(vt,{attrs:{"clipped-left":t.$vuetify.breakpoint.lgAndUp,app:"",color:"white","elevate-on-scroll":"",flat:""}},[i(q,{class:{"px-0":!t.$vuetify.breakpoint.smAndUp}},[i(Z,{attrs:{"no-gutters":!t.$vuetify.breakpoint.smAndUp,align:"center",justify:"space-between"}},[i(v,{staticClass:"d-flex align-center"},[t.$vuetify.breakpoint.mdAndUp?t._e():i(ft,{on:{click:function(s){s.stopPropagation(),t.drawer=!t.drawer}}}),i(_t,{staticClass:"font-weight-bold text-h5 primary--text",staticStyle:{cursor:"pointer"},on:{click:function(s){return t.$router.push("/")}}},[i(m,{attrs:{color:"primary",large:""}},[t._v("mdi-feather")]),t._v(" Day0 "),i("span",{staticClass:"accent--text"},[t._v("News")])],1)],1),t.$vuetify.breakpoint.mdAndUp?i(v,{attrs:{cols:"6"}},t._l(t.barItems,function(s,o){return i(f,{key:o,staticClass:"text-capitalize",attrs:{to:s.to,exact:"","exact-active-class":"accent--text",text:""}},[t._v(t._s(s.title)+" ")])}),1):t._e(),t.$vuetify.breakpoint.mdAndUp?i(v,{staticClass:"text-right"},t._l(t.btnItems,function(s,o){return i(f,{key:o,staticClass:"ml-3 text-capitalize",attrs:{color:s.color,href:s.href,outlined:s.outlined,target:s.target,to:s.to}},[i(m,{attrs:{left:""}},[t._v(t._s(s.icon))]),t._v(" "+t._s(s.text)+" ")],1)}),1):t._e()],1)],1)],1)],1)},$t=[];const Ot={data:()=>({drawer:null,btnItems:[{text:"Day0 News TG-bot",href:"https://t.me/JeremyJiangBot/Day0News",target:"_black",color:"primary",icon:"mdi-robot"}],barItems:[{title:"Home",to:"/"},{title:"Category",to:"/category"},{title:"Detail",to:"/detail"},{title:"Authors",to:"/authors"},{title:"Login",to:"/login"}]})},x={};var wt=G(Ot,xt,$t,!1,At,null,null,null);function At(t){for(let e in x)this[e]=x[e]}var Tt=function(){return wt.exports}();export{Tt as default};
