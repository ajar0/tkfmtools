(self.webpackChunktkfmtools=self.webpackChunktkfmtools||[]).push([[34],{83604:function(e,t,a){"use strict";var r=a(67294).createContext();t.Z=r},74772:function(e,t,a){"use strict";a.d(t,{Q:function(){return u},qg:function(){return g},cP:function(){return f}});var r=a(67294),n=a(50009),i=a(44094),l=a(93175),c=a(16855),o=(0,n.ZP)(l.Z).withConfig({displayName:"Card__StyledImg",componentId:"sc-1duszqx-0"})(["display:flex;justify-content:center;align-items:center;width:100%;background-repeat:no-repeat;"]),s=n.ZP.div.withConfig({displayName:"Card__ImgWrapper",componentId:"sc-1duszqx-1"})(["display:flex;align-items:center;justify-content:center;"]),u=function(e){var t=e.children,a=e.className,n=e.imgType,i=e.imgId,l=e.alt;return e.isBackground?r.createElement(o,{className:a,name:n+"_"+i,isBackground:!0,alt:l},t):r.createElement(s,{className:a},r.createElement(o,{name:n+"_"+i,alt:l}),t)},m=(0,n.ZP)(u).withConfig({displayName:"Card__ItemImg",componentId:"sc-1duszqx-2"})(["> div:first-child{width:2.5rem;height:2.5rem;margin-right:.4rem;user-select:none;}"]),d=n.ZP.div.withConfig({displayName:"Card__TextWrapper",componentId:"sc-1duszqx-3"})(["white-space:nowrap;font-size:medium;font-weight:normal;"]),g=function(e){var t=e.className,a=e.id,n=(0,i.f)().itemString;return r.createElement(m,{className:t,imgType:"item",imgId:a,alt:""},r.createElement(d,null,n.name[a]))},p=(0,n.ZP)(c.Z).withConfig({displayName:"Card__StyledTable",componentId:"sc-1duszqx-4"})(["&& .MuiTableCell-root{font-size:.9rem;padding:.3rem;padding-left:.75rem;}"]),f=function(e){var t=e.className,a=e.children,n=e.striped;return r.createElement(p,{className:t,$striped:n},a)}},16855:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var r=a(50009),n=a(81253),i=a(22122),l=a(67294),c=a(85505),o=a(34621),s=a(83604),u="table",m=l.forwardRef((function(e,t){var a=e.classes,r=e.className,o=e.component,m=void 0===o?u:o,d=e.padding,g=void 0===d?"default":d,p=e.size,f=void 0===p?"medium":p,h=e.stickyHeader,b=void 0!==h&&h,y=(0,n.Z)(e,["classes","className","component","padding","size","stickyHeader"]),S=l.useMemo((function(){return{padding:g,size:f,stickyHeader:b}}),[g,f,b]);return l.createElement(s.Z.Provider,{value:S},l.createElement(m,(0,i.Z)({role:m===u?null:"table",ref:t,className:(0,c.Z)(a.root,r,b&&a.stickyHeader)},y)))})),d=(0,o.Z)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,i.Z)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(m),g=(0,r.ZP)(d).withConfig({displayName:"Table",componentId:"vr3gqy-0"})(["&&{width:100%;.MuiTableCell-head{padding:.75rem .25rem;font-weight:bold;}.MuiTableCell-head:first-child{padding-left:.75rem;}.MuiTableCell-root{border-bottom:",";font-size:medium;}.MuiTableCell-body{color:",";}&& .MuiTableRow-root:hover{background-color:rgba(0,0,0,0.075);}","}"],(function(e){return e.$border?"1px solid "+e.theme.colors.secondary:"none"}),(function(e){return e.theme.colors.onSurface}),(function(e){return e.$striped?".MuiTableRow-root:nth-of-type(2n+1) {\n            background-color: rgba(0, 0, 0, 0.05);\n        }":""}))},20904:function(e,t,a){"use strict";a.r(t);var r=a(85061),n=a(67294),i=a(50009),l=a(80838),c=a(54480),o=a(44094),s=a(47378),u=a(25072),m=a(74772),d=a(93175),g=a(50190),p=a(22776),f=a(28437),h=a(59969),b=(0,i.ZP)(g.P).withConfig({displayName:"potential__StyledSelect",componentId:"sc-2is47v-0"})(["&&{.MuiInputLabel-shrink{transform:translate(14px,-1px) scale(0.75);}> div > div{padding:.6rem;}}"]),y=(0,i.ZP)(d.Z).withConfig({displayName:"potential__CharImgWrapper",componentId:"sc-2is47v-1"})(["&&{max-width:5.2rem;}margin-right:1rem;border:2px solid ",";border-radius:.25rem;"],(function(e){return e.theme.colors.secondary})),S=function(e){var t=e.selected,a=e.handleSelect,i=(0,o.f)(),c=i.pageString,s=i.charString,m=Object.keys(s.name).filter((function(e){return isNaN(parseInt(e[0]))||parseInt(e[0])<3})),d=function(e){return{character:"",currStage:(0,r.Z)(Array("nr"===e.character?7:13).keys()).slice(1),currSub:(0,r.Z)(Array(7).keys()).slice(1),targetStage:(0,r.Z)(Array("nr"===e.character?7:13).keys()).slice(e.currStage),targetSub:(0,r.Z)(Array(7).keys()).slice(e.currStage===e.targetStage?e.currSub:1)}}(t),g={character:c.characters.potential.characterSelectTitle,currStage:c.characters.potential.currentSelectTitle,currSub:"",targetStage:c.characters.potential.targetSelectTitle,targetSub:""};return n.createElement(n.Fragment,null,n.createElement(u.Z,{title:c.characters.potential.characterPanelTitle,titleIcon:f.i6,border:!0}),n.createElement(l.Z,{container:!0,spacing:1,justify:"space-around"},n.createElement(l.Z,{item:!0,xs:4,component:y,name:"char_"+t.character,alt:""}),n.createElement(l.Z,{item:!0,xs:8,container:!0,spacing:1,alignContent:"space-around"},Object.entries(d).map((function(e){return n.createElement(l.Z,{item:!0,xs:"character"===e[0]?12:6,component:b,label:g[e[0]],values:"character"===e[0]?m:e[1],renderValues:"character"===e[0]?m.map((function(e){return s.name[e]})):e[1],value:t[e[0]],onChange:a(e[0]),key:e[0]})})))))},v=i.ZP.span.withConfig({displayName:"potential__MaterialWrapper",componentId:"sc-2is47v-2"})(["display:inline-flex;align-items:center;justify-content:space-between;padding:0 .4rem;margin:.2rem 0;"," > div{display:flex;align-items:center;}"],(function(e){return Object.entries(e.$layoutConfig).map((function(e){return"@media screen and (min-width: "+e[0]+"px) {\n            width: calc(100% / "+e[1]+");\n        }\n        "}))})),C=(0,i.ZP)(d.Z).withConfig({displayName:"potential__UiImg",componentId:"sc-2is47v-3"})(["width:1.6rem;height:1.6rem;margin-right:.4rem;"]),E=function(e){var t=e.children,a=e.layoutConfig,r=e.name,i=e.alt;return n.createElement(v,{$layoutConfig:a},n.createElement("div",null,n.createElement(C,{name:r,alt:i}),t))},Z=(0,i.ZP)(m.qg).withConfig({displayName:"potential__MaterialCard",componentId:"sc-2is47v-4"})(["> div:first-child{width:2rem;height:2rem;margin-right:.4rem;}"]),w=function(e){var t=e.result,a=e.layoutConfig;return n.createElement(n.Fragment,null,t.items&&Object.entries(t.items).map((function(e){return n.createElement(v,{key:e[0],$layoutConfig:a},n.createElement("div",null,n.createElement(Z,{id:e[0],alt:""})),e[1])})),t.items&&t.money&&n.createElement(E,{name:"money",alt:"money",layoutConfig:a},t.money))},I=i.ZP.div.withConfig({displayName:"potential__MaterialContainer",componentId:"sc-2is47v-5"})(["display:flex;flex-direction:row;flex-wrap:wrap;margin-bottom:1rem;min-height:6rem;"]),_={en:{1360:5,1200:4,768:3,0:2},"zh-TW":{1360:6,1200:5,768:4,624:3,0:2},kr:{1360:6,1200:5,768:4,624:3,0:2}},P=function(e){var t=e.result,a=e.handleModalOpen,r=(0,o.f)(),i=r.userLanguage,l=r.pageString;return n.createElement(n.Fragment,null,n.createElement(u.Z,{title:l.characters.potential.resultDemandTitle,titleIcon:f.S5,withHelp:!0,onClickHelp:a,border:!0}),n.createElement(I,null,n.createElement(w,{result:t,layoutConfig:_[i]})),n.createElement(u.Z,{title:l.characters.potential.resultBuffTitle,titleIcon:f.G$,border:!0}),n.createElement(E,{layoutConfig:_[i],name:"ui_small_atk",alt:"ATK"},t.buff.ATK+" %"),n.createElement(E,{layoutConfig:_[i],name:"ui_small_hp",alt:"HP"},t.buff.HP+" %"),n.createElement(E,{layoutConfig:_[i],name:"ui_small_potentialPassive",alt:"Passive"},0===t.buff.PASSIVE?"-":1===t.buff.PASSIVE?"1":2===t.buff.PASSIVE?"2":"1 & 2"))};t.default=function(){var e=(0,o.f)().pageString,t=(0,n.useState)({character:"101",currStage:1,currSub:1,targetStage:1,targetSub:1,result:{items:void 0,money:0,buff:{ATK:0,HP:0,PASSIVE:0}},isHelpModalOpen:!1}),a=t[0],r=t[1],i=function(e){return function(){r((function(t){return Object.assign({},t,{isHelpModalOpen:e})}))}};return n.createElement(n.Fragment,null,n.createElement(s.Z,{title:e.characters.potential.helmet.title,description:e.characters.potential.helmet.description,path:"/characters/potential/"}),n.createElement(c.Z,{panelsWidth:["30%","70%"]},n.createElement(S,{selected:{character:a.character,currStage:a.currStage,currSub:a.currSub,targetStage:a.targetStage,targetSub:a.targetSub},handleSelect:function(e){return function(t){var n=Object.assign({},a),i=t.target.value;n[e]="character"===e?i:parseInt(i),"nr"===i&&(n.currStage=a.currStage>6?1:a.currStage,n.targetStage=a.targetStage>6?1:a.targetStage),n.targetStage=Math.max(n.targetStage,n.currStage),n.targetStage===n.currStage&&(n.targetSub=Math.max(n.targetSub,n.currSub));var l=(0,h.calcCharPotential)(n.character,[n.currStage,n.currSub],[n.targetStage,n.targetSub]);l.buff.ATK=Math.round(100*l.buff.ATK)/100,l.buff.HP=Math.round(100*l.buff.HP)/100,n.result=l,r(n)}}}),n.createElement(P,{result:a.result,handleModalOpen:i(!0)})),n.createElement(p.p2,{title:e.characters.potential.helpModal.title,open:a.isHelpModalOpen,onClose:i(!1),content:e.characters.potential.helpModal.content,ariaLabelledby:"help-modal-title",ariaDescribedby:"help-modal-description"}))}}}]);
//# sourceMappingURL=component---src-pages-characters-potential-js-0b11285d4444203fdf24.js.map