"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[887],{69499:function(e,l,a){a.d(l,{Z:function(){return x}});var i=a(11355),n=a(82546),s=a(62435),t=Object.defineProperty,r=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,o=(e,l,a)=>l in e?t(e,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[l]=a;const u=e=>s.createElement("svg",((e,l)=>{for(var a in l||(l={}))c.call(l,a)&&o(e,a,l[a]);if(r)for(var a of r(l))d.call(l,a)&&o(e,a,l[a]);return e})({width:32,height:32,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),s.createElement("rect",{width:32,height:32,rx:16,fill:"#232538"}),s.createElement("path",{d:"m12 12 4 4m0 0 4-4m-4 4-4 4m4-4 4 4",stroke:"#9597B5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}));var m=a(86074),x=function(e){var l=e.visible,a=e.title,t=e.width,r=e.onClose,c=e.children,d=e.className;return(0,m.jsx)(i.u,{appear:!0,show:l,as:s.Fragment,children:(0,m.jsxs)(n.V,{open:l,onClose:r,className:"dialog",children:[(0,m.jsx)(i.u.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,m.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-25 opacity-100"})}),(0,m.jsx)("div",{className:"fixed inset-0 overflow-y-auto",children:(0,m.jsx)("div",{className:"panel-container flex min-h-full items-center justify-center p-4 text-center",children:(0,m.jsx)(i.u.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,m.jsxs)(n.V.Panel,{className:"dialog-panel transform overflow-hidden shadow-xl transition-all ".concat(null!=d?d:""),style:{width:t},children:[a&&(0,m.jsxs)(n.V.Title,{className:"dialog-title",children:[(0,m.jsxs)("span",{children:[a," "]}),(0,m.jsx)(u,{onClick:function(){r()}})]}),c]})})})})]})})}},48268:function(e,l,a){a.d(l,{y:function(){return d}});var i=a(97857),n=a.n(i),s=a(62435),t=a(61895),r=a(86074),c=function(e){var l=e.defaultValue,a=void 0===l?"-":l,i=e.value,n=e.defaultValueIncludeSuffix,c=void 0!==n&&n,d=e.displayDecimals,o=void 0===d?2:d,u=e.label,m=void 0===u?"":u,x=e.thousandSeparator,f=void 0===x||x,h=e.prefix,v=void 0===h?"":h,j=e.suffix,p=void 0===j?"":j,g=(0,s.useMemo)((function(){return null==i||""===i?c?"".concat(v||"").concat(a).concat(p||""):a:(0,t.dp)(i,o).display({thousandSeparator:f,prefix:v,suffix:p})}),[i,a,o,f,v,p]);return(0,r.jsxs)(r.Fragment,{children:[m,g]})},d=function(e){var l=e.separator,a=void 0===l?"/":l,i=e.values;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,n()({},i[0]||{})),a,(0,r.jsx)(c,n()({},i[1]||{}))]})};l.Z=c},96714:function(e,l,a){a.d(l,{P:function(){return n},m:function(){return i}});var i=function(e){if(!e)return"";var l,a=new Date(1e3*e);if(!((l=a)instanceof Date)||isNaN(+l))return"";var i=(null==a?void 0:a.getMonth())+1;return(i=(null==a?void 0:a.getMonth())>9?""+i:"0"+i)+"/"+((null==a?void 0:a.getDate())>9?null==a?void 0:a.getDate():"0"+(null==a?void 0:a.getDate()))+" "+((null==a?void 0:a.getHours())>9?null==a?void 0:a.getHours():"0"+(null==a?void 0:a.getHours()))+":"+((null==a?void 0:a.getMinutes())>9?null==a?void 0:a.getMinutes():"0"+(null==a?void 0:a.getMinutes()))},n="-"},29360:function(e,l,a){a.r(l),a.d(l,{default:function(){return R}});var i=a(62435),n=a(77438),s=a(98330),t="description___fdR5Q",r="rewards___Fi41_",c="header___jUxaC",d="title___BUw5W",o="subTitle___kgUk_",u="secondTitle___PrMHa",m="content___yFQIn",x=a(97857),f=a.n(x),h=a(5574),v=a.n(h),j=a(78621),p=a(34713),g=a(71230),N=a(15746),y=a(95591),_=a(56853),b=a(79369),M=a(87755),I=a(11289),w=a(74595),Z=a(69499),C=a(48268),S=a(13805),D=a(78575),P=a(96714),L=a(26977),B=a(61895),E={helper:"helper___LsDjS",fieldName:"fieldName___LqA7r",fieldValue:"fieldValue___MzLVZ",alignRight:"alignRight___CXQuE",btn:"btn___dBadl",primary:"primary___ZenXE"},T=a(86074),V=function(e){var l=e.account,a=e.onClose,t=e.isBuy,r=e.vault,c=(0,i.useState)(""),d=v()(c,2),o=d[0],u=d[1],m=(0,i.useState)(""),x=v()(m,2),f=x[0],h=x[1],y=(0,i.useState)(!1),b=v()(y,2),M=b[0],I=b[1],Z=(0,p.Ge)(),S=Z.chainId,P=Z.active,V=w.I.useContainer(),k=V.setPendingTxns,z=V.setWalletVisible,R=(0,i.useState)(!0),A=v()(R,2),G=A[0],H=A[1],U=(0,s.Z)().t,F=!t;(0,i.useEffect)((function(){if(G)return f?void _.a.changeReceive(r,t,f,(function(e){u(String(e))})):void u("");o?_.a.changePay(r,t,o,(function(e){h(String(e))})):h("")}),[G,f,o,t,r]),(0,i.useEffect)((function(){u(""),h("")}),[t]);var Q,W=function(){if(!P)return[(0,T.jsx)(j._H,{id:"Connect wallet"}),!1];if(!o||0==+o)return[(0,T.jsx)(j._H,{id:"Enter an amount"}),!0];if(!f||0==+f)return[(0,T.jsx)(j._H,{id:"Enter an amount"}),!0];var e=(0,B.Q6)(o);return t&&e.gt((0,B.Q6)(r.yourBlance))?[(0,T.jsx)(j._H,{id:"Insufficient USDC balance"}),!0]:!t&&e.gt((0,B.Q6)(r.yourStake))?[(0,T.jsx)(j._H,{id:"Insufficient BLP balance"}),!0]:M?[t?"Buying...":"Selling...",!0]:[t?"Buy BLP":"Sell BLP",!1]}(),O=v()(W,2),Y=O[0],X=O[1],$=(0,i.useMemo)((function(){return t?(0,B.dp)(null==r?void 0:r.yourBlance,D.C1).display({prefix:"",suffix:" USDC"}):(0,B.dp)(null==r?void 0:r.yourStake,D.nH).display({prefix:"",suffix:" BLP"})}),[t,r]),J=(0,i.useMemo)((function(){return t?(0,B.dp)(null==r?void 0:r.yourStake,D.nH).display({prefix:"",suffix:" BLP"}):(0,B.dp)(null==r?void 0:r.yourBlance,D.C1).display({prefix:"",suffix:" USDC"})}),[t,r]);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(L.gp,{symbol:F?"BLP":"USDC",onClickMaxBtn:function(){H(!1),u(F?(0,B.dp)(r.yourStake,D.nH).value:(0,B.dp)(r.yourBlance,D.C1).value)},decimals:F?D.nH:D.C1,value:o,onChange:function(e){H(!1),u(e)}}),(0,T.jsxs)(g.Z,{className:E.helper,children:[(0,T.jsxs)(N.Z,{span:12,className:E.fields,children:[(0,T.jsx)("span",{className:E.fieldName,children:U("Price")}),(0,T.jsx)("span",{className:E.fieldValue,children:(0,T.jsx)(C.Z,{value:null==r?void 0:r.BLPPrice,displayDecimals:D.C1,suffix:" USDC"})})]}),(0,T.jsxs)(N.Z,{span:12,className:"".concat(E.fields," ").concat(E.alignRight),children:[(0,T.jsx)("span",{className:E.fieldName,children:U(t?"Balance: ":"Available: ")}),(0,T.jsx)("span",{className:E.fieldValue,children:$})]})]}),(0,T.jsx)(L.mU,{decimals:t?D.nH:D.C1,symbol:F?"USDC":"BLP",onChange:function(e){H(!0),h(e)},value:f}),(0,T.jsxs)(g.Z,{className:E.helper,children:[(0,T.jsxs)(N.Z,{span:12,className:E.fields,children:[(0,T.jsx)("span",{className:E.fieldName,children:"Fees:"}),(0,T.jsx)("span",{className:E.fieldValue,children:(Q=t?null==r?void 0:r.buyFeeRate:null==r?void 0:r.sellFeeRate,(0,B.dp)((0,B.Q6)(Q).multipliedBy(100)).display({prefix:"",suffix:"%"}))})]}),(0,T.jsxs)(N.Z,{span:12,className:"".concat(E.fields," ").concat(E.alignRight),children:[(0,T.jsx)("span",{className:E.fieldName,children:U(t?"Available: ":"Balance: ")}),(0,T.jsx)("span",{className:E.fieldValue,children:J})]})]}),(0,T.jsx)(n.Z,{className:E.btn,size:"large",disabled:X,onClick:function(){P?l&&!M&&(I(!0),_.a.confirmSwap(k,S,r,Number(o),t,Number(f),l).then((function(e){a()})).finally((function(){I(!1)}))):z(!0)},children:Y})]})},k={title:"title___ksi2I",logo:"logo___T45HZ",item:"item___DcoR8",btn:"btn___B8UfR",primary:"primary___zb9la",head:"head___mj2xd",icon:"icon___dE_Dk",fieldValue:"fieldValue___ShnQ1",total:"total___G3YmX",fieldName:"fieldName___6ymvY",top:"top___RctlW",footer:"footer___zNIrU",left:"left___R1dZg",right:"right___p3SgQ",dialog:"dialog___cys2R",tab:"tab___OD7Q3",active:"active___hviTT",tabPanels:"tabPanels___zny3E",activeTab:"activeTab___J3Wxd",alignRight:"alignRight___qgopk",cell:"cell___BkSg7",yourRewards:"yourRewards___jPbM2",xsmt20:"xsmt20___SxujJ"},z=function(){var e=(0,i.useState)(!1),l=v()(e,2),a=l[0],t=l[1],r=(0,i.useState)("buy"),c=v()(r,2),d=c[0],o=c[1],u=w.I.useContainer().setWalletVisible,m=(0,p.Ge)(),x=m.library,h=m.account,L=m.chainId,B=m.active,E=(0,s.Z)().t,z=(0,y.ZP)([h,L],(function(){return _.a.getVault(x,h,L||S.rC)}),{refreshInterval:2400}),R=z.data,A=z.mutate;function G(){t(!0)}var H=function(e){o(e);var l=!1;"buy"==e&&(l=!0),A(f()(f()({},R),{},{isBuy:l}))};function U(e){return e?" ".concat(e):""}return(0,T.jsxs)("div",{className:k.BLPVault,children:[(0,T.jsxs)("div",{className:k.title,children:[(0,T.jsx)(I.r,{className:k.logo}),(0,T.jsx)("span",{children:E("BLP Vault")})]}),(0,T.jsxs)(g.Z,{gutter:24,children:[(0,T.jsx)(N.Z,{xs:24,sm:24,md:24,lg:12,xl:12,children:(0,T.jsxs)("div",{className:k.item,children:[(0,T.jsxs)("div",{className:k.top,children:[(0,T.jsxs)("div",{className:k.head,children:[(0,T.jsx)("div",{className:k.text,children:E("BLP Vault")}),(0,T.jsx)("img",{src:b.Z,className:k.icon})]}),(0,T.jsxs)(g.Z,{className:k.content,children:[(0,T.jsx)(N.Z,{xs:24,md:24,lg:10,className:k.cell,children:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)("div",{className:k.fieldValue,title:(null==R?void 0:R.totalSupply)||P.P,children:(0,T.jsx)("div",{className:k.total,children:(0,T.jsx)(C.Z,{displayDecimals:D.nH,value:null==R?void 0:R.totalSupply,suffix:U(null==R?void 0:R.supplySymbol)})})}),(0,T.jsx)("div",{className:k.fieldName,children:E("Total Supply")})]})}),(0,T.jsx)(N.Z,{xs:24,md:24,lg:9,className:k.cell,children:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)("div",{className:k.fieldValue,title:(null==R?void 0:R.totalAssets)||P.P,children:(0,T.jsx)("div",{className:k.total,children:(0,T.jsx)(C.Z,{value:null==R?void 0:R.totalAssets,displayDecimals:D.C1,suffix:U(null==R?void 0:R.assetSymbol)})})}),(0,T.jsx)("div",{className:k.fieldName,children:E("BLP Vault balance")})]})}),(0,T.jsxs)(N.Z,{lg:5,xs:24,md:24,className:"".concat(k.cell," ").concat(k.alignRight),children:[(0,T.jsx)("div",{className:k.fieldValue,children:(0,T.jsx)(C.Z,{value:null==R?void 0:R.APR,suffix:"%"})}),(0,T.jsx)("div",{className:k.fieldName,children:E("BLP Vault APR")})]})]})]}),(0,T.jsxs)(g.Z,{className:k.footer,children:[(0,T.jsx)(N.Z,{span:12,className:k.left,children:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)("div",{className:k.fieldValue,children:(0,T.jsx)(C.Z,{value:null==R?void 0:R.BLPPrice,suffix:U(null==R?void 0:R.assetSymbol),displayDecimals:D.C1})}),(0,T.jsx)("div",{className:k.fieldName,children:E("Price")})]})}),(0,T.jsx)(N.Z,{span:12,className:k.right,children:h&&B?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(n.Z,{className:k.btn,type:"primary",size:"middle",onClick:function(){o("buy"),G()},children:(0,T.jsx)(j._H,{id:"Buy"})}),(0,T.jsx)(n.Z,{className:k.btn,type:"c30",size:"middle",style:{marginLeft:12},onClick:function(){o("sell"),G()},children:(0,T.jsx)(j._H,{id:"Sell"})})]}):(0,T.jsx)(n.Z,{className:k.btn,type:"primary",size:"middle",onClick:function(){return u(!0)},children:(0,T.jsx)(j._H,{id:"ConnectWallet"})})})]})]})}),(0,T.jsx)(N.Z,{xs:24,sm:24,md:24,lg:12,xl:12,children:(0,T.jsxs)("div",{className:"".concat(k.item," ").concat(k.yourRewards),children:[(0,T.jsxs)("div",{className:k.top,children:[(0,T.jsxs)("div",{className:k.head,children:[(0,T.jsx)("div",{className:k.text,children:E("Your Rewards")}),(0,T.jsx)("img",{src:M.Z,className:k.icon})]}),(0,T.jsxs)(g.Z,{className:k.content,children:[(0,T.jsx)(N.Z,{lg:12,xs:24,className:k.cell,children:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)("div",{className:k.fieldValue,children:(0,T.jsx)(C.Z,{value:null==R?void 0:R.yourStake,displayDecimals:D.nH,suffix:U(null==R?void 0:R.supplySymbol)})}),(0,T.jsx)("div",{className:k.fieldName,children:E("Your stake")})]})}),(0,T.jsx)(N.Z,{lg:12,xs:24,className:"".concat(k.cell," ").concat(k.alignRight),children:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)("div",{className:"".concat(k.fieldValue," ").concat(k.xsmt20),children:(0,T.jsx)(C.Z,{value:null==R?void 0:R.rewarded,suffix:" USDC",displayDecimals:D.C1})}),(0,T.jsx)("div",{className:k.fieldName,children:E("rewarded")})]})})]})]}),(0,T.jsxs)(g.Z,{className:k.footer,children:[(0,T.jsx)(N.Z,{lg:10,xs:24,className:k.left,children:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)("div",{className:k.fieldValue,children:(0,T.jsx)(C.Z,{value:null==R?void 0:R.pendingRewards,suffix:" USDC",displayDecimals:D.C1})}),(0,T.jsx)("div",{className:k.fieldName,children:E("Pending rewards")})]})}),(0,T.jsx)(N.Z,{lg:14,xs:24,className:k.right,children:h&&B?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(n.Z,{type:"c30",onClick:function(){var e;null==R||null===(e=R.vaultReward)||void 0===e||e.calimLPReward()},className:k.btn,children:E("Harvest USDC")}),(0,T.jsx)(n.Z,{className:k.btn,style:{marginLeft:12},type:"c30",href:"#",children:E("Get Insurance")})]}):(0,T.jsx)(n.Z,{className:k.btn,type:"c30",size:"middle",onClick:function(){return u(!0)},children:(0,T.jsx)(j._H,{id:"ConnectWallet"})})})]})]})})]}),(0,T.jsxs)(Z.Z,{title:"Buy / Sell BLP",visible:a,className:k.dialog,onClose:function(){t(!1)},children:[(0,T.jsxs)(g.Z,{className:k.tab,children:[(0,T.jsx)(j.OL,{to:"#",onClick:function(){return H("buy")},className:function(){return"buy"===d?k.active:void 0},children:E("Buy")}),(0,T.jsx)(j.OL,{to:"#",onClick:function(){return H("sell")},className:function(){return"sell"===d?k.active:void 0},children:E("Sell")})]}),(0,T.jsx)("div",{className:k.tabPanels,children:(0,T.jsx)(V,{onClose:function(){return t(!1)},isBuy:"buy"===d,vault:R,account:h})})]})]})},R=function(){var e=(0,s.Z)().t;return(0,T.jsxs)("div",{className:r,children:[(0,T.jsxs)("div",{className:c,children:[(0,T.jsx)("div",{className:d,children:e("Rewards")}),(0,T.jsx)("div",{className:o,children:e("Stake USDC and earn rewards from fees generated on the BLEX.")})]}),(0,T.jsx)(z,{}),(0,T.jsxs)("div",{className:t,children:[(0,T.jsx)("div",{className:u,children:e("How do BLEX rewards work?")}),(0,T.jsxs)("p",{className:m,children:[e("The BLP Vault is the counter party to all trades on BLEX."),(0,T.jsx)("br",{})," ",e("BLEX Vault accrues 70% of the platform's generated fees. BLEX Foundation accrues 30% of the platform's generated fees.")]}),(0,T.jsx)(n.Z,{type:"border",href:"#",children:e("Learn More")})]})]})}},26977:function(e,l,a){a.d(l,{gp:function(){return u},tV:function(){return o},mU:function(){return m},ZP:function(){return x}});var i=a(97857),n=a.n(i),s=a(94184),t=a.n(s),r={input:"input___FmRXa",wrapper:"wrapper___FSDBG",var:"var___VCDiS",flex:"flex___gOhnV",max:"max___hao26"},c=a(86074),d=function(e){var l=e.label,a=e.symbolVar,i=e.children,n=e.disabled,s=e.className,d=e.decimals,o=void 0===d?18:d,u=e.onChange,m=e.value,x=e.max,f=function(e){if(u){var l=new RegExp("^\\D*(\\d*(?:\\.\\d{0,".concat(o,"})?).*$"),"g"),a=e.replace(l,"$1");x&&+a>+x&&(a=x),u(a)}};return(0,c.jsxs)("div",{className:t()(r.input,s),children:[l&&(0,c.jsx)("div",{className:r.label,children:l}),(0,c.jsxs)("div",{className:r.wrapper,children:[(0,c.jsx)("input",{type:"text",value:m,disabled:n,onChange:function(e){f(e.target.value)},placeholder:"0.0"}),a?(0,c.jsx)("div",{className:r.var,children:a}):i]})]})},o=function(e){return(0,c.jsx)(d,n()(n()({label:"Price"},e),{},{children:(0,c.jsx)("div",{className:r.var,children:"USD"})}))},u=function(e){var l=e.onClickMaxBtn,a=e.symbol;return(0,c.jsx)(d,n()(n()({label:"Pay"},e),{},{children:(0,c.jsxs)("div",{className:r.flex,children:[(0,c.jsx)("div",{className:r.max,onClick:l,children:"MAX"}),(0,c.jsx)("div",{className:r.var,children:null!=a?a:"USDC"})]})}))},m=function(e){return(0,c.jsx)(d,n()(n()({label:"Receive"},e),{},{children:(0,c.jsx)("div",{className:r.flex,children:(0,c.jsx)("div",{className:r.var,children:e.symbol})})}))},x=d},11289:function(e,l,a){a.d(l,{r:function(){return d}});var i=a(62435),n=Object.defineProperty,s=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,c=(e,l,a)=>l in e?n(e,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[l]=a;const d=e=>i.createElement("svg",((e,l)=>{for(var a in l||(l={}))t.call(l,a)&&c(e,a,l[a]);if(s)for(var a of s(l))r.call(l,a)&&c(e,a,l[a]);return e})({width:32,height:32,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),i.createElement("rect",{width:32,height:32,rx:16,fill:"url(#rewards_logo_svg__a)"}),i.createElement("rect",{width:32,height:32,rx:16,fill:"url(#rewards_logo_svg__b)"}),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.594 18.438a7.031 7.031 0 0 1-7.032 7.03V23.36a4.922 4.922 0 1 0-4.921-4.922H6.53a7.031 7.031 0 1 1 14.063 0Z",fill:"#fff"}),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24.035 19.703a10.515 10.515 0 0 1-3.014 6.192l-1.541-1.541a8.345 8.345 0 0 0 2.355-4.65h2.2Zm.075-1.222v-.087.087ZM12.298 7.966a10.516 10.516 0 0 0-6.193 3.014l1.542 1.541a8.344 8.344 0 0 1 4.65-2.356v-2.2ZM24.114 18.438c0-5.825-4.722-10.547-10.547-10.547h-.005v2.18h.005a8.367 8.367 0 0 1 8.367 8.367h2.18Z",fill:"#fff"}),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.563 4.375c7.766 0 14.062 6.296 14.062 14.063h-2.11c0-6.602-5.351-11.954-11.953-11.954V4.375Z",fill:"#fff"}),i.createElement("defs",null,i.createElement("linearGradient",{id:"rewards_logo_svg__a",x1:0,y1:0,x2:39.172,y2:10.86,gradientUnits:"userSpaceOnUse"},i.createElement("stop",{stopColor:"#3CEAAA"}),i.createElement("stop",{offset:.771,stopColor:"#5C72FF"})),i.createElement("linearGradient",{id:"rewards_logo_svg__b",x1:0,y1:0,x2:39.172,y2:10.86,gradientUnits:"userSpaceOnUse"},i.createElement("stop",{stopColor:"#3CEAAA"}),i.createElement("stop",{offset:.771,stopColor:"#5C72FF"}))));l.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iMTYiIGZpbGw9InVybCgjYSkiLz48cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHJ4PSIxNiIgZmlsbD0idXJsKCNiKSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjAuNTk0IDE4LjQzOGE3LjAzMSA3LjAzMSAwIDAgMS03LjAzMiA3LjAzVjIzLjM2YTQuOTIyIDQuOTIyIDAgMSAwLTQuOTIxLTQuOTIySDYuNTNhNy4wMzEgNy4wMzEgMCAxIDEgMTQuMDYzIDBaIiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC4wMzUgMTkuNzAzYTEwLjUxNSAxMC41MTUgMCAwIDEtMy4wMTQgNi4xOTJsLTEuNTQxLTEuNTQxYTguMzQ1IDguMzQ1IDAgMCAwIDIuMzU1LTQuNjVoMi4yWm0uMDc1LTEuMjIydi0uMDg3LjA4N1pNMTIuMjk4IDcuOTY2YTEwLjUxNiAxMC41MTYgMCAwIDAtNi4xOTMgMy4wMTRsMS41NDIgMS41NDFhOC4zNDQgOC4zNDQgMCAwIDEgNC42NS0yLjM1NnYtMi4yWk0yNC4xMTQgMTguNDM4YzAtNS44MjUtNC43MjItMTAuNTQ3LTEwLjU0Ny0xMC41NDdoLS4wMDV2Mi4xOGguMDA1YTguMzY3IDguMzY3IDAgMCAxIDguMzY3IDguMzY3aDIuMThaIiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy41NjMgNC4zNzVjNy43NjYgMCAxNC4wNjIgNi4yOTYgMTQuMDYyIDE0LjA2M2gtMi4xMWMwLTYuNjAyLTUuMzUxLTExLjk1NC0xMS45NTMtMTEuOTU0VjQuMzc1WiIgZmlsbD0iI2ZmZiIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAiIHkxPSIwIiB4Mj0iMzkuMTcyIiB5Mj0iMTAuODYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjM0NFQUFBIi8+PHN0b3Agb2Zmc2V0PSIuNzcxIiBzdG9wLWNvbG9yPSIjNUM3MkZGIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgxPSIwIiB5MT0iMCIgeDI9IjM5LjE3MiIgeTI9IjEwLjg2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzNDRUFBQSIvPjxzdG9wIG9mZnNldD0iLjc3MSIgc3RvcC1jb2xvcj0iIzVDNzJGRiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg=="},98082:function(e,l,a){var i=a(62435),n=a(31808);l.Z=()=>{const[e,l]=i.useState(!1);return i.useEffect((()=>{l((0,n.fk)())}),[]),e}},74443:function(e,l,a){a.d(l,{Z:function(){return t},c:function(){return s}});var i=a(62435),n=a(48012);const s=["xxl","xl","lg","md","sm","xs"];function t(){const[,e]=(0,n.dQ)(),l=(e=>({xs:`(max-width: ${e.screenXSMax}px)`,sm:`(min-width: ${e.screenSM}px)`,md:`(min-width: ${e.screenMD}px)`,lg:`(min-width: ${e.screenLG}px)`,xl:`(min-width: ${e.screenXL}px)`,xxl:`(min-width: ${e.screenXXL}px)`}))((e=>{const l=e,a=[].concat(s).reverse();return a.forEach(((e,i)=>{const n=e.toUpperCase(),s=`screen${n}Min`,t=`screen${n}`;if(!(l[s]<=l[t]))throw new Error(`${s}<=${t} fails : !(${l[s]}<=${l[t]})`);if(i<a.length-1){const e=`screen${n}Max`;if(!(l[t]<=l[e]))throw new Error(`${t}<=${e} fails : !(${l[t]}<=${l[e]})`);const s=`screen${a[i+1].toUpperCase()}Min`;if(!(l[e]<=l[s]))throw new Error(`${e}<=${s} fails : !(${l[e]}<=${l[s]})`)}})),e})(e));return i.useMemo((()=>{const e=new Map;let a=-1,i={};return{matchHandlers:{},dispatch(l){return i=l,e.forEach((e=>e(i))),e.size>=1},subscribe(l){return e.size||this.register(),a+=1,e.set(a,l),l(i),a},unsubscribe(l){e.delete(l),e.size||this.unregister()},unregister(){Object.keys(l).forEach((e=>{const a=l[e],i=this.matchHandlers[a];null==i||i.mql.removeListener(null==i?void 0:i.listener)})),e.clear()},register(){Object.keys(l).forEach((e=>{const a=l[e],n=l=>{let{matches:a}=l;this.dispatch(Object.assign(Object.assign({},i),{[e]:a}))},s=window.matchMedia(a);s.addListener(n),this.matchHandlers[a]={mql:s,listener:n},n(s)}))},responsiveMap:l}}),[e])}},31808:function(e,l,a){a.d(l,{fk:function(){return t},jD:function(){return n}});var i=a(98924);const n=()=>(0,i.Z)()&&window.document.documentElement;let s;const t=()=>{if(!n())return!1;if(void 0!==s)return s;const e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),s=1===e.scrollHeight,document.body.removeChild(e),s}}}]);