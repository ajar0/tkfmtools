(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{FXsi:function(e,t,n){"use strict";n.d(t,"c",(function(){return S})),n.d(t,"b",(function(){return E})),n.d(t,"d",(function(){return w})),n.d(t,"a",(function(){return I})),n.d(t,"e",(function(){return M})),n.d(t,"f",(function(){return G}));var a=n("KQm4"),r=n("q1tI"),i=n.n(r),l=n("vOnD"),c=n("QojX"),o=n("JI6e"),u=n("JrlI"),m=n("yAqR"),f=n("dlgc"),d=n("9M6+"),p=n("MdAk"),s=n("D7KU"),g=n("ckOl"),h=n("cYtq"),b=n("jQKj");function y(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return C(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var S=Object(l.b)(c.a.Control).withConfig({displayName:"CharPotential__Select",componentId:"sc-1f0zpc5-0"})(["&&{background-color:",";color:",";border-radius:.25rem;padding:.1rem;border:1px solid ",";width:100%;height:1.6rem;&:focus{box-shadow:0 0 .4rem ",";}}"],(function(e){return e.theme.colors.surface}),(function(e){return e.theme.colors.onSurface}),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.secondary})),E=function(e){var t=e.as,n=e.minNum,r=e.maxNum,l=e.onChange,o=e.disabled;return i.a.createElement(c.a.Group,{as:t},i.a.createElement(S,{as:"select",onChange:l,disabled:o},o?i.a.createElement("option",null,"-"):Object(a.a)(Array(r+1).keys()).slice(n).map((function(e){return i.a.createElement("option",{value:e,key:e},e)}))))},w=function(e){var t=e.title,n=e.handleSelect,a=e.subMinNum,r=e.minNum,l=e.maxNum,u=e.selectAttrs;return i.a.createElement(i.a.Fragment,null,t,i.a.createElement(c.a.Row,null,i.a.createElement(E,{as:o.a,minNum:r,maxNum:l,onChange:n(u[0])}),"–",i.a.createElement(E,{as:o.a,minNum:a,maxNum:6,onChange:n(u[1])})))},v=(l.b.div.withConfig({displayName:"CharPotential__IconWrapper",componentId:"sc-1f0zpc5-1"})(["svg{width:1.2rem;height:1.2rem;margin-right:.4rem;fill:",";}"],(function(e){return e.theme.colors.onSurface})),l.b.div.withConfig({displayName:"CharPotential__ContainerBody",componentId:"sc-1f0zpc5-2"})(["display:flex;flex-direction:row;justify-content:space-around;form{width:13.5rem;> div:last-child > div{margin-bottom:0;}}"])),k=Object(l.b)(d.a).withConfig({displayName:"CharPotential__CharImgWrapper",componentId:"sc-1f0zpc5-3"})(["width:5.2rem;margin-right:1rem;border:2px solid ",";border-radius:.25rem;"],(function(e){return e.theme.colors.secondary})),A=l.b.div.withConfig({displayName:"CharPotential__Gutter",componentId:"sc-1f0zpc5-4"})(["margin-top:4rem;"]),I=function(e){var t=e.children,n=e.className,a=e.character,l=e.handleSelect,f=e.lumpNRChars,d=Object(r.useContext)(s.a),p=d.pageString,b=d.charString;return i.a.createElement(u.a,{widthConfig:{default:"25%",992:"100%"},className:n},i.a.createElement(m.a,{title:p.characters.potential.characterPanelTitle,titleIcon:g.D}),i.a.createElement(v,null,i.a.createElement(k,{name:"char_"+a+".png",alt:""}),i.a.createElement(c.a,{onSubmit:function(e){return e.preventDefault()}},p.characters.potential.characterSelectTitle,i.a.createElement(c.a.Row,null,i.a.createElement(c.a.Group,{as:o.a},i.a.createElement(S,{as:"select",onChange:l("character")},h.map((function(e,t){return!(e.rarity<2&&f)&&i.a.createElement("option",{value:e.id,key:t},b.name[e.id])})),f?i.a.createElement("option",{value:"nr",key:"nr"},b.name.nr):null))),t)))},B=Object(l.b)(d.a).withConfig({displayName:"CharPotential__UiImg",componentId:"sc-1f0zpc5-5"})(["width:1.6rem;height:1.6rem;margin-right:.4rem;"]),J=function(e){var t=e.children,n=e.layoutConfig,a=e.name,r=e.alt;return i.a.createElement(N,{$layoutConfig:n},i.a.createElement("div",null,i.a.createElement(B,{name:a,alt:r}),t))},N=l.b.span.withConfig({displayName:"CharPotential__MaterialWrapper",componentId:"sc-1f0zpc5-6"})(["display:inline-flex;align-items:center;justify-content:space-between;padding:0 .4rem;margin:.2rem 0;"," > div{display:flex;align-items:center;}"],(function(e){return Object.entries(e.$layoutConfig).map((function(e){return"@media screen and (min-width: "+e[0]+"px) {\n            width: calc(100% / "+e[1]+");\n        }\n        "}))})),H=Object(l.b)(f.a).withConfig({displayName:"CharPotential__MaterialCard",componentId:"sc-1f0zpc5-7"})(["> div:first-child{width:2rem;height:2rem;margin-right:.4rem;}"]),P=function(e){var t=e.result,n=e.layoutConfig;Object(r.useContext)(s.a).itemString;return t.items?i.a.createElement(i.a.Fragment,null,Object.entries(t.items).map((function(e,t){return i.a.createElement(N,{key:t,$layoutConfig:n},i.a.createElement("div",null,i.a.createElement(H,{id:e[0],alt:""})),e[1])})),i.a.createElement(J,{name:"money.png",alt:"money",layoutConfig:n},t.money)):null},x=Object(l.b)(u.a).withConfig({displayName:"CharPotential__StyledPanel",componentId:"sc-1f0zpc5-8"})(["@media screen and (max-width:992px){width:",";margin-left:calc(100% - ",");position:relative;margin-top:1rem;}"],(function(e){return e.widthConfig[992]}),(function(e){return e.widthConfig[992]})),_=l.b.div.withConfig({displayName:"CharPotential__MaterialContainer",componentId:"sc-1f0zpc5-9"})(["display:flex;flex-direction:row;flex-wrap:wrap;margin-bottom:1rem;min-height:6rem;"]),O={en:{1360:5,1200:4,768:3,0:2},"zh-TW":{1360:6,1200:5,768:4,624:3,0:2}},j=function(e){var t=e.widthConfig,n=e.result,a=e.handleModalOpen,l=Object(r.useContext)(s.a),c=l.userLanguage,o=l.pageString;return i.a.createElement(x,{widthConfig:t},i.a.createElement("div",null,i.a.createElement(m.a,{title:o.characters.potential.resultDemandTitle,titleIcon:g.s,withHelp:!0,onClickHelp:a}),i.a.createElement(_,null,i.a.createElement(P,{result:n,layoutConfig:O[c]}))),i.a.createElement("div",null,i.a.createElement(m.a,{title:o.characters.potential.resultBuffTitle,titleIcon:g.e}),i.a.createElement("div",null,i.a.createElement(J,{layoutConfig:O[c],name:"ui_small_atk.png",alt:"ATK"},n.buff.ATK+" %"),i.a.createElement(J,{layoutConfig:O[c],name:"ui_small_hp.png",alt:"HP"},n.buff.HP+" %"),i.a.createElement(J,{layoutConfig:O[c],name:"ui_small_potentialPassive.png",alt:"Passive"},0===n.buff.PASSIVE?"-":1===n.buff.PASSIVE?"1":2===n.buff.PASSIVE?"2":"1 & 2"))))},M=function(e,t,n){for(var a={items:{},money:0,buff:{ATK:0,HP:0,PASSIVE:0}},r="nr"===e||"4"===e[0]||"3"===e[0]?3:h.find((function(t){return t.id===e})).potentialType,i=b.type[r],l=t[0]-1;l<n[0]-1+1;l++)for(var c=i[l],o=l===t[0]-1?t[1]-1:0;o<(l===n[0]-1?n[1]:6);o++)if(!(o<0)){var u=c.pattern[o]+c.rank[o];a.items[u]?a.items[u]+=c.num[o]:a.items[u]=c.num[o],a.money+=8e3*(l+1);var m=b.itemMap[c.pattern[o]].type;a.buff[m]+=c.buff[o]}for(var f={},d=function(){for(var e,t=s[p],n=t[0],a=t[1],r=y(b.itemMap[n[0]].id.map((function(e){return"9"===n[1]?"902":"8"===n[1]?"901":(100*parseInt(n[1])+e).toString()})));!(e=r()).done;){var i=e.value;f[i]?f[i]+=a:f[i]=a}},p=0,s=Object.entries(a.items);p<s.length;p++)d();return a.items=f,a},K=l.b.div.withConfig({displayName:"CharPotential__CalculatorContainer",componentId:"sc-1f0zpc5-10"})(["display:table;width:100%;> div{display:table-cell;}@media screen and (max-width:992px){display:block;> div{display:block;}}"]),T=l.b.div.withConfig({displayName:"CharPotential__TableGutter",componentId:"sc-1f0zpc5-11"})(["width:1rem;@media screen and (max-width:992px){display:hidden;}"]),D={default:"calc(75% - 1rem)",992:"100%"};function G(){var e=Object(r.useContext)(s.a).pageString,t=Object(r.useState)({character:"101",currStage:1,currSub:1,targetStage:1,targetSub:1,result:{items:void 0,money:0,buff:{ATK:0,HP:0,PASSIVE:0}},isHelpModalOpen:!1}),n=t[0],a=t[1],l=function(e){return function(t){var r=Object.assign({},n),i=t.target.value;r[e]="character"===e?i:parseInt(i),"nr"===i&&(r.currStage=n.currStage>6?1:n.currStage,r.targetStage=n.targetStage>6?1:n.targetStage),r.targetStage=Math.max(r.targetStage,r.currStage),r.targetStage===r.currStage&&(r.targetSub=Math.max(r.targetSub,r.currSub));var l=M(r.character,[r.currStage,r.currSub],[r.targetStage,r.targetSub]);l.buff.ATK=Math.round(100*l.buff.ATK)/100,l.buff.HP=Math.round(100*l.buff.HP)/100,r.result=l,a(r)}},c="nr"===n.character?6:12,o=function(e){return function(){a((function(t){return Object.assign({},t,{isHelpModalOpen:e})}))}};return i.a.createElement(i.a.Fragment,null,i.a.createElement(K,{resultPanelWidthConfig:D},i.a.createElement(I,{handleSelect:l,character:n.character,lumpNRChars:!0},i.a.createElement(A,null),i.a.createElement(w,{title:e.characters.potential.currentSelectTitle,subMinNum:1,minNum:1,maxNum:c,selectAttrs:["currStage","currSub"],handleSelect:l}),i.a.createElement(w,{title:e.characters.potential.targetSelectTitle,subMinNum:n.currStage===n.targetStage?n.currSub:1,minNum:n.currStage,maxNum:c,selectAttrs:["targetStage","targetSub"],handleSelect:l})),i.a.createElement(T,null),i.a.createElement(j,{widthConfig:D,result:n.result,handleModalOpen:o(!0)})),i.a.createElement(p.b,{title:e.characters.potential.helpModal.title,open:n.isHelpModalOpen,onClose:o(!1),content:e.characters.potential.helpModal.content,ariaLabelledby:"help-modal-title",ariaDescribedby:"help-modal-description"}))}},dlgc:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("q1tI"),r=n.n(a),i=n("vOnD"),l=n("65eO"),c=n("nkBX"),o=n("JrlI"),u=n("Awiy"),m=n("D7KU"),f=n("6j+L"),d=Object(i.b)(u.b).withConfig({displayName:"ItemShowcase__ItemImg",componentId:"sc-9qhyn6-0"})(["> div:first-child{width:2.5rem;height:2.5rem;margin-right:.4rem;user-select:none;}"]),p=i.b.div.withConfig({displayName:"ItemShowcase__TextWrapper",componentId:"sc-9qhyn6-1"})(["white-space:nowrap;font-size:medium;font-weight:normal;"]),s=function(e){var t=e.className,n=e.id,i=Object(a.useContext)(m.a).itemString;return r.a.createElement(d,{className:t,imgType:"item",imgId:n,alt:""},r.a.createElement(p,null,i.name[n]))},g=Object(i.b)(o.d).withConfig({displayName:"ItemShowcase__StyledTh",componentId:"sc-9qhyn6-2"})(["background-color:",";color:",";white-space:nowrap;",""],(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.onSecondary}),(function(e){return!!e.$sortable||"cursor: default;"})),h=r.a.forwardRef((function(e,t){var n=Object(a.useContext)(m.a).pageString;return r.a.createElement("thead",{ref:t},r.a.createElement("tr",null,Object.entries(n.items.drop.index.tableHead).map((function(t,n){var a,i,l="stage"===t[0]||"energy"===t[0];return l&&(a=function(){return e.requestSort(t[0])},i=e.getSortDirection(t[0])),r.a.createElement(g,{onClick:a,direction:i,key:n,$sortable:l},t[1])}))))})),b=i.b.div.withConfig({displayName:"ItemShowcase__ItemWrapper",componentId:"sc-9qhyn6-3"})(["display:flex;flex-direction:row;align-items:center;flex-wrap:nowrap;margin-right:.8rem;div{flex-wrap:nowrap;font-size:1rem;}img{width:2rem;height:2rem;}"]),y=i.b.div.withConfig({displayName:"ItemShowcase__ItemsContainer",componentId:"sc-9qhyn6-4"})(["display:flex;flex-direction:row;align-items:center;flex-wrap:wrap;> div:last-child{margin:0;}"]),C=Object(i.b)(l.a).withConfig({displayName:"ItemShowcase__StyledBadge",componentId:"sc-9qhyn6-5"})(["background-color:",";color:black;margin-left:.4rem;"],(function(e){return 0===e.$rarity?"lightgray":1===e.$rarity?"#90CAF9":2===e.$rarity?"#A5D6A7":"#FFAB91"})),S=r.a.forwardRef((function(e,t){var n=Object(a.useContext)(m.a).itemString,i=Object(a.useRef)();return Object(a.useImperativeHandle)(t,(function(){return{getY:function(){return i.current.getBoundingClientRect().y},getBottom:function(){return i.current.getBoundingClientRect().bottom},current:i.current}})),r.a.createElement("tbody",null,e.sortedResult.map((function(t,a){if(a>e.renderTo)return null;var l=function(e){return r.a.createElement("td",null,r.a.createElement(y,null,0===e.length?void 0:e.map((function(e,t){return r.a.createElement(b,{key:t},r.a.createElement(s,{id:e.id}),r.a.createElement(C,{pill:!0,$rarity:e.rarity},n.rarity[e.rarity]))}))))};return r.a.createElement("tr",{key:a,ref:a===e.renderTo?i:void 0},r.a.createElement("td",null,t.chapter+"-"+t.stage),l(t.materials),l(t.trainItems),l(t.expPotions),r.a.createElement("td",null,t.energy))})))})),E=Object(i.b)(c.a).withConfig({displayName:"ItemShowcase__TableWrapper",componentId:"sc-9qhyn6-6"})(["overflow-x:auto;height:calc(100vh - 10.4rem);padding-right:0;margin-right:0;"]);t.b=function(){return r.a.createElement(E,null,r.a.createElement(o.c,{data:f,head:r.a.createElement(h,null),body:r.a.createElement(S,null),sortFunc:function(e,t){var n=function(e){return 1e3*parseInt(e.chapter)+10*parseInt(e.stage.split(" ")[0])+(e.stage.includes("free")?1:0)+(e.stage.includes("-")?parseInt(e.stage.split("-")[1]):0)};e.sort((function(e,a){var r,i;return"stage"===t.key?(r=n(e),i=n(a)):(r=e[t.key],i=a[t.key]),r<i?"asc"===t.direction?-1:1:r>i?"asc"===t.direction?1:-1:0}))},defaultSortKey:"stage",border:!0}))}},jQKj:function(e){e.exports=JSON.parse('{"type":[[{"pattern":["B","B","J","J","J","J"],"num":[1,2,2,2,2,1],"rank":[1,1,1,1,1,1],"buff":[2,2,3,3,3,3]},{"pattern":["B","B","J","J","J","J"],"num":[2,2,2,3,2,3],"rank":[1,1,1,1,1,1],"buff":[2,2,3.5,3.5,3.5,3.5]},{"pattern":["B","B","B","B","J","J"],"num":[1,1,1,1,2,2],"rank":[2,2,2,2,2,2],"buff":[2,2,2,2,3.5,3.5]},{"pattern":["B","B","B","J","J","J"],"num":[2,1,1,3,3,3],"rank":[2,2,2,2,2,2],"buff":[2,2,2,3.5,3.5,3.5]},{"pattern":["B","B","B","J","J","J"],"num":[1,1,2,4,4,4],"rank":[3,2,2,2,2,2],"buff":[2,2,2,3.5,3.5,3.5]},{"pattern":["P","B","B","B","J","J"],"num":[1,2,1,2,4,4],"rank":[9,3,3,3,3,3],"buff":[1,2,2,2,3.5,3.5]},{"pattern":["B","B","B","B","J","J"],"num":[2,3,2,2,4,4],"rank":[3,3,3,3,3,3],"buff":[2.5,2.5,2.5,2.5,3.5,3.5]},{"pattern":["B","B","B","B","J","J"],"num":[2,2,3,2,4,4],"rank":[3,3,3,3,3,3],"buff":[2.5,2.5,2.5,2.5,3.5,3.5]},{"pattern":["E","E","E","E","M","M"],"num":[2,3,3,2,5,5],"rank":[4,4,4,4,4,4],"buff":[2.5,2.5,2.5,2.5,3.5,3.5]},{"pattern":["G","G","G","G","N","N"],"num":[3,2,2,3,6,6],"rank":[4,4,4,4,4,4],"buff":[3,3,3,3,3.5,3.5]},{"pattern":["E","E","E","E","M","M"],"num":[1,1,1,1,1,1],"rank":[5,5,5,5,5,5],"buff":[3,3,3,3,3.5,3.5]},{"pattern":["P","G","G","G","G","N"],"num":[2,1,1,1,1,1],"rank":[9,5,5,5,5,5],"buff":[2,3,3,3,3,4]}],[{"pattern":["J","J","B","B","B","B"],"num":[1,2,2,2,2,1],"rank":[1,1,1,1,1,1],"buff":[2,2,3,3,3,3]},{"pattern":["J","J","B","B","B","B"],"num":[2,2,2,3,2,3],"rank":[1,1,1,1,1,1],"buff":[2,2,3.5,3.5,3.5,3.5]},{"pattern":["J","J","J","J","B","B"],"num":[1,1,1,1,2,2],"rank":[2,2,2,2,2,2],"buff":[2,2,2,2,3.5,3.5]},{"pattern":["J","J","J","B","B","B"],"num":[2,1,1,3,3,3],"rank":[2,2,2,2,2,2],"buff":[2,2,2,3.5,3.5,3.5]},{"pattern":["J","J","J","B","B","B"],"num":[1,1,2,4,4,4],"rank":[3,2,2,2,2,2],"buff":[2,2,2,3.5,3.5,3.5]},{"pattern":["P","J","J","J","B","B"],"num":[1,2,1,2,4,4],"rank":[9,3,3,3,3,3],"buff":[1,2,2,2,3.5,3.5]},{"pattern":["J","J","J","J","B","B"],"num":[2,3,2,2,4,4],"rank":[3,3,3,3,3,3],"buff":[2.5,2.5,2.5,2.5,3.5,3.5]},{"pattern":["J","J","J","J","B","B"],"num":[2,2,3,2,4,4],"rank":[3,3,3,3,3,3],"buff":[2.5,2.5,2.5,2.5,3.5,3.5]},{"pattern":["M","M","M","M","E","E"],"num":[2,3,3,2,5,5],"rank":[4,4,4,4,4,4],"buff":[2.5,2.5,2.5,2.5,3.5,3.5]},{"pattern":["N","N","N","N","G","G"],"num":[3,2,2,3,6,6],"rank":[4,4,4,4,4,4],"buff":[3,3,3,3,3.5,3.5]},{"pattern":["M","M","M","M","E","E"],"num":[1,1,1,1,1,1],"rank":[5,5,5,5,5,5],"buff":[3,3,3,3,3.5,3.5]},{"pattern":["P","N","N","N","N","G"],"num":[2,1,1,1,1,1],"rank":[9,5,5,5,5,5],"buff":[2,3,3,3,3,4]}],[{"pattern":["A","A","A","A","A","A"],"num":[2,2,2,2,2,2],"rank":[1,1,1,1,1,1],"buff":[2.75,2.75,2.75,2.75,2.75,2.75]},{"pattern":["H","H","H","H","H","H"],"num":[2,2,2,2,2,2],"rank":[1,1,1,1,1,1],"buff":[2.75,2.75,2.75,2.75,2.75,2.75]},{"pattern":["A","H","A","H","A","H"],"num":[3,2,1,1,1,1],"rank":[2,2,2,2,2,2],"buff":[2.75,2.75,2.75,2.75,2.75,2.75]},{"pattern":["H","A","A","A","A","A"],"num":[3,3,3,2,2,2],"rank":[2,2,2,2,2,2],"buff":[2.75,2.75,2.75,2.75,2.75,2.75]},{"pattern":["C","H","H","H","H","H"],"num":[3,3,3,2,2,2],"rank":[3,2,2,2,2,2],"buff":[2.75,2.75,2.75,2.75,2.75,2.75]},{"pattern":["P","K","C","K","C","K"],"num":[1,3,2,2,2,2],"rank":[9,3,3,3,3,3],"buff":[1,2.75,2.75,2.75,2.75,2.75]},{"pattern":["C","K","C","K","C","K"],"num":[2,2,3,3,3,3],"rank":[3,3,3,3,3,3],"buff":[2.75,2.75,2.75,2.75,2.75,3]},{"pattern":["C","K","C","K","C","K"],"num":[3,3,3,3,3,3],"rank":[3,3,3,3,3,3],"buff":[3,3,3,3,3,3]},{"pattern":["D","L","D","L","D","L"],"num":[4,4,3,3,3,3],"rank":[4,4,4,4,4,4],"buff":[3,3,3,3,3,3]},{"pattern":["F","O","F","O","F","O"],"num":[4,4,4,4,3,3],"rank":[4,4,4,4,4,4],"buff":[3,3,3,3,3,3]},{"pattern":["D","L","D","L","D","L"],"num":[1,1,1,1,1,1],"rank":[5,5,5,5,5,5],"buff":[3,3,3,3,3,3]},{"pattern":["P","F","F","O","F","O"],"num":[2,1,1,1,1,1],"rank":[9,5,5,5,5,5],"buff":[2,3,3,3,3,3]}],[{"pattern":["A","A","A","A","A","A"],"num":[2,2,2,2,2,2],"rank":[1,1,1,1,1,1],"buff":[2.75,2.75,2.75,2.75,3,3]},{"pattern":["H","H","H","H","H","H"],"num":[2,2,2,2,2,2],"rank":[1,1,1,1,1,1],"buff":[2.75,2.75,2.75,2.75,3,3]},{"pattern":["P","H","A","H","A","H"],"num":[5,2,1,1,1,1],"rank":[8,2,2,2,2,2],"buff":[1,3,3,3,3,3]},{"pattern":["A","A","A","A","A","A"],"num":[3,3,3,2,2,2],"rank":[2,2,2,2,2,2],"buff":[3,3,3,3,3,3]},{"pattern":["H","H","H","H","H","H"],"num":[3,3,3,2,2,2],"rank":[2,2,2,2,2,2],"buff":[3,3,3,3,3,3]},{"pattern":["P","C","K","C","K","C"],"num":[10,3,3,2,2,2],"rank":[8,3,3,3,3,3],"buff":[2,3,3,3,3,3]}]],"itemMap":{"A":{"id":[1,3],"type":"ATK"},"B":{"id":[1,5],"type":"ATK"},"C":{"id":[3,5],"type":"ATK"},"D":{"id":[1,3],"type":"ATK"},"E":{"id":[1,5],"type":"ATK"},"F":{"id":[8,10],"type":"ATK"},"G":{"id":[6,10],"type":"ATK"},"H":{"id":[2,3],"type":"HP"},"J":{"id":[2,4],"type":"HP"},"K":{"id":[3,4],"type":"HP"},"L":{"id":[2,3],"type":"HP"},"M":{"id":[2,4],"type":"HP"},"N":{"id":[7,9],"type":"HP"},"O":{"id":[8,9],"type":"HP"},"P":{"id":[1],"type":"PASSIVE"}}}')}}]);
//# sourceMappingURL=c6dfc81d8b7fc35f7011343c254c492060ffdfd9-9e28da777cd674950ccb.js.map