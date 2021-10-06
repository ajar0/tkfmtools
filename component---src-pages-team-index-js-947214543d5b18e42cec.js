"use strict";(self.webpackChunktkfmtools=self.webpackChunktkfmtools||[]).push([[164],{22702:function(e,t,n){n.d(t,{Z:function(){return x}});var a=n(87462),r=n(45987),i=n(67294),o=n(85505),l=n(49044),c=n(19123),s=(0,c.Z)(i.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),m=(0,c.Z)(i.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),d=n(37595),p=(0,c.Z)(i.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),u=n(81664),g=n(34621),f=i.createElement(m,null),h=i.createElement(s,null),v=i.createElement(p,null),y=i.forwardRef((function(e,t){var n=e.checkedIcon,c=void 0===n?f:n,s=e.classes,m=e.color,d=void 0===m?"secondary":m,p=e.icon,g=void 0===p?h:p,y=e.indeterminate,x=void 0!==y&&y,b=e.indeterminateIcon,E=void 0===b?v:b,S=e.inputProps,w=e.size,Z=void 0===w?"medium":w,C=(0,r.Z)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),k=x?E:g,P=x?E:c;return i.createElement(l.Z,(0,a.Z)({type:"checkbox",classes:{root:(0,o.Z)(s.root,s["color".concat((0,u.Z)(d))],x&&s.indeterminate),checked:s.checked,disabled:s.disabled},color:d,inputProps:(0,a.Z)({"data-indeterminate":x},S),icon:i.cloneElement(k,{fontSize:void 0===k.props.fontSize&&"small"===Z?Z:k.props.fontSize}),checkedIcon:i.cloneElement(P,{fontSize:void 0===P.props.fontSize&&"small"===Z?Z:P.props.fontSize}),ref:t},C))})),x=(0,g.Z)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,d.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,d.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(y)},62846:function(e,t,n){var a=n(87462),r=n(45987),i=n(67294),o=n(85505),l=n(34621),c=n(37595),s=i.forwardRef((function(e,t){var n=e.absolute,l=void 0!==n&&n,c=e.classes,s=e.className,m=e.component,d=void 0===m?"hr":m,p=e.flexItem,u=void 0!==p&&p,g=e.light,f=void 0!==g&&g,h=e.orientation,v=void 0===h?"horizontal":h,y=e.role,x=void 0===y?"hr"!==d?"separator":void 0:y,b=e.variant,E=void 0===b?"fullWidth":b,S=(0,r.Z)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return i.createElement(d,(0,a.Z)({className:(0,o.Z)(c.root,s,"fullWidth"!==E&&c[E],l&&c.absolute,u&&c.flexItem,f&&c.light,"vertical"===v&&c.vertical),role:x,ref:t},S))}));t.Z=(0,l.Z)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:(0,c.Fq)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(s)},80838:function(e,t,n){var a=n(45987),r=n(87462),i=n(67294),o=n(85505),l=n(34621),c=[0,1,2,3,4,5,6,7,8,9,10],s=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var d=i.forwardRef((function(e,t){var n=e.alignContent,l=void 0===n?"stretch":n,c=e.alignItems,s=void 0===c?"stretch":c,m=e.classes,d=e.className,p=e.component,u=void 0===p?"div":p,g=e.container,f=void 0!==g&&g,h=e.direction,v=void 0===h?"row":h,y=e.item,x=void 0!==y&&y,b=e.justify,E=e.justifyContent,S=void 0===E?"flex-start":E,w=e.lg,Z=void 0!==w&&w,C=e.md,k=void 0!==C&&C,P=e.sm,I=void 0!==P&&P,O=e.spacing,T=void 0===O?0:O,_=e.wrap,j=void 0===_?"wrap":_,N=e.xl,F=void 0!==N&&N,L=e.xs,z=void 0!==L&&L,M=e.zeroMinWidth,D=void 0!==M&&M,R=(0,a.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),H=(0,o.Z)(m.root,d,f&&[m.container,0!==T&&m["spacing-xs-".concat(String(T))]],x&&m.item,D&&m.zeroMinWidth,"row"!==v&&m["direction-xs-".concat(String(v))],"wrap"!==j&&m["wrap-xs-".concat(String(j))],"stretch"!==s&&m["align-items-xs-".concat(String(s))],"stretch"!==l&&m["align-content-xs-".concat(String(l))],"flex-start"!==(b||S)&&m["justify-content-xs-".concat(String(b||S))],!1!==z&&m["grid-xs-".concat(String(z))],!1!==I&&m["grid-sm-".concat(String(I))],!1!==k&&m["grid-md-".concat(String(k))],!1!==Z&&m["grid-lg-".concat(String(Z))],!1!==F&&m["grid-xl-".concat(String(F))]);return i.createElement(u,(0,r.Z)({className:H,ref:t},R))})),p=(0,l.Z)((function(e){return(0,r.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return c.forEach((function(a){var r=e.spacing(a);0!==r&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(m(r,2)),width:"calc(100% + ".concat(m(r),")"),"& > $item":{padding:m(r,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};s.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,r.Z)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(d);t.Z=p},49963:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(67294),r=n(50190),i=n(50009),o=n(87462),l=n(45987),c=n(85505),s=n(34621),m=n(81664),d=a.forwardRef((function(e,t){var n=e.classes,r=e.className,i=e.color,s=void 0===i?"default":i,d=e.component,p=void 0===d?"li":d,u=e.disableGutters,g=void 0!==u&&u,f=e.disableSticky,h=void 0!==f&&f,v=e.inset,y=void 0!==v&&v,x=(0,l.Z)(e,["classes","className","color","component","disableGutters","disableSticky","inset"]);return a.createElement(p,(0,o.Z)({className:(0,c.Z)(n.root,r,"default"!==s&&n["color".concat((0,m.Z)(s))],y&&n.inset,!h&&n.sticky,!g&&n.gutters),ref:t},x))})),p=(0,s.Z)((function(e){return{root:{boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:e.palette.text.secondary,fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(14)},colorPrimary:{color:e.palette.primary.main},colorInherit:{color:"inherit"},gutters:{paddingLeft:16,paddingRight:16},inset:{paddingLeft:72},sticky:{position:"sticky",top:0,zIndex:1,backgroundColor:"inherit"}}}),{name:"MuiListSubheader"})(d),u=n(65541),g=n(42857),f=(0,i.ZP)(r.Z).withConfig({displayName:"StageSelect__StyledInput",componentId:"sc-iyjsu9-0"})(["&&{margin:0.4rem 0;width:100%;svg{fill:",";}}"],(e=>e.theme.colors.onSurface)),h=(0,i.ZP)(p).withConfig({displayName:"StageSelect__StyledListSubheader",componentId:"sc-iyjsu9-1"})(["&&{color:",";font-size:1rem;font-style:italic;line-height:2rem;}"],(e=>e.theme.colors.onSurface)),v=e=>{var{children:t,className:n,value:r,error:o,handleChange:l}=e,{pageString:c,stageString:s}=(0,g.f)(),{colors:m}=(0,i.Fg)();return a.createElement(f,{className:n,label:c.team.build.stageSelectLabel,id:"select-stage",onChange:l,select:!0,value:r,SelectProps:{MenuProps:{PaperProps:{style:{backgroundColor:m.surface}},MenuListProps:{style:{backgroundColor:m.surface,color:m.onSurface},dense:!0}}},variant:"outlined",size:"small",inputProps:{"aria-label":"select-stage"},error:o,helperText:o&&c.team.build.stageSelectHelpText},t,s.map((e=>{var t;return[a.createElement(h,{key:e.name},e.name),null===(t=e.stages)||void 0===t?void 0:t.map((t=>a.createElement(u.Z,{value:e.chapter+"/"+t.id,key:t.id},t.id+" : "+t.name))),e.stagePrefix&&[...Array(61).keys()].slice(1).map((t=>a.createElement(u.Z,{value:e.chapter+"/"+e.chapter+"-"+t,key:e.chapter+"-"+t},e.chapter+"-"+t+" : "+e.stagePrefix+t+e.stageSuffix)))]})))}},65746:function(e,t,n){var a=n(67294),r=n(77447);t.Z=e=>{var{className:t,layoutSwitcher:n,localStorageKey:i,items:o,initLayoutIndex:l,unmountOnLeave:c}=e,{layout:s,canRender:m,setLayout:d}=(0,r.Z)(i,o.map((e=>e.layout)),l,c);return a.createElement(a.Fragment,null,n&&a.cloneElement(n,{layout:s,setLayout:d}),o.map(((e,n)=>a.createElement("div",{className:t,hidden:s!==e.layout,key:e.layout},m[n]&&e.content))))}},64529:function(e,t,n){n.r(t),n.d(t,{default:function(){return ge}});var a=n(67294),r=n(50009),i=n(83332),o=n(22702),l=n(62846),c=n(28001),s=n(42857),m=n(65746),d=n(47378),p=n(25072),u=n(57693),g=n(22727),f=n(45987),h=n(15861),v=n(25444),y=n(80791),x=n(87462),b=n(85505),E=n(34621),S=a.forwardRef((function(e,t){var n=e.classes,r=e.className,i=(0,f.Z)(e,["classes","className"]);return a.createElement("div",(0,x.Z)({className:(0,b.Z)(n.root,r),ref:t},i))}));S.muiName="ListItemSecondaryAction";var w=(0,E.Z)({root:{position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"}},{name:"MuiListItemSecondaryAction"})(S),Z=n(78032),C=n(4381),k=(0,r.ZP)(C.Z).withConfig({displayName:"StyledListItem",componentId:"sc-4usy4r-0"})(["&&{margin-bottom:0.6rem;padding-right:6.8rem;color:",";}background:linear-gradient( 90deg,",","," );"],(e=>e.theme.colors.onSurface),(e=>e.theme.colors.shadow+"2A"),(e=>e.theme.colors.shadow+"0D")),P=n(93175),I=r.ZP.div.withConfig({displayName:"CharBox__CharContainer",componentId:"sc-1s00yss-0"})(["display:flex;flex-wrap:nowrap;overflow-x:hidden;"]),O=(0,r.ZP)(P.Z).withConfig({displayName:"CharBox__CharImg",componentId:"sc-1s00yss-1"})(["flex:0 0 auto;width:3rem;height:3rem;overflow:hidden;"]),T=r.ZP.div.withConfig({displayName:"CharBox__EmptySlot",componentId:"sc-1s00yss-2"})(["flex:0 0 auto;width:3rem;height:3rem;overflow:hidden;"]),_=e=>{var{chars:t}=e,{charString:n}=(0,s.f)();return t.every((e=>void 0===e||void 0===e.id))?a.createElement(I,null,a.createElement(T,null)):a.createElement(I,null,t.map(((e,t)=>(null==e?void 0:e.id)&&a.createElement(O,{key:t,name:"char_small_"+e.id,alt:n.name[e.id]}))))},j=n(79520),N=n(28437),F=["key"],L=r.ZP.div.withConfig({displayName:"LocalTeamList__NewButton",componentId:"sc-1qamej5-0"})(["display:flex;align-items:center;height:3rem;svg{width:2rem;height:2rem;fill:",";}span{margin-left:1rem;font-size:large;line-height:normal;}"],(e=>e.theme.colors.onSurface)),z=r.ZP.span.withConfig({displayName:"LocalTeamList__TitleText",componentId:"sc-1qamej5-1"})(["width:8rem;color:",";font-size:small;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"],(e=>e.theme.colors.onSurface)),M=(0,r.ZP)(g.ZP).withConfig({displayName:"LocalTeamList__OperationButton",componentId:"sc-1qamej5-2"})(["svg{width:1.4rem;height:1.4rem;}"]),D=e=>{var t,{isFromPlayer:r,isFromEnemies:i,lineups:o}=e,{pageString:l}=(0,s.f)(),{localTeams:m,actions:d}=(0,c.q)(),{newTeam:p,getTeam:u,selectTeam:g,pushTeam:x,deleteTeam:b}=d,{0:E,1:S}=(0,a.useState)(!1),C=(e,t)=>function(){var a=(0,h.Z)((function*(a){if(r||i){var l=a.target.href;a.preventDefault();var c=yield n.e(916).then(n.bind(n,72625)).then((e=>e.data));if(e.some((e=>e.id&&(0===e.level.length||!c[e.id])))||e.every((e=>!e.id)))S(!0);else{var s=e.filter((e=>e.id)).map((e=>{var{key:t}=e;return(0,f.Z)(e,F)})),m=r?[s,o[1]]:[o[0],s];(0,v.c4)(l,{state:{lineups:m,isFromPlayer:r,isFromEnemies:i},replace:!0})}}else g(t)}));return function(e){return a.apply(this,arguments)}}();return a.createElement(a.Fragment,null,a.createElement(y.Z,null,a.createElement(k,{component:Z.Z,to:"/team/build/",button:!0,key:"new",onClick:()=>p()},a.createElement(L,null,N.k8,a.createElement("span",null,l.team.index.newComposition))),null==m?void 0:m.map(((e,t)=>a.createElement(k,{component:Z.Z,to:r||i?"/battle/":"/team/build/",button:!0,key:t,onClick:C(e.characters,t)},a.createElement(z,null,e.name),a.createElement(_,{chars:e.characters}),a.createElement(w,null,a.createElement(M,{onClick:()=>x(u(t)),tooltipText:l.team.index.copyTooltip,edge:"end","aria-label":"copy-team"},N.TI),a.createElement(M,{onClick:()=>b(t),tooltipText:l.team.index.deleteTooltip,edge:"end","aria-label":"delete-team"},N.pJ)))))),a.createElement(j.Z,{open:E,onClose:(t=!1,()=>S(t)),message:l.team.index.errorSelectSnackbar,type:"error"}))},R=n(4942),H=n(80838),W=n(65541),B=n(27136);function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){(0,R.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G={items:[],isFetching:!1,loadMore:!0},$=(e,t)=>{switch(t.type){case"PUSH":return A(A({},e),{},{items:e.items.concat(t.items)});case"UNSHIFT":return A(A({},e),{},{items:t.items.concat(e.items)});case"RESET":return G;case"FETCH":return A(A({},e),{},{isFetching:t.isFetching});case"LOAD_MORE":return A(A({},e),{},{loadMore:t.loadMore});default:throw new Error}},U=(0,r.ZP)(B.Z).withConfig({displayName:"InfiniteLoader__StyledSpinner",componentId:"sc-10rq99b-0"})(["&&{display:block;margin:auto;color:",";}"],(e=>e.theme.colors.secondary)),V=e=>{var{listenToUpdate:t,fetchItem:n,renderItem:r,shouldReset:i,onReset:o}=e,{0:l,1:c}=(0,a.useReducer)($,G),s=(0,a.useRef)();return(0,a.useEffect)((()=>{if(s.current){var e=new IntersectionObserver((e=>{e.forEach((e=>{e.intersectionRatio>0&&c({type:"LOAD_MORE",loadMore:!0})}))})).observe(s.current);return e?()=>e.unobeserve(s.current):void 0}}),[s]),(0,a.useEffect)((()=>{if(l.loadMore){var e=!1;return function(){var t=(0,h.Z)((function*(){c({type:"FETCH",isFetching:!0});try{var t=yield n();if(!t)return;e||(t&&0!==t.length&&c({type:"PUSH",items:t}),c({type:"FETCH",isFetching:!1}),c({type:"LOAD_MORE",loadMore:!1}))}catch(a){e||(console.log(a),c({type:"FETCH",isFetching:!1}),c({type:"LOAD_MORE",loadMore:!1}))}}));return function(){return t.apply(this,arguments)}}()(),()=>{e=!0}}}),[n,l.loadMore]),(0,a.useEffect)((()=>{var e=t((e=>{c({type:"UNSHIFT",items:e})}));if(e)return()=>e()}),[t]),(0,a.useEffect)((()=>{i&&(c({type:"RESET"}),o())}),[i,o]),a.createElement(a.Fragment,null,a.createElement(y.Z,null,l.items.map((e=>r(e))),a.createElement("div",{ref:s})),l.isFetching&&a.createElement(U,{size:32,thickness:6,disableShrink:!0}))},K=n(49963),Y=n(39770);function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){(0,R.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var X=e=>{var{team:t,handleSelectTeam:n}=e,{pageString:r,stageString:i,userLanguage:o}=(0,s.f)(),l=i.find((e=>e.chapter===t.chapter)),c="S"===t.chapter?l.stagePrefix+t.stage.slice(2)+l.stageSuffix:l.stages.find((e=>e.id===t.stage)).name;return a.createElement(ee,{component:Z.Z,to:"/team/build/",button:!0,onClick:n(t)},a.createElement(H.Z,{container:!0,spacing:1},a.createElement(te,{item:!0,xs:6},t.stage+" : "+c),a.createElement(te,{item:!0,xs:6},a.createElement(ne,null,r.team.index.author+" : "+t.author),a.createElement(ne,null,t.time.toDate().toLocaleString(Y[o].locale,{timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone}))),a.createElement(te,{item:!0,xs:12},a.createElement(_,{chars:t.characters})),0!==t.description.length&&a.createElement(te,{item:!0,xs:12},t.description)))},ee=(0,r.ZP)(k).withConfig({displayName:"CloudTeamList__StyledCloudTeamItem",componentId:"sc-1y2pxho-0"})(["&&{padding-right:1rem;user-select:text;}> div{> div:nth-child(2){justify-content:flex-end;> span:first-child{margin:0;}}> div:nth-child(4){margin-top:0.4rem;padding:0.4rem;font-size:small;background:linear-gradient( 90deg,",","," );}}"],(e=>e.theme.colors.shadow+"2A"),(e=>e.theme.colors.shadow+"0D")),te=(0,r.ZP)(H.Z).withConfig({displayName:"CloudTeamList__GridItem",componentId:"sc-1y2pxho-1"})(["display:flex;align-items:center;"]),ne=r.ZP.span.withConfig({displayName:"CloudTeamList__FootText",componentId:"sc-1y2pxho-2"})(["margin-left:1rem;font-size:0.75rem;"]),ae=(0,r.ZP)(K.Z).withConfig({displayName:"CloudTeamList__StyledStageSelect",componentId:"sc-1y2pxho-3"})(["&&{position:absolute;top:-3.2rem;right:3rem;width:30%;height:2rem;.MuiSelect-select{padding:0.5rem 2rem 0.5rem 1rem;font-size:small;}}"]),re=()=>{var{pageString:e}=(0,s.f)(),{actions:t}=(0,c.q)(),{newTeam:r}=t,{0:i,1:o}=(0,a.useState)(),{0:l,1:m}=(0,a.useState)({chapter:"all",stage:"all"}),{0:d,1:p}=(0,a.useState)(),{0:u,1:g}=(0,a.useState)(),{0:f,1:v}=(0,a.useState)(!1);(0,a.useEffect)((()=>{Promise.all([n.e(504),n.e(663)]).then(n.bind(n,87569)).then((e=>{o(e.teamsRef)}))}),[]),(0,a.useEffect)((()=>{if(i){var e=i.orderBy("time","desc");"all"!==l.chapter&&(e=e.where("chapter","==",l.chapter).where("stage","==",l.stage)),p(e)}}),[l,i]);var y=function(){var e=(0,h.Z)((function*(){if(d){var e=u?d.startAfter(u).limit(10):d.limit(10);try{var t=yield e.get(),n=u?t.docs:t.docs.slice(1),a=n[n.length-1];return a?(g(a),n.map((e=>Q({id:e.id},e.data())))):[]}catch(r){return console.log(r),[]}}}));return function(){return e.apply(this,arguments)}}(),x=(0,a.useCallback)((e=>{if(d)return d.limit(1).onSnapshot((t=>{var n=t.docChanges().filter((e=>"added"===e.type)).map((e=>Q({id:e.doc.id},e.doc.data())));e(n)}),(e=>{console.log(e)}))}),[d]),b=e=>()=>{var{name:t,characters:n}=e;r({name:t,characters:n})};return a.createElement(a.Fragment,null,a.createElement(ae,{value:l.chapter+"/"+l.stage,handleChange:e=>{if(e.target.value){var t=e.target.value.split("/");m({chapter:t[0],stage:t[1]}),g(void 0),v(!0)}}},a.createElement(W.Z,{value:"all/all"},e.team.index.allStage)),a.createElement(V,{listenToUpdate:x,fetchItem:y,renderItem:e=>e&&a.createElement(X,{team:e,handleSelectTeam:b,key:e.id}),shouldReset:f,onReset:()=>v(!1)}))},ie=()=>{var e,{pageString:t}=(0,s.f)(),{isImportingLineup:n,actions:r}=(0,c.q)(),{toggleImportLineupData:i}=r,{0:l,1:m}=(0,a.useState)(!1);return a.createElement(a.Fragment,null,a.createElement(u.Z,{button:a.createElement(g.ZP,{tooltipText:t.team.index.settingTooltip},N.qY),items:[{id:"setting-description"}],renderItem:e=>a.createElement(a.Fragment,null,a.createElement(o.Z,{edge:"start",checked:n,disableRipple:!0,inputProps:{"aria-labelledby":e.id}}),a.createElement("span",{id:e.id},t.team.index.settingDescription)),itemOnClick:()=>{i()||m(!0)},ariaId:"setting-menu"}),a.createElement(j.Z,{open:l,onClose:(e=!1,()=>m(e)),message:t.team.index.errorSnackbar,type:"error"}))},oe=["local","cloud"],le=e=>{var{layout:t,setLayout:n}=e,{pageString:r}=(0,s.f)();return a.createElement(ce,null,oe.map((e=>a.createElement(se,{$active:t===e,onClick:()=>n(e),key:e},r.team.index.tabs[e]))))},ce=r.ZP.div.withConfig({displayName:"team__TabsWrapper",componentId:"sc-91g1dd-0"})(["position:absolute;top:0.5rem;"]),se=(0,r.ZP)(i.Z).withConfig({displayName:"team__StyledTab",componentId:"sc-91g1dd-1"})(["&&{color:",";font-size:large;}"],(e=>e.theme.colors.onSurface+(e.$active?"":"80"))),me=r.ZP.div.withConfig({displayName:"team__PageWrapper",componentId:"sc-91g1dd-2"})(["position:relative;max-width:1000px;margin:auto;"]),de=(0,r.ZP)(p.ZP).withConfig({displayName:"team__StyledHeader",componentId:"sc-91g1dd-3"})(["position:relative;left:-1rem;width:100%;height:auto;margin:0;padding:0 0 0.5rem 1rem;border:none;label{margin-right:0.6rem;font-size:large;}> div:last-child{position:relative;bottom:-0.4rem;right:-1rem;}"]),pe=(0,r.ZP)(l.Z).withConfig({displayName:"team__StyledDivider",componentId:"sc-91g1dd-4"})(["&&{background-color:",";}"],(e=>e.theme.colors.dropdownHover)),ue=(0,r.ZP)(m.Z).withConfig({displayName:"team__TabPanel",componentId:"sc-91g1dd-5"})(["position:relative;"]),ge=e=>{var t,n,r,i,o,l,{location:c}=e,{pageString:m}=(0,s.f)();return a.createElement(me,null,a.createElement(d.Z,{title:m.team.index.helmet.title,description:m.team.index.helmet.description,path:"/team/"}),a.createElement(de,{title:null!==(t=c.state)&&void 0!==t&&t.isFromPlayer||null!==(n=c.state)&&void 0!==n&&n.isFromEnemies?m.team.index.selectTeam:void 0,end:a.createElement(ie,null)}),a.createElement(pe,null),a.createElement(ue,{localStorageKey:"team-list-tab",layoutSwitcher:!(null!==(r=c.state)&&void 0!==r&&r.isFromPlayer||null!==(i=c.state)&&void 0!==i&&i.isFromEnemies)&&a.createElement(le,null),items:[{layout:"local",content:a.createElement(D,c.state)},{layout:"cloud",content:!(null!==(o=c.state)&&void 0!==o&&o.isFromPlayer||null!==(l=c.state)&&void 0!==l&&l.isFromEnemies)&&a.createElement(re,null)}],initLayoutIndex:0}))}}}]);
//# sourceMappingURL=component---src-pages-team-index-js-947214543d5b18e42cec.js.map