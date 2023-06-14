"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[65],{40206:function(e,t,n){n.r(t),n.d(t,{default:function(){return Se}});var r=n(17061),a=n.n(r),s=n(17156),i=n.n(s),o=n(27424),l=n.n(o),c=n(62435),u=n(4480),d=n(42122),m=n.n(d),v=n(15643),f=n(61895),p=n(24069),h=n(28722),_=function(){var e=(new Date).getTime(),t=(e-864e5).toString().substring(0,10);return{to:e.toString().substring(0,10),from:t}},x=function(){var e=i()(a()().mark((function e(t){var n,r,s,i,o,l,c,u,d;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=_(),n.to,r=n.from,s='\n  query MyQuery {\n    summaries24h: summaries(where:{id_gte:"hourly:'.concat(r,'", period: "hourly"}){\n      openInterest\n      trades\n      tradingVolume\n      uniqueUsers\n      tradingLPVolume\n    }\n    summariesTotal: summaries(where:{period: "total"}){\n      openInterest\n      trades\n      tradingVolume\n      tradingLPVolume\n      uniqueUsers\n    }\n  }\n '),i=(0,h.x7)(t),e.next=5,(0,h.Dw)(i,s);case 5:return o=e.sent,l=o.summariesTotal,c=o.summaries24h,u=g(c||[]),d=g(l),e.abrupt("return",m()({openInterestTotal:null==d?void 0:d.openInterest,tradesTotal:null==d?void 0:d.trades,tradingVolumeTotal:null==d?void 0:d.tradingVolume,uniqueUsersTotal:null==d?void 0:d.uniqueUsers},u));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t,n=null==e?void 0:e.reduce((function(e,t){var n,r,a=t.tradingVolume,s=t.tradingLPVolume,i=null===(n=e.tradingVolume)||void 0===n?void 0:n.plus((0,f.Q6)((0,p.dN)((0,p._b)(a||"0"),18))).plus((0,f.Q6)((0,p.dN)((0,p._b)(s||"0"),6)));return e.openInterest=e.openInterest.add((0,p._b)(t.openInterest)),e.trades+=t.trades,e.tradingVolume=i,e.uniqueUsers+=null!==(r=null==t?void 0:t.uniqueUsers)&&void 0!==r?r:0,e}),{openInterest:(0,p._b)(0),trades:0,tradingVolume:(0,f.Q6)(0),uniqueUsers:0});return n?{openInterest:(0,p.dN)(null==n?void 0:n.openInterest,18),trades:null==n?void 0:n.trades,tradingVolume:(null===(t=n.tradingVolume)||void 0===t?void 0:t.toFixed(2,1))||"0",uniqueUsers:null==n?void 0:n.uniqueUsers}:n},y=function(){var e=i()(a()().mark((function e(t,n){var r,s,i,o,l,c,u,d,f,p,x,y,Z;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=_(),r.to,s=r.from,i='marketInfos(where:{id_gte:"hourly:'.concat(s,'", period: "hourly"})\n  {\n    openInterest\n    period\n    trades\n    tradingVolume\n    market\n    id\n  }'),'totalOpenInterest: marketInfos(where:{period: "weekly"})\n      {\n      openInterest\n      market\n      }\n    ',o="query MyQuery {\n    ".concat(i,"\n    ").concat('totalOpenInterest: marketInfos(where:{period: "weekly"})\n      {\n      openInterest\n      market\n      }\n    ',"\n  }"),l=(0,h.x7)(n),e.next=7,(0,h.Dw)(l,o);case 7:return c=e.sent,u=c.marketInfos,d=c.totalOpenInterest,f=(0,v.Z)(u,"market"),p=(0,v.Z)(d,"market"),x={name:"ETH",key:"Ethereum",coinName:"ETH",logo:"ETH"},y={ETH:"Ethereum",BTC:"Bitcoin"},Z=null==t?void 0:t.map((function(e){var t,n=e.name.split("/")[0]||"";return m()(m()(m()({},x),g(f[e.address.toLowerCase()])),{},{name:n,coinName:n,logo:e.name,marketName:y[n],openInterest:null===(t=g(p[e.address.toLowerCase()]))||void 0===t?void 0:t.openInterest})})),e.abrupt("return",Z);case 16:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Z=n(28469),j=n(37432),w=n(98330),b=n(22537),N=n(239),C=n(41519),I=(0,u.cn)({key:"marketInfosAtom",default:[],effects_UNSTABLE:[C.I]}),k=(0,u.cn)({key:"bannerInfoAtom",default:void 0,effects_UNSTABLE:[C.I]}),E="overview___Eeiei",O="header____Yrjj",S="title___i6w1f",M="welcome___Onf4q",T=Object.defineProperty,U=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,H=(e,t,n)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const F=e=>c.createElement("svg",((e,t)=>{for(var n in t||(t={}))V.call(t,n)&&H(e,n,t[n]);if(U)for(var n of U(t))P.call(t,n)&&H(e,n,t[n]);return e})({width:200,height:200,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M100 45H42.203C18.895 45 0 24.853 0 0h57.797C81.106 0 100 20.148 100 45ZM42.203 50H100c0 24.853-18.895 45-42.203 45H0c0-24.852 18.895-45 42.203-45Zm57.797 45h57.798C181.105 95 200 74.852 200 50h-57.798c-23.307 0-42.202 20.148-42.202 45ZM200 45h-57.798C118.895 45 100 24.853 100 0h57.798C181.105 0 200 20.148 200 45ZM42.202 155C18.895 155 0 175.147 0 200h57.797C81.106 200 100 179.852 100 155H42.203ZM100 150.001H42.203c-23.308 0-42.203-20.148-42.203-45h57.797c23.308 0 42.203 20.147 42.203 45ZM100 200h57.798C181.105 200 200 179.852 200 155h-57.798C118.895 155 100 175.147 100 200Zm0-94.999h57.798c23.307 0 42.202 20.147 42.202 45h-57.798c-23.307 0-42.202-20.148-42.202-45Z",fill:"url(#banner_logo_svg__a)",style:{mixBlendMode:"multiply"},opacity:.2}),c.createElement("defs",null,c.createElement("linearGradient",{id:"banner_logo_svg__a",x1:0,y1:-12.5,x2:200,y2:200,gradientUnits:"userSpaceOnUse"},c.createElement("stop",{stopColor:"#F2E6CF"}),c.createElement("stop",{offset:1,stopColor:"#B5884A"}))));var A=Object.defineProperty,R=Object.getOwnPropertySymbols,q=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,L=(e,t,n)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const B=e=>c.createElement("svg",((e,t)=>{for(var n in t||(t={}))q.call(t,n)&&L(e,n,t[n]);if(R)for(var n of R(t))z.call(t,n)&&L(e,n,t[n]);return e})({width:100,height:100,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M50 22.5H21.101C9.448 22.5 0 12.426 0 0h28.899C40.553 0 50 10.074 50 22.5ZM21.101 25H50c0 12.426-9.447 22.5-21.101 22.5H0C0 35.073 9.447 25 21.101 25ZM50 47.5h28.899C90.552 47.5 100 37.426 100 25H71.101C59.447 25 50 35.073 50 47.5Zm50-25H71.101C59.447 22.5 50 12.426 50 0h28.899C90.552 0 100 10.074 100 22.5Zm-78.899 55C9.448 77.5 0 87.574 0 100h28.899C40.553 100 50 89.926 50 77.5H21.101ZM50 75H21.101C9.448 75 0 64.927 0 52.5h28.899C40.553 52.5 50 62.574 50 75Zm0 25h28.899C90.552 100 100 89.926 100 77.5H71.101C59.447 77.5 50 87.574 50 100Zm0-47.5h28.899C90.552 52.5 100 62.574 100 75H71.101C59.447 75 50 64.927 50 52.5Z",fill:"#B5884A",opacity:.2}));var D=n(74595),J="banner___oOBkY",$="logo___lRdUn",G="statList___DgXJu",Q="statInfo___rRaIr",W="title___qD2Se",X="amount___oAiPx",Y="desc___kJh0S",K=n(86074),ee=function(e){var t=e.title,n=e.desc,r=e.amount,a=e.text;return(0,K.jsxs)("div",{className:Q,children:[(0,K.jsx)("div",{className:W,children:t}),r?(0,K.jsxs)("div",{className:X,children:["$".concat(r)," "]}):(0,K.jsx)(K.Fragment,{}),a?(0,K.jsx)("div",{className:X,children:a}):(0,K.jsx)(K.Fragment,{}),(0,K.jsxs)("div",{className:Y,children:[n," "]})]})},te=function(e){var t,n,r,a=e.info,s=(0,w.Z)().t,i=D.I.useContainer().isMobile,o=(0,f.dp)(null==a?void 0:a.openInterest);return(0,K.jsxs)("div",{className:J,children:[i?(0,K.jsx)(B,{className:$}):(0,K.jsx)(F,{className:$}),(0,K.jsxs)("div",{className:G,children:[(0,K.jsx)(ee,{title:s("Trading Volume"),amount:(0,f.dp)(null==a?void 0:a.tradingVolumeTotal).display({prefix:""}),desc:"".concat((0,f.dp)(null==a?void 0:a.tradingVolume).display({prefix:"+$"})," ").concat(s("in the last 24h"))}),(0,K.jsx)(ee,{title:s("Trades"),text:null!==(t=null==a||null===(n=a.tradesTotal)||void 0===n?void 0:n.toString())&&void 0!==t?t:"-",desc:"+".concat(null!==(r=null==a?void 0:a.trades)&&void 0!==r?r:"-"," ").concat(s("in the last 24h"))}),(0,K.jsx)(ee,{title:s("Open Interest"),amount:(0,f.dp)(null==a?void 0:a.openInterestTotal).display({prefix:""}),desc:"".concat(o.display({prefix:o.number.lt(0)?"$":"+$"})," ").concat(s("in the last 24h"))})]})]})},ne=n(75081),re=n(3410),ae=n(94320),se=n(48268),ie=n(67390),oe=n(36493),le="table___J3lm8",ce="marketSituationPanel___l_1QO",ue="loadingContainer___dHRWS",de="coinNameBox___gX9IN",me="coinName___YSs6X",ve="marketName___aKkCt",fe="up___xF4SL",pe="down___M1zxR",he=function(e){var t=D.I.useContainer().isMobile,n=(0,u.sJ)(N.O7),r=e.marketInfo,a=(0,w.Z)().t,s=[{title:a("Market"),dataIndex:"coinName",key:"coinName",render:function(e,t){var n=ie.c[t.logo];return(0,K.jsxs)("div",{className:de,children:[(0,K.jsx)(n,{}),(0,K.jsx)("span",{className:me,children:t.coinName}),(0,K.jsx)("span",{className:ve,children:t.marketName})]})}},{title:a("indexPrice"),render:function(e,t){var r,a,s=null===(r=n[null===(a=(0,oe.do)(t.name))||void 0===a?void 0:a.toLowerCase()])||void 0===r?void 0:r.indexPrice;return(0,K.jsx)(se.Z,{value:s,prefix:"$"})}},{title:a("24h Change"),render:function(e,t){var r,a,s,i=null==n||null===(r=n[null===(s=(0,oe.do)(t.name))||void 0===s?void 0:s.toLowerCase()])||void 0===r||null===(a=r["24ChangeRate"])||void 0===a?void 0:a.toFixed(2);return i?+i>=0?(0,K.jsxs)("span",{className:fe,children:["+",i,"%"]}):(0,K.jsxs)("span",{className:pe,children:[i,"%"]}):"-"}},{title:a("24h Trades"),dataIndex:"trades",key:"trades",render:function(e){return(0,K.jsx)(K.Fragment,{children:null!=e?e:"-"})}},{title:a("24h Volume"),dataIndex:"tradingVolume",key:"tradingVolume",render:function(e){return(0,K.jsx)(se.Z,{value:e,prefix:"$"})}},{title:a("Open Interest"),dataIndex:"openInterest",key:"openInterest",render:function(e){return(0,K.jsx)(se.Z,{value:e,prefix:"$"})}}];return(0,K.jsx)("div",{className:ce,children:e.loading?(0,K.jsx)(ne.Z,{className:ue}):(0,K.jsx)(ae.Z,{emptyText:a("No data"),className:le,columns:t?s.slice(0,3):s,dataSource:r,size:"small",pagination:!1,bordered:!1,onRow:function(e){return{onClick:function(){return re.m8.push("/trade?symbol=".concat(e.name))}}}})})},_e=n(71230),xe=n(15746),ge=n(79369),ye=n(87755),Ze=Object.defineProperty,je=Object.getOwnPropertySymbols,we=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable,Ne=(e,t,n)=>t in e?Ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const Ce=e=>c.createElement("svg",((e,t)=>{for(var n in t||(t={}))we.call(t,n)&&Ne(e,n,t[n]);if(je)for(var n of je(t))be.call(t,n)&&Ne(e,n,t[n]);return e})({width:48,height:48,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M42.328 8.172A4 4 0 0 0 39.5 7h-31a4 4 0 0 0-4 4v25a4 4 0 0 0 4 4h2a2 2 0 0 0 4 0h19a2 2 0 0 0 4 0h2a4 4 0 0 0 4-4V11a4 4 0 0 0-1.172-2.828ZM9 9a2.5 2.5 0 0 0-2.5 2.5v24A2.5 2.5 0 0 0 9 38h30a2.5 2.5 0 0 0 2.5-2.5v-24A2.5 2.5 0 0 0 39 9H9Z",fill:"url(#overview_statistical_icon3_svg__a)"}),c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m18.437 18.44 5.056-1.85c.285-.105.596-.118.89-.04l.124.04 5.055 1.849c.257.094.48.256.645.47.166.212.265.466.288.733l.005.117v3.778a6.223 6.223 0 0 1-.915 3.242 6.432 6.432 0 0 1-2.486 2.33l-.192.099-2.422 1.18a1.104 1.104 0 0 1-.866.045l-.104-.045-2.422-1.181a6.447 6.447 0 0 1-2.565-2.248 6.23 6.23 0 0 1-1.024-3.212l-.004-.211v-3.777c0-.267.078-.528.224-.754.146-.225.355-.405.603-.52l.11-.045Zm5.836 1.111 2.722 1.057a.78.78 0 0 1 .348.268.822.822 0 0 1 .154.42l.003.066v2.159a3.72 3.72 0 0 1-.493 1.853 3.556 3.556 0 0 1-1.338 1.331l-.104.057-1.304.674a.568.568 0 0 1-.466.026l-.056-.026-1.304-.675a3.545 3.545 0 0 1-1.381-1.285 3.715 3.715 0 0 1-.552-1.835l-.002-.12v-2.159c0-.152.042-.301.12-.43a.787.787 0 0 1 .325-.297l.344.705.008.022h1.22l-.767.298v1.85l.002.1c.015.432.142.85.364 1.208.224.36.534.647.893.833l.991.513.979-.507.084-.045c.351-.199.65-.495.86-.861a2.47 2.47 0 0 0 .327-1.23V21.66l-.769-.299h1.198l-1.21-.005-1.469-.57-1.44.56-1.271-.006-.007-.018-.337-.687.06-.027 2.722-1.057a.753.753 0 0 1 .48-.022l.066.022Zm1.196 1.805-2.908-.01-.044.016h2.964l-.012-.006Z",fill:"url(#overview_statistical_icon3_svg__b)"}),c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 10a1.5 1.5 0 0 0-1.5 1.5v24A1.5 1.5 0 0 0 9 37h30a1.5 1.5 0 0 0 1.5-1.5v-24A1.5 1.5 0 0 0 39 10H9Zm14.064 5.416-.821.3-4.26 1.559-.157.065-.023.01c-.458.212-.85.548-1.127.975a2.633 2.633 0 0 0-.426 1.434v3.788l.004.232v.01a7.48 7.48 0 0 0 1.23 3.856 7.697 7.697 0 0 0 3.061 2.685l2.45 1.196.164.07.03.01a2.358 2.358 0 0 0 1.843-.094l2.434-1.186.21-.108.008-.004a7.682 7.682 0 0 0 2.968-2.784 7.473 7.473 0 0 0 1.098-3.893v-3.805l-.007-.17-.003-.027a2.639 2.639 0 0 0-.545-1.393 2.693 2.693 0 0 0-1.203-.877l-5.081-1.859-.177-.056-.028-.007a2.728 2.728 0 0 0-1.642.073Z",fill:"url(#overview_statistical_icon3_svg__c)"}),c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24.383 16.55a1.479 1.479 0 0 0-.89.04l-5.056 1.85-.11.045a1.433 1.433 0 0 0-.603.52 1.384 1.384 0 0 0-.224.754v3.777l.004.211a6.23 6.23 0 0 0 1.024 3.212 6.447 6.447 0 0 0 2.565 2.248l2.422 1.181.104.045a1.106 1.106 0 0 0 .866-.045l2.422-1.18.192-.099a6.432 6.432 0 0 0 2.486-2.33c.599-.98.915-2.101.915-3.242v-3.778l-.005-.117a1.389 1.389 0 0 0-.288-.734 1.442 1.442 0 0 0-.645-.469l-5.055-1.85-.124-.039Zm-.177 2.979a.753.753 0 0 0-.479.022l-2.722 1.057-.06.027a.787.787 0 0 0-.324.297.826.826 0 0 0-.121.43v2.159l.002.12c.02.652.212 1.286.552 1.835.34.55.817.993 1.38 1.285l1.305.675.056.026a.566.566 0 0 0 .466-.026l1.304-.674.104-.057a3.556 3.556 0 0 0 1.338-1.331c.323-.56.493-1.2.493-1.853v-2.159l-.003-.067a.822.822 0 0 0-.154-.419.78.78 0 0 0-.348-.268l-2.722-1.057-.067-.022Z",fill:"#F2E6CF"}),c.createElement("defs",null,c.createElement("linearGradient",{id:"overview_statistical_icon3_svg__a",x1:4.5,y1:4.813,x2:39.07,y2:45.741,gradientUnits:"userSpaceOnUse"},c.createElement("stop",{stopColor:"#F2E6CF"}),c.createElement("stop",{offset:1,stopColor:"#B5884A"})),c.createElement("linearGradient",{id:"overview_statistical_icon3_svg__b",x1:7.5,y1:8.313,x2:33.652,y2:42.273,gradientUnits:"userSpaceOnUse"},c.createElement("stop",{stopColor:"#F2E6CF"}),c.createElement("stop",{offset:1,stopColor:"#B5884A"})),c.createElement("linearGradient",{id:"overview_statistical_icon3_svg__c",x1:7.5,y1:8.313,x2:33.652,y2:42.273,gradientUnits:"userSpaceOnUse"},c.createElement("stop",{stopColor:"#F2E6CF"}),c.createElement("stop",{offset:1,stopColor:"#B5884A"}))));var Ie=n(77438),ke=n(96714),Ee={statisticalDataGrid:"statisticalDataGrid___eZhQf",item:"item___bDuaw",btn:"btn___iPiGO",primary:"primary___pCrr1",text:"text___zIh8r",head:"head___phrnC",content:"content___zlm0M",footer:"footer___bvtie",icon:"icon___tWS5N"},Oe=function(e){var t,n=e.info,r=(0,w.Z)().t;return(0,K.jsxs)(_e.Z,{className:Ee.StatisticalDataGrid,gutter:24,children:[(0,K.jsx)(xe.Z,{xs:24,md:12,lg:8,className:Ee.gutterRow,children:(0,K.jsxs)("div",{className:Ee.item,children:[(0,K.jsxs)("div",{className:Ee.head,children:[(0,K.jsx)("div",{className:Ee.text,children:r("Up to 20%")}),(0,K.jsx)(ge.r,{className:Ee.icon})]}),(0,K.jsx)("div",{className:Ee.content,children:r("Stake USDC and earn rewadrs from fees generated on the BLEX.")}),(0,K.jsx)("div",{className:Ee.footer,children:(0,K.jsx)(Ie.Z,{className:Ee.btn,type:"primary",size:"middle",href:"/rewards",children:r("Earn")})})]})}),(0,K.jsx)(xe.Z,{xs:24,md:12,lg:8,children:(0,K.jsxs)("div",{className:Ee.item,children:[(0,K.jsxs)("div",{className:Ee.head,children:[(0,K.jsx)("div",{className:Ee.text,children:"<0.10%"}),(0,K.jsx)(ye.r,{className:Ee.icon})]}),(0,K.jsx)("div",{className:Ee.content,children:r("Lowest transaction fees.")}),(0,K.jsx)("div",{className:Ee.footer,children:(0,K.jsx)(Ie.Z,{className:Ee.btn,type:"c20",size:"middle",href:b.Ew.GitbookFeeStructure,children:r("Learn More")})})]})}),(0,K.jsx)(xe.Z,{xs:24,md:12,lg:8,children:(0,K.jsxs)("div",{className:Ee.item,children:[(0,K.jsxs)("div",{className:Ee.head,children:[(0,K.jsx)("div",{className:Ee.text,children:null!=n&&n.uniqueUsersTotal?"".concat(null==n?void 0:n.uniqueUsersTotal,"+"):ke.P}),(0,K.jsx)(Ce,{className:Ee.icon})]}),(0,K.jsx)("div",{className:Ee.content,children:r("trustedByUser",{uniqueUsersTotal:(null==n||null===(t=n.uniqueUsersTotal)||void 0===t?void 0:t.toString())||""})}),(0,K.jsx)("div",{className:Ee.footer,children:(0,K.jsx)(Ie.Z,{className:Ee.btn,type:"c20",size:"middle",href:"#",children:r("Learn More")})})]})})]})},Se=function(){var e=(0,w.Z)().t,t=(0,u.FV)(k),n=l()(t,2),r=n[0],s=n[1],o=(0,j.x)().chainId,d=(0,u.FV)(I),m=l()(d,2),v=m[0],f=m[1],p=(0,u.sJ)(N.tr),h=(0,c.useState)(!1),_=l()(h,2),g=_[0],C=_[1],T=function(){var e=i()(a()().mark((function e(){var t,n;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C(!0),e.next=4,x(o);case 4:return t=e.sent,e.next=7,y(p,o);case 7:n=e.sent,s(t),f(n),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(0);case 14:return e.prev=14,C(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,12,14,17]])})));return function(){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){T();var e=setInterval(T,3e4);return function(){return clearInterval(e)}}),[o,p]),(0,K.jsx)(K.Fragment,{children:(0,K.jsxs)("div",{className:E,children:[(0,K.jsxs)("div",{className:O,children:[(0,K.jsx)("div",{className:S,children:e("Hello!")}),(0,K.jsx)("div",{className:M,children:e("welcomeTo",{type:b.j$})})]}),(0,K.jsx)(te,{info:r}),(0,K.jsx)(he,{marketInfo:v,markets:p,loading:g}),(0,K.jsx)(Oe,{info:r}),(0,K.jsx)(Z.a,{})]})})}},6983:function(e,t){t.J=void 0;t.J=(e={})=>{if("undefined"==typeof window)return{persistAtom:()=>{}};const{key:t="recoil-persist",storage:n=localStorage}=e,r=(e,t,n,r)=>{r?delete t[n]:t[n]=e,i(t)},a=()=>{const e=n.getItem(t);return null==e?{}:"string"==typeof e?s(e):"function"==typeof e.then?e.then(s):{}},s=e=>{if(void 0===e)return{};try{return JSON.parse(e)}catch(e){return console.error(e),{}}},i=e=>{try{"function"==typeof n.mergeItem?n.mergeItem(t,JSON.stringify(e)):n.setItem(t,JSON.stringify(e))}catch(e){console.error(e)}};return{persistAtom:({onSet:e,node:t,trigger:n,setSelf:s})=>{if("get"===n){const e=a();"function"==typeof e.then&&e.then((e=>{e.hasOwnProperty(t.key)&&s(e[t.key])})),e.hasOwnProperty(t.key)&&s(e[t.key])}e((async(e,n,s)=>{const i=a();"function"==typeof i.then?i.then((n=>r(e,n,t.key,s))):r(e,i,t.key,s)}))}}}},93203:function(e,t,n){var r=n(19507),a=n(66092),s=(0,r.Z)(a.Z,"Set");t.Z=s},31667:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(67308);var a=function(){this.__data__=new r.Z,this.size=0};var s=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n};var i=function(e){return this.__data__.get(e)};var o=function(e){return this.__data__.has(e)},l=n(86183),c=n(37834);var u=function(e,t){var n=this.__data__;if(n instanceof r.Z){var a=n.__data__;if(!l.Z||a.length<199)return a.push([e,t]),this.size=++n.size,this;n=this.__data__=new c.Z(a)}return n.set(e,t),this.size=n.size,this};function d(e){var t=this.__data__=new r.Z(e);this.size=t.size}d.prototype.clear=a,d.prototype.delete=s,d.prototype.get=i,d.prototype.has=o,d.prototype.set=u;var m=d},84073:function(e,t,n){var r=n(66092).Z.Uint8Array;t.Z=r},13840:function(e,t,n){var r=n(19507),a=n(66092),s=(0,r.Z)(a.Z,"WeakMap");t.Z=s},74752:function(e,t,n){var r=n(77904);t.Z=function(e,t,n){"__proto__"==t&&r.Z?(0,r.Z)(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}},93242:function(e,t,n){var r=(0,n(28419).Z)();t.Z=r},28419:function(e,t){t.Z=function(e){return function(t,n,r){for(var a=-1,s=Object(t),i=r(t),o=i.length;o--;){var l=i[e?o:++a];if(!1===n(s[l],l,s))break}return t}}},77904:function(e,t,n){var r=n(19507),a=function(){try{var e=(0,r.Z)(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();t.Z=a},68411:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(19507),a=n(66092),s=(0,r.Z)(a.Z,"DataView"),i=n(86183),o=(0,r.Z)(a.Z,"Promise"),l=n(93203),c=n(13840),u=n(93589),d=n(90019),m="[object Map]",v="[object Promise]",f="[object Set]",p="[object WeakMap]",h="[object DataView]",_=(0,d.Z)(s),x=(0,d.Z)(i.Z),g=(0,d.Z)(o),y=(0,d.Z)(l.Z),Z=(0,d.Z)(c.Z),j=u.Z;(s&&j(new s(new ArrayBuffer(1)))!=h||i.Z&&j(new i.Z)!=m||o&&j(o.resolve())!=v||l.Z&&j(new l.Z)!=f||c.Z&&j(new c.Z)!=p)&&(j=function(e){var t=(0,u.Z)(e),n="[object Object]"==t?e.constructor:void 0,r=n?(0,d.Z)(n):"";if(r)switch(r){case _:return h;case x:return m;case g:return v;case y:return f;case Z:return p}return t});var w=j},69203:function(e,t){t.Z=function(e){return e}},60088:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(95591),a=n(11753);const s=new WeakMap,i=(0,a.xD)(r.ZP,(e=>(t,n,r)=>{const[i]=(0,a.qC)(t),o=t,l=i?"$sub$"+i:void 0,c=e(l,null,r),{cache:u}=r;s.has(u)||s.set(u,[new Map,new Map]);const[d,m]=s.get(u);return(0,a.LI)((()=>{if(!l)return;const[,e]=(0,a.JN)(u,l),t=d.get(l)||0,r=(t,n)=>{null!=t?e({error:t}):(e({error:void 0}),c.mutate(n,!1))};if(d.set(l,t+1),!t){const e=n(o,{next:r});if("function"!=typeof e)throw new Error("The `subscribe` function must return a function to unsubscribe.");m.set(l,e)}return()=>{setTimeout((()=>{const e=d.get(l)-1;if(d.set(l,e),!e){const e=m.get(l);null==e||e()}}))}}),[l]),{get data(){return c.data},get error(){return c.error}}}))}}]);