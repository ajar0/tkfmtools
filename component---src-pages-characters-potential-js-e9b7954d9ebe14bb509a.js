(self.webpackChunktkfmtools=self.webpackChunktkfmtools||[]).push([[34],{80838:function(e,t,r){"use strict";var a=r(45987),n=r(87462),i=r(67294),o=r(85505),l=r(34621),c=[0,1,2,3,4,5,6,7,8,9,10],s=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=parseFloat(e);return"".concat(r/t).concat(String(e).replace(String(r),"")||"px")}var d=i.forwardRef((function(e,t){var r=e.alignContent,l=void 0===r?"stretch":r,c=e.alignItems,s=void 0===c?"stretch":c,u=e.classes,d=e.className,m=e.component,p=void 0===m?"div":m,f=e.container,g=void 0!==f&&f,b=e.direction,h=void 0===b?"row":b,y=e.item,v=void 0!==y&&y,x=e.justify,k=e.justifyContent,S=void 0===k?"flex-start":k,w=e.lg,C=void 0!==w&&w,E=e.md,A=void 0!==E&&E,M=e.sm,H=void 0!==M&&M,B=e.spacing,P=void 0===B?0:B,N=e.wrap,J=void 0===N?"wrap":N,I=e.xl,_=void 0!==I&&I,T=e.xs,j=void 0!==T&&T,Z=e.zeroMinWidth,O=void 0!==Z&&Z,K=(0,a.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),D=(0,o.Z)(u.root,d,g&&[u.container,0!==P&&u["spacing-xs-".concat(String(P))]],v&&u.item,O&&u.zeroMinWidth,"row"!==h&&u["direction-xs-".concat(String(h))],"wrap"!==J&&u["wrap-xs-".concat(String(J))],"stretch"!==s&&u["align-items-xs-".concat(String(s))],"stretch"!==l&&u["align-content-xs-".concat(String(l))],"flex-start"!==(x||S)&&u["justify-content-xs-".concat(String(x||S))],!1!==j&&u["grid-xs-".concat(String(j))],!1!==H&&u["grid-sm-".concat(String(H))],!1!==A&&u["grid-md-".concat(String(A))],!1!==C&&u["grid-lg-".concat(String(C))],!1!==_&&u["grid-xl-".concat(String(_))]);return i.createElement(p,(0,n.Z)({className:D,ref:t},K))})),m=(0,l.Z)((function(e){return(0,n.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var r={};return c.forEach((function(a){var n=e.spacing(a);0!==n&&(r["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(u(n,2)),width:"calc(100% + ".concat(u(n),")"),"& > $item":{padding:u(n,2)}})})),r}(e,"xs"),e.breakpoints.keys.reduce((function(t,r){return function(e,t,r){var a={};s.forEach((function(e){var t="grid-".concat(r,"-").concat(e);if(!0!==e)if("auto"!==e){var n="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:n,flexGrow:0,maxWidth:n}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===r?(0,n.Z)(e,a):e[t.breakpoints.up(r)]=a}(t,e,r),t}),{}))}),{name:"MuiGrid"})(d);t.Z=m},83604:function(e,t,r){"use strict";var a=r(67294).createContext();t.Z=a},74772:function(e,t,r){"use strict";r.d(t,{Q:function(){return c},qg:function(){return d},cP:function(){return f}});var a=r(67294),n=r(50009),i=r(42857),o=r(93175),l=r(16855),c=e=>{var{children:t,className:r,imgType:n,imgId:i,alt:o,isBackground:l}=e;return l?a.createElement(s,{className:r,name:n+"_"+i,isBackground:!0,alt:o},t):a.createElement(u,{className:r},a.createElement(s,{name:n+"_"+i,alt:o}),t)},s=(0,n.default)(o.Z).withConfig({displayName:"Card__StyledImg",componentId:"sc-1duszqx-0"})(["display:flex;justify-content:center;align-items:center;width:100%;background-repeat:no-repeat;"]),u=n.default.div.withConfig({displayName:"Card__ImgWrapper",componentId:"sc-1duszqx-1"})(["display:flex;align-items:center;justify-content:center;"]),d=e=>{var{className:t,id:r}=e,{itemString:n}=(0,i.f)();return a.createElement(m,{className:t,imgType:"item",imgId:r,alt:""},a.createElement(p,null,n.name[r]))},m=(0,n.default)(c).withConfig({displayName:"Card__ItemImg",componentId:"sc-1duszqx-2"})(["> div:first-child{width:2.5rem;height:2.5rem;margin-right:0.4rem;user-select:none;}"]),p=n.default.div.withConfig({displayName:"Card__TextWrapper",componentId:"sc-1duszqx-3"})(["white-space:nowrap;font-size:medium;font-weight:normal;"]),f=e=>{var{className:t,children:r,striped:n}=e;return a.createElement(g,{className:t,$striped:n},r)},g=(0,n.default)(l.Z).withConfig({displayName:"Card__StyledTable",componentId:"sc-1duszqx-4"})(["&& .MuiTableCell-root{font-size:0.9rem;padding:0.3rem;padding-left:0.75rem;}"])},22776:function(e,t,r){"use strict";r.d(t,{WQ:function(){return f},p2:function(){return y}});var a=r(67294),n=r(50009),i=r(21407),o=r(90494),l=r(48649),c=r(50033),s=r(25072),u=e=>{var{children:t,className:r,title:n,open:c,onClose:s,keepMounted:u,ariaLabelledby:f,ariaDescribedby:g}=e;return a.createElement(l.Z,{className:r,open:c,onClose:s,closeAfterTransition:!0,BackdropComponent:i.Z,BackdropProps:{timeout:500},disableEnforceFocus:!0,keepMounted:u,"aria-labelledby":f,"aria-describedby":g},a.createElement(o.Z,{in:c},a.createElement(d,null,a.createElement(m,{title:n,id:f,end:a.createElement(p,{onClick:s},"×")}),t)))},d=n.default.div.withConfig({displayName:"Modal__ModalContentWrapper",componentId:"sc-o6bkb-0"})(["background-color:",";color:",";position:absolute;width:70%;height:auto;left:0;right:0;top:10%;bottom:auto;margin:auto;@media screen and (max-width:1000px){width:80%;}@media screen and (max-width:768px){width:90%;}padding:1rem;border-radius:0.25rem;border:1px solid ",";"],(e=>e.theme.colors.surface),(e=>e.theme.colors.onSurface),(e=>e.theme.colors.border)),m=(0,n.default)(s.ZP).withConfig({displayName:"Modal__ModalHeader",componentId:"sc-o6bkb-1"})(["margin:-1rem;margin-bottom:1rem;padding:0.2rem 0.5rem;background-color:",";span{color:",";}"],(e=>e.theme.colors.secondary),(e=>e.theme.colors.onSecondary)),p=n.default.span.withConfig({displayName:"Modal__CloseWrapper",componentId:"sc-o6bkb-2"})(["cursor:pointer;font-size:x-large;"]),f=e=>{var{children:t,className:r,title:n,open:i,onClose:o,keepMounted:l,ariaLabelledby:s,ariaDescribedby:u}=e;return a.createElement(g,{className:r,title:n,open:i,onClose:o,keepMounted:l,ariaLabelledby:s,ariaDescribedby:u},a.createElement(c.Z,null,t))},g=(0,n.default)(u).withConfig({displayName:"Modal__StyledScrollableModal",componentId:"sc-o6bkb-3"})(["> div:nth-child(3) > div{max-height:calc(80vh - 2rem);}"]),b=e=>{var{content:t,ariaDescribedby:r}=e;return t.map(((e,t)=>a.createElement(a.Fragment,{key:t},a.createElement(s.ZP,{title:e.title,border:!0}),a.createElement(h,null,e.content.map(((e,t)=>a.createElement("p",{key:t,id:r+"_"+t},e)))))))},h=n.default.div.withConfig({displayName:"Modal__ModalBody",componentId:"sc-o6bkb-4"})(["margin:1rem 0;"]),y=e=>{var{title:t,content:r,open:n,onClose:i,ariaLabelledby:o,ariaDescribedby:l}=e;return a.createElement(f,{title:t,open:n,onClose:i,ariaLabelledby:o,ariaDescribedby:[...Array(r.length).keys()].map((e=>l+"_"+e)).join(" ")},a.createElement(b,{content:r,ariaDescribedby:l}))};t.ZP=u},16855:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var a=r(50009),n=r(45987),i=r(87462),o=r(67294),l=r(85505),c=r(34621),s=r(83604),u="table",d=o.forwardRef((function(e,t){var r=e.classes,a=e.className,c=e.component,d=void 0===c?u:c,m=e.padding,p=void 0===m?"normal":m,f=e.size,g=void 0===f?"medium":f,b=e.stickyHeader,h=void 0!==b&&b,y=(0,n.Z)(e,["classes","className","component","padding","size","stickyHeader"]),v=o.useMemo((function(){return{padding:p,size:g,stickyHeader:h}}),[p,g,h]);return o.createElement(s.Z.Provider,{value:v},o.createElement(d,(0,i.Z)({role:d===u?null:"table",ref:t,className:(0,l.Z)(r.root,a,h&&r.stickyHeader)},y)))})),m=(0,c.Z)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,i.Z)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(d),p=(0,a.default)(m).withConfig({displayName:"Table",componentId:"sc-vr3gqy-0"})(["&&{width:100%;.MuiTableCell-head{padding:0.75rem 0.25rem;font-weight:bold;}.MuiTableCell-head:first-child{padding-left:0.75rem;}.MuiTableCell-root{border-bottom:",";font-size:medium;}.MuiTableCell-body{color:",";}&& .MuiTableRow-root:hover{background-color:rgba(0,0,0,0.075);}","}"],(e=>e.$border?"1px solid "+e.theme.colors.secondary:"none"),(e=>e.theme.colors.onSurface),(e=>e.$striped?".MuiTableRow-root:nth-of-type(2n+1) {\n            background-color: rgba(0, 0, 0, 0.05);\n        }":""))},50033:function(e,t,r){"use strict";var a=r(50009).default.div.withConfig({displayName:"Scrollable",componentId:"sc-1ueymsi-0"})(["overflow:auto;height:100%;scrollbar-width:thin;padding-right:0.5rem;margin-right:-0.5rem;&::-webkit-scrollbar{width:0.4rem;height:0.4rem;background:",";}&::-webkit-scrollbar-thumb{background:",";border-radius:0.25rem;}&::-webkit-scrollbar-track{background:",";}&::-webkit-scrollbar-corner{background:",";}"],(e=>e.theme.colors.surface),(e=>e.theme.colors.border),(e=>e.theme.colors.surface),(e=>e.theme.colors.surface));t.Z=a},20904:function(e,t,r){"use strict";r.r(t);var a=r(4942),n=r(67294),i=r(50009),o=r(80838),l=r(54480),c=r(42857),s=r(25072),u=r(74772),d=r(93175),m=r(50190),p=r(22776),f=r(28437),g=r(59969);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=e=>{var{selected:t,handleSelect:r}=e,{pageString:a,charString:i}=(0,c.f)(),l=Object.keys(i.name).filter((e=>"nr"===e||parseInt(e[0])<3)),u=(e=>({character:"",currStage:[...Array("nr"===e.character?7:13).keys()].slice(1),currSub:[...Array(7).keys()].slice(1),targetStage:[...Array("nr"===e.character?7:13).keys()].slice(e.currStage),targetSub:[...Array(7).keys()].slice(e.currStage===e.targetStage?e.currSub:1)}))(t),d={character:a.characters.potential.characterSelectTitle,currStage:a.characters.potential.currentSelectTitle,currSub:"",targetStage:a.characters.potential.targetSelectTitle,targetSub:""};return n.createElement(n.Fragment,null,n.createElement(s.ZP,{title:a.characters.potential.characterPanelTitle,titleIcon:f.i6,border:!0}),n.createElement(o.Z,{container:!0,spacing:1,justifyContent:"space-around"},n.createElement(o.Z,{item:!0,xs:4,component:x,name:"char_"+t.character,alt:""}),n.createElement(o.Z,{item:!0,xs:8,container:!0,spacing:1,alignContent:"space-around"},Object.entries(u).map((e=>{var[a,c]=e;return n.createElement(o.Z,{item:!0,xs:"character"===a?12:6,component:v,label:d[a],values:"character"===a?l:c,renderValues:"character"===a?l.map((e=>i.name[e])):c,value:t[a],onChange:r(a),key:a})})))))},v=(0,i.default)(m.P).withConfig({displayName:"potential__StyledSelect",componentId:"sc-2is47v-0"})(["&&{.MuiInputLabel-shrink{transform:translate(14px,-1px) scale(0.75);}> div > div{padding:0.6rem;}}"]),x=(0,i.default)(d.Z).withConfig({displayName:"potential__CharImgWrapper",componentId:"sc-2is47v-1"})(["&&{max-width:5.2rem;}margin-right:1rem;border:2px solid ",";border-radius:0.25rem;"],(e=>e.theme.colors.secondary)),k=e=>{var{children:t,layoutConfig:r,name:a,alt:i}=e;return n.createElement(S,{$layoutConfig:r},n.createElement("div",null,n.createElement(w,{name:a,alt:i}),t))},S=i.default.span.withConfig({displayName:"potential__MaterialWrapper",componentId:"sc-2is47v-2"})(["display:inline-flex;align-items:center;justify-content:space-between;padding:0 0.4rem;margin:0.2rem 0;"," > div{display:flex;align-items:center;}"],(e=>Object.entries(e.$layoutConfig).map((e=>{var[t,r]=e;return"@media screen and (min-width: "+t+"px) {\n            width: calc(100% / "+r+");\n        }\n        "})))),w=(0,i.default)(d.Z).withConfig({displayName:"potential__UiImg",componentId:"sc-2is47v-3"})(["width:1.6rem;height:1.6rem;margin-right:0.4rem;"]),C=e=>{var{result:t,layoutConfig:r}=e;return n.createElement(n.Fragment,null,t.items&&Object.entries(t.items).map((e=>n.createElement(S,{key:e[0],$layoutConfig:r},n.createElement("div",null,n.createElement(E,{id:e[0],alt:""})),e[1]))),t.items&&t.money&&n.createElement(k,{name:"money",alt:"money",layoutConfig:r},t.money))},E=(0,i.default)(u.qg).withConfig({displayName:"potential__MaterialCard",componentId:"sc-2is47v-4"})(["> div:first-child{width:2rem;height:2rem;margin-right:0.4rem;}> div:last-child{white-space:break-spaces;}"]),A={en:{1360:5,1200:4,768:3,0:2},"zh-TW":{1360:6,1200:5,768:4,624:3,0:2},ja:{1460:5,1305:4,768:3,624:2,0:2},ko:{1460:5,1305:4,768:3,624:2,0:2}},M=e=>{var{result:t,handleModalOpen:r}=e,{userLanguage:a,pageString:i}=(0,c.f)();return n.createElement(n.Fragment,null,n.createElement(s.ZP,{title:i.characters.potential.resultDemandTitle,titleIcon:f.S5,withHelp:!0,onClickHelp:r,border:!0}),n.createElement(H,null,n.createElement(C,{result:t,layoutConfig:A[a]})),n.createElement(s.ZP,{title:i.characters.potential.resultBuffTitle,titleIcon:f.G$,border:!0}),n.createElement(k,{layoutConfig:A[a],name:"ui_small_atk",alt:"ATK"},t.buff.ATK+" %"),n.createElement(k,{layoutConfig:A[a],name:"ui_small_hp",alt:"HP"},t.buff.HP+" %"),n.createElement(k,{layoutConfig:A[a],name:"ui_small_potentialPassive",alt:"Passive"},0===t.buff.PASSIVE?"-":1===t.buff.PASSIVE?"1":2===t.buff.PASSIVE?"2":"1 & 2"))},H=i.default.div.withConfig({displayName:"potential__MaterialContainer",componentId:"sc-2is47v-5"})(["display:flex;flex-direction:row;flex-wrap:wrap;margin-bottom:1rem;min-height:6rem;"]);t.default=()=>{var{pageString:e}=(0,c.f)(),{0:t,1:r}=(0,n.useState)({character:"101",currStage:1,currSub:1,targetStage:1,targetSub:1,result:{items:void 0,money:0,buff:{ATK:0,HP:0,PASSIVE:0}},isHelpModalOpen:!1}),a=e=>()=>{r((t=>h(h({},t),{},{isHelpModalOpen:e})))};return n.createElement(n.Fragment,null,n.createElement(l.Z,{panelsWidth:["30%","70%"]},n.createElement(y,{selected:{character:t.character,currStage:t.currStage,currSub:t.currSub,targetStage:t.targetStage,targetSub:t.targetSub},handleSelect:e=>a=>{var n=h({},t),i=a.target.value;n[e]="character"===e?i:parseInt(i),"nr"===i&&(n.currStage=t.currStage>6?1:t.currStage,n.targetStage=t.targetStage>6?1:t.targetStage),n.targetStage=Math.max(n.targetStage,n.currStage),n.targetStage===n.currStage&&(n.targetSub=Math.max(n.targetSub,n.currSub));var o=(0,g.calcCharPotential)(n.character,[n.currStage,n.currSub],[n.targetStage,n.targetSub]);o.buff.ATK=Math.round(100*o.buff.ATK)/100,o.buff.HP=Math.round(100*o.buff.HP)/100,n.result=o,r(n)}}),n.createElement(M,{result:t.result,handleModalOpen:a(!0)})),n.createElement(p.p2,{title:e.characters.potential.helpModal.title,open:t.isHelpModalOpen,onClose:a(!1),content:e.characters.potential.helpModal.content,ariaLabelledby:"help-modal-title",ariaDescribedby:"help-modal-description"}))}},59969:function(e,t,r){var a=r(5102),n=r(8223),i=(e,t,r,i)=>{var o={items:{},money:0,buff:{ATK:0,HP:0,PASSIVE:0}};if(t[0]>r[0])return o;for(var l="nr"===e||"4"===e[0]||"3"===e[0]?3:void 0!==i?i:a.find((t=>t.id===e)).potentialType,c=n.type[l],s=t[0]-1;s<r[0]-1+1;s++)for(var u=c[s],d=s===t[0]-1?t[1]-1:0;d<(s===r[0]-1?r[1]:6);d++)if(!(d<0)){var m=u.pattern[d]+u.rank[d];o.items[m]?o.items[m]+=u.num[d]:o.items[m]=u.num[d],o.money+=8e3*(s+1);var p=n.itemMap[u.pattern[d]].type;o.buff[p]+=u.buff[d]}var f={},g=function(e,t){var r=n.itemMap[e[0]].id.map((t=>"9"===e[1]?"902":"8"===e[1]?"901":(100*parseInt(e[1])+t).toString()));for(var a of r)f[a]?f[a]+=t:f[a]=t};for(var[b,h]of Object.entries(o.items))g(b,h);return o.items=f,o};e.exports=e=>{var{id:t,level:r,potential:n,potentialSub:o,discipline:l,star:c}=e,s=a.find((e=>e.id===t));if(!s)throw new Error("invalid character id: "+t);if(("3"===t[0]||"4"===t[0])&&n>6)throw new Error("invalid potential: "+n);if("4"===t[0]&&+l>0)throw new Error("invalid discipline: "+l);var{initATK:u,initHP:d}=s.stats,m=1.1**(r-1),p=o;"object"!=typeof o&&(p=[...Array(6).keys()].map((e=>e<o)));var f=p.reduce(((e,r,a)=>{if(r){var o=i(t,[n,a+1],[n,a+1]).buff;e.ATK+=o.ATK,e.HP+=o.HP}return e}),i(t,[1,0],[n-1,6]).buff),g=1+(isNaN(parseInt(l))?0:+l*(+l+1)*.025),b=(c+5)/(9-t[0]);return{ATK:Math.floor(u*m*(1+f.ATK/100)*g*b),HP:Math.floor(d*m*(1+f.HP/100)*g*b)}},e.exports.calcCharPotential=i},8223:function(e){"use strict";e.exports=JSON.parse('{"type":[[{"pattern":["B","B","J","J","J","J"],"num":[1,2,2,2,2,1],"rank":[1,1,1,1,1,1],"buff":[2,2,3,3,3,3]},{"pattern":["B","B","J","J","J","J"],"num":[2,2,2,3,2,3],"rank":[1,1,1,1,1,1],"buff":[2,2,3.5,3.5,3.5,3.5]},{"pattern":["B","B","B","B","J","J"],"num":[1,1,1,1,2,2],"rank":[2,2,2,2,2,2],"buff":[2,2,2,2,3.5,3.5]},{"pattern":["B","B","B","J","J","J"],"num":[2,1,1,3,3,3],"rank":[2,2,2,2,2,2],"buff":[2,2,2,3.5,3.5,3.5]},{"pattern":["B","B","B","J","J","J"],"num":[1,1,2,4,4,4],"rank":[3,2,2,2,2,2],"buff":[2,2,2,3.5,3.5,3.5]},{"pattern":["P","B","B","B","J","J"],"num":[1,2,1,2,4,4],"rank":[9,3,3,3,3,3],"buff":[1,2,2,2,3.5,3.5]},{"pattern":["B","B","B","B","J","J"],"num":[2,3,2,2,4,4],"rank":[3,3,3,3,3,3],"buff":[2.5,2.5,2.5,2.5,3.5,3.5]},{"pattern":["B","B","B","B","J","J"],"num":[2,2,3,2,4,4],"rank":[3,3,3,3,3,3],"buff":[2.5,2.5,2.5,2.5,3.5,3.5]},{"pattern":["E","E","E","E","M","M"],"num":[2,3,3,2,5,5],"rank":[4,4,4,4,4,4],"buff":[2.5,2.5,2.5,2.5,3.5,3.5]},{"pattern":["G","G","G","G","N","N"],"num":[3,2,2,3,6,6],"rank":[4,4,4,4,4,4],"buff":[3,3,3,3,3.5,3.5]},{"pattern":["E","E","E","E","M","M"],"num":[1,1,1,1,1,1],"rank":[5,5,5,5,5,5],"buff":[3,3,3,3,3.5,3.5]},{"pattern":["P","G","G","G","G","N"],"num":[2,1,1,1,1,1],"rank":[9,5,5,5,5,5],"buff":[2,3,3,3,3,4]}],[{"pattern":["J","J","B","B","B","B"],"num":[1,2,2,2,2,1],"rank":[1,1,1,1,1,1],"buff":[2,2,3,3,3,3]},{"pattern":["J","J","B","B","B","B"],"num":[2,2,2,3,2,3],"rank":[1,1,1,1,1,1],"buff":[2,2,3.5,3.5,3.5,3.5]},{"pattern":["J","J","J","J","B","B"],"num":[1,1,1,1,2,2],"rank":[2,2,2,2,2,2],"buff":[2,2,2,2,3.5,3.5]},{"pattern":["J","J","J","B","B","B"],"num":[2,1,1,3,3,3],"rank":[2,2,2,2,2,2],"buff":[2,2,2,3.5,3.5,3.5]},{"pattern":["J","J","J","B","B","B"],"num":[1,1,2,4,4,4],"rank":[3,2,2,2,2,2],"buff":[2,2,2,3.5,3.5,3.5]},{"pattern":["P","J","J","J","B","B"],"num":[1,2,1,2,4,4],"rank":[9,3,3,3,3,3],"buff":[1,2,2,2,3.5,3.5]},{"pattern":["J","J","J","J","B","B"],"num":[2,3,2,2,4,4],"rank":[3,3,3,3,3,3],"buff":[2.5,2.5,2.5,2.5,3.5,3.5]},{"pattern":["J","J","J","J","B","B"],"num":[2,2,3,2,4,4],"rank":[3,3,3,3,3,3],"buff":[2.5,2.5,2.5,2.5,3.5,3.5]},{"pattern":["M","M","M","M","E","E"],"num":[2,3,3,2,5,5],"rank":[4,4,4,4,4,4],"buff":[2.5,2.5,2.5,2.5,3.5,3.5]},{"pattern":["N","N","N","N","G","G"],"num":[3,2,2,3,6,6],"rank":[4,4,4,4,4,4],"buff":[3,3,3,3,3.5,3.5]},{"pattern":["M","M","M","M","E","E"],"num":[1,1,1,1,1,1],"rank":[5,5,5,5,5,5],"buff":[3,3,3,3,3.5,3.5]},{"pattern":["P","N","N","N","N","G"],"num":[2,1,1,1,1,1],"rank":[9,5,5,5,5,5],"buff":[2,3,3,3,3,4]}],[{"pattern":["A","A","A","A","A","A"],"num":[2,2,2,2,2,2],"rank":[1,1,1,1,1,1],"buff":[2.75,2.75,2.75,2.75,2.75,2.75]},{"pattern":["H","H","H","H","H","H"],"num":[2,2,2,2,2,2],"rank":[1,1,1,1,1,1],"buff":[2.75,2.75,2.75,2.75,2.75,2.75]},{"pattern":["A","H","A","H","A","H"],"num":[3,2,1,1,1,1],"rank":[2,2,2,2,2,2],"buff":[2.75,2.75,2.75,2.75,2.75,2.75]},{"pattern":["H","A","A","A","A","A"],"num":[3,3,3,2,2,2],"rank":[2,2,2,2,2,2],"buff":[2.75,2.75,2.75,2.75,2.75,2.75]},{"pattern":["C","H","H","H","H","H"],"num":[3,3,3,2,2,2],"rank":[3,2,2,2,2,2],"buff":[2.75,2.75,2.75,2.75,2.75,2.75]},{"pattern":["P","K","C","K","C","K"],"num":[1,3,2,2,2,2],"rank":[9,3,3,3,3,3],"buff":[1,2.75,2.75,2.75,2.75,2.75]},{"pattern":["C","K","C","K","C","K"],"num":[2,2,3,3,3,3],"rank":[3,3,3,3,3,3],"buff":[2.75,2.75,2.75,2.75,2.75,3]},{"pattern":["C","K","C","K","C","K"],"num":[3,3,3,3,3,3],"rank":[3,3,3,3,3,3],"buff":[3,3,3,3,3,3]},{"pattern":["D","L","D","L","D","L"],"num":[4,4,3,3,3,3],"rank":[4,4,4,4,4,4],"buff":[3,3,3,3,3,3]},{"pattern":["F","O","F","O","F","O"],"num":[4,4,4,4,3,3],"rank":[4,4,4,4,4,4],"buff":[3,3,3,3,3,3]},{"pattern":["D","L","D","L","D","L"],"num":[1,1,1,1,1,1],"rank":[5,5,5,5,5,5],"buff":[3,3,3,3,3,3]},{"pattern":["P","F","F","O","F","O"],"num":[2,1,1,1,1,1],"rank":[9,5,5,5,5,5],"buff":[2,3,3,3,3,3]}],[{"pattern":["A","A","A","A","A","A"],"num":[2,2,2,2,2,2],"rank":[1,1,1,1,1,1],"buff":[2.75,2.75,2.75,2.75,3,3]},{"pattern":["H","H","H","H","H","H"],"num":[2,2,2,2,2,2],"rank":[1,1,1,1,1,1],"buff":[2.75,2.75,2.75,2.75,3,3]},{"pattern":["P","H","A","H","A","H"],"num":[5,2,1,1,1,1],"rank":[8,2,2,2,2,2],"buff":[1,3,3,3,3,3]},{"pattern":["A","A","A","A","A","A"],"num":[3,3,3,2,2,2],"rank":[2,2,2,2,2,2],"buff":[3,3,3,3,3,3]},{"pattern":["H","H","H","H","H","H"],"num":[3,3,3,2,2,2],"rank":[2,2,2,2,2,2],"buff":[3,3,3,3,3,3]},{"pattern":["P","C","K","C","K","C"],"num":[10,3,3,2,2,2],"rank":[8,3,3,3,3,3],"buff":[2,3,3,3,3,3]}]],"itemMap":{"A":{"id":[1,3],"type":"ATK"},"B":{"id":[1,5],"type":"ATK"},"C":{"id":[3,5],"type":"ATK"},"D":{"id":[1,3],"type":"ATK"},"E":{"id":[1,5],"type":"ATK"},"F":{"id":[8,10],"type":"ATK"},"G":{"id":[6,10],"type":"ATK"},"H":{"id":[2,3],"type":"HP"},"J":{"id":[2,4],"type":"HP"},"K":{"id":[3,4],"type":"HP"},"L":{"id":[2,3],"type":"HP"},"M":{"id":[2,4],"type":"HP"},"N":{"id":[7,9],"type":"HP"},"O":{"id":[8,9],"type":"HP"},"P":{"id":[1],"type":"PASSIVE"}}}')}}]);
//# sourceMappingURL=component---src-pages-characters-potential-js-e9b7954d9ebe14bb509a.js.map