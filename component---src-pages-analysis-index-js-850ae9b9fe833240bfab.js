(self.webpackChunktkfmtools=self.webpackChunktkfmtools||[]).push([[781],{50033:function(e,n,a){"use strict";var t=a(50009).ZP.div.withConfig({displayName:"Scrollable",componentId:"sc-1ueymsi-0"})(["overflow:auto;height:100%;scrollbar-width:thin;padding-right:0.5rem;margin-right:-0.5rem;&::-webkit-scrollbar{width:0.4rem;height:0.4rem;background:",";}&::-webkit-scrollbar-thumb{background:",";border-radius:0.25rem;}&::-webkit-scrollbar-track{background:",";}&::-webkit-scrollbar-corner{background:",";}"],(e=>e.theme.colors.surface),(e=>e.theme.colors.border),(e=>e.theme.colors.surface),(e=>e.theme.colors.surface));n.Z=t},18572:function(e,n,a){var t=a(33246),r=["id"],i=a(68912).reduce(((e,n)=>{var{id:a}=n,i=t(n,r);return e[a]=i,e}),{});e.exports=i},37245:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return K}});var t=a(67294),r=a(50009),i=a(83332),l=a(80838),s=a(1446),o=a(29748),d=a(44961),p=a(47378),u=a(93175),c=a(50190),m=a(60773),f=a(25072),b=a(22727),h=a(28437),g=a(79520),k=a(22776),y=a(59969),v=a.n(y),C=a(68912).reduce(((e,n,a)=>(e[n.tags.position-5].push({id:n.id,ind:a}),e)),[...Array(5)].map((e=>[]))),E=e=>{var{index:n}=e,{pageString:a,charString:r}=(0,d.f)(),{currentLineup:i,actions:l}=(0,o.H)(),{setCurrentLineup:p}=l,u=i[n],c=(0,t.useCallback)((e=>{var a=Array.from(i);a[n]=Object.assign({},e,v()(e),{owned:0!==e.level}),p(a)}),[i[n],p]),{selectItems:f,setSelect:b,setCharState:h}=(0,s.Z)(u,c);(0,t.useEffect)((()=>{h(u)}),[u]);var g=(0,t.useCallback)((()=>{var e=Array.from(i);e[n].owned=!e[n].owned,p(e)}),[i[n],p]),k=(0,t.useCallback)((e=>n=>{b(e,parseInt(n.target.value))}),[b]),y=(0,t.useCallback)((e=>()=>{b("potentialSub",e)}),[b]);return t.createElement(H,{item:!0,xs:10,sm:6,md:5,lg:4},t.createElement(B,{onClick:g,$owned:u.owned,disableRipple:!0,disableFocusRipple:!0},t.createElement(J,{name:"char_small_"+u.id,alt:r.name[u.id]})),t.createElement(P,{container:!0,spacing:1},t.createElement(S,{item:!0,xs:6},t.createElement(w,{label:a.analysis.index.levelTitle,value:u.level,onChange:k("level"),disabled:!u.owned,variant:"outlined",size:"small",margin:"dense"})),t.createElement(S,{item:!0,xs:6},t.createElement(A,{label:a.analysis.index.disciplineTitle,values:f.discipline.values,value:"4"===u.id[0]?"-":u.discipline,onChange:k("discipline"),disabled:!u.owned||"4"===u.id[0],margin:"dense"})),t.createElement(S,{item:!0,xs:6},t.createElement(A,{label:a.analysis.index.starTitle,values:f.star.values,value:u.star,onChange:k("star"),disabled:!u.owned,margin:"dense"})),t.createElement(S,{item:!0,xs:6},t.createElement(m.Z,{charId:u.id,label:a.analysis.index.potentialTitle,values:f.potential.values,mainValue:u.potential,subValue:u.potentialSub,onMainChange:k("potential"),onSubChange:y,disabled:!u.owned,margin:"dense"}))))},H=(0,r.ZP)(l.Z).withConfig({displayName:"analysis__StyledCharContainer",componentId:"sc-3odedp-0"})(["display:flex;flex-direction:row;margin-bottom:2rem;margin-right:2rem;&&{max-width:30rem;}"]),B=(0,r.ZP)(i.Z).withConfig({displayName:"analysis__CharImgWrapper",componentId:"sc-3odedp-1"})([""," &&{transition:filter 0.1s ease;}"],(e=>e.$owned?null:"filter: grayscale(100%);")),J=(0,r.ZP)(u.Z).withConfig({displayName:"analysis__CharImg",componentId:"sc-3odedp-2"})(["width:7rem;height:7rem;"]),w=(0,r.ZP)(c.Z).withConfig({displayName:"analysis__LevelInput",componentId:"sc-3odedp-3"})(["&&{input{padding:0.6rem 1rem;}color:",";}"],(e=>e.disabled?e.theme.colors.dropdownHover:"inherit")),A=(0,r.ZP)(c.P).withConfig({displayName:"analysis__StyledSelect",componentId:"sc-3odedp-4"})(["&&{width:100%;> div > div{padding:0.6rem 1rem;padding-right:2rem;color:",";}svg{fill:",";}}"],(e=>e.disabled?e.theme.colors.dropdownHover:"inherit"),(e=>e.disabled?e.theme.colors.dropdownHover:e.theme.colors.onSurface)),P=(0,r.ZP)(l.Z).withConfig({displayName:"analysis__SelectGrid",componentId:"sc-3odedp-5"})(["align-content:center;"]),S=(0,r.ZP)(l.Z).withConfig({displayName:"analysis__SelectWrapper",componentId:"sc-3odedp-6"})(["height:40%;"]),O=e=>{var{handleData:n,handleModalOpen:a}=e,{pageString:r}=(0,d.f)();return t.createElement(x,null,t.createElement(b.ZP,{onClick:n("save"),tooltipText:r.analysis.index.saveButton},h.N),t.createElement(b.ZP,{onClick:a,tooltipText:r.analysis.index.loadButton},h.Tl))},x=r.ZP.div.withConfig({displayName:"analysis__DataButtonContainer",componentId:"sc-3odedp-7"})(["position:absolute;right:0;top:-4rem;margin-bottom:0;> span:last-child button{margin:0;}"]),M=e=>{var{handleData:n}=e,{pageString:a}=(0,d.f)(),{localLineups:r}=(0,o.H)();return r?r.map(((e,r)=>t.createElement(f.ZP,{title:e.date,end:t.createElement(t.Fragment,null,t.createElement(b.ZP,{onClick:n("load",r),tooltipText:a.analysis.index.loadButton},h.Tl),t.createElement(b.ZP,{onClick:n("delete",r),tooltipText:a.analysis.index.deleteButton},h.pJ)),key:r}))):null},Z=r.ZP.div.withConfig({displayName:"analysis__CharGroupsContainer",componentId:"sc-3odedp-8"})(["width:100%;> div:nth-child(even) > div > span{display:flex;align-items:center;margin-bottom:0.4rem;}> div:nth-child(2) > div{width:100%;justify-content:space-between;}"]),N=(0,r.ZP)(u.Z).withConfig({displayName:"analysis__PositionImgWrapper",componentId:"sc-3odedp-9"})(["width:2rem;margin-right:0.2rem;"]),K=()=>{var{pageString:e,charString:n}=(0,d.f)(),{currentLineup:a,actions:r}=(0,o.H)(),{pushLineup:i,getLineup:s,deleteLineup:u,setCurrentLineup:c}=r,{0:m,1:b}=(0,t.useState)({isDataModalOpen:!1,isHelpModalOpen:!1,isSuccessSnackbarOpen:!1,isErrorSnackbarOpen:!1}),h=(e,n)=>()=>{switch(e){case"save":if(i(a,{firebase:!0}))return void b((e=>Object.assign({},e,{isSuccessSnackbarOpen:!0})));case"load":var t=s(n);if(t)return b((e=>Object.assign({},e,{isSuccessSnackbarOpen:!0,isDataModalOpen:!1}))),void c(t);case"delete":if(u(n))return void b((e=>Object.assign({},e,{isDataModalOpen:!0})))}b((e=>Object.assign({},e,{isErrorSnackbarOpen:!0})))},y=e=>()=>{b((n=>Object.assign({},n,{isDataModalOpen:e})))},v=e=>()=>{b((n=>Object.assign({},n,{isHelpModalOpen:e})))},H=["attacker","defender","healer","obsructer","supporter"];return t.createElement(Z,null,t.createElement(p.Z,{title:e.analysis.index.helmet.title,description:e.analysis.index.helmet.description,path:"/analysis/"}),t.createElement(O,{handleData:h,handleModalOpen:y(!0)}),C.map(((e,a)=>t.createElement(t.Fragment,{key:a},t.createElement(f.ZP,{title:n.tags[a+5],titleIcon:t.createElement(N,{name:"ui_"+H[a],alt:""}),withHelp:0===a,onClickHelp:v(!0),border:!0}),t.createElement(l.Z,{container:!0,spacing:2},e.map((e=>t.createElement(E,{index:e.ind,key:e.id}))))))),t.createElement(g.Z,{open:m.isSuccessSnackbarOpen,onClose:()=>{b((e=>Object.assign({},e,{isSuccessSnackbarOpen:!1})))},message:e.analysis.index.successMsg,type:"success"}),t.createElement(g.Z,{open:m.isErrorSnackbarOpen,onClose:()=>{b((e=>Object.assign({},e,{isErrorSnackbarOpen:!1})))},message:e.analysis.index.errorMsg,type:"error"}),t.createElement(k.WQ,{title:e.analysis.index.modalTitle,open:m.isDataModalOpen,onClose:y(!1),ariaLabelledby:"data-operation-modal-title",ariaDescribedby:"data-operation-modal-description"},t.createElement(M,{handleData:h})),t.createElement(k.p2,{title:e.analysis.index.helpModal.title,content:e.analysis.index.helpModal.content,open:m.isHelpModalOpen,onClose:v(!1),ariaLabelledby:"help-modal-title",ariaDescribedby:"help-modal-description"}))}},59969:function(e,n,a){var t=a(68912),r=a(83803),i=(e,n,a,i)=>{var l={items:{},money:0,buff:{ATK:0,HP:0,PASSIVE:0}};if(n[0]>a[0])return l;for(var s="nr"===e||"4"===e[0]||"3"===e[0]?3:void 0!==i?i:t.find((n=>n.id===e)).potentialType,o=r.type[s],d=n[0]-1;d<a[0]-1+1;d++)for(var p=o[d],u=d===n[0]-1?n[1]-1:0;u<(d===a[0]-1?a[1]:6);u++)if(!(u<0)){var c=p.pattern[u]+p.rank[u];l.items[c]?l.items[c]+=p.num[u]:l.items[c]=p.num[u],l.money+=8e3*(d+1);var m=r.itemMap[p.pattern[u]].type;l.buff[m]+=p.buff[u]}var f={},b=function(e,n){var a=r.itemMap[e[0]].id.map((n=>"9"===e[1]?"902":"8"===e[1]?"901":(100*parseInt(e[1])+n).toString()));for(var t of a)f[t]?f[t]+=n:f[t]=n};for(var[h,g]of Object.entries(l.items))b(h,g);return l.items=f,l};e.exports=e=>{var{id:n,level:a,potential:r,potentialSub:l,discipline:s,star:o}=e,d=t.find((e=>e.id===n));if(!d)throw new Error("invalid character id: "+n);if(("3"===n[0]||"4"===n[0])&&r>6)throw new Error("invalid potential: "+r);if("4"===n[0]&&+s>0)throw new Error("invalid discipline: "+s);var{initATK:p,initHP:u}=d.stats,c=1.1**(a-1),m=l;"object"!=typeof l&&(m=[...Array(6).keys()].map((e=>e<l)));var f=m.reduce(((e,a,t)=>{if(a){var l=i(n,[r,t+1],[r,t+1]).buff;e.ATK+=l.ATK,e.HP+=l.HP}return e}),i(n,[1,0],[r-1,6]).buff),b=1+(isNaN(parseInt(s))?0:+s*(+s+1)*.025),h=(o+5)/(9-n[0]);return{ATK:Math.floor(p*c*(1+f.ATK/100)*b*h),HP:Math.floor(u*c*(1+f.HP/100)*b*h)}},e.exports.calcCharPotential=i},83803:function(e){"use strict";e.exports=JSON.parse('{"type":[[{"pattern":["B","B","J","J","J","J"],"num":[1,2,2,2,2,1],"rank":[1,1,1,1,1,1],"buff":[2,2,3,3,3,3]},{"pattern":["B","B","J","J","J","J"],"num":[2,2,2,3,2,3],"rank":[1,1,1,1,1,1],"buff":[2,2,3.5,3.5,3.5,3.5]},{"pattern":["B","B","B","B","J","J"],"num":[1,1,1,1,2,2],"rank":[2,2,2,2,2,2],"buff":[2,2,2,2,3.5,3.5]},{"pattern":["B","B","B","J","J","J"],"num":[2,1,1,3,3,3],"rank":[2,2,2,2,2,2],"buff":[2,2,2,3.5,3.5,3.5]},{"pattern":["B","B","B","J","J","J"],"num":[1,1,2,4,4,4],"rank":[3,2,2,2,2,2],"buff":[2,2,2,3.5,3.5,3.5]},{"pattern":["P","B","B","B","J","J"],"num":[1,2,1,2,4,4],"rank":[9,3,3,3,3,3],"buff":[1,2,2,2,3.5,3.5]},{"pattern":["B","B","B","B","J","J"],"num":[2,3,2,2,4,4],"rank":[3,3,3,3,3,3],"buff":[2.5,2.5,2.5,2.5,3.5,3.5]},{"pattern":["B","B","B","B","J","J"],"num":[2,2,3,2,4,4],"rank":[3,3,3,3,3,3],"buff":[2.5,2.5,2.5,2.5,3.5,3.5]},{"pattern":["E","E","E","E","M","M"],"num":[2,3,3,2,5,5],"rank":[4,4,4,4,4,4],"buff":[2.5,2.5,2.5,2.5,3.5,3.5]},{"pattern":["G","G","G","G","N","N"],"num":[3,2,2,3,6,6],"rank":[4,4,4,4,4,4],"buff":[3,3,3,3,3.5,3.5]},{"pattern":["E","E","E","E","M","M"],"num":[1,1,1,1,1,1],"rank":[5,5,5,5,5,5],"buff":[3,3,3,3,3.5,3.5]},{"pattern":["P","G","G","G","G","N"],"num":[2,1,1,1,1,1],"rank":[9,5,5,5,5,5],"buff":[2,3,3,3,3,4]}],[{"pattern":["J","J","B","B","B","B"],"num":[1,2,2,2,2,1],"rank":[1,1,1,1,1,1],"buff":[2,2,3,3,3,3]},{"pattern":["J","J","B","B","B","B"],"num":[2,2,2,3,2,3],"rank":[1,1,1,1,1,1],"buff":[2,2,3.5,3.5,3.5,3.5]},{"pattern":["J","J","J","J","B","B"],"num":[1,1,1,1,2,2],"rank":[2,2,2,2,2,2],"buff":[2,2,2,2,3.5,3.5]},{"pattern":["J","J","J","B","B","B"],"num":[2,1,1,3,3,3],"rank":[2,2,2,2,2,2],"buff":[2,2,2,3.5,3.5,3.5]},{"pattern":["J","J","J","B","B","B"],"num":[1,1,2,4,4,4],"rank":[3,2,2,2,2,2],"buff":[2,2,2,3.5,3.5,3.5]},{"pattern":["P","J","J","J","B","B"],"num":[1,2,1,2,4,4],"rank":[9,3,3,3,3,3],"buff":[1,2,2,2,3.5,3.5]},{"pattern":["J","J","J","J","B","B"],"num":[2,3,2,2,4,4],"rank":[3,3,3,3,3,3],"buff":[2.5,2.5,2.5,2.5,3.5,3.5]},{"pattern":["J","J","J","J","B","B"],"num":[2,2,3,2,4,4],"rank":[3,3,3,3,3,3],"buff":[2.5,2.5,2.5,2.5,3.5,3.5]},{"pattern":["M","M","M","M","E","E"],"num":[2,3,3,2,5,5],"rank":[4,4,4,4,4,4],"buff":[2.5,2.5,2.5,2.5,3.5,3.5]},{"pattern":["N","N","N","N","G","G"],"num":[3,2,2,3,6,6],"rank":[4,4,4,4,4,4],"buff":[3,3,3,3,3.5,3.5]},{"pattern":["M","M","M","M","E","E"],"num":[1,1,1,1,1,1],"rank":[5,5,5,5,5,5],"buff":[3,3,3,3,3.5,3.5]},{"pattern":["P","N","N","N","N","G"],"num":[2,1,1,1,1,1],"rank":[9,5,5,5,5,5],"buff":[2,3,3,3,3,4]}],[{"pattern":["A","A","A","A","A","A"],"num":[2,2,2,2,2,2],"rank":[1,1,1,1,1,1],"buff":[2.75,2.75,2.75,2.75,2.75,2.75]},{"pattern":["H","H","H","H","H","H"],"num":[2,2,2,2,2,2],"rank":[1,1,1,1,1,1],"buff":[2.75,2.75,2.75,2.75,2.75,2.75]},{"pattern":["A","H","A","H","A","H"],"num":[3,2,1,1,1,1],"rank":[2,2,2,2,2,2],"buff":[2.75,2.75,2.75,2.75,2.75,2.75]},{"pattern":["H","A","A","A","A","A"],"num":[3,3,3,2,2,2],"rank":[2,2,2,2,2,2],"buff":[2.75,2.75,2.75,2.75,2.75,2.75]},{"pattern":["C","H","H","H","H","H"],"num":[3,3,3,2,2,2],"rank":[3,2,2,2,2,2],"buff":[2.75,2.75,2.75,2.75,2.75,2.75]},{"pattern":["P","K","C","K","C","K"],"num":[1,3,2,2,2,2],"rank":[9,3,3,3,3,3],"buff":[1,2.75,2.75,2.75,2.75,2.75]},{"pattern":["C","K","C","K","C","K"],"num":[2,2,3,3,3,3],"rank":[3,3,3,3,3,3],"buff":[2.75,2.75,2.75,2.75,2.75,3]},{"pattern":["C","K","C","K","C","K"],"num":[3,3,3,3,3,3],"rank":[3,3,3,3,3,3],"buff":[3,3,3,3,3,3]},{"pattern":["D","L","D","L","D","L"],"num":[4,4,3,3,3,3],"rank":[4,4,4,4,4,4],"buff":[3,3,3,3,3,3]},{"pattern":["F","O","F","O","F","O"],"num":[4,4,4,4,3,3],"rank":[4,4,4,4,4,4],"buff":[3,3,3,3,3,3]},{"pattern":["D","L","D","L","D","L"],"num":[1,1,1,1,1,1],"rank":[5,5,5,5,5,5],"buff":[3,3,3,3,3,3]},{"pattern":["P","F","F","O","F","O"],"num":[2,1,1,1,1,1],"rank":[9,5,5,5,5,5],"buff":[2,3,3,3,3,3]}],[{"pattern":["A","A","A","A","A","A"],"num":[2,2,2,2,2,2],"rank":[1,1,1,1,1,1],"buff":[2.75,2.75,2.75,2.75,3,3]},{"pattern":["H","H","H","H","H","H"],"num":[2,2,2,2,2,2],"rank":[1,1,1,1,1,1],"buff":[2.75,2.75,2.75,2.75,3,3]},{"pattern":["P","H","A","H","A","H"],"num":[5,2,1,1,1,1],"rank":[8,2,2,2,2,2],"buff":[1,3,3,3,3,3]},{"pattern":["A","A","A","A","A","A"],"num":[3,3,3,2,2,2],"rank":[2,2,2,2,2,2],"buff":[3,3,3,3,3,3]},{"pattern":["H","H","H","H","H","H"],"num":[3,3,3,2,2,2],"rank":[2,2,2,2,2,2],"buff":[3,3,3,3,3,3]},{"pattern":["P","C","K","C","K","C"],"num":[10,3,3,2,2,2],"rank":[8,3,3,3,3,3],"buff":[2,3,3,3,3,3]}]],"itemMap":{"A":{"id":[1,3],"type":"ATK"},"B":{"id":[1,5],"type":"ATK"},"C":{"id":[3,5],"type":"ATK"},"D":{"id":[1,3],"type":"ATK"},"E":{"id":[1,5],"type":"ATK"},"F":{"id":[8,10],"type":"ATK"},"G":{"id":[6,10],"type":"ATK"},"H":{"id":[2,3],"type":"HP"},"J":{"id":[2,4],"type":"HP"},"K":{"id":[3,4],"type":"HP"},"L":{"id":[2,3],"type":"HP"},"M":{"id":[2,4],"type":"HP"},"N":{"id":[7,9],"type":"HP"},"O":{"id":[8,9],"type":"HP"},"P":{"id":[1],"type":"PASSIVE"}}}')}}]);
//# sourceMappingURL=component---src-pages-analysis-index-js-850ae9b9fe833240bfab.js.map