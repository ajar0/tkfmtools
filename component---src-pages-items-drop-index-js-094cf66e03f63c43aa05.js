(self.webpackChunktkfmtools=self.webpackChunktkfmtools||[]).push([[886],{74772:function(e,a,t){"use strict";t.d(a,{Q:function(){return c},qg:function(){return m},cP:function(){return y}});var r=t(67294),n=t(50009),o=t(44961),l=t(93175),i=t(16855),c=e=>{var{children:a,className:t,imgType:n,imgId:o,alt:l,isBackground:i}=e;return i?r.createElement(d,{className:t,name:n+"_"+o,isBackground:!0,alt:l},a):r.createElement(s,{className:t},r.createElement(d,{name:n+"_"+o,alt:l}),a)},d=(0,n.ZP)(l.Z).withConfig({displayName:"Card__StyledImg",componentId:"sc-1duszqx-0"})(["display:flex;justify-content:center;align-items:center;width:100%;background-repeat:no-repeat;"]),s=n.ZP.div.withConfig({displayName:"Card__ImgWrapper",componentId:"sc-1duszqx-1"})(["display:flex;align-items:center;justify-content:center;"]),m=e=>{var{className:a,id:t}=e,{itemString:n}=(0,o.f)();return r.createElement(p,{className:a,imgType:"item",imgId:t,alt:""},r.createElement(g,null,n.name[t]))},p=(0,n.ZP)(c).withConfig({displayName:"Card__ItemImg",componentId:"sc-1duszqx-2"})(["> div:first-child{width:2.5rem;height:2.5rem;margin-right:0.4rem;user-select:none;}"]),g=n.ZP.div.withConfig({displayName:"Card__TextWrapper",componentId:"sc-1duszqx-3"})(["white-space:nowrap;font-size:medium;font-weight:normal;"]),y=e=>{var{className:a,children:t,striped:n}=e;return r.createElement(u,{className:a,$striped:n},t)},u=(0,n.ZP)(i.Z).withConfig({displayName:"Card__StyledTable",componentId:"sc-1duszqx-4"})(["&& .MuiTableCell-root{font-size:0.9rem;padding:0.3rem;padding-left:0.75rem;}"])},67e3:function(e,a,t){"use strict";t.d(a,{m1:function(){return S},bO:function(){return v},$e:function(){return k},qc:function(){return b}});var r=t(67294),n=t(50009),o=t(27490),l=t(47895),i=t(85505),c=(0,t(19123).Z)(r.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),d=t(34621),s=t(37595),m=t(11291),p=t(81664),g=t(67055);function y(e){return"Backspace"===e.key||"Delete"===e.key}var u=r.forwardRef((function(e,a){var t=e.avatar,n=e.classes,d=e.className,s=e.clickable,u=e.color,h=void 0===u?"default":u,f=e.component,k=e.deleteIcon,b=e.disabled,C=void 0!==b&&b,v=e.icon,w=e.label,S=e.onClick,x=e.onDelete,Z=e.onKeyDown,_=e.onKeyUp,I=e.size,E=void 0===I?"medium":I,N=e.variant,$=void 0===N?"default":N,P=(0,l.Z)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),T=r.useRef(null),O=(0,m.Z)(T,a),M=function(e){e.stopPropagation(),x&&x(e)},z=!(!1===s||!S)||s,L="small"===E,R=f||(z?g.Z:"div"),H=R===g.Z?{component:"div"}:{},j=null;if(x){var B=(0,i.Z)("default"!==h&&("default"===$?n["deleteIconColor".concat((0,p.Z)(h))]:n["deleteIconOutlinedColor".concat((0,p.Z)(h))]),L&&n.deleteIconSmall);j=k&&r.isValidElement(k)?r.cloneElement(k,{className:(0,i.Z)(k.props.className,n.deleteIcon,B),onClick:M}):r.createElement(c,{className:(0,i.Z)(n.deleteIcon,B),onClick:M})}var U=null;t&&r.isValidElement(t)&&(U=r.cloneElement(t,{className:(0,i.Z)(n.avatar,t.props.className,L&&n.avatarSmall,"default"!==h&&n["avatarColor".concat((0,p.Z)(h))])}));var q=null;return v&&r.isValidElement(v)&&(q=r.cloneElement(v,{className:(0,i.Z)(n.icon,v.props.className,L&&n.iconSmall,"default"!==h&&n["iconColor".concat((0,p.Z)(h))])})),r.createElement(R,(0,o.Z)({role:z||x?"button":void 0,className:(0,i.Z)(n.root,d,"default"!==h&&[n["color".concat((0,p.Z)(h))],z&&n["clickableColor".concat((0,p.Z)(h))],x&&n["deletableColor".concat((0,p.Z)(h))]],"default"!==$&&[n.outlined,{primary:n.outlinedPrimary,secondary:n.outlinedSecondary}[h]],C&&n.disabled,L&&n.sizeSmall,z&&n.clickable,x&&n.deletable),"aria-disabled":!!C||void 0,tabIndex:z||x?0:void 0,onClick:S,onKeyDown:function(e){e.currentTarget===e.target&&y(e)&&e.preventDefault(),Z&&Z(e)},onKeyUp:function(e){e.currentTarget===e.target&&(x&&y(e)?x(e):"Escape"===e.key&&T.current&&T.current.blur()),_&&_(e)},ref:O},H,P),U||q,r.createElement("span",{className:(0,i.Z)(n.label,L&&n.labelSmall)},w),j)})),h=(0,d.Z)((function(e){var a="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],t=(0,s.U1)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(a),backgroundColor:a,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:(0,s._4)(a,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:(0,s._4)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:(0,s._4)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:(0,s._4)(a,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:(0,s._4)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:(0,s._4)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,s.U1)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,s.U1)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,s.U1)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:t,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:(0,s.U1)(t,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:(0,s.U1)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:(0,s.U1)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:(0,s.U1)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:(0,s.U1)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(u),f=t(44961),k=()=>{var{userLanguage:e,pageString:a}=(0,f.f)();return r.createElement(C,{label:a.index.updateLog.new,$lang:e})},b=(0,n.ZP)(h).withConfig({displayName:"Chip__StyledChip",componentId:"sc-1s0dbsc-0"})(["&&{height:auto;width:",";color:",";font-size:small;> span{padding:0 0.4rem;}margin-right:0.4rem;}"],(e=>"en"===e.$lang?"3.8rem":"auto"),(e=>e.theme.colors.onPrimary)),C=(0,n.ZP)(b).withConfig({displayName:"Chip__StyledNewChip",componentId:"sc-1s0dbsc-1"})(["&&{background-color:",";}"],(e=>e.theme.colors.success)),v=()=>{var{userLanguage:e,pageString:a}=(0,f.f)();return r.createElement(w,{label:a.index.updateLog.fix,$lang:e})},w=(0,n.ZP)(b).withConfig({displayName:"Chip__StyledFixChip",componentId:"sc-1s0dbsc-2"})(["&&{background-color:",";}"],(e=>e.theme.colors.error)),S=()=>{var{userLanguage:e,pageString:a}=(0,f.f)();return r.createElement(x,{label:a.index.updateLog.change,$lang:e})},x=(0,n.ZP)(b).withConfig({displayName:"Chip__StyledChangeChip",componentId:"sc-1s0dbsc-3"})(["&&{background-color:",";}"],(e=>e.theme.colors.blue))},13170:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return V}});var r=t(12265),n=t(67294),o=t(50009),l=t(4093),i=t(86300),c=t(99395),d=t(49400),s=t(50033),m=t(44961),p=t(47378),g=t(22727),y=t(87001),u=t(74772),h=t(67e3),f=t(22776),k=t(25072),b=t(82195),C=t(28437),v=t(20156),w=JSON.parse('{"101":{"rank":1,"category":0},"102":{"rank":1,"category":0},"103":{"rank":1,"category":0},"104":{"rank":1,"category":0},"105":{"rank":1,"category":0},"201":{"rank":2,"category":0},"202":{"rank":2,"category":0},"203":{"rank":2,"category":0},"204":{"rank":2,"category":0},"205":{"rank":2,"category":0},"301":{"rank":3,"category":0},"302":{"rank":3,"category":0},"303":{"rank":3,"category":0},"304":{"rank":3,"category":0},"305":{"rank":3,"category":0},"401":{"rank":4,"category":0},"402":{"rank":4,"category":0},"403":{"rank":4,"category":0},"404":{"rank":4,"category":0},"405":{"rank":4,"category":0},"406":{"rank":4,"category":0},"407":{"rank":4,"category":0},"408":{"rank":4,"category":0},"409":{"rank":4,"category":0},"410":{"rank":4,"category":0},"501":{"rank":5,"category":0},"502":{"rank":5,"category":0},"503":{"rank":5,"category":0},"504":{"rank":5,"category":0},"505":{"rank":5,"category":0},"506":{"rank":5,"category":0},"507":{"rank":5,"category":0},"508":{"rank":5,"category":0},"509":{"rank":5,"category":0},"510":{"rank":5,"category":0},"601":{"rank":1,"category":1},"602":{"rank":1,"category":1},"603":{"rank":1,"category":1},"604":{"rank":1,"category":1},"605":{"rank":1,"category":1},"701":{"rank":2,"category":1},"702":{"rank":2,"category":1},"703":{"rank":2,"category":1},"704":{"rank":2,"category":1},"705":{"rank":2,"category":1},"801":{"rank":1,"category":2},"802":{"rank":2,"category":2},"803":{"rank":3,"category":2},"901":{"rank":1,"category":3},"902":{"rank":2,"category":3}}'),S=["chapter","stage","energy"],x=["isModalOpen","onClose","filterBy"],Z=e=>{var{column:a,columnHasMounted:t,requestSort:r,getSortDirection:o}=e,{pageString:i}=(0,m.f)();return n.createElement(l.Z,null,n.createElement(E,null,Object.entries(i.items.drop.index.tableHead).map(((e,l)=>{var[i,c]=e,d="stage"===i||"energy"===i;return(0===l||t[l-1])&&n.createElement(_,{onClick:d?()=>r(i):void 0,direction:d?o(i):void 0,key:c,$sortable:d,$hidden:0!==l&&!a.includes(l-1)},c)}))))},_=(0,o.ZP)(y.Re).withConfig({displayName:"drop__StyledTh",componentId:"sc-115hswd-0"})(["&&{background-color:",";color:",";","}white-space:nowrap;",""],(e=>e.theme.colors.secondary),(e=>e.theme.colors.onSecondary),(e=>e.$hidden?"display: none;":""),(e=>e.$sortable?"":"cursor: default;")),I=(0,o.ZP)(c.Z).withConfig({displayName:"drop__StyledTableRow",componentId:"sc-115hswd-1"})(["&&{","}"],(e=>e.$hidden?"display: none;":"")),E=(0,o.ZP)(I).withConfig({displayName:"drop__StyledTableHeadRow",componentId:"sc-115hswd-2"})(["&&{background-color:",";color:",";}"],(e=>e.theme.colors.secondary),(e=>e.theme.colors.onSecondary)),N=e=>{var{items:a,rarity:t,rank:r,hidden:o}=e,{itemString:l}=(0,m.f)();return n.createElement($,{$hidden:o},n.createElement(P,null,0!==a.length&&a.map((e=>n.createElement(T,{key:e.id,$hidden:!t.includes(e.rarity)||0===w[e.id].category&&!r.includes(w[e.id].rank)},n.createElement(u.qg,{id:e.id}),n.createElement(O,{$rarity:e.rarity,label:l.rarity[e.rarity]}))))))},$=(0,o.ZP)(d.Z).withConfig({displayName:"drop__StyledTableCell",componentId:"sc-115hswd-3"})(["&&{","}"],(e=>e.$hidden?"display: none;":"")),P=o.ZP.div.withConfig({displayName:"drop__ItemsContainer",componentId:"sc-115hswd-4"})(["display:flex;flex-direction:row;align-items:center;flex-wrap:wrap;> div:last-child{margin:0;}"]),T=o.ZP.div.withConfig({displayName:"drop__ItemWrapper",componentId:"sc-115hswd-5"})(["display:",";flex-direction:row;align-items:center;flex-wrap:nowrap;margin-right:0.8rem;div{flex-wrap:nowrap;font-size:1rem;}img{width:2rem;height:2rem;}"],(e=>e.$hidden?"none":"flex")),O=(0,o.ZP)(h.qc).withConfig({displayName:"drop__StyledChip",componentId:"sc-115hswd-6"})(["&&{background-color:",";color:black;}margin-left:0.4rem;"],(e=>0===e.$rarity?"lightgray":1===e.$rarity?"#90CAF9":2===e.$rarity?"#A5D6A7":"#FFAB91")),M=e=>{var{column:a,rarity:t,rank:o,columnHasMounted:l,sortedData:c}=e;return n.createElement(i.Z,null,c.map((e=>{var{chapter:i,stage:c,energy:s}=e,m=(0,r.Z)(e,S);return n.createElement(I,{key:i+"-"+c,$hidden:Object.values(m).filter(((e,t)=>a.includes(t))).every((e=>!e.some((e=>t.includes(e.rarity)&&(0!==w[e.id].category||o.includes(w[e.id].rank))))))},n.createElement(d.Z,null,i+"-"+c),Object.values(m).map(((e,r)=>l[r]&&n.createElement(N,{items:e,rarity:t,rank:o,hidden:!a.includes(r),key:r}))),n.createElement($,{$hidden:!a.includes(3)},l[3]&&s))})))},z={en:{0:2,990:4},"zh-TW":{0:4},ja:{0:4},ko:{0:4}},L=e=>{var{filterBtnValue:a,filterBy:t,groupValues:r,strings:o}=e,{userLanguage:l}=(0,m.f)();return n.createElement(R,null,n.createElement(H,{title:o.title,border:!0}),n.createElement(b.Z,{value:a,onChange:t,layoutConfig:z[l]},r.map(((e,a)=>n.createElement(j,{value:e,key:a},o.button[a])))))},R=o.ZP.div.withConfig({displayName:"drop__StyledContainer",componentId:"sc-115hswd-7"})(["padding:0.2rem;"]),H=(0,o.ZP)(k.ZP).withConfig({displayName:"drop__StyledHeader",componentId:"sc-115hswd-8"})(["margin-top:1rem;"]),j=(0,o.ZP)(b.C).withConfig({displayName:"drop__StyledToggleButton",componentId:"sc-115hswd-9"})(["&&&{padding:0.25rem 0.15rem;}"]),B=e=>{var{isModalOpen:a,onClose:t,filterBy:o}=e,l=(0,r.Z)(e,x),{pageString:i}=(0,m.f)();return n.createElement(U,{title:i.items.drop.index.settingModal.title,open:a,onClose:t,ariaLabelledby:"setting-modal-title"},Object.entries(W).map(((e,a)=>{var[t,r]=e;return n.createElement(L,{groupValues:r,filterBtnValue:l[t],filterBy:o(t),strings:i.items.drop.index.settingModal.content[a],key:a})})))},U=(0,o.ZP)(f.WQ).withConfig({displayName:"drop__StyledModal",componentId:"sc-115hswd-10"})(["> div:nth-child(3){top:20%;width:30%;@media screen and (max-width:1300px){width:40%;}@media screen and (max-width:992px){width:60%;}@media screen and (max-width:768px){width:90%;}> div:last-child > div:first-child > div{margin-top:0;}}"]),q=e=>1e3*parseInt(e.chapter)+10*parseInt(e.stage.split(" ")[0])+(e.stage.includes("free")?1:0)+(e.stage.includes("-")?parseInt(e.stage.split("-")[1]):0),D=(e,a)=>{e.sort(((e,t)=>{var r,n;return"stage"===a.key?(r=q(e),n=q(t)):(r=e[a.key],n=t[a.key]),r<n?"asc"===a.direction?-1:1:r>n?"asc"===a.direction?1:-1:0}))},W={column:[0,1,2,3],rank:[1,2,3,4],rarity:[0,1,2,3]},F=[].concat(...v.map((e=>e.stages.map((a=>Object.assign({chapter:e.chapter},a)))))),A=(0,o.ZP)(s.Z).withConfig({displayName:"drop__TableWrapper",componentId:"sc-115hswd-11"})(["overflow-x:auto;height:calc(100vh - 11rem);padding-right:0;margin-right:0;table{text-align:center;}"]),K=o.ZP.div.withConfig({displayName:"drop__SettingButtonWrapper",componentId:"sc-115hswd-12"})(["position absolute;right:0;top:-4rem;"]),V=()=>{var{pageString:e}=(0,m.f)(),{0:a,1:t}=(0,n.useState)(Object.assign({},W,{column:"undefined"!=typeof window&&window.innerWidth<600?[0]:W.column,isModalOpen:!1,columnHasMounted:"undefined"!=typeof window&&window.innerWidth<600?[...Array(4).keys()].map(((e,a)=>0===a)):Array(4).fill(!0)})),r=e=>()=>t((a=>Object.assign({},a,{isModalOpen:e})));return n.createElement(n.Fragment,null,n.createElement(p.Z,{title:e.items.drop.index.helmet.title,description:e.items.drop.index.helmet.description,path:"/items/drop/"}),n.createElement(K,null,n.createElement(g.ZP,{onClick:r(!0),tooltipText:e.items.drop.index.settingTooltip},C.qY)),n.createElement(A,null,n.createElement(y.ZP,{data:F,head:n.createElement(Z,{column:a.column,columnHasMounted:a.columnHasMounted}),body:n.createElement(M,{column:a.column,rarity:a.rarity,rank:a.rank,columnHasMounted:a.columnHasMounted}),sortFunc:D,defaultSortKey:"stage",border:!0})),n.createElement(B,Object.assign({},a,{isModalOpen:a.isModalOpen,onClose:r(!1),filterBy:e=>(a,r)=>{t((a=>Object.assign({},a,{[e]:r,columnHasMounted:"column"===e?a.columnHasMounted.map(((e,a)=>e||r.includes(a))):a.columnHasMounted})))}})))}}}]);
//# sourceMappingURL=component---src-pages-items-drop-index-js-094cf66e03f63c43aa05.js.map